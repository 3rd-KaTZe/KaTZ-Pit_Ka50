// Panel AutoPilote

function panel_datalink_update(KaTZPit_data){
	
	if (KaTZPit_data["DlinkT1"] ==100) {
			$("#Dlink_T1").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T1").data('internal-id','32501002')}
		else {
			$("#Dlink_T1").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T1").data('internal-id','32501002')}
	
	if (KaTZPit_data["DlinkT2"] ==100) {
			$("#Dlink_T2").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T2").data('internal-id','32501102')}
		else {
			$("#Dlink_T2").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T2").data('internal-id','32501102')}	
	
	if (KaTZPit_data["DlinkT3"] ==100) {
			$("#Dlink_T3").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T3").data('internal-id','32501202')}
		else {
			$("#Dlink_T3").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T3").data('internal-id','32501202')}
	
	if (KaTZPit_data["DlinkT4"] ==100) {
			$("#Dlink_T4").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_T4").data('internal-id','32501302')}
		else {
			$("#Dlink_T4").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_T4").data('internal-id','32501302')}
			
	if (KaTZPit_data["DlinkW1"] ==100) {
			$("#Dlink_W1").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W1").data('internal-id','32500602')}
		else {
			$("#Dlink_W1").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W1").data('internal-id','32500602')}
	
	if (KaTZPit_data["DlinkW2"] ==100) {
			$("#Dlink_W2").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W2").data('internal-id','32500702')}
		else {
			$("#Dlink_W2").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W2").data('internal-id','32500702')}	
	
	if (KaTZPit_data["DlinkW3"] ==100) {
			$("#Dlink_W3").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W3").data('internal-id','32500802')}
		else {
			$("#Dlink_W3").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W3").data('internal-id','32500802')}
	
	if (KaTZPit_data["DlinkW4"] ==100) {
			$("#Dlink_W4").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_W4").data('internal-id','32500902')}
		else {
			$("#Dlink_W4").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_W4").data('internal-id','32500902')}		
	
	if (KaTZPit_data["DlinkAll"] ==100) {
			$("#Dlink_All").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Dlink_All").data('internal-id','32500502')}
		else {
			$("#Dlink_All").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Dlink_All").data('internal-id','32500502')}		

	if (KaTZPit_data["Clear"] ==100) {
			$("#Clear").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Clear").data('internal-id','32500302')}
		else {
			$("#Clear").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Clear").data('internal-id','32500302')}
	
	if (KaTZPit_data["Ingress"] ==100) {
			$("#Ingress").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Ingress").data('internal-id','32500202')}
		else {
			$("#Ingress").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Ingress").data('internal-id','32500202')}		
	
	if (KaTZPit_data["SendMem"] ==100) {
			$("#Send_Mem").attr('src','images/z_Led-Bouton_Vert.gif')
			$("#Send_Mem").data('internal-id','32500102')}
		else {
			$("#Send_Mem").attr('src','images/z_Led-Bouton_Off.gif')
			$("#Send_Mem").data('internal-id','32500102')}	
		
}

	
