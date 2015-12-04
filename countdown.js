// set the date we're counting down to
var target_date = new Date("Dec 18, 2015 16:00").getTime();

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
    document.getElementById("days").innerHTML = days + " days";

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    document.getElementById("hours").innerHTML = hours + " hours";

    minutes = parseInt(seconds_left / 60);
    document.getElementById("minutes").innerHTML = minutes + " minutes";

    seconds = parseInt(seconds_left % 60);
    document.getElementById("seconds").innerHTML = seconds + " seconds";


}, 1000);
