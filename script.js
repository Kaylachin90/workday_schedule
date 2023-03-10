// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  var saveButtonEl = $(".saveBtn");
  console.log(saveButtonEl);
  const date = new Date();
  console.log(date.getHours());

  // date.textContent = new Date;
  $("#currentDay").text(date);

  for (var i = 9; i < 18; i++) {
    var hourId = "#hour-" + i;
    console.log(hourId);
    $(hourId).children(".description").val(localStorage.getItem(i));

    var currentHour = date.getHours();
    if (currentHour > i) {
      console.log("past");
      $(hourId).addClass("past")
    } else if (currentHour == i) {
      $(hourId).addClass("present")
    }
    else {
      $(hourId).addClass("future")
    }
  }
  saveButtonEl.on("click", function () {
    console.log(this);
    var hourKey = $(this).parent().attr("id").split("-").pop();

    var content = $(this).siblings(".description").val();

    localStorage.setItem(hourKey, content);
  });
});
