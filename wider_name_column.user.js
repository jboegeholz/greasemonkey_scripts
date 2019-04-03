// ==UserScript==
// @name        wider_naColumnmn
// @namespace   eso
// @description extends the name tabel column that you can read the full
// @include     http://*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==
$(document).ready(function () {
    setTimeout(function () {
        widerColumn()
    }, 2000);

    $("#ctl00_C1_ctl00_TitleCtrl").append('<br/><button id="myButton" type="button">Wider Column</button>');
    $("#myButton").click(widerColumn);

    function widerColumn() {
        var tableHeaderName = $("th[title='Name']");
        tableHeaderName.css('width', '100%');
    }
});
