// Feim visible o invisible les imatges
function imatgeParelles(){
    let imatge = document.getElementsByClassName('imagen_parelles');
    for (let i=0;  i<imatge.length; i++){
        let imatgeFoto = imatge[i];

        if(imatgeFoto.style.display === 'none'){
            imatgeFoto.style.display = 'block';
        }
        else{
            imatgeFoto.style.display = 'none';
        }
    }
}

// Canviam el color de text del titols
function canviarColor(){
    let titolPrimer = document.getElementsByClassName('titolDos');
    let titolSegon = document.getElementsByClassName('titolTres');
    for (let a=0; a<titolPrimer.length; a++){
        titolPrimer[a].style.color = 'aqua';
    }
    for (let b=0; b<titolSegon.length; b++){
        titolSegon[b].style.color = 'yellow';
    }
}

// Canviam el color de fons de la pàgina
function canviarFons(){
    let fons = document.getElementById('fons');
    fons.style.backgroundColor = 'green';
}

// Cridam a les tres funcions
function cridadaFuncions(){
    imatgeParelles();
    canviarColor();
    canviarFons();
}