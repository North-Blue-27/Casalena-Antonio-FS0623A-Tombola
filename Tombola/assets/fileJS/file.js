
function estraiNumero() {
    
    let numeroEstratto = Math.floor(Math.random() * 76) + 1;
    console.log(numeroEstratto)

    let cellaCorrispondente = document.getElementById('cellaNum' + numeroEstratto);
    cellaCorrispondente.classList.add('evidenziato');
}

