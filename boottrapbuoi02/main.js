$(document).ready(() => {
    $("#btn").click(() => {
        $(".table").fadeToggle();
    });
});
$(document).ready(() => {
    $(".close").click(() => {
        $("#btn1").fadeOut();
    });
})
$(document).ready(() => {
    $("#btn2").click(() => {
        $("#btn1").fadeIn();
    });
})