function iniciUsuari(){
    // Declaram una variable usuari segons el que introduegui el usuari en el formulari
    // Ens sortirà gràcies al getElementById i al .value
    let usuari = document.getElementById('usuari').value;
    // Si el usuari introdueix AntonioPicornellPerdigon tendrà un missatge personalitzat
    if (usuari == 'AntonioPicornellPerdigon') {
        alert("Benvingut Antonio a la teva pàgina Web");
    }
    else{
        // Sino li donarà la benvinguda amb el seu nom d'usuari
        alert("Benvingut a PadelMania " + usuari);
    }
    // Ens redireccionarà cap a la pàgina principal de PadelMania
    window.location.href = "PadelMania.html";
}