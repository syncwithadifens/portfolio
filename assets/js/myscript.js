let stars = document.getElementById("stars");
let meteorid = document.getElementById("meteorid");
let astronout = document.getElementById("astronout");
let typed2 = document.getElementById("typed2");
let typed = document.getElementById("typed");
let myName = document.getElementById("myName");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  astronout.style.top = 22 + value * 0.05 + "%";
  typed.style.left = 20 + value * -0.05 + "%";
  typed2.style.left = 15 + value * 0.05 + "%";
  myName.style.marginBottom = value * 2 + "px";
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
