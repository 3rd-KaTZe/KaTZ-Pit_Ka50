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
	
	// Switch Master Arm
	if (dataread_posit(KaTZPit_data["Wpn_1"],7) ==1) {$("#SW_Master").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#SW_Master").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Man/auto
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],6) ==1) {$("#Wpn_Man").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Man").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Long/Med/Short
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) ==2) {$("#Wpn_Burst").attr('src','images/switch/Switch-Metal-U4.png')} 
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) ==1) {$("#Wpn_Burst").attr('src','images/switch/Switch-Metal-C4V.png')} 
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],5) ==0) {$("#Wpn_Burst").attr('src','images/switch/Switch-Metal-D4.png')} 
	
	// Switch He/Api
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],4) ==1) {$("#Wpn_Ammo").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Ammo").attr('src','images/switch/Switch-Metal-D4.png')}
	// Switch Low/High
	if (dataread_posit(KaTZPit_data["Wpn_SW_1"],3) ==1) {$("#Wpn_Rof").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Wpn_Rof").attr('src','images/switch/Switch-Metal-D4.png')}
	
	


}

function panel_weapon2_update(KaTZPit_data){
		
	// Touche Autoturn, AAHO, AA, Mov, Reset
	if (dataread_posit(KaTZPit_data["Wpn_2"],5) ==1) {$("#wpn_autoturn").fadeIn()} else {$("#wpn_autoturn").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_2"],4) ==1) {$("#wpn_AAHO").fadeIn()} else {$("#wpn_AAHO").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_2"],3) ==1) {$("#wpn_AA").fadeIn()} else {$("#wpn_AA").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_2"],2) ==1) {$("#wpn_MOVGRND").fadeIn()} else {$("#wpn_MOVGRND").fadeOut()}
	if (dataread_posit(KaTZPit_data["Wpn_2"],1) ==1) {$("#wpn_RESET").fadeIn()} else {$("#wpn_RESET").fadeOut()}
	
	// Switch Train
	if (dataread_posit(KaTZPit_data["Wpn_1"],6) ==1) {$("#SW_wpn_train").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#SW_wpn_train").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch K041
	if (dataread_posit(KaTZPit_data["Wpn_1"],5) ==1) {$("#SW_wpn_k041").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#SW_wpn_k041").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch HMS
	if (dataread_posit(KaTZPit_data["Wpn_1"],4) ==1) {$("#SW_wpn_hms").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#SW_wpn_hms").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Autotrack
	if (dataread_posit(KaTZPit_data["Wpn_1"],3) ==1) {$("#SW_wpn_canmod").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#SW_wpn_canmod").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch Laser
	if (dataread_posit(KaTZPit_data["Wpn_1"],2) ==1) {$("#SW_wpn_las").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#SW_wpn_las").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Selecteur Canon
	switch_Canon(dataread_posit(KaTZPit_data["Wpn_1"],1))

}

function switch_Canon(pos){
	var c_origine = -5
	var c_gain = 25
	
	$("#wpn_Selec_can").css({
		'-moz-transform':'rotate('+(c_origine+c_gain*pos)+'deg)',
		'-webkit-transform':'rotate('+(c_origine+c_gain*pos)+'deg)',
		'-ms-transform':'rotate('+(c_origine+c_gain*pos)+'deg)',
	})

}

function panel_weapon_shkval(KaTZPit_data){
		
		
	// Switch Hud Light
	if (dataread_posit(KaTZPit_data["Shkval_1"],8) ==1) {$("#Shkv_Hud").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Shkv_Hud").attr('src','images/switch/Switch-Metal-D4.png')}
	
	// Switch TV Black
	if (dataread_posit(KaTZPit_data["Shkval_1"],7) ==1) {$("#Shkv_Black").attr('src','images/switch/Switch-Metal-U4.png')} 
	else {$("#Shkv_Black").attr('src','images/switch/Switch-Metal-D4.png')}

	// Rotator HMS sur position 6-5
	var hms = (dataread_posit(KaTZPit_data["Shkval_1"],6) + 5) * 10 + dataread_posit(KaTZPit_data["Shkval_1"],5) + 5
	var shkval_b = (dataread_posit(KaTZPit_data["Shkval_1"],4) + 5) * 10 + dataread_posit(KaTZPit_data["Shkval_1"],3) + 5
	var shkval_c = (dataread_posit(KaTZPit_data["Shkval_1"],2) + 5) * 10 + dataread_posit(KaTZPit_data["Shkval_1"],1) + 5

	rotate_shkval(hms,shkval_b,shkval_c)
	
}

function rotate_shkval(h,b,c){
	var c_origine = -120
	var c_gain = 24

	$("#shkval_hud").css({
		'-moz-transform':'rotate('+(c_origine+c_gain*h)+'deg)',
		'-webkit-transform':'rotate('+(c_origine+c_gain*h)+'deg)',
		'-ms-transform':'rotate('+(c_origine+c_gain*h)+'deg)',
	})

	$("#shkval_brt").css({
		'-moz-transform':'rotate('+(c_origine+c_gain*b)+'deg)',
		'-webkit-transform':'rotate('+(c_origine+c_gain*b)+'deg)',
		'-ms-transform':'rotate('+(c_origine+c_gain*b)+'deg)',
	})
	
	$("#shkval_cont").css({
		'-moz-transform':'rotate('+(c_origine+c_gain*c)+'deg)',
		'-webkit-transform':'rotate('+(c_origine+c_gain*c)+'deg)',
		'-ms-transform':'rotate('+(c_origine+c_gain*c)+'deg)',
	})

}





function panel_uv26_update(KaTZPit_data){
		
	// Voyants Left Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],4) ==1) {$("#UV26_Left").fadeIn()} else {$("#UV26_Left").fadeOut()}
	if (dataread_posit(KaTZPit_data["UV26_Flag"],3) ==1) {$("#UV26_Right").fadeIn()} else {$("#UV26_Right").fadeOut()}
	
	
	// Switch Quant/Num
	if (dataread_posit(KaTZPit_data["UV26_Flag"],2) ==1) {$("#UV_SW_Num").attr('src','images/Switch-Metal-R3.gif')} 
	else {$("#UV_SW_Num").attr('src','images/Switch-Metal-L3.gif')}
	
	// Switch Left/Both/Right
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==2) {$("#UV_SW_LR").attr('src','images/Switch-Metal-R3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==1) {$("#UV_SW_LR").attr('src','images/Switch-Metal-U3.gif')} 
	if (dataread_posit(KaTZPit_data["UV26_Flag"],1) ==0) {$("#UV_SW_LR").attr('src','images/Switch-Metal-L3.gif')} 
	
	// Switch On / Off
	if (dataread_posit(KaTZPit_data["UV26_Flag"],5) ==1) {
		
		$("#UV_SW_On").attr('src','images/Switch-Metal-R3.gif')
		// Allumage de l'affichage digital
		document.getElementById("UV26_flare").style.display = "block"
		// Affichage Flare restantes
		document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
		
	
} 
	else {
		// Affichage du switch en position off (pas encore implémenté sur KA)
		$("#UV_SW_On").attr('src','images/Switch-Metal-L3.gif')
		// Extinction de l'affichage digital
		document.getElementById("UV26_flare").style.display = "none"
	}
	
	
	// Affichage Flare restantes
	//document.getElementById('UV26_flare').innerHTML = dataread_split_2(KaTZPit_data["UV26_Data"])[0]
	

}






	
