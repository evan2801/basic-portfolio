var intervalId;

intervalId = setInterval(function () {
    var currentDate = moment().format(`dddd, MMMM Do, YYYY`);
    var currentTime = moment().format('  hh:mm:ss a [EST:]');
    $("#current-date").text(currentDate);
    $("#current-time").text(currentTime);
}, 1000);

console.log(currentDate)