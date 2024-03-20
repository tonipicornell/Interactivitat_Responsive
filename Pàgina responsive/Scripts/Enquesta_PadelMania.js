function enquestaPagina(){
    // Declaram variables amb l'us de getElementById i checked perquè es del formulari
    let un = document.getElementById('uno').checked;
    let dos = document.getElementById('dos').checked;
    let tres = document.getElementById('tres').checked;
    let cuatre = document.getElementById('cuatro').checked;
    let cinc = document.getElementById('cinco').checked;
    let sis = document.getElementById('seis').checked;
    let set = document.getElementById('siete').checked;
    let vuit = document.getElementById('ocho').checked;
    let nou = document.getElementById('nueve').checked;
    let deu = document.getElementById('diez').checked;
    // Segons la valoració ens sortirà una alerta i desprès ens redireccinarà cap a la pàgina principal de PadelMania
    if(un || dos || tres || cuatre){
        alert("Intenterem millorar molt més la pàgina web");
        window.location.href = 'PadelMania.html';
    }
    else if(cinc || sis || set){
        alert("Intenterem millorar la pàgina web");
        window.location.href = 'PadelMania.html';
    }
    else if(vuit || nou){
        alert("Gràcies per la seva valoració");
        window.location.href = 'PadelMania.html';
    }
    else if(deu){
        alert("Moltes gràcies per la seva valoració!");
        window.location.href = 'PadelMania.html';
    }
    else{
        // Si no has seleccionat una marca sortirà un alert indicant el motiu
        alert("Per favor marqui qualcuna marca")
    }
}