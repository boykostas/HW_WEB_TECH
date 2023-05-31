

function app() {
    x = parseInt(document.getElementById("number").value);
    result = x ** 2;
    if (x==0) {
        result = "Введите число отличное от 0!";
    } else {
        result = `Квадрат введенного числа равен: ${result}` 
    }
    document.getElementById("res").innerText = result;
}

