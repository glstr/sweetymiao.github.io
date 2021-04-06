$(document).ready(function () {
    console.log("hide me")
    $("button").click(function () {
        console.log("hide me")
        $("p").hide();
    });

    $("a").click(function (event) {
        alert("Thanks for visiting!");
    });
});