function CmdStack(Cmd){
	//console.log("Mise en Buffer de la commande ..", Cmd)
	Order_List.push(Cmd)
	//console.log("Buffer Size = ", Order_List.length)
	
}

function CmdSend(){
	//console.log("CmdSend, Position des Flags d'entr�e",KaTZPit_data["Ordre1"],KaTZPit_data["Ordre2"],KaTZPit_data["PingBack"])
	//console.log(KaTZPit_data["Ordre1"])
	//console.log(KaTZPit_data["Ordre2"])
	//console.log(KaTZPit_data["PingBack"])
	// Les ordres en cours sont stock� dans l'array Order_List
	//if (KaTZPit_data["Ordre1"]==0 && KaTZPit_data["Ordre2"]==0 && KaTZPit_data["PingBack"]==0) {
		
		// Si la list des ordres en cours est non vide, on envoi l'ordre zero, et on d�cale la list vers le bas
		if (Order_List.length > 0) {
			//console.log("Envoi de la commande ..",Order_List[0])
			var nextorder = Order_List.shift()
			var typeordre = nextorder.substring(0,1)
			//console.log("Type Ordre ..",typeordre)
			// Envoi de l'ordre -------------------------------------------------->>>			
			serverws_send(nextorder)
			
			// Fonction flag desactiv�e avec KaTZ-Link_V3
			// Blockage des flags d'emission pour �viter l'overflow
			//if (typeordre==1){KaTZPit_data["Ordre1"]=1}
			//if (typeordre==2){KaTZPit_data["Ordre2"]=1}
			//if (typeordre>2){KaTZPit_data["PingBack"]=1}
			
			//console.log("CmdSend, Position des Flags de Sortie",KaTZPit_data["Ordre1"],KaTZPit_data["Ordre2"],KaTZPit_data["PingBack"])
						
		}			
}

function DCS_Focus() {
	
	// Commande de Controle de DCS (channel 1 + Valeur)
	var commande_DCS = "7=1"
	
	CmdStack(commande_DCS)
	console.log("Envoi au buffer de la commande ..", commande_DCS);
}


function CmdSioc(Val) {
	
	// Commande de Controle de DCS (channel 1 + Valeur)
	var commande_DCS = "1="+Val
	
	CmdStack(commande_DCS)
	console.log("Envoi au buffer de la commande ..", commande_DCS);
}

function CmdSiocDCS(Element) {

	// Commande de Controle de Sioc (channel 2 + Valeur)
	// Ceci concerne les commande DCS
	// La valeur est un nombre de 8 chiffres TDDBBBVV
	// DD est le Device
	// BBB est le numero du bouton
	// T est le type de bouton (1-Twowayswitch)
	// VV est la valeur renvoy�e (qui sera multipli� dans le .lua
	
	var commande= $("#"+Element).data('internal-id')
	// var ele = document.getElementById(Element)
	// var commande = ele.data('internal-id')
	
		
	var commande_DCS = "2="+ commande
	CmdStack(commande_DCS)
	console.log("Envoi au buffer de la commande ..", commande_DCS);

}


// Fonction de commande des Switches avec un capot
function CmdSiocDCS2(Element) {

	//console.log(Element)
	var commande= $("#"+Element).data('internal-id')
	
	// On r�cup�re la valeur de commande du capot correspondant au switch
	// Le tableau de correspondance est indiqu�e dans la fonction Cmd_Capot()
	var Capot = Cmd_Capot[Element]
	var CapotC = Capot - 1
	//console.log(Capot)
	
	// Une salve de Trois commandes est envoy� � DCS
	// S�quencage effectu� par la fonction CmdStack()
	// Ouverture du Capot
	CmdDCSRaw(Capot)
		
	// Basculement de l'interrupteur
	CmdDCSRaw(commande)
	
	// Fermeture du capot
	CmdDCSRaw(CapotC)
		
}

// Fonction de commande multiple (en rafale de trois) usage possible pour les Switches avec un capot
function CmdSiocDCS3(Cmd1,Cmd2,Cmd3) {

	// Ouverture du Capot
	if (Cmd1>0) {CmdDCSRaw(Cmd1)}
	
	// Basculement de l'interrupteur
	if (Cmd2>0) {CmdDCSRaw(Cmd2)}
	
	// Fermeture du capot
	if (Cmd3>0) {CmdDCSRaw(Cmd3)}

}

// To be modified in the futur with n data table
function CmdSiocDCS4(Cmd1,Cmd2,Cmd3,Cmd4) {

	// Ouverture du Capot
	if (Cmd1>0) {CmdDCSRaw(Cmd1)}
	
	// Basculement de l'interrupteur
	if (Cmd2>0) {CmdDCSRaw(Cmd2)}
	
	// Fermeture du capot
	if (Cmd3>0) {CmdDCSRaw(Cmd3)}
	
	// Fermeture du capot
	if (Cmd4>0) {CmdDCSRaw(Cmd4)}

}

function CmdDCSRaw(Cmd){

var commande_DCS = "2="+ Cmd
	CmdStack(commande_DCS)
	//console.log("Envoi au buffer de la commande ..", commande_DCS);


}

function CmdSiocSpe(Num, Val) {

	// Commande de Controle de Sioc (channel Num + Valeur)
	var commande_DCS = Num +"="+ Val
	CmdStack(commande_DCS)
	//console.log("Envoi au buffer de la commande ..", commande_DCS);

}

function Cmd_Capot_init(){

	// Pour chaque interrupteur, la commande capot est enregistr�e
	console.log("Initialisation des donn�es de switch")
	
	var Cmd_Capot = {
		
			
								
	}
	
	return (Cmd_Capot);

}

function Door(){
	// Si porte cockpit ouverte on ferme, else on ouvre
	if (KaTZPit_data["Cockpit"]==1) {
		CmdDCSRaw('11701501')
		CmdDCSRaw('11701601')}
	else {
		CmdDCSRaw('11701500')
		CmdDCSRaw('11701600')}

}

function Cmd_HMS(increment){
	// On incremente la valeur de HMS rotactor
	var hms = (dataread_posit(KaTZPit_data["Shkval_1"],6) + 5) * 10 + dataread_posit(KaTZPit_data["Shkval_1"],5) + 5
	var valcmd = hms + increment
	
	if (valcmd > 9) { CmdDCSRaw(12300101)}
	else if (valcmd < 1) { CmdDCSRaw(12300100)}
	else { cmd = 42300100 + hms + increment ; CmdDCSRaw(cmd) }
}

function Cmd_Shkval_Brt(increment){
	// On incremente la valeur de HMS rotactor
	var brt = (dataread_posit(KaTZPit_data["Shkval_1"],4) + 5) * 10 + dataread_posit(KaTZPit_data["Shkval_1"],3) + 5
	var valcmd = brt + increment
	
	if (valcmd > 9) { CmdDCSRaw(10800201)}
	else if (valcmd < 1) { CmdDCSRaw(10800200)}
	else { cmd = 40800200 + brt + increment ; CmdDCSRaw(cmd) }
}

function Cmd_Shkval_Cont(increment){
	// On incremente la valeur de HMS rotactor
	var cont = (dataread_posit(KaTZPit_data["Shkval_1"],2) + 5) * 10 + dataread_posit(KaTZPit_data["Shkval_1"],1) + 5
	var valcmd = cont + increment
	
	if (valcmd > 9) { CmdDCSRaw(10800301)}
	else if (valcmd < 1) { CmdDCSRaw(10800300)}
	else { cmd = 40800300 + cont + increment ; CmdDCSRaw(cmd) }
}