// using moment to get the current day and display time at the top of page 
var day = moment().format("dddd, MMMM Do");
$("#currentDay").text(day);

//on click of the save button
$(".saveButton9").on("click", function(){

    var timeblockNine = $("#timeblock-nine"); 
    var text = $("#nineText").val(); 
    console.log(text);
    localStorage.setItem("timeblockNine",text);

})
    //targeting the text value and storing it 


$("#nineText").val(localStorage.getItem("timeblockNine"));
