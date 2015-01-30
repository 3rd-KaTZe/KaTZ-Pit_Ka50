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
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],1) ==1) {$("#WPN-Master").fadeIn()} else {$("#WPN-Master").fadeOut()}
	
	// Voyant Cannon
	if (dataread_posit(KaTZPit_data["Wpn_Lamp"],2) ==1) {$("#WPN-Cannon").fadeIn()} else {$("#WPN-Cannon").fadeOut()}
	
	// Affichage Ammo restantes
	document.getElementById('Ammo_remain').innerHTML = dataread_split_2(KaTZPit_data["Wpn_Ammo"])[1]
	document.getElementById('Ammo_rnds').innerHTML = dataread_split_2(KaTZPit_data["Wpn_Ammo"])[0]


}





	
