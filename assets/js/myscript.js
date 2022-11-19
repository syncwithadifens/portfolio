let stars = document.getElementById("stars");
let meteorid = document.getElementById("meteorid");
let rocket = document.getElementById("astronout");
let typed2 = document.getElementById("typed2");
let typed = document.getElementById("typed");
let myName = document.getElementById("myName");
let button = document.getElementById("button");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    rocket.style.bottom = 700 + value + "px";
    typed.style.right = 200 - value + "px";
    typed2.style.right = -300 + value + "px";
    myName.style.marginBottom = value * 1 + "px";
    button.style.marginBottom = value * 1 + "px";
});

$(document).ready(function () {
    $("img").click(function () {
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='" + t + "' class='modal-img'>");
        $("#myModal").modal();
    });

    $("video").click(function () {
        var v = $("video > source");
        var t = v.attr("src");
        $(".modal-body").html(
            "<video class='model-vid' controls><source src='" +
                t +
                "' type='video/mp4'></source></video>"
        );
        $("#myModal").modal();
    });
}); //EOF Document.ready
