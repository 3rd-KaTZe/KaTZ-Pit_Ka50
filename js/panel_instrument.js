// --------------------------------------------------------------------
// Panel Analogique du Ka50
// --------------------------------------------------------------------

function panel_instrument_flight(KaTZPit_data){
		// Animation des jauges-----------------------------------------------------------------------
				
		// Badin et Vario
		instrument_Airspeed(KaTZPit_data["IAS"])
		instrument_Vario(KaTZPit_data["Vario"])

				
		// Altiradar
		// Positionnement de l'Index
		Altirad_flag = dataread_split_2(KaTZPit_data["AltiRad_FI"])
		instrument_Altirad(KaTZPit_data["QFE"],Altirad_flag[0])
		
		// Altimetre Baro , 2 aiguilles  -------------------------------------------------------------
		instrument_Altitude(KaTZPit_data["QNH"])
		instrument_Altitude1000(KaTZPit_data["QNH"]/10)
			
		// Rotation HSI   --------------------------------------------------------------------------
		var i_Cap = 360 - KaTZPit_data["Cap"]/10
		var i_Way = (KaTZPit_data["Way"]/10)
		var i_Route = (KaTZPit_data["Route"]/10 + i_Cap)
	
		instrument_HSI(i_Cap, i_Way, i_Route)	
		
		// Affichage Distance WP
		document.getElementById('HSI_WP_dist').innerHTML = (KaTZPit_data["WP_dist"]).toFixed(0)
		WP_dist
		// Affichage Direction WP aiguille jaune
		i_wp_dir = (KaTZPit_data["Way"]/10 + KaTZPit_data["Cap"]/10 ) % 360
		document.getElementById('HSI_Way').innerHTML = i_wp_dir.toFixed(0)
	
		// Affichage Direction Bullseye 180° aiguille jaune
		KaTZPit_data["Bullseye"] = (i_wp_dir +180) % 360
		document.getElementById('HSI_Bullseye').innerHTML = KaTZPit_data["Bullseye"].toFixed(0)
		
		// Affichage Direction Route aiguille blanche
		document.getElementById('HSI_Route').innerHTML = (KaTZPit_data["Route"]/10).toFixed(0)
		
		// Cadran Bille et Side Split  ---------------------------------------------------------------
		var SpeedSplit = dataread_split_2(KaTZPit_data["EUP"])
		//instrument_Bille(SpeedSplit[1], SpeedSplit[0])
		
		// ADI  -------------------------------------------------------------------------------------
		var ADI_Pitch = KaTZPit_data["Pitch"]
		
		// Calcul de variation de l'horizon artificiel range 0% à 100%
		var ADI_Pitch_A = Math.min(Math.max((ADI_Pitch + 200) / 400,0),1)
		
		document.getElementById('ADI_Pitch_V1').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
		document.getElementById('ADI_Pitch_V2').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
						
		instrument_ADI(SpeedSplit[0],KaTZPit_data["Bank"],ADI_Pitch_A)

}

function panel_instrument_engine(KaTZPit_data){

		// RPM Moteurs  -----------------------------------------------------------------------------
		var RPM_Eng = dataread_split_2(KaTZPit_data["Eng_rpm"])
		instrument_RPM2(RPM_Eng[1]/10,RPM_Eng[0]/10)
		
		// Températures Moteurs  -----------------------------------------------------------------------------
		var Temp_Eng = dataread_split_2(KaTZPit_data["Eng_temp"])
		instrument_EngTemp(Temp_Eng[1],Temp_Eng[0])

		// Pitch et RPM Rotor  -----------------------------------------------------------------------
		instrument_Pitch(KaTZPit_data["Pitch_Rot"])
		instrument_RPM(KaTZPit_data["RPM_Rot"]/10)
		
}

function panel_instrument_rotor(KaTZPit_data){		
		
	// TEMPORAIRE ROTOR PANEL
		document.getElementById('IAS_0').innerHTML = KaTZPit_data["IAS"]
		document.getElementById('Vario_0').innerHTML = (KaTZPit_data["Vario"]/10).toFixed(1)
		document.getElementById('RPM_Rot').innerHTML = KaTZPit_data["RPM_Rot"]
		document.getElementById('Pitch_Rot').innerHTML = (KaTZPit_data["Pitch_Rot"]/10).toFixed(1)	

		// Valeur en test
		document.getElementById('Test_val').innerHTML = KaTZPit_data["Start_Sel"]	
		
		if (KaTZPit_data["IAS"] > 250) {$("#RV-Speed").fadeIn()} else {$("#RV-Speed").fadeOut()}
		if (KaTZPit_data["IAS"] < 50 && KaTZPit_data["Vario"] < -50) {$("#RV-Vortex").fadeIn()} else {$("#RV-Vortex").fadeOut()}
		
		// Jauge de puissance Moteur gestion gauche droite et index
		var i_Pow_Lpct = Math.max((KaTZPit_data["Power_L"] - 50) / 50 , 0)
		var i_Pow_Rpct = Math.max((KaTZPit_data["Power_R"] - 50) / 50 , 0)
		var i_pow_X = (KaTZPit_data["Power_X"])		
		
		Jauge_Power(i_Pow_Lpct, i_Pow_Rpct, i_pow_X )
		//console.log(i_pow_X)
		
}



