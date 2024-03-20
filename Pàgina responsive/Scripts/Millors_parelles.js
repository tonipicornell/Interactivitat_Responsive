function trampaBoto(){
    // Si polses el botó sortirà un alert
    alert("Has fet malament de polsar aquest botó :(");
    // Demanarà que introdueguis el teu nom d'usuari en una finestra emergent
    let nom = prompt("Quin es el teu nom d'usuari?");
    // Si confirmes té redireccinarà cap una pàgina i tens uns missatges personalitzats
    if(window.confirm("Hola " + nom + " estàs segur que vols sortir de la pàgina web?")){
        alert("Adeu " + nom);
        window.location.href = 'https://www.atptour.com/es';
    }
    // Si canceles té redireccinarà cap a una altra pàgina i tens un missatge personalitzat
    else {
        alert("Tornar prest " + nom);
        window.location.href = 'https://www.laliga.com/es-GB';
    }
}