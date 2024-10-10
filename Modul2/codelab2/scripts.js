function calculateSum() {
    var num1 = +document.getElementById('number1').value;
    var num2 = +document.getElementById('number2').value;
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById('result').innerHTML = "Hasil: " + sum;
    } else {
        document.getElementById('result').innerHTML = "Masukkan angka yang valid.";
    }
}

function resetFields() {
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').innerHTML = "Hasil: ";
}
