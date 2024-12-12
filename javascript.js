function valorCampo(value) {
    document.getElementById("result").value += value;
}

function calcular() {
    const resultado = document.getElementById("result");
    try {
        resultado.value = eval(resultado.value);
    } catch {
        resultado.value = "Error";
    }
}

function limpiarResultado() {
    document.getElementById("result").value = "";
}

function limpiarCosas() {
    document.getElementById("result").value = "";
}

function limpiarMasCosas() {
    document.getElementById("result").value = "";
}