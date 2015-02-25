// Panel PVI800

function panel_pvi_update(KaTZPit_data){
	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],8) ==0) {$("#pvi_315").fadeOut()} else {$("#pvi_315").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],7) ==0) {$("#pvi_519").fadeOut()} else {$("#pvi_519").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],6) ==0) {$("#pvi_316").fadeOut()} else {$("#pvi_316").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],5) ==0) {$("#pvi_520").fadeOut()} else {$("#pvi_520").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],4) ==0) {$("#pvi_317").fadeOut()} else {$("#pvi_317").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],3) ==0) {$("#pvi_521").fadeOut()} else {$("#pvi_521").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],2) ==0) {$("#pvi_318").fadeOut()} else {$("#pvi_318").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_4"],1) ==0) {$("#pvi_522").fadeOut()} else {$("#pvi_522").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],7) ==0) {$("#pvi_313").fadeOut()} else {$("#pvi_313").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],6) ==0) {$("#pvi_314").fadeOut()} else {$("#pvi_314").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],5) ==0) {$("#pvi_319").fadeOut()} else {$("#pvi_319").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],4) ==0) {$("#pvi_320").fadeOut()} else {$("#pvi_320").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],3) ==0) {$("#pvi_321").fadeOut()} else {$("#pvi_321").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],2) ==0) {$("#pvi_322").fadeOut()} else {$("#pvi_322").fadeIn()}	
	if (dataread_posit(KaTZPit_data["Pvi800_5"],1) ==0) {$("#pvi_323").fadeOut()} else {$("#pvi_323").fadeIn()}	
	
	// Switch INU
	if (dataread_posit(KaTZPit_data["Pvi800_6"],3) == 1) {$("#SW_pvi_inu").attr('src','images/switch/Switch-Metal-U4.png')}
	if (dataread_posit(KaTZPit_data["Pvi800_6"],3) == 0) {$("#SW_pvi_inu").attr('src','images/switch/Switch-Metal-D4.png')}	
	
	// Switch DLink
	if (dataread_posit(KaTZPit_data["Pvi800_6"],2) == 1) {$("#SW_pvi_dlink").attr('src','images/switch/Switch-Metal-U4.png')}
	if (dataread_posit(KaTZPit_data["Pvi800_6"],2) == 0) {$("#SW_pvi_dlink").attr('src','images/switch/Switch-Metal-D4.png')}	
	
	// Selecteur PVI
	switch_PVI(dataread_posit(KaTZPit_data["Pvi800_6"],1)+5,1)
	
	// Affichage PVI
	document.getElementById('PVI_T1').innerHTML = KaTZPit_data["Pvi800_1"]
	document.getElementById('PVI_T2').innerHTML = KaTZPit_data["Pvi800_2"]
	document.getElementById('PVI_T3').innerHTML = dataread_split_2(KaTZPit_data["Pvi800_3"])[1]
	document.getElementById('PVI_T4').innerHTML = dataread_split_2(KaTZPit_data["Pvi800_3"])[0]
		
		
}

function switch_PVI(pos){
	var d_origine = -90
	var d_gain = 30
	
	$("#Selec_pvi").css({
		'-moz-transform':'rotate('+(d_origine+d_gain*pos)+'deg)',
		'-webkit-transform':'rotate('+(d_origine+d_gain*pos)+'deg)',
		'-ms-transform':'rotate('+(d_origine+d_gain*pos)+'deg)',
	})

}


	
