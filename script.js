//global variables
var saveButton = document.querySelector("#saveBtn")
var textArea = document.querySelector("#inputArea")

var inputInfo = []


var now = moment();

$("time").each(function(i, e) {
    var time = moment($(e).attr("datetime"));

    if(now.diff(time, "days") <= 1) {
        $(e).html("<span>" + time.from(now) + "</span>");
    }
});

$(".saveBtn").on("click", function(event){
    // get nearby values using siblings()
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save in localStorage
    localStorage.setItem(time, value);

})


for (let index = 9; index < 18; index++) {
    
}

$(".time-block").each(function(i,item){

})

$("#currentDay").text(moment().format('MMM Do YYYY, h:mm:ss a'))
$("#currentDay").append(".lead")

saveButton.addEventListener("submit", function(event){
    event.preventDefault();

  var inputText = textArea.value.trim();

  // Return from function early if submitted todoText is blank
  if (inputText === "") {
    return;

    todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
})