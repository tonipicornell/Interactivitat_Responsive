// Feim visible o invisible les imatges de tres pàgines
function imatgeApareixer(){
    let imatge = document.getElementsByClassName('imagen_pala');
    for (let i=0; i<imatge.length; i++){
        let foto = imatge[i]
        if(foto.style.display === 'none'){
            foto.style.display = 'block';
        }
        else {
            foto.style.display = 'none'
        }
    }
}