$(document).ready(function () {
    $(".container").children().not(".contact").hide();
    $("#advantagesList ul").children().hide();
    $(".container #aboutHeader").show("slide", {direction: "up"}, "normal");
    $(".container #aboutContent").show("slide", {direction: "right"}, "slow");
    $(".container #lookingForJob").show("slide", "slow");
    $("#advantagesList ul li").slideDown(100).effect("bounce");

    $("ul.nav-button li").hover(function () {
        $(this).animate({color: "black", backgroundColor: "snow", opacity: 1}, "normal")
    }, function () {
        $(this).animate({color: "black", backgroundColor: "snow", opacity: 0.1}, "fast")
    });

    $(".container .contact").click(function () {
        $(".container").hide("normal");
        $("ul.nav-button li").fadeOut("slow");
        $("#advantagesList").fadeOut("slow", function () {
            window.location.href = "/contact.html";
        });
    })
})


