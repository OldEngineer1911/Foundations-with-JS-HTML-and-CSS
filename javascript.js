function changeColor() {
    var element1 = document.getElementById("canvas7");
    var element2 = document.getElementById("canvas8");
    element1.className = "fuchsiaback";
    element2.className = "orangeback";
}

function changeColorToRed() {
    var element = document.getElementById("canvas7");
    element.style.backgroundColor = "red";
}

function changeColorToBlue() {
    var element = document.getElementById("canvas8");
    element.style.backgroundColor = "blue";

    var context = element.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(10, 10, 60, 60);
    context.fillRect(80, 10, 60, 60);

    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Hello", 15, 45);
}

function clearBlueCanvas() {
    var element = document.getElementById("canvas8");
    var context = element.getContext("2d");

    context.clearRect(0, 0, element.width, element.height);
    element.style.backgroundColor = "blue";
}

function setColorAccordingToColorPicker() {
    var rectangle = document.getElementById("canvasColorpicker");
    var colorinput = document.getElementById("colorPicker");
    var color = colorinput.value;
    rectangle.style.backgroundColor = color;
}