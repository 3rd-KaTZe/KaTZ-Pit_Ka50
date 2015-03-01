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

	
