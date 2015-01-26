// --------------------------------------------------------------------------------
// Panel Navigation
// --------------------------------------------------------------------------------

function panel_navigation_update(KaTZPit_data){

	// *****************************************************************************
	// Calculateur de Vol : Time2WP, ETA, QNH@WP -----------------------------------
	// *****************************************************************************
	
	// Time pour le WP(sec) = Distance (km) / TAS (km/h) * 3600 (sec/hr)
	// Plafonné à 99mn59sec quand TAS=0, pour éviter division par zero TAS augmenté de 0.1
	i_TAS = KaTZPit_data["TAS"] + 0.1
	i_time2wp = Math.min(KaTZPit_data["WP_dist"] / i_TAS * 3600, 5999)
	// ETA au WP (sec) = Heure actuelle (Clock) + Time2WP
	i_eta2wp = KaTZPit_data["Clock"] + i_time2wp
	// QNH@WP (altitude au WP en metres avec la pente actuelle)
	// QNH @^WP = QNH (m) + Vario (m/s)  * Time2WP (sec)
	i_qnhwp = Math.max(Math.min(KaTZPit_data["QNH"] + KaTZPit_data["Vario"] * i_time2wp,9999),0)
	
	// Calcul de la TAS_Eco en fonction de l'altitude QNH
	//KaTZPit_data["TAS_Opt"]= Plane_data["TAS_eco"] + Plane_data["TAS_alt"] * KaTZPit_data["QNH"] / 1000
	// Calcul Fuel2WP (time2wp(sec) * conso (kg/mn) / 60 (sec/mn))
	//i_fuel2wp = Math.min(i_time2wp * KaTZPit_data["Conso"] / 60,9999)
	//i_playtime = Math.min(((KaTZPit_data["Fuel_e"] + KaTZPit_data["Fuel_i"])- i_fuel2wp)/KaTZPit_data["Conso"],5999)
	
	// *****************************************************************************
	// Affichage -------------------------------------------------------------------
	// *****************************************************************************
	
	// Mode de Vol
	// Si mode de vol n'existe pas on renvoi "---"
	i_fl_mod = FL_data[KaTZPit_data["FL_mode"]] 
	if (typeof i_fl_mod == "undefined"){i_fl_mod = "---"}
	document.getElementById('FL_mode').innerHTML = i_fl_mod
	
	// Cap, N°WP, Direction WP, Relèvement Bulls (WP-180°), Direction Route
	document.getElementById('Cap').innerHTML = (KaTZPit_data["Cap"]/10).toFixed(0)
	// Le WP est exporté en rotation d'aiguille, pour bearing il faut ajouter le cap
	i_wp_dir = (KaTZPit_data["Way"]/10 + KaTZPit_data["Cap"]/10 ) % 360
	document.getElementById('Way').innerHTML = i_wp_dir.toFixed(0)
	KaTZPit_data["Bullseye"] = (i_wp_dir +180) % 360
	document.getElementById('Bullseye').innerHTML = KaTZPit_data["Bullseye"].toFixed(0)
	document.getElementById('Route').innerHTML = (KaTZPit_data["Route"]/10).toFixed(0)
	document.getElementById('WP_num').innerHTML = KaTZPit_data["WP_num"]
	
	// Donnée de vol
	// Les valeurs metriques et impériales sont affichées
	
	// IAS en "km/h" et en "kts"
	document.getElementById('IAS_km').innerHTML = KaTZPit_data["IAS"].toFixed(0)
	document.getElementById('IAS_kt').innerHTML = (KaTZPit_data["IAS"]/1.852).toFixed(0)
	//document.getElementById('Mach').innerHTML = (KaTZPit_data["Mach"]/100).toFixed(2)

	//QNH en "m" et en "feet"
	document.getElementById('QNH_m').innerHTML = KaTZPit_data["QNH"].toFixed(0)
	document.getElementById('QNH_f').innerHTML = (KaTZPit_data["QNH"]* 3.281).toFixed(0)
	
	// Altitude Radar, appel de la fonction, échelle non linéaire
	document.getElementById('QFE').innerHTML = Alti_Rad(KaTZPit_data["QFE"]).toFixed(0)
	if (KaTZPit_data["QFE"] > 99) {$("#QFE").css({'color':'black'})}
	else {$("#QFE").css({'color':'#99CCFF'})}
	
	// Données TAS, Variomètre, Distance
	document.getElementById('TAS').innerHTML = KaTZPit_data["TAS"].toFixed(0)
		
	// Variometre
	// Le parametre "vari_unit" permet de passer de "m/s" à "m/mn" avec la fonction NavMns()
	// Cette fonction  toggle des unités" est déclanchée, par le bouton sous l'affichage Vario
	// KA-50, vario export en dm/sec
	var i_Vario = KaTZPit_data["Vario"] * KaTZPit_data["Vari_unit"] / 10
	document.getElementById('Vario').innerHTML = i_Vario.toFixed(1)	
	document.getElementById('QNH_WP').innerHTML = i_qnhwp.toFixed(0)
		
	// Distance au waypoint exporté en 0.1 km
	document.getElementById('WP_dist').innerHTML = (KaTZPit_data["WP_dist"]/10).toFixed(1)
		
	// Heure, Temps de Vol, Chrono ----------------------------------------------------
	// Pour les heures, Formatage fonction 0 >> hh:mm:ss 
	document.getElementById('Clock').innerHTML = time_format_0(KaTZPit_data["Clock"])
	document.getElementById('Time_Fly').innerHTML = time_format_0(KaTZPit_data["TimeFly"])
	// Pour les durées, Formatage fonction 1 >> h:m's" 
	var i_chrono = KaTZPit_data["TimeMis"] - KaTZPit_data["Chrono"]
	document.getElementById('Chrono').innerHTML = time_format_1(i_chrono)
		
	// Calculateur de Vol durées : Time2WP, ETA
	// Time2WP, Formatage en mn's"
	document.getElementById('Time_2_WP').innerHTML =  Math.floor(i_time2wp / 60) + "\'" + (i_time2wp % 60).toFixed(0)+"\""
	// Pour les heures, Formatage fonction 0 >> hh:mm:ss 
	document.getElementById('ETA').innerHTML = time_format_0(i_eta2wp)

	// Playtime, formatage en mn
	//document.getElementById('Playtime').innerHTML = i_playtime.toFixed(0) + " mn"
	
	// Gestion des voyants ----------------------------------------------------------------------
	// Changement des unités Variometre	, affichage du bouton m/s ou m/mn
	if (KaTZPit_data["Vari_unit"] == 1) {$("#N_SW_mmn").fadeOut()} else {$("#N_SW_mmn").fadeIn()}
	
	// *****************************************************************************
	// Rotation du HSI -------------------------------------------------------------
	// *****************************************************************************
	var i_Cap = 360 - KaTZPit_data["Cap"]/10
	var i_Way = KaTZPit_data["Way"]/10
	var i_Route = (KaTZPit_data["Route"]/10 + i_Cap) % 360
	
	// Animation de l'index de Target (depuis panel target)
	if (KaTZPit_data["TGT_select"] == 1) {i_tgt = KaTZPit_data["T1_deg"]} 
	if (KaTZPit_data["TGT_select"] == 2) {i_tgt = KaTZPit_data["T2_deg"]} 
	if (KaTZPit_data["TGT_select"] == 3) {i_tgt = KaTZPit_data["T3_deg"]} 
	var i_tgt = (i_tgt + i_Cap) % 360

	// Rotation Aiguilles HSI, appel de la fonction
	Rotate_HSI(i_Cap, i_Way, i_Route,i_tgt)
	
}

