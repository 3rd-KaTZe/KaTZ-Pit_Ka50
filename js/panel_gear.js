// Panel element

function panel_gear_update(KaTZPit_data){

	// Voyants de trains, méthode remplacement d'image
	// Stockage de l'Internal ID
	
	if (KaTZPit_data["TrainAvUp"] ==1) {
		$("#Train_Av").attr("src","images/z_Led-Rouge.gif")
		$("#Train_Av").data('internal-id','13400101')
	}
	
	else {
		$("#Train_Av").attr("src","images/z_Led-Verte.gif")
		$("#Train_Av").data('internal-id','13400100')
	}

}
	

	
