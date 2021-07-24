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
    });
});