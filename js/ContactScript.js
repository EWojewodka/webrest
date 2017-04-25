/**
 * Created by jemiol on 23.04.17.
 */
$(document).ready(function () {
    $(".container").children().hide();
    $(".container ul#personalInfo").hide();
    $(".container #aboutHeader").show("slide", {direction: "up"}, "normal").effect("bounce", {
        times: 1,
        direction: "up",
        distance: "10px"
    }, "fast");
    $(".container ul#personalInfo").show("fast");

    $("ul.nav-button li").hover(function () {
        $(this).animate({color: "black", backgroundColor: "snow", opacity: 1}, "normal")
    }, function () {
        $(this).animate({color: "black", backgroundColor: "snow", opacity: 0.1}, "fast")
    });
});