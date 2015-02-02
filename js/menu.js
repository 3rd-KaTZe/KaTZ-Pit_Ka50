// --------------------------------------------------------------------
// Connection Panel et Toggle Panel Ka-50
// --------------------------------------------------------------------

function menu_connection(KaTZPit_data){
		
	// Affichage de l'Ip et du Port
	document.getElementById('IP_Host').innerHTML = serverws.ip
	document.getElementById('IP_Port').innerHTML = serverws.port
	
}

function menu_connection_led(flag){

	if (flag == 0) {$("#Led_Connect").attr("src","images/emergency/z_Led-Rouge.gif")}
	if (flag == 1) {$("#Led_Connect").attr("src","images/emergency/z_Led-Orange.gif")}
	if (flag == 2) {$("#Led_Connect").attr("src","images/emergency/z_Led-Verte.gif")}
	
}


// Fonction d'affichage des sous Panels, appelée depuis la barre de Launcher
function menu_Toggle(panel){
	
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
	
	if (Panel_On["Abris"] == 0) {document.getElementById("Panel_Abris").style.display = "none"}
	else {document.getElementById("Panel_Abris").style.display = "block"}

	if (Panel_On["Radio_360"] == 0) {document.getElementById("Panel_Radio").style.display = "none"}
	else {document.getElementById("Panel_Radio").style.display = "block"}
	
	if (Panel_On["Navigation"] == 0) {document.getElementById("Panel_Navigation").style.display = "none"}
	else {document.getElementById("Panel_Navigation").style.display = "block"}

		
	if (Panel_On["Electric_DC"] == 0) {document.getElementById("Panel_Electric").style.display = "none"}
	else {document.getElementById("Panel_Electric").style.display = "block"}
	
	if (Panel_On["Weapon"] == 0) {document.getElementById("Panel_Weapon").style.display = "none"}
	else {document.getElementById("Panel_Weapon").style.display = "block"}

	if (Panel_On["UV26"] == 0) {document.getElementById("Panel_UV26").style.display = "none"}
	else {document.getElementById("Panel_UV26").style.display = "block"}
	
	
	
	
}	




	
