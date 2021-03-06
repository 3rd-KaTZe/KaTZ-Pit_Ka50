// --------------------------------------------------------------------
// Connection Panel et Toggle Panel Ka-50
// --------------------------------------------------------------------

function menu_connection(KaTZPit_data){
		
	// Affichage de l'Ip et du Port
	document.getElementById('IP_Host').innerHTML = serverws.ip
	document.getElementById('IP_Port').innerHTML = serverws.port
	
}

function menu_connection_led(flag){

	if (flag == 0) {$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.png")}
	if (flag == 1) {$("#Led_Connect").attr("src","images/emergency/z_Led-Orange.gif")}
	if (flag == 2) {$("#Led_Connect").attr("src","images/emergency/z_Led-Vert.png")}
	
}

function DCS_Focus_check(KaTZPit_data){
	if (KaTZPit_data["DCS_Focus"] ==2) {$("#Led_DCS").fadeIn()} else {$("#Led_DCS").fadeOut()}
}


// Fonction d'affichage des sous Panels, appelée depuis la barre de Launcher
function menu_Toggle(panel){
	
	Panel_On[panel] = (Panel_On[panel]+1) % 2
	console.log(panel," = ",Panel_On[panel])

	if (Panel_On["Light"] == 0) {document.getElementById("Panel_Light").style.display = "none"}
	else {document.getElementById("Panel_Light").style.display = "block"}
	
	//if (Panel_On["APU"] == 0) {document.getElementById("Panel_APU").style.display = "none"}
	//else {document.getElementById("Panel_APU").style.display = "block"}

	if (Panel_On["Start"] == 0) {document.getElementById("Panel_Start").style.display = "none" ; document.getElementById("Panel_Electric").style.display = "none"}
	else {document.getElementById("Panel_Start").style.display = "block" ; document.getElementById("Panel_Electric").style.display = "block"}
	
	if (Panel_On["Oil"] == 0) {document.getElementById("Panel_Oil").style.display = "none"}
	else {document.getElementById("Panel_Oil").style.display = "block"}

	if (Panel_On["Rotor"] == 0) {document.getElementById("Panel_Rotor").style.display = "none"}
	else {document.getElementById("Panel_Rotor").style.display = "block"}
	
	//if (Panel_On["Fuel"] == 0) {document.getElementById("Panel_Fuel").style.display = "none"}
	//else {document.getElementById("Panel_Fuel").style.display = "block"}
	if (Panel_On["Pilototo"] == 0) {document.getElementById("Panel_Pilototo").style.display = "none"}
	else {document.getElementById("Panel_Pilototo").style.display = "block"}

	
	if (Panel_On["Datalink"] == 0) {document.getElementById("Panel_Datalink").style.display = "none"}
	else {document.getElementById("Panel_Datalink").style.display = "block"}
	
	if (Panel_On["Abris"] == 0) {document.getElementById("Panel_Abris").style.display = "none"}
	else {document.getElementById("Panel_Abris").style.display = "block"}

	if (Panel_On["Radio_360"] == 0) {document.getElementById("Panel_Radio").style.display = "none"}
	else {document.getElementById("Panel_Radio").style.display = "block"}
	
	if (Panel_On["Navigation"] == 0) {document.getElementById("Panel_Navigation").style.display = "none"}
	else {document.getElementById("Panel_Navigation").style.display = "block"}

		
	//if (Panel_On["Electric_DC"] == 0) {document.getElementById("Panel_Electric").style.display = "none"}
	//else {document.getElementById("Panel_Electric").style.display = "block"}
	
	if (Panel_On["Combat"] == 0) {
	document.getElementById("Panel_Weapon").style.display = "none" ;
	document.getElementById("Panel_Weapon_2").style.display = "none" ;
	document.getElementById("Panel_Shkval").style.display = "none";
	document.getElementById("Panel_UV26").style.display = "none"
	Panel_On["Target"]=0
	
	}
	else {
	document.getElementById("Panel_Weapon").style.display = "block" ; 
	document.getElementById("Panel_Weapon_2").style.display = "block" ;
	document.getElementById("Panel_Shkval").style.display = "block";
	document.getElementById("Panel_UV26").style.display = "block" ;
	document.getElementById("Panel_Start").style.display = "none" ;
	document.getElementById("Panel_Electric").style.display = "none" ; 
	document.getElementById("Panel_Light").style.display = "none"
	Panel_On["Target"]=1

	}

	if (Panel_On["Stick"] == 0) {
	document.getElementById("Panel_Stick").style.display = "none" ;
	document.getElementById("Cadran_Fuel").style.display = "block" ;	
	}
	else {
	document.getElementById("Panel_Stick").style.display = "block" ; 
	document.getElementById("Cadran_Fuel").style.display = "none" ;
	
	}

	
	if (Panel_On["Doc"] == 0) {document.getElementById("Panel_Doc").style.display = "none"}
	else {document.getElementById("Panel_Doc").style.display = "block"}
	
	if (Panel_On["Target"] == 0) {document.getElementById("Panel_Target").style.display = "none"}
	else {document.getElementById("Panel_Target").style.display = "block"}

}	

function menu_Affiche(num){

	document.getElementById("Panel_Doc").style.display = "block"
	if (num == 1){$("#Doc_Affiche").attr("src","doc/Check_1.png")}
	if (num == 2){$("#Doc_Affiche").attr("src","doc/Check_2.png")}
	if (num == 3){$("#Doc_Affiche").attr("src","doc/Check_3.png")}
	if (num == 4){$("#Doc_Affiche").attr("src","doc/Check_4.png")}
	if (num == 5){$("#Doc_Affiche").attr("src","doc/Check_5.png")}
	
	if (num == 6){$("#Doc_Affiche").attr("src","doc/MisBrief_1.png")}
	if (num == 7){$("#Doc_Affiche").attr("src","doc/MisBrief_2.png")}
	
	if (num == 8){$("#Doc_Affiche").attr("src","doc/MisPhoto_1.png")}
	if (num == 9){$("#Doc_Affiche").attr("src","doc/MisPhoto_2.png")}
	
	if (num == 11){$("#Doc_Affiche").attr("src","doc/Nav_1.png")}
	if (num == 12){$("#Doc_Affiche").attr("src","doc/Nav_2.png")}
	if (num == 13){$("#Doc_Affiche").attr("src","doc/Nav_3.png")}
	if (num == 14){$("#Doc_Affiche").attr("src","doc/Nav_4.png")}
	if (num == 15){$("#Doc_Affiche").attr("src","doc/Nav_5.png")}
	
	if (num == 99) {document.getElementById("Panel_Doc").style.display = "none"}
	
}


	
