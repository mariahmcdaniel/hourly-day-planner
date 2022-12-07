// display the current date in the header of the page.
var dateToday = $('#currentDay');
var now = dayjs();
dateToday.text('Today is: ' + now.format('MMM D, YYYY'));

// ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function () {

  //save events to local storage when save button is clicked
  $('.saveBtn').on('click', function () {
    console.log(this);
    var event = $(this).siblings('.description').val();
    var eventTime = $(this).parent().attr('id');
    localStorage.setItem(eventTime, event);
  })

  // chage time-block colors to reflect current time 
  var currentHr = dayjs().hour();
  var timeBlocks = $('.time-block');

  timeBlocks.each(function () {
    var blockHr = parseInt($(this).attr('id'));
    var blockHrKey = ($(this).attr('id'));
    if (blockHr > currentHr) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    } else if (blockHr === currentHr) {
      $(this).removeClass('future');
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');
    }
  })

  // render saved events from local storage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));

  // change header color depending on current time
  var header = $('header');
  if (currentHr < 11) {
    header.removeClass('green');
    header.removeClass('blue');
    header.removeClass('text-white');
    header.addClass('pink');
  } else if (currentHr >= 11 && currentHr < 18) {
    header.removeClass('pink');
    header.removeClass('blue');
    header.removeClass('text-white');
    header.addClass('green');
  } else {
    header.removeClass('green');
    header.removeClass('pink');
    header.addClass('blue');
    header.addClass('text-white');
  }

});

