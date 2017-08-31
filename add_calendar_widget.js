// ==UserScript==
// @name        add_calendar_widget
// @namespace   eso
// @description adds an jqueryui calendar to the date fields
// @include     https://adera.esolutions.de/nutzungEdit.do*
// @require https://code.jquery.com/jquery-1.12.4.min.js
// @require https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @resource customCSS https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
// @resource IconSet1 https://code.jquery.com/ui/1.12.1/themes/base/images/ui-icons_444444_256x240.png
// @resource IconSet2 https://code.jquery.com/ui/1.12.1/themes/base/images/ui-icons_555555_256x240.png
// @version     1
// @grant       GM_addStyle
// @grant       GM_getResourceText
// @grant       GM_getResourceURL


// ==/UserScript==
var iconSet1    = GM_getResourceURL ("IconSet1");
var iconSet2    = GM_getResourceURL ("IconSet2");

var newCSS = GM_getResourceText ("customCSS");
newCSS     = newCSS.replace (/url\(images\/ui\-bg_.*00\.png\)/g, "");
newCSS     = newCSS.replace (/images\/ui-icons_444444_256x240\.png/g, iconSet1);
newCSS     = newCSS.replace (/images\/ui-icons_555555_256x240\.png/g, iconSet2);
GM_addStyle (newCSS);

$(document).ready(function(){
    console.log("script works");
    $( 'input[name="von"]' ).datepicker({ firstDay: 1, dateFormat: 'dd.mm.yy' });
    $( 'input[name="bis"]' ).datepicker({ firstDay: 1, dateFormat: 'dd.mm.yy' });
});
