// --------------------------------------------------------------------
// Panel Electric
// --------------------------------------------------------------------

function panel_electric_update(KaTZPit_data){
	
	// Etat des Batteries Gauche Droite et Switch On/off , 2-Way-Switch + Capot)
	
	if (dataread_posit(KaTZPit_data["E_DC_SW"],1) ==1){
			$("#EV-Bat-G").attr('src','images/electric/E_Battery-SW.gif')
			$("#E-Bat-SWG").attr('src','images/electric/E_SW-OnDC.gif')
			$("#E-Bat-SWG").data('internal-id','20200500')}
		else {
			$("#EV-Bat-G").attr('src','images/electric/E_Off-V.gif')
			$("#E-Bat-SWG").attr('src','images/electric/E_SW-Off.gif')
			$("#E-Bat-SWG").data('internal-id','20200501')}
			
	if (dataread_posit(KaTZPit_data["E_DC_SW"],2) ==1) {
			$("#EV-Bat-D").attr('src','images/electric/E_Battery-SW.gif')
			$("#E-Bat-SWD").attr('src','images/electric/E_SW-OnDC.gif')
			$("#E-Bat-SWD").data('internal-id','20200300')}
		else {
			$("#EV-Bat-D").attr('src','images/electric/E_Off-V.gif')
			$("#E-Bat-SWD").attr('src','images/electric/E_SW-Off.gif')
			$("#E-Bat-SWD").data('internal-id','20200301')}		
	
		
	// Inverter DC/AC et son switch de mode de fonctionnement (On/Auto/off) ----------------------------------------------
	if (dataread_posit(KaTZPit_data["E_AC_V"],4) ==1) {$("#EV-DCAC").fadeIn()} else {$("#EV-DCAC").fadeOut()}
	
	if (dataread_posit(KaTZPit_data["E_AC_SW"],4) ==0) {
			$("#E-DCAC-SW").attr('src','images/electric/E_Off-H.gif')
			$("#E-DCAC-SW").data('internal-id','10201002')}
	if (dataread_posit(KaTZPit_data["E_AC_SW"],4) ==1){
			$("#E-DCAC-SW").attr('src','images/electric/E_On.gif')
			$("#E-DCAC-SW").data('internal-id','10201001')}		
	else {
			$("#E-DCAC-SW").attr('src','images/electric/E_AUTO.gif')
			$("#E-DCAC-SW").data('internal-id','10201000')}		
			
	
	// Ground DC et Switch On/off , 2-Way-Switch + Capot) ---------------------------------------------------------------------------------------
	if (dataread_posit(KaTZPit_data["E_DC_V"],4) ==1) {$("#EV-Grnd-DC").attr('src','images/electric/E_Ground-DC-SW.gif')}
	else 	{$("#EV-Grnd-DC").attr('src','images/electric/E_Off-H.gif')}
	
	if (dataread_posit(KaTZPit_data["E_DC_SW"],7) ==1) {
			$("#E-Grnd-SWDC").attr('src','images/electric/E_SW-OnDC.gif')
			$("#E-Grnd-SWDC").data('internal-id','20200100')}
	else {
			$("#E-Grnd-SWDC").attr('src','images/electric/E_SW-Off.gif')
			$("#E-Grnd-SWDC").data('internal-id','20200101')}	

	// Ground AC et Switch On/off , 2-Way-Switch) ---------------------------------------------------------------------------------------
	if (dataread_posit(KaTZPit_data["E_AC_V"],3) ==1)  {$("#EV-Grnd-AC").attr('src','images/electric/E_Ground-AC-SW.gif')}
	else							{$("#EV-Grnd-AC").attr('src','images/electric/E_Off-H.gif')}
	
	if (dataread_posit(KaTZPit_data["E_AC_SW"],3) ==1) {
			$("#E-Grnd-SWAC").attr('src','images/electric/E_SW-OnAC.gif')
			$("#E-Grnd-SWAC").data('internal-id','10200700')}
	else {
			$("#E-Grnd-SWAC").attr('src','images/electric/E_SW-Off.gif')
			$("#E-Grnd-SWAC").data('internal-id','10200701')}	

	// Génératrice Gauche Droite et l'Inverter AC/DC ----------------------------------------------
	var EV_ACDC = (dataread_posit(KaTZPit_data["E_AC_SW"],1) + dataread_posit(KaTZPit_data["E_AC_SW"],2)) * (1-dataread_posit(KaTZPit_data["E_AC_V"],4))

	if (EV_ACDC > 0) {$("#EV-ACDC").fadeIn()} else {$("#EV-ACDC").fadeOut()}
	
	// L'image de Generatrice est clickable pour la mettre en ligne, 2-Way-Switch
	if (dataread_posit(KaTZPit_data["E_AC_SW"],1) ==1)  {
			$("#E-Gen-G").attr('src','images/electric/E_Generator-SW.gif')
			$("#E-Gen-G").data('internal-id','10200800')}
	else {
			$("#E-Gen-G").attr('src','images/electric/E_Off-H.gif')
			$("#E-Gen-G").data('internal-id','10200801')}	
	
	// L'image de Generatrice est clickable pour la mettre en ligne, 2-Way-Switch
	if (dataread_posit(KaTZPit_data["E_AC_SW"],2) ==1)  {
			$("#E-Gen-D").attr('src','images/electric/E_Generator-SW.gif')
			$("#E-Gen-D").data('internal-id','10200900')}		
	else {
			$("#E-Gen-D").attr('src','images/electric/E_Off-H.gif')
			$("#E-Gen-D").data('internal-id','10200901')}					
		

}

