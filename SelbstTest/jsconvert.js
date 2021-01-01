$(window).ready(function () {
    var dminfo = localStorage.getItem("darkmode");
    if (dminfo === null) {
        localStorage.setItem("darkmode", "false");
    } else {
        switch (dminfo) {
            case "false":
                break;
            case "true":
                $("#hintergrund").css("background-color", "#3b3b3b")
                $(".quizbox").css("background-color", "black")
                $(".quizbox").css("color", "white")
                $(".quizbox").css("box-shadow", "0px 0px 15px 0 white")
                $("#startlogo").attr("src", "../images/gamingultra-alt2.png")
                $(".smalllogo").attr("src", "../images/gamingultra-alt2.png")
                $(".deftable").css("background-color", "#3b3b3b")
            default:
        }
    }
})