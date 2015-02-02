// --------------------------------------------------------------------
// Panel Analogique du Ka50
// --------------------------------------------------------------------

function panel_analog_update(KaTZPit_data){
	// Animation des jauges-----------------------------------------------------------------------
		// Rotation Aiguilles Moteur (origine et gain dans les fonctions)
		// Fonction de la valeur brute exportée par DCS , 
		
		Rotate_Airspeed(KaTZPit_data["IAS"])
		Rotate_Vario(KaTZPit_data["Vario"])

		// Pitch et RPM Rotor  -----------------------------------------------------------------------
		Rotate_Pitch(KaTZPit_data["Pitch_Rot"])
		Rotate_RPM(KaTZPit_data["RPM_Rot"]/10)
		
		// Positionnement de l'Index
		Altirad_flag = dataread_split_2(KaTZPit_data["AltiRad_FI"])
		Rotate_Altirad(KaTZPit_data["QFE"],Altirad_flag[0])
		
		// Altimetre Baro , 2 aiguilles  -------------------------------------------------------------
		Rotate_Altitude(KaTZPit_data["QNH"])
		Rotate_Altitude1000(KaTZPit_data["QNH"]/10)
		
		// RPM Moteurs  -----------------------------------------------------------------------------
		var RPM_Eng = dataread_split_2(KaTZPit_data["Eng_rpm"])
			Rotate_RPM2(RPM_Eng[1]/10,RPM_Eng[0]/10)
			
		
			
		// Rotation HSI   --------------------------------------------------------------------------
		var i_Cap = 360 - KaTZPit_data["Cap"]/10
		var i_Way = (KaTZPit_data["Way"]/10)
		var i_Route = (KaTZPit_data["Route"]/10)
	
		Rotate_HSI(i_Cap, i_Way, i_Route)	
		
		// Cadran Bille et Side Split  ---------------------------------------------------------------
		var SpeedSplit = dataread_split_2(KaTZPit_data["EUP"])
		//Rotate_Bille(SpeedSplit[1], SpeedSplit[0])
		
		// ADI  -------------------------------------------------------------------------------------
		var ADI_Pitch = KaTZPit_data["Pitch"]
		
		// Calcul de variation de l'horizon artificiel range 0% à 100%
		var ADI_Pitch_A = Math.min(Math.max((ADI_Pitch + 200) / 400,0),1)
		
		document.getElementById('ADI_Pitch_V1').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
		document.getElementById('ADI_Pitch_V2').innerHTML = (ADI_Pitch/1000*90).toFixed(0)
						
		Animate_ADI(SpeedSplit[0],KaTZPit_data["Bank"],ADI_Pitch_A)







}

function Rotate_HSI(cap,way,route){
	var a_origine = 0
	var a_gain = 1
	
	$("#AN_Rosace").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*cap)+'deg)',
	})

	$("#AN_Way").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*way)+'deg)',
	})

	$("#AN_Route").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*route)+'deg)',
	})

}

function Animate_ADI(bille,bank,pitch){
	var a_origine = 0
	var bi_gain = -0.02
	var ba_gain = 0.18
	
	var pitch_strech = 2 * pitch
	var pitch_origin = -135
	var pitch_gain = 270
	
	
	$("#ADI_Bille").css({
		'-moz-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
		'-ms-transform':'rotate('+(a_origine+bi_gain*bille)+'deg)',
	})
	
	$("#ADI_Bank").css({
		'-moz-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
		'-ms-transform':'rotate('+(a_origine+ba_gain*bank)+'deg)',
	})
	
	// expansion compression de la zone Top
	// Top Bleu Clair, on fixe l'origine du "scale down" en haut
	$("#ADI_Pitch_T").css({
	'-moz-transform-origin':'top left',
	'-webkit-transform-origin':'top left',
	'-ms-transform-origin':'top left',
	})

	// Scale vertical
	$("#ADI_Pitch_T").css({
	'-moz-transform':'scaleY('+pitch_strech+')',
	'-webkit-transform':'scaleY('+pitch_strech+')',
	'-ms-transform':'scaleY('+pitch_strech+')',
	})
	
	// Translation vers le bas , de la barre d'horizon
	
	$("#ADI_Pitch_C").css({
	'-moz-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-webkit-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	'-ms-transform':'translate(0px,'+(pitch_origin + pitch_gain * pitch)+'px)',
	})

}	

function Rotate_Airspeed(val){
	var a_origine = 0
	var l_gain = 1.285
	
	$("#AIG_Airspeed").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}

function Rotate_Vario(val){

	
	var a_origine = -90
	// Valeur brute 1000 >> -30m/s >> 180°
	var l_gain = 0.9
	
	$("#AIG_Vario").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}

function Rotate_Pitch(val){
	var a_origine = -120
	var l_gain = 1.5
	
	$("#AIG_Pitch").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}

function Rotate_Altirad(val,index){
	var a_origine = 0
	var l_gain = 0.325
	
	$("#AIG_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})
	
	$("#INDX_Altirad").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*index)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*index)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*index)+'deg)',
	})

}

function Rotate_Altitude(val){
	var a_origine = 0
	var l_gain = 0.360
	
	$("#AIG_Altitude").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}

function Rotate_Altitude1000(val){
	var a_origine = 0
	var l_gain = 0.360
	
	$("#AIG_Alti1000").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}

function Rotate_RPM(val){
	var a_origine = 45
	// La valeur a été convertie dans l'export, on recorrige
	var l_gain = 34 / 1.1
	
	$("#AIG_RPM_Rot").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*val)+'deg)',
	})

}
	

// Rotation des aiguilles moteurs (left, right), avions Russes
// Le gain est ajusté pour faire correspondre 
// le placement de l'aiguille avec la valeur exacte

function Rotate_RPM2(l,r){
	var a_origine = 45
	// La valeur a été convertie dans l'export, on recorrige
	var l_gain = 3.4 / 1.10
	var r_gain = 3.4 / 1.10
	
	$("#AIG_RPM_Eng_L").css({
		'-moz-transform':'rotate('+(a_origine+l_gain*l)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+l_gain*l)+'deg)',
		'-ms-transform':'rotate('+(a_origine+l_gain*l)+'deg)',
	})

	$("#AIG_RPM_Eng_R").css({
		'-moz-transform':'rotate('+(a_origine+r_gain*r)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+r_gain*r)+'deg)',
		'-ms-transform':'rotate('+(a_origine+r_gain*r)+'deg)',
	})
}



