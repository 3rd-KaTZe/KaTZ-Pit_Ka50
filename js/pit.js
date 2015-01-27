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
	menu_Toggle("Init")

}


function pit_main(){

	// Iteration Principale, fréquence fixée dans mytimer
		
	panel_emergency_update(KaTZPit_data)
	
	
	// Mise à jour des cadrans des instruments de vol
	panel_instrument_flight(KaTZPit_data)
	
	// Mise à jour des cadrans des instruments moteur (RPM, Huile)
	panel_instrument_engine(KaTZPit_data)
	
	
	// SYSTEM PANEL ------------------------------------------------------
	
	// Lancement des subroutines en fonction des panneaux affichés dans le KaKZ_Pit
	// Electric Panel
	if (Panel_On["Electric_DC"]==1) {panel_electric_update(KaTZPit_data)}
		
	// Start Panel
	if (Panel_On["Start"]==1){panel_fuel_update(KaTZPit_data)}
	
	if (Panel_On["Rotor"]==1){panel_instrument_rotor(KaTZPit_data)}
	
	if (Panel_On["Oil"]==1){panel_oil_update(KaTZPit_data)}
	
	if (Panel_On["Datalink"]==1){panel_datalink_update(KaTZPit_data)}
	
	if (Panel_On["Pilototo"]==1){panel_pilototo_update(KaTZPit_data)}
	
	if (Panel_On["Radio_360"]==1){panel_radio_update(KaTZPit_data)}
	
	if (Panel_On["Target"]==1){panel_target_update(KaTZPit_data)}
	
	if (Panel_On["Navigation"]==1){panel_navigation_update(KaTZPit_data)}	
	
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
	pit_main()
	//paneldata_update(KaTZPit_data)

	// Lancement de la procédure de connection
	serverws_connect()

}










