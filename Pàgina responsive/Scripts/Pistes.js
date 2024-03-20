// Feim visible o invisible els paragrafs amb nom de classe text
function textApareixer(){
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