function Alti_Rad(val){
	var i_altirad
	
	// basé sur les données BS-mainpanel_init.lua
	// gamme 20-50-150-200-300
	// pour valeur 18-46-75-83-93
	// calcul linéaire sur chaque plage
	if (val<=18) {i_altirad = val * 1.09} 
	if (val>18) {i_altirad = 20 + (val-18) * 1.074 }
	if (val>46) {i_altirad = 50 + (val-46) * 3.436 }
	if (val>75) {i_altirad = 150 + (val-75) * 6.337 }
	if (val>83) {i_altirad = 200 + (val-83) * 10.01 }
	if (val>93) {i_altirad = 300 + (val-93) * 7.451 }
	
	return i_altirad
	
}


// Rotation des flèches et rosace du HSI (Cap,WayPoint,Route)
function Rotate_HSI(cap,way,route,tgt){
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

	$("#AN_TgT").css({
		'-moz-transform':'rotate('+(a_origine+a_gain*tgt)+'deg)',
		'-webkit-transform':'rotate('+(a_origine+a_gain*tgt)+'deg)',
		'-ms-transform':'rotate('+(a_origine+a_gain*tgt)+'deg)',
	})

}

function NavMns(){
	
	// Fonction Toggle de l'Affichage Variometre m/s ou m/mn
	if (KaTZPit_data["Vari_unit"] == 1) {KaTZPit_data["Vari_unit"] = 60	}

	else {KaTZPit_data["Vari_unit"] = 1}
	
}

function Chrono(){
	// Mise à zero du Chrono :  time départ = time mission actuel
	KaTZPit_data["Chrono"] = KaTZPit_data["TimeMis"]
}



	
