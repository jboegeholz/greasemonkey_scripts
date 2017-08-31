// ==UserScript==
// @name        add_calendar_widget
// @namespace   eso
// @description adds an jQuery-UI calendar to the date fields
// @include     <tbd>
// @require https://code.jquery.com/jquery-1.12.4.min.js
// @require https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource customCSS https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
// @version     1
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==
var newCSS = GM_getResourceText ("customCSS");
GM_addStyle (newCSS);
$(document).ready(function(){
    console.log("script works");
    $( 'input[name="von"]' ).datepicker({ firstDay: 1, dateFormat: 'dd.mm.yy' });
    $( 'input[name="bis"]' ).datepicker({ firstDay: 1, dateFormat: 'dd.mm.yy' });    
});
