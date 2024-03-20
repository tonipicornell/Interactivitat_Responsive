// Feim visible o invisible els elements amb clase 'text'.
function textDesapareixer(){
    let text = document.getElementsByClassName('text');
    for (let t=0; t<text.length; t++){
        if (text[t].style.display === 'none'){
            text[t].style.display = 'block';
        }
        else{
            text[t].style.display = 'none';
        }
    }
}

// Canviam el color dels titol amb classe titolDos i titolTres
function canviarColor(){
    let titolPrimer = document.getElementsByClassName('titolDos');
    let titolSegon = document.getElementsByClassName('titolTres');
    for (let a=0; a<titolPrimer.length; a++){
        titolPrimer[a].style.color = 'aqua';
    }
    for (let b=0; b<titolSegon.length; b++){
        titolSegon[b].style.color = 'green';
    }
}

// Canviam el color de fons de la pàgina
function canviarFons(){
    let fons = document.getElementById('fons');
    fons.style.backgroundColor = 'grey';
}

// Cridam a les tres funcions
function funcionsCreades(){
    textDesapareixer();
    canviarColor();
    canviarFons();
}