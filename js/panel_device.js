// --------------------------------------------------------------------
// Device Functions, Abris, PVI, ...
// --------------------------------------------------------------------

function panel_device_abris(KaTZPit_data){
		
	// Mise à Jour des Menus
	AbrisL1 = dataread_split_2(KaTZPit_data["Abris1"])
	AbrisL2 = dataread_split_2(KaTZPit_data["Abris2"])
	AbrisL3 = dataread_split_2(KaTZPit_data["Abris3"])
	
	document.getElementById('Abris_1').innerHTML = Abris_Menu[AbrisL1[1]]
	document.getElementById('Abris_2').innerHTML = Abris_Menu[AbrisL1[0]]
	document.getElementById('Abris_3').innerHTML = Abris_Menu[AbrisL2[1]]
	document.getElementById('Abris_4').innerHTML = Abris_Menu[AbrisL2[0]]
	document.getElementById('Abris_5').innerHTML = Abris_Menu[AbrisL3[0]]
	
	// Bouton On/Off
	if (AbrisL3[1] == 1) {$("#On_Abris").attr('src','images/Switch-Metal-U3.gif')} 
	else {$("#On_Abris").attr('src','images/Switch-Metal-D3.gif')}
	
	
}





	
