var customEvent = new CustomEvent("tripleClick");

// Attach Custom Event to DOM
var body = document.getElementsByTagName("body")[0];

body.addEventListener("tripleClick", function () {
    alert("You triggered the custom event 'Triple Click'");
}, false);

var btn = document.getElementById("btn-clickable");

var counter = 0;
btn.addEventListener('click', function () {
    counter++;
    if (counter == 3) {
        // Trigger the custom event when the condition is present
        body.dispatchEvent(customEvent);
        counter = 0;
    }

    setInterval(function () {
        counter = 0
    }, 2000);
}, false);