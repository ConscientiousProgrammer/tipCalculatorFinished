let inputFirst = document.getElementById('billAmount'),
    inputSecond = document.getElementById('tipPercentage'),
    myButton = document.querySelector('button').onclick = firstInput;

function firstInput() {
    let num = Number.parseInt(inputFirst.value);
    var percent = (inputFirst.value / 100 * inputSecond.value) + num;
    if (Number.isInteger(percent) === true) {
        document.getElementById('total').innerHTML = `$${percent}.00`
    } else if (Number.isInteger(percent) === false) {
        document.getElementById('total').innerHTML = `$${percent}`
    }
    return percent;
};

function checkForEnter(e) {
    if (e.keyCode == 13) {
      document.getElementById("button").click();
    }
  }
