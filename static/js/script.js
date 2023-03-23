function calc() {
    var result = 0
    result = document.getElementById("visor").value
    if (result === "") {
        document.getElementById("visor").value = ""
    }
    else {
        document.getElementById("visor").value = eval(result)
    }
}

function addNumber(value) {
    document.getElementById("visor").value += value
}

function backspace() {
    result = document.getElementById('visor')
    result.value = result.value.slice(0, -1);
}

function clear_c() {
    document.getElementById('visor').value = ''
}