function panel_electric_light(KaTZPit_data){

		// Selecteur Dome L
		if (dataread_posit(KaTZPit_data["E_NavLight"],6) ==1) {$("#E_Dome_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],6) ==0) {$("#E_Dome_L").attr('src','images/switch/Switch-Metal-D4.png')}	
		
		// Selecteur Panel Instrument
		if (dataread_posit(KaTZPit_data["E_NavLight"],5) ==1) {$("#E_Panel_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],5) ==0) {$("#E_Panel_L").attr('src','images/switch/Switch-Metal-D4.png')}	
		
		// Selecteur Nav Light
		if (dataread_posit(KaTZPit_data["E_NavLight"],4) ==3) {$("#E_Nav_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		else if (dataread_posit(KaTZPit_data["E_NavLight"],4) ==0) {$("#E_Nav_L").attr('src','images/switch/Switch-Metal-C4V.png')}	
		else {$("#E_Nav_L").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Selecteur Form Light
		if (dataread_posit(KaTZPit_data["E_NavLight"],3) ==3) {$("#E_Form_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		else if (dataread_posit(KaTZPit_data["E_NavLight"],3) ==0) {$("#E_Form_L").attr('src','images/switch/Switch-Metal-C4V.png')}	
		else  {$("#E_Form_L").attr('src','images/switch/Switch-Metal-D4.png')}
		
		// Selecteur Blade Tip , Strobe
		if (dataread_posit(KaTZPit_data["E_NavLight"],1) ==1) {$("#E_Beacon_L").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Beacon_L").attr('src','images/switch/Switch-Metal-D4.png')}
		if (dataread_posit(KaTZPit_data["E_NavLight"],2) ==1) {$("#E_Blade_L").attr('src','images/switch/Switch-Metal-U4.png')} else {$("#E_Blade_L").attr('src','images/switch/Switch-Metal-D4.png')}	
		
		// Voyant Feux de Recherche 1ere condition = on, ou off >> 2eme condition = main ou backup
		if (dataread_posit(KaTZPit_data["E_NavLight"],8) ==1 && dataread_posit(KaTZPit_data["E_NavLight"],7)==0) {$("#E_Landing_L").attr('src','images/switch/Switch-Metal-U4.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],8) ==0) {$("#E_Landing_L").attr('src','images/switch/Switch-Metal-C4V.png')}	
		if (dataread_posit(KaTZPit_data["E_NavLight"],8) ==1 && dataread_posit(KaTZPit_data["E_NavLight"],7)==1) {$("#E_Landing_L").attr('src','images/switch/Switch-Metal-D4.png')}



}
