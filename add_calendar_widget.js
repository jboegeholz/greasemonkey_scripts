// ==UserScript==
// @name        add_calendar_widget
// @namespace   creatronix
// @description adds an jQuery-UI calendar to the date fields
// @include     <your site here>
// @require https://code.jquery.com/jquery-1.12.4.min.js
// @require https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @version     2

$(document).ready(function(){
  console.log("script works");
  $( 'input[name="von"]' ).datepicker({ firstDay: 1, dateFormat: 'dd.mm.yy' });
  $( 'input[name="bis"]' ).datepicker({ firstDay: 1, dateFormat: 'dd.mm.yy' });
  $('#i-datepicker-div').css('background-color', '');
  $("#ui-datepicker-div").css({'background-color':'white'});
});
