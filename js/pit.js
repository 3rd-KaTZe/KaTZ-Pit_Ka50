// serverws.ip = "IP MACHINE DCS"; // défaut localhost
// serverws.port = "PORT";	// défaut 9000
// serverws.auto_connect = true;
// serverws.delay = 5000;

var mydata;
var obj;
var mytimer;
var my2timer;
var paneldata = new Array();
var KaTZPit_data = {};
var Plane_data = {};
var FL_data = {};
var RWY_data = {};
var Weapon_data={};
var Order_List = new Array();
var Cmd_Capot = {};
var CmdDelay;




window.onload = function(){

// Chargement et indication de l'IP et Port
// Sur le panel Emergency
panel_emergency_update(KaTZPit_data)

// Initialisation des Panels affichés
	Panel_On = panel_On_init();
	Panel_Toggle("Init")

//mytimer = setInterval(main, 200);

}


function main(){

	// Iteration Principale, fréquence fixée dans mytimer
		
	panel_emergency_update(KaTZPit_data)
	panel_analog_update(KaTZPit_data)
	//panel_attitude_update(KaTZPit_data)
	//panel_moteur_update(KaTZPit_data)
	panel_fuel_update(KaTZPit_data)
	panel_electric_update(KaTZPit_data)
	panel_pilototo_update(KaTZPit_data)
	panel_navigation_update(KaTZPit_data)
	//panel_weapon_update(KaTZPit_data)
	//panel_gear_update(KaTZPit_data)
	//panel_ils_update(KaTZPit_data)
	panel_radio_update(KaTZPit_data)
	//panel_detection_update(KaTZPit_data)
	panel_target_update(KaTZPit_data)
	panel_datalink_update(KaTZPit_data)
	// panel_debug_update(KaTZPit_data)
	CmdSend()
}

function Pit_Start(plane){

	// Demarrage du Panel par appui sur le bouton Start
	console.log("Demarrage Panel")

	// Initialisation des données KaTZ-Pit
	KaTZPit_data = paneldata_init();
	RWY_data = RWY_init();
	FL_data = fl_mode_init();
	Weapon_data = weapon_name_type()
	
	// Initialisation des capots de switch
	Cmd_Capot = Cmd_Capot_init()


	if (plane == 50) {
		Plane_data = KA50_init()
		KaTZPit_data["Radiotype"]=1	};
	
	if (plane == 250) {
		Plane_data = KA50_init()
		KaTZPit_data["Radiotype"]=2	};


	// Initialisation de la Radio
	panel_radio_init(KaTZPit_data)

	// Affichage Initial
	main()
	//paneldata_update(KaTZPit_data)

	// Lancement de la procédure de connection
	serverws_connect()

}

// Fonction d'affichage des sous Panels, appelée depuis la barre de Launcher
function Panel_Toggle(panel){
	
	Panel_On[panel] = (Panel_On[panel]+1) % 2
	console.log(panel," = ",Panel_On[panel])
	
	//if (Panel_On["APU"] == 0) {document.getElementById("Panel_APU").style.display = "none"}
	//else {document.getElementById("Panel_APU").style.display = "block"}

	if (Panel_On["Start"] == 0) {document.getElementById("Panel_Start").style.display = "none"}
	else {document.getElementById("Panel_Start").style.display = "block"}
	
	if (Panel_On["Oil"] == 0) {document.getElementById("Panel_Oil").style.display = "none"}
	else {document.getElementById("Panel_Oil").style.display = "block"}

	if (Panel_On["Rotor"] == 0) {document.getElementById("Panel_Rotor").style.display = "none"}
	else {document.getElementById("Panel_Rotor").style.display = "block"}
	
	//if (Panel_On["Fuel"] == 0) {document.getElementById("Panel_Fuel").style.display = "none"}
	//else {document.getElementById("Panel_Fuel").style.display = "block"}
	if (Panel_On["Pilototo"] == 0) {document.getElementById("Panel_Pilototo").style.display = "none"}
	else {document.getElementById("Panel_Pilototo").style.display = "block"}

	if (Panel_On["Target"] == 0) {document.getElementById("Panel_Target").style.display = "none"}
	else {document.getElementById("Panel_Target").style.display = "block"}

	if (Panel_On["Datalink"] == 0) {document.getElementById("Panel_Datalink").style.display = "none"}
	else {document.getElementById("Panel_Datalink").style.display = "block"}

	if (Panel_On["Radio_360"] == 0) {document.getElementById("Panel_Radio").style.display = "none"}
	else {document.getElementById("Panel_Radio").style.display = "block"}
	
	if (Panel_On["Navigation"] == 0) {document.getElementById("Panel_Navigation").style.display = "none"}
	else {document.getElementById("Panel_Navigation").style.display = "block"}

		
	if (Panel_On["Electric_DC"] == 0) {document.getElementById("Panel_Electric").style.display = "none"}
	else {document.getElementById("Panel_Electric").style.display = "block"}
	
	//if (Panel_On["Electric_AC"] == 0) {document.getElementById("Panel_Electric_AC").style.display = "none"}
	//else {document.getElementById("Panel_Electric_AC").style.display = "block"}
	
	
}	



function serverws_Open(){
	// Lancement de la boucle de rafraichissement du KaTZ-Pit
	mytimer = setInterval(main, 200);
	//my2timer = setInterval(CmdSend(), 200);
}

function serverws_Message(event){

	received_msg = event.data

	// stockage du message sous forme d'objet
	var new_data = JSON.parse(received_msg)
	//console.log("message received",new_data);
	
	var dataref;
	
	// Transfert des données recues dans le tableau KaTZ-Pit_Data
	for (dataref in new_data){
		KaTZPit_data[dataref]=new_data[dataref]
		}
		
	// Si reception d'un Ping sur le canal 8, on répond sur le canal 7
	if (KaTZPit_data["Ping"] != KaTZPit_data["Ping_old"]){
		CmdSiocSpe(7, KaTZPit_data["Ping"])
		KaTZPit_data["Ping_old"] = KaTZPit_data["Ping"]
	}
		
}

function serverws_Close(){
	clearInterval(mytimer);
}

// Envoi de Commande vers Sioc>DCS, Argument Num voir Liste des Commandes DCS 







