//set the dates we'll use and store them as unix timestamps
var startDate = new Date("Mar 29, 2016 14:20").getTime();
var endDate = new Date("Apr 2, 2016 20:00").getTime();

// update every second
setInterval(function () {
    //get current date as unix timestamp
    var current_date = new Date().getTime();

    if (current_date < startDate){
      printCountDown(current_date, startDate);
    } else if ((current_date > startDate) && (current_date < endDate)) {
      printMessage("Nephtime is right now you sillypants.");
    } else if (current_date > endDate){
      printMessage("Nephtime is over :'(");
    }

}, 1000);



function printMessage(message){
  var element = document.getElementById("message");
  element.innerHTML = message;
}



function printCountDown(currentDate, targetDate){
  //make some variables
  var days, hours, minutes, seconds;
  var seconds_left = (targetDate - currentDate) / 1000;

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
}



function printTime(name, value){
  var element = document.getElementById(name);

  if (value === 1){
    name = name.substring(0, name.length - 1);
  }

  element.innerHTML = value + " " + name;
}
