$(function(){
    "use strict";
    $("#menu .nav-link").click(function(){
        $("#menu").collapse("hide");
    });
    $(document).scroll(function(){
        $("#menu").collapse("hide");
    });
});