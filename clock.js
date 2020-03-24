var secondDegrees = secondDegreesActual()
var minuteDegrees = minuteDegreesActual()
var hourDegrees = hourDegreesActual()
var secondsHand = document.getElementById('second');
var minutesHand = document.getElementById('minute');
var hoursHand = document.getElementById('hour');

function setClockPositions() {
    secondsHand.style.transform = "rotate(" + secondDegrees + "deg)"
    minutesHand.style.transform = "rotate(" + minuteDegrees + "deg)"
    hoursHand.style.transform = "rotate(" + hourDegrees + "deg)"
}

function secondRotation() {
    secondDegrees += 6
    setClockPositions()
}
function minuteRotation() {
    minuteDegrees += 6
    setClockPositions()
}
function hourRotation() {
    hourDegrees += 30
    setClockPositions()
}
//calculate hand starting point
function secondDegreesActual () {
    var today = new Date();
    currentSeconds = today.getSeconds()
    return currentSeconds * 6
}
function minuteDegreesActual () {
    var today = new Date();
    currentMinutes = today.getMinutes()
    return currentMinutes * 6
}
function hourDegreesActual () {
    var today = new Date();
    currentHours = today.getHours()
    return currentHours * 30
}

setInterval(secondRotation, 1000);
setInterval(minuteRotation, 60000);
setInterval(hourRotation, 3600000);
setClockPositions();