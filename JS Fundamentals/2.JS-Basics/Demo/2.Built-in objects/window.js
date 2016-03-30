function openNewWindow() {
    var newWindow = window.open("", "sampleWindow",
        "menubar=yes, status=yes, resizable=yes");

    newWindow.document.write(
        "<html><head><title> Sample Title</title>  </head><body><h1>" +
        navigator.userAgent +
        "</h1></body>");

    newWindow.status = "Hello folks";
}

function getColorPart() {
    var value = Math.floor(Math.random() * 256);
    var hex = value.toString(16);

    if (hex.length < 2) {
        hex = "0" + hex;
    }

    return hex;
}

function changeBodyColor() {
    var red = getColorPart();
    var green = getColorPart();
    var blue = getColorPart();
    var color = "#" + red + green + blue;

    document.body.style.backgroundColor = color;
}