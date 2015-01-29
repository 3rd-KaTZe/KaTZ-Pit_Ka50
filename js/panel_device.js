// --------------------------------------------------------------------
// Device Functions, Abris, PVI, ...
// --------------------------------------------------------------------

function panel_device_abris(KaTZPit_data){
		
	// Bouton On/Off
	if (dataread_posit(KaTZPit_data["Abris"],1) == 1) {$("#On_Abris").attr('src','images/Switch-Metal-U3.gif')} 
	else {$("#On_Abris").attr('src','images/Switch-Metal-D3.gif')}
	
}





	
