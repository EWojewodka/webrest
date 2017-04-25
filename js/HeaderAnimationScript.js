$(document).ready(function () {5
    $(".header #showMoreButton").click(function () {
        $(".header").animate({
            width: "toggle",
            opacity: 0.4,
        }, "normal", function () {
            window.location.href = "/about.html"
        })
    });
    $(".header #showMoreButton").mouseenter(function() {
       $(this).effect("bounce", {times: 1, direction: "right", distance: "5px"}, 300)
    });
    animateIndex();
});

function animateIndex() {
    $(".header #logo-font").animate({
        color: "#B6800C"
    }, 1500);
    $(".header #logo-font").animate({
        color: "#f0ad1f"
    }, 1500), animateIndex()
}

