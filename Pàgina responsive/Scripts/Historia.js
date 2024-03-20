function canviarColor(){
    // Declaram tres variables amb el getElementsByClassName 
    let titolPrimer = document.getElementsByClassName('titolDos');
    let titolSegon = document.getElementsByClassName('titolTres');
    // Variable amb class 'titolPrimer' de color vermell
    let text = document.getElementsByClassName('text');
    for (let a=0; a<titolPrimer.length; a++){
        titolPrimer[a].style.color = 'red';
    }
    // Variable amb class 'titolSegon' de color blau
    for (let b=0; b<titolSegon.length; b++){
        titolSegon[b].style.color = 'blue';
    }
    // Variable amb class 'text' de color vermell
    for (let c=0; c<text.length; c++){
        text[c].style.color = 'orange';
    }
}

function tornarColor() {
    // Declaram tres variables amb el getElementsByClassName 
    let titolPrimer = document.getElementsByClassName('titolDos');
    let titolSegon = document.getElementsByClassName('titolTres');
    let text = document.getElementsByClassName('text');
    // Transformar les tres variables en color negre de text
    for (let a=0; a<titolPrimer.length; a++){
        titolPrimer[a].style.color = 'black';
    }
    for (let b=0; b<titolSegon.length; b++){
        titolSegon[b].style.color = 'black';
    }
    for (let c=0; c<text.length; c++){
        text[c].style.color = 'black';
    }
}