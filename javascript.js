function doChange() {
    alert('Clicked button from js file.');
}

function changeColor() {
    var element1 = document.getElementById("div1");
    var element2 = document.getElementById("div2");
    var element3 = document.getElementById("div3");
    var element4 = document.getElementById("div4");
    var element5 = document.getElementById("div5");
    var element6 = document.getElementById("div6");
    element1.className = "green";
    element2.className = "blue";
    element3.className = "red";
    element4.className = "cyan";
    element5.className = "yellow";
    element6.className = "green";
}

function changeTextColor() {
    var element = document.getElementById("changeTextColor");
    element.style = "color:red";
}

function changeButtonText() {
    var element = document.getElementById("changeTextValue");
    element.innerHTML = "This is new text, function is correctly implemented."
}