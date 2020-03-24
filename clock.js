var secondDegrees = 0
var minuteDegrees = 0
var hourDegrees = 0

function secondRotation() {
    secondDegrees += 6
    secondsHand.style.transform = "rotate(" + secondDegrees + "deg)"
}

function minuteRotation() {
    minuteDegrees += 6
    minutesHand.style.transform = "rotate(" + minuteDegrees + "deg)"
}

function hourRotation() {
    hourDegrees += 30
    hourHand.style.transform = "rotate(" + minuteDegrees + "deg)"
}

var secondsHand = document.getElementById('second')
var minutesHand = document.getElementById('minute')
var hourHand = document.getElementById('hour')
setInterval(secondRotation, 1000);
setInterval(minuteRotation, 60000);
setInverval(hourRotation, 3600000);


// console.log(secondDegrees(60))

