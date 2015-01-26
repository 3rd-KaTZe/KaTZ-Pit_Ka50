// Panel AutoPilote

function panel_pilototo_update(KaTZPit_data){
	

	if (KaTZPit_data["AP_Bank"] ==100) {
			$("#PA-Bank").attr('src','images/pilototo/PA_Bank.gif')
			$("#PA-Bank").data('internal-id','33300101')}
		else {
			$("#PA-Bank").attr('src','images/pilototo/PA_Bank_off.gif')
			$("#PA-Bank").data('internal-id','33300101')}
	
	if (KaTZPit_data["AP_Pitch"] ==100) {
			$("#PA-Pitch").attr('src','images/pilototo/PA_Pitch.gif')
			$("#PA-Pitch").data('internal-id','33300301')}
		else {
			$("#PA-Pitch").attr('src','images/pilototo/PA_Pitch_off.gif')
			$("#PA-Pitch").data('internal-id','33300301')}
	
	if (KaTZPit_data["AP_HDG"] ==100) {
			$("#PA-Hdg").attr('src','images/pilototo/PA_Hdg.gif')
			$("#PA-Hdg").data('internal-id','33300201')}
		else {
			$("#PA-Hdg").attr('src','images/pilototo/PA_Hdg_off.gif')
			$("#PA-Hdg").data('internal-id','33300201')}
	
	if (KaTZPit_data["AP_Alt"] ==100) {
			$("#PA-Alt").attr('src','images/pilototo/PA_Alt.gif')
			$("#PA-Alt").data('internal-id','33300401')}
		else {
			$("#PA-Alt").attr('src','images/pilototo/PA_Alt_off.gif')
			$("#PA-Alt").data('internal-id','33300401')}
	
	if (KaTZPit_data["AP_FD"] ==100) {
			$("#PA-FD").attr('src','images/pilototo/PA_FD.gif')
			$("#PA-FD").data('internal-id','33300501')}
		else {
			$("#PA-FD").attr('src','images/pilototo/PA_FD_off.gif')
			$("#PA-FD").data('internal-id','33300501')}
	
	
	
	
	if (KaTZPit_data["Hover"] ==1000) {$("#PA-Hover").fadeIn()} else {$("#PA-Hover").fadeOut()}	
	if (KaTZPit_data["Descent"] ==1000) {$("#PA-Descent").fadeIn()} else {$("#PA-Descent").fadeOut()}	
	if (KaTZPit_data["Autoturn"] ==100) {$("#PA-TgtTurn").fadeIn()} else {$("#PA-TgtTurn").fadeOut()}	

	
}

	
