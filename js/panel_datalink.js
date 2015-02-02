// Panel Datalink

function panel_datalink_update(KaTZPit_data){
	
	if (dataread_posit(KaTZPit_data["DlinkL1"],4) ==1) {
			$("#Dlink_T1").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T1").data('internal-id','52501001')}
		else {
			$("#Dlink_T1").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T1").data('internal-id','52501001')}
	
	if (dataread_posit(KaTZPit_data["DlinkL1"],3) ==1) {
			$("#Dlink_T2").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T2").data('internal-id','52501101')}
		else {
			$("#Dlink_T2").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T2").data('internal-id','52501101')}	
	
	if (dataread_posit(KaTZPit_data["DlinkL1"],2) ==1) {
			$("#Dlink_T3").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T3").data('internal-id','52501201')}
		else {
			$("#Dlink_T3").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T3").data('internal-id','52501201')}
	
	if (dataread_posit(KaTZPit_data["DlinkL1"],1) ==1) {
			$("#Dlink_T4").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T4").data('internal-id','52501301')}
		else {
			$("#Dlink_T4").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T4").data('internal-id','52501301')}
			
	if (dataread_posit(KaTZPit_data["DlinkL2"],5) ==1) {
			$("#Dlink_W1").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W1").data('internal-id','52500601')}
		else {
			$("#Dlink_W1").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W1").data('internal-id','52500601')}
	
	if (dataread_posit(KaTZPit_data["DlinkL2"],4) ==1) {
			$("#Dlink_W2").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W2").data('internal-id','52500701')}
		else {
			$("#Dlink_W2").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W2").data('internal-id','52500701')}	
	
	if (dataread_posit(KaTZPit_data["DlinkL2"],3) ==1) {
			$("#Dlink_W3").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W3").data('internal-id','52500801')}
		else {
			$("#Dlink_W3").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W3").data('internal-id','52500801')}
	
	if (dataread_posit(KaTZPit_data["DlinkL2"],2) ==1) {
			$("#Dlink_W4").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W4").data('internal-id','52500901')}
		else {
			$("#Dlink_W4").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W4").data('internal-id','52500901')}		
	
	if (dataread_posit(KaTZPit_data["DlinkL2"],1) ==1) {
			$("#Dlink_All").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_All").data('internal-id','52500501')}
		else {
			$("#Dlink_All").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_All").data('internal-id','52500501')}		

	if (dataread_posit(KaTZPit_data["DlinkL3"],3)==1) {
			$("#Clear").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Clear").data('internal-id','52500301')}
		else {
			$("#Clear").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Clear").data('internal-id','52500301')}
	
	if (dataread_posit(KaTZPit_data["DlinkL3"],2)==1) {
			$("#Ingress").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Ingress").data('internal-id','52500201')}
		else {
			$("#Ingress").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Ingress").data('internal-id','52500201')}		
	
	if (dataread_posit(KaTZPit_data["DlinkL3"],1)==1) {
			$("#Send_Mem").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Send_Mem").data('internal-id','52500101')}
		else {
			$("#Send_Mem").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Send_Mem").data('internal-id','52500101')}	
		
}

	
