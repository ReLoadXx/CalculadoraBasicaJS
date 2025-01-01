let input=""

function appNumero(num) {
    input += num;
    document.getElementById("display").value = input
}

function appOperador(operador) {
    input += "" + operador + "";
    document.getElementById("display").value = operador
}

function calcular() {
    try {
        let resultado = eval(input);
        document.getElementById("display").value= resultado;
        input = resultado;
        
    } catch {
        document.getElementById("display").value = "Error";
        input = "";
    }
}

function reset() {
    document.getElementById("display").value = "0";
    input = "";
}