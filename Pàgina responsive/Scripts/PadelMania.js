// Amb aquesta funció feim inviseble o visible el titol i el video
function videoPadel(){
    let titol = document.getElementById('titolDos');
    let video = document.getElementById('video_tamany');
    if (titol.style.display === 'none' && video.style.display === 'none'){
        titol.style.display = 'block';
        video.style.display = 'block'
    }
    else{
        titol.style.display = 'none';
        video.style.display = 'none'
    }
}