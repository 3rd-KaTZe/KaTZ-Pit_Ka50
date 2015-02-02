// --------------------------------------------------------------------
// Panel Weapon ...
// --------------------------------------------------------------------

function panel_weapon_update(KaTZPit_data){
		
	// Voyants de présence
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],4) ==1) {$("#WPN-Pre1").fadeIn()} else {$("#WPN-Pre1").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],3) ==1) {$("#WPN-Pre2").fadeIn()} else {$("#WPN-Pre2").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],2) ==1) {$("#WPN-Pre3").fadeIn()} else {$("#WPN-Pre3").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],1) ==1) {$("#WPN-Pre4").fadeIn()} else {$("#WPN-Pre4").fadeOut()}
	
	// Voyant de selection
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],8) ==1) {$("#WPN-Sel1").fadeIn()} else {$("#WPN-Sel1").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],7) ==1) {$("#WPN-Sel2").fadeIn()} else {$("#WPN-Sel2").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],6) ==1) {$("#WPN-Sel3").fadeIn()} else {$("#WPN-Sel3").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_Ka"],5) ==1) {$("#WPN-Sel4").fadeIn()} else {$("#WPN-Sel4").fadeOut()}
	
	// Voyant de train
	if (dataread_posit(KaTZPit_data["Train"],3) ==1) {$("#Gear_C").fadeIn()} else {$("#Gear_C").fadeOut()}
	if (dataread_posit(KaTZPit_data["Train"],2) ==1) {$("#Gear_L").fadeIn()} else {$("#Gear_L").fadeOut()}
	if (dataread_posit(KaTZPit_data["Train"],1) ==1) {$("#Gear_R").fadeIn()} else {$("#Gear_R").fadeOut()}
	
	// Voyant Master Arm
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],1) ==1) {$("#WPN-Master").fadeIn()} else {$("#WPN-Master").fadeOut()}
	
	// Voyant Cannon
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],2) ==1) {$("#WPN-Cannon").fadeIn()} else {$("#WPN-Cannon").fadeOut()}
	
	// Affichage Ammo restantes
	document.getElementById('Ammo_remain').innerHTML = dataread_split_2(KaTZPit_data["Wpn_Ammo"])[1]
	document.getElementById('Ammo_rnds').innerHTML = dataread_split_2(KaTZPit_data["Wpn_Ammo"])[0]
	
	// Switch Man/auto
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],6) ==1) {$("#Wpn_Man").attr('src','images/Switch-Metal-U3.gif')} 
	else {$("#Wpn_Man").attr('src','images/Switch-Metal-D3.gif')}
	
	// Switch Long/Med/Short
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) ==2) {$("#Wpn_Burst").attr('src','images/Switch-Metal-U3.gif')} 
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) ==1) {$("#Wpn_Burst").attr('src','images/Switch-Metal-L3.gif')} 
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) ==0) {$("#Wpn_Burst").attr('src','images/Switch-Metal-D3.gif')} 
	
	// Switch He/Api
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],4) ==1) {$("#Wpn_Ammo").attr('src','images/Switch-Metal-U3.gif')} 
	else {$("#Wpn_Ammo").attr('src','images/Switch-Metal-D3.gif')}
	// Switch Low/High
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],3) ==1) {$("#Wpn_Rof").attr('src','images/Switch-Metal-U3.gif')} 
	else {$("#Wpn_Rof").attr('src','images/Switch-Metal-D3.gif')}
	
	


}

function panel_uv26_update(KaTZPit_data){
		
	// Voyants Left Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],4) ==1) {$("#UV26_Left").fadeIn()} else {$("#UV26_Left").fadeOut()}
	if (dataread_posit(KaTZPit_data["UV26_Flag"],3) ==1) {$("#UV26_Right").fadeIn()} else {$("#UV26_Right").fadeOut()}
	
	
	// Switch Man/auto
	if (dataread_posit(KaTZPit_data["UV26_Flag"],2) ==1) {$("#UV_SW_Num").attr('src','images/Switch-Metal-R3.gif')} 
	else {$("#UV_SW_Num").attr('src','images/Switch-Metal-L3.gif')}
	
	// Switch Left/Both/Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==2) {$("#UV_SW_LR").attr('src','images/Switch-Metal-R3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==1) {$("#UV_SW_LR").attr('src','images/Switch-Metal-U3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==0) {$("#UV_SW_LR").attr('src','images/Switch-Metal-L3.gif')} 
	
	// Switch On / Off
	if (dataread_posit(KaTZPit_data["UV26_Flag"],5) ==1) {
		// Affichage du switch en position on (pas encore implémenté sur KA)
		//$("#UV_SW_On").attr('src','images/Switch-Metal-R3.gif')
		// Allumage de l'affichage digital
		document.getElementById("UV26_flare").style.display = "block"
		// Affichage Flare restantes
		document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
		
	
} 
	else {
		// Affichage du switch en position off (pas encore implémenté sur KA)
		// $("#UV_SW_On").attr('src','images/Switch-Metal-L3.gif')
		// Extinction de l'affichage digital
		document.getElementById("UV26_flare").style.display = "none"
	}
	
	
	// Affichage Flare restantes
	//document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
	

}






	
