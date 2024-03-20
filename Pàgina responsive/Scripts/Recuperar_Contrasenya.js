function recuperarContrasenya(){
    let correuElectronic = document.getElementById('email').value;
    let preguntaSeguretat = document.getElementById('pregunta_seguretat').value;
    let contrasenya = document.getElementById('contrasenya').value;
    // Si no poses el email et sortirà un missatge
    if (!correuElectronic){
        alert("Per favor, introdueix un correu electrònic per poder-li enviar el correu per canviar la contrasenya");
    }
    // Si no poses la pregunta de seguretat et sortirà un missatge
    else if(!preguntaSeguretat){
        alert("No pots canviar la contrasenya, perquè no has possat la resposta a la pregunta de seguretat. Per favor, tornar-ho a intentar");
    }
    // Si no poses la contrasenya et sortirà un missatge
    else if(!contrasenya){
        alert("Introdueix la teva contrasenya nova");
    }
    // Si no poses el email i la pregunta de seguretat et sortirà un missatge
    else if(!correuElectronic && !preguntaSeguretat){
        alert("Introdueix un correu electrònic i la teva resposta a la pregunta de seguretat");
    }
    // Si no poses el email i la contrasenya et sortirà un missatge
    else if(!correuElectronic && !contrasenya){
        alert("Introdueix un correu electrònic i la teva nova contrasenya");
    }
    // Si no poses la pregunta de seguretat i la contrasenya et sortirà un missatge
    else if(!preguntaSeguretat && !contrasenya){
        alert("Introdueix la teva resposta a la pregunta de seguretat i una contrasenya nova");
    }
    // Si no poses res et sortirà un missatge
    else if (!correuElectronic && !preguntaSeguretat && !contrasenya){
        alert("No has introduit cap informació.");
    }
    // Si has posat tot et farà el següent:
    else{
        // Et sortirà un alert avisant que has canviat la contrasenya
        alert("Has canviat la teva contrasenya amb èxit.");
        // Si acceptes et redireccionarà cap a la pàgina de PadelMania
        if(window.confirm("Vols accedir a la pàgina de PadelMania?")){
            window.location.href = 'PadelMania.html'
        }
        // Si no acceptes et sortirà un altre alert diferent
        else{
            alert("No passa res, tenim temps de visitar la pàgina un altre dia :)");
        }
    }
}