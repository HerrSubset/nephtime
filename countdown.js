// set the date we're counting down to
var target_date = new Date("Dec 19, 2015 21:45").getTime();

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById("timer");

// update the tag with id "countdown" every 1 second
setInterval(function () {

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    printTime("days", days);

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    printTime("hours", hours);

    minutes = parseInt(seconds_left / 60);
    printTime("minutes", minutes);

    seconds = parseInt(seconds_left % 60);
    printTime("seconds", seconds);

}, 1000);

function printTime(name, value){
  var element = document.getElementById(name);

  if (value === 1){
    name = name.substring(0, name.length - 1);
  }

  element.innerHTML = value + " " + name;
}
