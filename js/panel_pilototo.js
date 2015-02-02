// Panel AutoPilote

function panel_pilototo_update(KaTZPit_data){
	

	if (dataread_posit(KaTZPit_data["AP_KA1"],5) ==1) {
			$("#PA-Bank").attr('src','images/pilototo/PA_Bank.gif')
			$("#PA-Bank").data('internal-id','33300101')}
		else {
			$("#PA-Bank").attr('src','images/pilototo/PA_Bank_off.gif')
			$("#PA-Bank").data('internal-id','33300101')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],4) ==1) {
			$("#PA-Pitch").attr('src','images/pilototo/PA_Pitch.gif')
			$("#PA-Pitch").data('internal-id','33300301')}
		else {
			$("#PA-Pitch").attr('src','images/pilototo/PA_Pitch_off.gif')
			$("#PA-Pitch").data('internal-id','33300301')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],3) ==1) {
			$("#PA-Hdg").attr('src','images/pilototo/PA_Hdg.gif')
			$("#PA-Hdg").data('internal-id','33300201')}
		else {
			$("#PA-Hdg").attr('src','images/pilototo/PA_Hdg_off.gif')
			$("#PA-Hdg").data('internal-id','33300201')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],2) ==1) {
			$("#PA-Alt").attr('src','images/pilototo/PA_Alt.gif')
			$("#PA-Alt").data('internal-id','33300401')}
		else {
			$("#PA-Alt").attr('src','images/pilototo/PA_Alt_off.gif')
			$("#PA-Alt").data('internal-id','33300401')}
	
	if (dataread_posit(KaTZPit_data["AP_KA1"],1) ==1) {
			$("#PA-FD").attr('src','images/pilototo/PA_FD.gif')
			$("#PA-FD").data('internal-id','33300501')}
		else {
			$("#PA-FD").attr('src','images/pilototo/PA_FD_off.gif')
			$("#PA-FD").data('internal-id','33300501')}
	
	
	
	
	if (dataread_posit(KaTZPit_data["AP_KA2"],1) ==1) {$("#PA-Hover").fadeIn()} else {$("#PA-Hover").fadeOut()}	
	if (dataread_posit(KaTZPit_data["AP_KA2"],2) ==1) {$("#PA-Descent").fadeIn()} else {$("#PA-Descent").fadeOut()}	
	if (dataread_posit(KaTZPit_data["Wpn_Flag"],5) ==1) {$("#PA-TgtTurn").fadeIn()} else {$("#PA-TgtTurn").fadeOut()}	

	
}

	
