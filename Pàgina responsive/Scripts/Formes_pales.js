function canviarText(){
    // Declaram una variable text amb getElementsByClassName i agafam les classes que tengin el tipus text
    let text = document.getElementsByClassName('text');
    // Utilitzam un bucle for per cada paragraf que es pugui veure
    for (let p = 0; p < text.length; p++) {
        if (text[p].style.display === 'none' || text[p].style.display === ''){
            text[p].style.display = 'block';
        }
        else{
            text[p].style.display = 'none';
        }
    }
}