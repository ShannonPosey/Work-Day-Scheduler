// display the current date and time
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// console.log(currentDay);
$("#currentDay").html(currentDay);

$(document).ready(function() {
    // assign click listener to saveBtn during user input
    $(".saveBtn").on("click", function() {
        // console.log("working");
        var text = $(this).siblings(".description").val();
        // console.log(text);
        var time = $(this).parent().attr("#id");
        // console.log(time);
        
        // save items to locate storage
        localStorage.setItem(time, text);
    });

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    var schedulerTracker = function() {
        // console.log(schedulerTracker);
        
        // get the current hour block
        var scheduleTime = moment().hour();
        // console.log(scheduleTime);

        $(".time-block").each(function() {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < scheduleTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (timeBlock === scheduleTime) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else{
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
        });

        
    };
    schedulerTracker();
});