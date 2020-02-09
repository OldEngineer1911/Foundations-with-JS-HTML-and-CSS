function changeColor() {
    const element1 = document.getElementById("canvas7");
    const element2 = document.getElementById("canvas8");
    element1.className = "fuchsiaback";
    element2.className = "orangeback";
}

function changeColorToRed() {
    var element = document.getElementById("canvas7");
    element.style.backgroundColor = "red";
}

function changeColorToBlue() {
    const element = document.getElementById("canvas8");
    element.style.backgroundColor = "blue";

    const context = element.getContext("2d");
    context.fillStyle = "yellow";
    context.fillRect(10, 10, 60, 60);
    context.fillRect(80, 10, 60, 60);

    context.fillStyle = "black";
    context.font = "20px Arial";
    context.fillText("Hello", 15, 45);
}

function clearBlueCanvas() {
    const element = document.getElementById("canvas8");
    const context = element.getContext("2d");

    context.clearRect(0, 0, element.width, element.height);
    element.style.backgroundColor = "blue";
}

function setColorAccordingToColorPicker() {
    const rectangle = document.getElementById("canvasColorpicker");
    const colorInput = document.getElementById("colorPicker");
    rectangle.style.backgroundColor = colorInput.value;
}