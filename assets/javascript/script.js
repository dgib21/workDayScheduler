// using moment to get the current day and display time at the top of page 
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

//on click of the 9 am save button
$(".saveButton9").on("click", function(){

    var timeblockNine = $("#timeblock-nine"); 
    var text = $("#nineText").val(); 
    console.log(text);
    localStorage.setItem("timeblockNine",text);

})
// storing it in local storage 
$("#nineText").val(localStorage.getItem("timeblockNine"));

//on click of the 10 am save button
$(".saveButton10").on("click", function(){

    var timeblockTen = $("#timeblock-ten"); 
    var text1 = $("#tenText").val(); 
    console.log(text1);
    localStorage.setItem("timeblockTen",text1);

})

$("#tenText").val(localStorage.getItem("timeblockTen"));

//on click of the 11 am save button
$(".saveButton11").on("click", function(){

    var timeblockEleven = $("#timeblock-Eleven"); 
    var text2 = $("#elevenText").val(); 
    console.log(text2);
    localStorage.setItem("timeblockEleven",text2);

})

$("#elevenText").val(localStorage.getItem("timeblockEleven"));

//on click of the 12 PM button 
$(".saveButton12").on("click", function(){

    var timeblockTwelve = $("#timeblock-Twelve"); 
    var text3 = $("#twelveText").val(); 
    console.log(text3);
    localStorage.setItem("timeblockTwelve",text3);

})

$("#twelveText").val(localStorage.getItem("timeblockTwelve"));

//on click of the 1 PM Button 
$(".saveButton13").on("click", function(){

    var timeblockThirteen = $("#timeblock-Thirteen"); 
    var text4 = $("#thirteenText").val(); 
    console.log(text4);
    localStorage.setItem("timeblockThirteen",text4);

})

$("#thirteenText").val(localStorage.getItem("timeblockThirteen"));

//on click of the 2 PM Button 
$(".saveButton14").on("click", function(){

    var timeblockFourteen = $("#timeblock-Fourteen"); 
    var text5 = $("#fourteenText").val(); 
    console.log(text5);
    localStorage.setItem("timeblockFourteen",text5);

})

$("#fourteenText").val(localStorage.getItem("timeblockFourteen"));

// on click of the 3 PM Button 
$(".saveButton15").on("click", function(){

    var timeblockFifteen = $("#timeblock-Fifteen"); 
    var text6 = $("#fifteenText").val(); 
    console.log(text6);
    localStorage.setItem("timeblockFifteen",text6);

})

$("#fifteenText").val(localStorage.getItem("timeblockFifteen"));

// on click of the 4 PM Button 
$(".saveButton16").on("click", function(){

    var timeblockSixteen = $("#timeblock-Sixteen"); 
    var text7 = $("#sixteenText").val(); 
    console.log(text7);
    localStorage.setItem("timeblockSixteen",text7);

})

$("#sixteenText").val(localStorage.getItem("timeblockSixteen"));

// on click of the 5 PM Button 
$(".saveButton17").on("click", function(){

    var timeblockSeventeen = $("#timeblock-Seventeen"); 
    var text8 = $("#seventeenText").val(); 
    console.log(text8);
    localStorage.setItem("timeblockSeventeen",text8);

})

$("#seventeenText").val(localStorage.getItem("timeblockSeventeen"));

var topOfHour = moment().startOf('hour');
console.log(topOfHour)
var tblock = document.querySelectorAll(".row")
console.log(tblock); 

//var colorNineTextArea = document.getElementById("timeblock-nine").style.color = "#ff0000";

//colorNineTextArea.addClass("past"); 
