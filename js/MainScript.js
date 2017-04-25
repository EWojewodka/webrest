/**
 * Created by jemiol on 23.04.17.
 */
$(document).ready(function() {
    $("i").not(":first").hover(function() {
       $(this).animate({color: "#f0ad1f"}, "normal")
    }, function() {
        $(this).animate({color: "black"}, "fast")
    });
    $("a").hover(function() {
        $(this).animate({color: "#f0ad1f", opacity: 0.5}, "normal")
    }, function() {
        $(this).animate({color: "black", opacity: 1}, "fast")
    });
    $("ul.nav-button li a").hover(function() {
        $(this).animate({color: "black", opacity: 1}, "normal")
    }, function() {
        $(this).animate({color: "black", opacity: 1}, "fast")
    });
    $("a#building").click(function() {
        $("body").effect("shake", {direction: "left"}, "fast");
    })
})