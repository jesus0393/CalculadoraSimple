function capturaNumeroUno(){
    let numero1 = Number(document.getElementById("numero1").value);
    return numero1;
}

function capturaNumeroDos(){
    let numero2 = Number(document.getElementById("numero2").value);
    return numero2;
}


function suma(){
    let numero1 = capturaNumeroUno();
    let numero2 = capturaNumeroDos();
    let suma = numero1 + numero2;
    document.getElementById("resultado").innerHTML = `<div class="alert alert-success" id="resultado" role="alert">
          ${suma}              
    </div>`;
}

function resta(){
    let numero1 = capturaNumeroUno();
    let numero2 = capturaNumeroDos();
    let resta = numero1 - numero2;
    document.getElementById("resultado").innerHTML = `<div class="alert alert-success" id="resultado" role="alert">
    ${resta}              
</div>`;
}

function multiplicacion(){
    let numero1 = capturaNumeroUno();
    let numero2 = capturaNumeroDos();
    let multiplicacion = numero1 * numero2;
    document.getElementById("resultado").innerHTML = `<div class="alert alert-success" id="resultado" role="alert">
    ${multiplicacion}              
</div>`;
}

function division(){
    let numero1 = capturaNumeroUno();
    let numero2 = capturaNumeroDos();
    let division = numero1 / numero2;
    document.getElementById("resultado").innerHTML = `<div class="alert alert-success" id="resultado" role="alert">
    ${division}              
</div>`;
}
