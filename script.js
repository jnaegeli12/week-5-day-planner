var time8AM = document.getElementById("8");
var time9AM = document.getElementById("9");
var time10AM = document.getElementById("10");
var time11AM = document.getElementById("11");
var time12PM = document.getElementById("12");
var time1PM = document.getElementById("13");
var time2PM = document.getElementById("14");
var time3PM = document.getElementById("15");
var time4PM = document.getElementById("16");
var time5PM = document.getElementById("17");

var inputs = document.getElementsByTagName("input");

var now = moment().format("H");

var hourAttr;

// Display date and time with continuous update on page load. Clear storage at 11PM.
$(window).on("load", function() {
    var update = function() {
        $("#currentDay").text(moment().format('MMMM Do, YYYY, h:mm:ss a'));
    }
    setInterval(update, 1000);
    allStorage();
    relativeTime();
});

// Pull saved values from local Storage and embed them as a data attribute in the input field.
function allStorage() {
    
    var key8 = localStorage.getItem("8");
    time8AM.value = key8;

    var key9 = localStorage.getItem("9");
    time9AM.value = key9;

    var key10 = localStorage.getItem("10");
    time10AM.value = key10;
    
    var key11 = localStorage.getItem("11");
    time11AM.value = key11;

    var key12 = localStorage.getItem("12");
    time12PM.value = key12;

    var key1 = localStorage.getItem("13");
    time1PM.value = key1;

    var key2 = localStorage.getItem("14");
    time2PM.value = key2;

    var key3 = localStorage.getItem("15");
    time3PM.value = key3;

    var key4 = localStorage.getItem("16");
    time4PM.value = key4;

    var key5 = localStorage.getItem("17");
    time5PM.value = key5;
}

// Save the user input for a particular time block in localStorage by time key.
var button = document.getElementsByTagName("button");
button.onclick(save());

function save(timeID) {
    var input = document.getElementById(timeID).value;
    document.getElementById(timeID).setAttribute("value", input);
    $("timeID").attr("value", input);
    localStorage.setItem(timeID, input);
}

// Color-code time blocks based on relative time.
function changeColor(color) {
    hourAttr.style.background = color;
}

function relativeTime() {

    for (let i = 8; i < 18; i++) {
        hourAttr = document.getElementById(i)
        if (parseInt(hourAttr.id) == now) {
            changeColor("white");
        }

        if (parseInt(hourAttr.id) > now) {
            changeColor("#e9ecef");
        }
    
        if (parseInt(hourAttr.id) < now) {
            changeColor("#117687");
        }
    }

}