// --------------------------------------------------------------------
// Panel Fuel et Start
// --------------------------------------------------------------------

function panel_fuel_update(KaTZPit_data){
	
	// Panneau de gestion fuel et de démarrage APU/Moteur
	
		// Affichage quantité fuel réservoir AV, AR, Total
		document.getElementById('Fuel_AV').innerHTML = KaTZPit_data["Fuel_AV"]
		document.getElementById('Fuel_AR').innerHTML = KaTZPit_data["Fuel_AR"]
		document.getElementById('Fuel_T').innerHTML = KaTZPit_data["Fuel_AV"] + KaTZPit_data["Fuel_AR"]
		

			
		
	// Position des Vannes (Fonctionnement des voyants de vannes Droite et Gauche inversé)
	// Pour la commande on utilise la commande de type 2 spécifique au KA50
	// 3 ordres executes dans DCS ouverturecapot/basculeinter/fermeturecapot
		if (dataread_posit(KaTZPit_data["Fuel_V"],2) ==0) {
			$("#F-Vanne-G").attr('src','images/fuel/FV-Vanne_V_O.gif')
			$("#F-Vanne-G").data('internal-id','20300600')}
		else {
			$("#F-Vanne-G").attr('src','images/fuel/FV-Vanne_V_F.gif')
			$("#F-Vanne-G").data('internal-id','20300601')}
			
		if (dataread_posit(KaTZPit_data["Fuel_V"],1)==0) {
			$("#F-Vanne-D").attr('src','images/fuel/FV-Vanne_V_O.gif')
			$("#F-Vanne-D").data('internal-id','20300800')}
		else {
			$("#F-Vanne-D").attr('src','images/fuel/FV-Vanne_V_F.gif')
			$("#F-Vanne-D").data('internal-id','20300801')}
			
		//if (KaTZPit_data["APU_V_Fuel"] ==1) {
		//	$("#F-Vanne-APU").attr('src','images/fuel/FV-Vanne_V_O.gif')
		//	$("#F-Vanne-APU").data('internal-id','10301000')}
		//else {
		//	$("#F-Vanne-APU").attr('src','images/fuel/FV-Vanne_V_F.gif')
		//	$("#F-Vanne-APU").data('internal-id','10301001')}
			
		if (dataread_posit(KaTZPit_data["Fuel_V"],3) ==1) {
			$("#F-Vanne-X").attr('src','images/fuel/FV-Vanne_H_O.gif')
			$("#F-Vanne-X").data('internal-id','20301200')}
		else {
			$("#F-Vanne-X").attr('src','images/fuel/FV-Vanne_H_F.gif')
			$("#F-Vanne-X").data('internal-id','20301201')}

	// Voyant des Cut Off et du frein de Rotor
		if (dataread_posit(KaTZPit_data["COff"],2)  ==1) {
			$("#FV-CutOff-G").attr('src','images/fuel/FV_Cutoff_Off.gif')
			$("#FV-CutOff-G").data('internal-id','10400900')}
		else {
			$("#FV-CutOff-G").attr('src','images/fuel/FV_Cutoff_On.gif')
			$("#FV-CutOff-G").data('internal-id','10400901')}
			
		if (dataread_posit(KaTZPit_data["COff"],1) == 1) {
			$("#FV-CutOff-D").attr('src','images/fuel/FV_Cutoff_Off.gif')
			$("#FV-CutOff-D").data('internal-id','10401000')}
		else {
			$("#FV-CutOff-D").attr('src','images/fuel/FV_Cutoff_On.gif')
			$("#FV-CutOff-D").data('internal-id','10401001')}
		
		if (dataread_posit(KaTZPit_data["COff"],3) == 1) {
			$("#FV-RotBrk").attr('src','images/fuel/FV_RotorBtk_On.gif')
			$("#FV-RotBrk").data('internal-id','10401100')}
		else {
			$("#FV-RotBrk").attr('src','images/fuel/FV_RotorBtk_Off.gif')
			$("#FV-RotBrk").data('internal-id','10401101')}


	// Fonctionnement des Pompes de Carburant
		if (dataread_posit(KaTZPit_data["Fuel_P"],2) == 1) {
			$("#F-Pump-AV").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-AV").data('internal-id','10300100')}
		else {
			$("#F-Pump-AV").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-AV").data('internal-id','10300101')}
		
		if (dataread_posit(KaTZPit_data["Fuel_P"],1) ==1) {
			$("#F-Pump-AR").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-AR").data('internal-id','10300200')}
		else {
			$("#F-Pump-AR").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-AR").data('internal-id','10300201')}
				
		if (dataread_posit(KaTZPit_data["Fuel_PE"],3) ==1) {
			$("#F-Pump-IL").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-IL").data('internal-id','10300300')}
		else {
			$("#F-Pump-IL").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-IL").data('internal-id','10300301')}
				
		if (dataread_posit(KaTZPit_data["Fuel_PE"],2) ==1) {
			$("#F-Pump-IR").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-IR").data('internal-id','10300300')}
		else {
			$("#F-Pump-IR").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-IR").data('internal-id','10300301')}
		
		if (dataread_posit(KaTZPit_data["Fuel_PE"],4) ==1) {
			$("#F-Pump-EL").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-EL").data('internal-id','10300400')}
		else {
			$("#F-Pump-EL").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-EL").data('internal-id','10300401')}
		
		if (dataread_posit(KaTZPit_data["Fuel_PE"],1) ==1) {
			$("#F-Pump-ER").attr('src','images/fuel/FV_Pump_M.gif')
			$("#F-Pump-ER").data('internal-id','10300400')}
		else {
			$("#F-Pump-ER").attr('src','images/fuel/FV_Pump_A.gif')
			$("#F-Pump-ER").data('internal-id','10300401')}
		
		
	// RPM Moteur et Rotor
		EngRpm = dataread_split_2(KaTZPit_data["Eng_rpm"])
		document.getElementById('F-RPM-G').innerHTML = (EngRpm[1]/10).toFixed(0)
		document.getElementById('F-RPM-D').innerHTML = (EngRpm[0]/10).toFixed(0)
		
		document.getElementById('F-RPM-RO').innerHTML = KaTZPit_data["RPM_Rot"]
		
	// Températures	APU

		document.getElementById('F-DEG-APU').innerHTML = dataread_split_2(KaTZPit_data["APU_Data"])[0]
		
	// Voyants de l'APU
	// On va lire la valeur de chaque voyant dans la chaine "APU_Voyants"
	// avec la fonction dataread_posit(chaine,position), fonction se trouvant dans function_calcul.js
	
		// Ignition		
		if (dataread_posit(KaTZPit_data["APU_Voyants"],1) ==1) {
			$("#F-Vanne-APU").attr('src','images/fuel/FV-Vanne_V_O.gif')
			$("#F-Vanne-APU").data('internal-id','20301000')
			$("#F-APU-Fuel").fadeIn()} 

		else {
			$("#F-Vanne-APU").attr('src','images/fuel/FV-Vanne_V_F.gif')
			$("#F-Vanne-APU").data('internal-id','20301001')
			$("#F-APU-Fuel").fadeOut()}


		// Oil OK
		if (dataread_posit(KaTZPit_data["APU_Voyants"],2) ==1) {$("#F-APU-Oil").fadeIn()} else {$("#F-APU-Oil").fadeOut()}
		// RPM OK
		//if (dataread_posit(KaTZPit_data["APU_Voyants"],3) ==1) {$("#APU-V-RPM-OK").fadeIn()} else {$("#APU-V-RPM-OK").fadeOut()}
		// RPM High Alarm
		if (dataread_posit(KaTZPit_data["APU_Voyants"],4) ==1) {$("#F-APU-Rpm").fadeIn()} else {$("#F-APU-Rpm").fadeOut()}

		if (dataread_posit(KaTZPit_data["APU_Voyants"],3) ==1) {
			$("#F-APU-ON").attr('src','images/fuel/FV_APU_ON.gif')
			// Bouton Start type press bouton 1000>0000
			$("#F-APU-ON").data('internal-id','30400701')}

		else {
			// Bouton Stop type press bouton 1000>0000
			$("#F-APU-ON").attr('src','images/fuel/FV_APU_Off.gif')
			$("#F-APU-ON").data('internal-id','30400701')}
		
		
		//if (KaTZPit_data["APU_V_1"] ==1) {$("#F-APU-Fuel").fadeIn()} else {$("#F-APU-Fuel").fadeOut()}
		//if (KaTZPit_data["APU_V_2"] ==1) {$("#F-APU-Oil").fadeIn()} else {$("#F-APU-Oil").fadeOut()}
		//if (KaTZPit_data["APU_V_4"] ==1) {$("#F-APU-Rpm").fadeIn()} else {$("#F-APU-Rpm").fadeOut()}

	// Sub-Panel Demarrage
		if (dataread_posit(KaTZPit_data["Start_V"],1) == 1) {
			$("#F-Start-ON").attr('src','images/fuel/FV_START.gif')
			// Bouton Start type press bouton 1000>0000
			$("#F-Start-ON").data('internal-id','30400601')}
		else {
			// Bouton Stop type press bouton 1000>0000
			$("#F-Start-ON").attr('src','images/fuel/FV_START_off.gif')
			$("#F-Start-ON").data('internal-id','30400501')}

		// Alarme si collectif est levé pour éviter demmarage
		//if (KaTZPit_data["RPM_L"] >70	|| KaTZPit_data["RPM_R"] >70) {
		//	if (KaTZPit_data["Collectif"]>10) {$("#FW-Collectif").fadeIn()} else {$("#FW-Collectif").fadeOut()}
		//	}

		//	Si selecteur = maintenance on efface le repère de selection
		if (KaTZPit_data["Start_Sel"] == 3) {$("#F-1APU2").fadeOut()} else {$("#F-1APU2").fadeIn()}


		// Selecteur 3 positions Eng1, APU, Eng2
		// Selecteur 3 positions Start, Vent, Crank	
		var sel = 10 	// Demarrage APU
		var typ = 0  	// Start
		if (KaTZPit_data["Start_Sel"] == 1 ) {sel=0}  	// Demarrage Eng 1
		if (KaTZPit_data["Start_Sel"] == 2 ) {sel=20}	// Demarrage Eng 2

		if (KaTZPit_data["Start_Typ"] == 1 ) {typ=10}	// Venting
		if (KaTZPit_data["Start_Typ"] == 2 ) {typ=20}	// Cranking
		
		Start_Switch(sel,typ)

	// EEG Moteur
		if (dataread_posit(KaTZPit_data["E_AC_V"],6)  ==1) {
			$("#F-EEG-G").attr('src','images/fuel/FV_EEG.gif')
			$("#F-EEG-G").data('internal-id','20400100')}
		else {
			$("#F-EEG-G").attr('src','images/fuel/FV_EEG_Off.gif')
			$("#F-EEG-G").data('internal-id','20400101')}
			
		if (dataread_posit(KaTZPit_data["E_AC_V"],5)  ==1) {
			$("#F-EEG-D").attr('src','images/fuel/FV_EEG.gif')
			$("#F-EEG-D").data('internal-id','20400300')}
		else {
			$("#F-EEG-D").attr('src','images/fuel/FV_EEG_Off.gif')
			$("#F-EEG-D").data('internal-id','20400301')}
		
}
		

		
function panel_oil_update(KaTZPit_data){		
	
	// PANEL affichage temp Exaust et Huile Moteur/Transmission
	
		// Affichage température huile moteur couleur rouge si < 30°C , Vert = OK
		var Eng_O_d = dataread_split_2(KaTZPit_data["Eng_Oil_deg"])
		document.getElementById('O-Deg-G').innerHTML = Eng_O_d[1]
		if (Eng_O_d[1] < 30){document.getElementById('O-Deg-G').style.color = 'red'}
		else {document.getElementById('O-Deg-G').style.color = 'green'}

		document.getElementById('O-Deg-D').innerHTML = Eng_O_d[0]
		if (Eng_O_d[0] < 30){document.getElementById('O-Deg-D').style.color = 'red'}
		else {document.getElementById('O-Deg-D').style.color = 'green'}
		
		// Affichage température huile transmission couleur rouge si < -15°C , Vert = OK
		var GB_O_d = dataread_split_2(KaTZPit_data["GB_Oil_deg"])
		document.getElementById('O-Deg-GB').innerHTML = GB_O_d[0]
		if (GB_O_d[0] < -15){document.getElementById('O-Deg-GB').style.color = 'red'}
		else {document.getElementById('O-Deg-GB').style.color = 'green'}

		// Affichage pressions couleur rouge si < 2.0 kg/cm² , Vert = OK
		var Eng_O_p = dataread_split_2(KaTZPit_data["Eng_Oil_pre"])
		document.getElementById('O-Pre-G').innerHTML = ((Eng_O_p[1])/10).toFixed(1)
		if (Eng_O_p[1] < 20){document.getElementById('O-Pre-G').style.color = 'red'}
		else {document.getElementById('O-Pre-G').style.color = 'green'}
		
		document.getElementById('O-Pre-D').innerHTML = ((Eng_O_p[0])/10).toFixed(1)
		if (Eng_O_p[0] < 20){document.getElementById('O-Pre-D').style.color = 'red'}
		else {document.getElementById('O-Pre-D').style.color = 'green'}
		
		var GB_O_p = dataread_split_2(KaTZPit_data["GB_Oil_pre"])
		document.getElementById('O-Pre-GB').innerHTML =((GB_O_p[0])/10).toFixed(1)
		if (GB_O_p[0] < 5){document.getElementById('O-Pre-GB').style.color = 'red'}
		else {document.getElementById('O-Pre-GB').style.color = 'green'}
		
		// Affichage température echappement moteur 
		var Temp_Eng = dataread_split_2(KaTZPit_data["Eng_temp"])
		document.getElementById('O-Deg-EG').innerHTML = Temp_Eng[1]
		document.getElementById('O-Deg-ED').innerHTML = Temp_Eng[0]

}


function Start_Switch(sel,typ){

	var x_gain = 5.5

	// Calcul de la position des selecteurs de type de demarrage et de selection moteur
	// Translation de l'image vers la droite
	
	$("#F-SVC").css({
	'-moz-transform':'translate('+(x_gain * typ)+'px, 0px)',
	'-webkit-transform':'translate('+(x_gain * typ)+'px, 0px)',
	'-ms-transform':'translate('+(x_gain * typ)+'px, 0px)',
	})

	$("#F-1APU2").css({
	'-moz-transform':'translate('+(x_gain * sel)+'px,0px)',
	'-webkit-transform':'translate('+(x_gain * sel)+'px,0px)',
	'-ms-transform':'translate('+(x_gain * sel)+'px,0px)',
	})



}
