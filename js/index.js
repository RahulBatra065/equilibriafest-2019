$('.fa-instagram').click(function() {
        $(location).attr('href', 'https://instagram.com/equilibria_2019');
    })
    //Date countdown
function getTime() {
    var today = new Date();
    var yearToLive = 2019;
    var currentYear = today.getFullYear();
    var diffToYear = currentYear - yearToLive;
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    var daysToLive = 30;
    var diffToDays = daysToLive - currentDay;
    const monthToLive = 10;
    var diffToMonth = monthToLive - currentMonth;
    var currentHours = today.getHours();
    var hoursToLive = 00;
    var diffToHours = currentHours - hoursToLive;
    var currentMinutes = today.getMinutes();
    var minutesToLive = 60;
    var diffToMinutes = minutesToLive - currentMinutes;
    var currentSeconds = today.getSeconds();
    var secondsToLive = 60;
    var diffToSeconds = secondsToLive - currentSeconds;
    var TimeDifference = diffToYear + ' Years ' + diffToMonth + ' Months ' + diffToDays + ' Days ' + diffToHours + ' Hours ' + diffToMinutes + ' Minutes ' + diffToSeconds + ' Seconds ';
    $(".countdown").text(TimeDifference);
    var t = setTimeout(getTime, 500);
    /*var time = [currentYear, currentMonth, currentDay, currentHours, currentMinutes, currentSeconds];

    $(".current").text('[' + time + ']'); */
    return TimeDifference
    return time
}
getTime();


console.log('All Rights Reserved Equilibria Organisers 2019-20 // rahulbatra.in');