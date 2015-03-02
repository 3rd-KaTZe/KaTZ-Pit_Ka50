// Panel AutoPilote

function panel_pilototo_update(KaTZPit_data){
	

	if (dataread_posit(KaTZPit_data["AP_KA1"],5) ==1) {	$("#PA-Bank").attr('src','images/pilototo/PA_Bank.png')	}
		else {	$("#PA-Bank").attr('src','images/pilototo/PA_Bank_off.png')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],4) ==1) {	$("#PA-Pitch").attr('src','images/pilototo/PA_Pitch.png')}
		else { $("#PA-Pitch").attr('src','images/pilototo/PA_Pitch_off.png')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],3) ==1) {	$("#PA-Hdg").attr('src','images/pilototo/PA_Hdg.png')}
		else { $("#PA-Hdg").attr('src','images/pilototo/PA_Hdg_off.png')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],2) ==1) {	$("#PA-Alt").attr('src','images/pilototo/PA_Alt.png')}
		else {$("#PA-Alt").attr('src','images/pilototo/PA_Alt_off.png')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],1) ==1) {	$("#PA-FD").attr('src','images/pilototo/PA_FD.png')}
		else {$("#PA-FD").attr('src','images/pilototo/PA_FD_off.png')}
		
	
	// Voyants Hover et Descent
	if (dataread_posit(KaTZPit_data["AP_KA2"],1) ==1) {$("#PA-Hover").fadeIn()} else {$("#PA-Hover").fadeOut()}	
	if (dataread_posit(KaTZPit_data["AP_KA2"],2) ==1) {$("#PA-Descent").fadeIn()} else {$("#PA-Descent").fadeOut()}	
	
	// Switch Baro/Rad et HDGN/CRS
	if (dataread_posit(KaTZPit_data["AP_KA1"],7) == 0) {$("#PA_baro").attr('src','images/switch/Switch-Metal-U4.png')}	
	else  {$("#PA_baro").attr('src','images/switch/Switch-Metal-D4.png')}	
		
	if (dataread_posit(KaTZPit_data["AP_KA1"],6) == 0) {$("#PA_hdg").attr('src','images/switch/Switch-Metal-U4.png')}	
	else  {$("#PA_hdg").attr('src','images/switch/Switch-Metal-D4.png')}	
	
	
}

function panel_pilototo_input(KaTZPit_data){


	var Stick_Data = dataread_split_2(KaTZPit_data["Stick_Pos"])
	var Rudder_Data = dataread_split_2(KaTZPit_data["Rudder_Pos"])

	document.getElementById('PosData_Pitch').innerHTML = (Stick_Data[0]/10).toFixed(0)
	document.getElementById('PosData_Roll').innerHTML = (Stick_Data[1]/10).toFixed(0)
	document.getElementById('PosData_Rudder').innerHTML = (Rudder_Data[1]/10).toFixed(0)
	document.getElementById('PosData_Collectif').innerHTML = (Rudder_Data[0]/10).toFixed(0)

	Translate_Cmd(Rudder_Data[1]/10,(Rudder_Data[0]/10))
	Locate_Stick(Stick_Data[1]/10,Stick_Data[0]/10)

}

function Translate_Cmd(rudder,collec){
	
	var a_origine = 0
	var a_gain = 1

	// positif = Translation vers la droite
	$("#Position_Rudder").css({
	// fonction de base >> '-moz-transform':'translate(100px,0px)',
	'-moz-transform':'translate('+(a_origine + a_gain * rudder)+'px,0px)',
	'-webkit-transform':'translate('+(a_origine + a_gain * rudder)+'px,0px)',
	'-ms-transform':'translate('+(a_origine + a_gain * rudder)+'px,0px)',

	})

	var c_gain = 2
	
	//  positif = Translation vers le bas , changement du signe DCS
	$("#Position_Collectif").css({
	'-moz-transform':'translate(0px,'+(a_origine - c_gain * collec)+'px)',
	'-webkit-transform':'translate(0px,'+(a_origine - c_gain * collec)+'px)',
	'-ms-transform':'translate(0px,'+(a_origine - c_gain * collec)+'px)',

	})
}


function Locate_Stick(roll,pitch){

	var a_origine = 0
	var r_gain = 1
	var p_gain = 1

	// positif = Translation vers la droite
	$("#Position_Stick").css({
	// fonction de base >> '-moz-transform':'translate(100px,0px)',
	'-moz-transform':'translate('+(a_origine + r_gain * roll)+'px,'+(a_origine - p_gain * pitch)+'px)',
	'-webkit-transform':'translate('+(a_origine + r_gain * roll)+'px,'+(a_origine - p_gain * pitch)+'px)',
	'-ms-transform':'translate('+(a_origine + r_gain * roll)+'px,'+(a_origine - p_gain * pitch)+'px)',

	})

	

}	


	
