$(window).ready(function () {
    var dminfo = localStorage.getItem("darkmode");
    if (dminfo === null) {
        localStorage.setItem("darkmode", "false");
    } else {
        switch (dminfo) {
            case "false":
                break;
            case "true":
                $("#DMLogoAlt").attr("src", "../images/gamingultra-alt2.png")
                $(".DMguimg").attr("src", "../images/gamingultra-alt2.png")
            default:
        }
    }
})