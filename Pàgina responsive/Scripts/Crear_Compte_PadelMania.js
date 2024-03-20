function crearCompte(){
    // declaram variables i utilitzam el getElementByID
    // com es un formulari: els textos els posam .value y els radios .checked.
    let nom = document.getElementById('nom').value;
    let usuari = document.getElementById('usuari').value;
    let masculi = document.getElementById('masculi').checked;
    let dona = document.getElementById('dona').checked;
    let altres = document.getElementById('altres').checked;

    // Si el nom personal y el d'usuari es el mateix surt una alerta
    if (nom == usuari){
        alert("Per motius de seguretat no pots posar el mateix nom i contrasenya");
    }

    // Per cada gènere, té un missatge personalitzat o no
    else{
        if (masculi){
            // Si confirmam ens redirecciona cap a la pàgina principal de PadelMania
            if(window.confirm("Benvingut a la pàgina web, estas segur que vols accedir a la pàgina web?")){
                window.location.href = 'PadelMania.html';
            }
            else{
                // Si no ens surt un alert
                alert("No passa res, tenim temps de visitar la pàgina un altre dia :)");
            }
        }
        else if (dona){
            // Si confirmam ens redirecciona cap a la pàgina principal de PadelMania
            if(window.confirm("Benvinguda a la pàgina web de PadelMania, estas segura que vols accedir a la pàgina web?")){
                window.location.href = 'PadelMania.html';
            }
            else {
                // Si no ens surt un alert
                alert("No passa res, tenim temps de visitar la pàgina un altre dia :)");
            }
        }
        else if (altres){
            // Ens redirreciona cap a la pàgina de PadelMania
            window.location.href = 'PadelMania.html';
        }
        else {
            // Si no ens surt un alert
            alert("No has seleccionat cap gènere, per favor selecciona un");
        }
    }
}