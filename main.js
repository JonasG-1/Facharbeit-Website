$(window).on("load", function () {
    $(".loading-display").fadeOut(700);
});

$(document).ready(function () {

    $(".backtop").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $(".backtop").fadeIn(300);
            } else {
                $(".backtop").fadeOut(300);
            }
        });
    });

    var dminfo = localStorage.getItem("darkmode");
    if (dminfo === null) {
        localStorage.setItem("darkmode", "false");
    } else {
        switch (dminfo) {
            case "false":
                break;
            case "true":
                $(".dlayout").css("background-color", "#3b3b3b");
                $(".dlayout").css("color", "white");
                $("header").css("background-color", "black")
                $("#DMLogo").attr("src", "images/gamingultra-alt2.png")
                $("#welcomeimg").attr("src", "images/gamingultra-alt.png")
                $("#botinfo").css("background-color", "black")
                $("a:not(.nodec)").css("color", "white")
                $("#botinfo a").css("color", "white")
                $(".guimg").attr("src", "images/gamingultra-alt2.png")
                $(".defbutton").toggleClass("defbutton btninverted")
                $(".backbox").css("background-color", "#3b3b3b")
                $(".backbox").css("color", "white")
                $(".artcontainer").css("color", "black")
                $("li.bottable > button").html("Light Mode")
            default:
                break;
        }
    }
});

function darkMode() {
    var dminfo = localStorage.getItem("darkmode");
    switch (dminfo) {
        case "true":
            localStorage.setItem("darkmode", "false");
            break;
        case "false":
            localStorage.setItem("darkmode", "true");
            break;
        default:
            break;
    }
    location.reload();
}

function newpage(name, url, confirm, thirdparty) {
    const confirmMessage = Swal.mixin({
        customClass: {
            confirmButton: "btngreen",
            cancelButton: "btnred"
        },
        buttonsStyling: false
    });

    const downloadMessage = Swal.mixin({
        customClass: {
            confirmButton: "btnblue"
        },
        buttonsStyling: false
    });

    switch (confirm) {
        case "account":
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Du benötigst ein " +
                        name +
                        " Konto, um dieses Spiel zu spielen! Möchtest du fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " + name + " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            window.open(url);
                        }, 1500);
                    }
                });
            break;

        case "redirect":
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Achtung! Du wirst nun zu " +
                        name +
                        " weitergeleitet! Möchtest du fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " + name + " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            window.open(url);
                        }, 1500);
                    }
                });
            break;

        case "thirdparty":
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Du benötigst ein " +
                        thirdparty +
                        " Konto, um das Spiel zu kaufen und ein " +
                        name +
                        " Konto, um es zu spielen. Möchtest du fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " +
                                thirdparty +
                                " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            window.open(url);
                        }, 1500);
                    }
                });
            break;

        case "instant":
            if (name != "none") {
                confirmMessage
                    .fire({
                        icon: "warning",
                        title: "Achtung! Du wirst nun zu " +
                            name +
                            " weitergeleitet! Möchtest du fortfahren?",
                        showCancelButton: true,
                        cancelButtonText: "Abbrechen",
                        confirmButtonText: "Weiter"
                    })
                    .then((result) => {
                        if (result.value) {
                            window.open(url);
                        }
                    });
            } else {
                window.open(url);
            }
            break;

        default:
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Weiterleitung zu: " +
                        name +
                        ". [Fehler]",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Weiterletung zu: " + name + ". [Fehler]",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            window.open(url);
                        }, 1500);
                    }
                });
    }
}

function getTest() {
    var gettest = localStorage.getItem("testprogress");
    var testdest = localStorage.getItem("onpage")
    if (gettest == "completed") {
        Swal.fire({
            icon: "info",
            title: "Testergebnisse",
            text: "Der Test wurde beendet! Testergebnisse anzeigen?",
            confirmButtonText: "Anzeigen",
            cancelButtonText: "Abbrechen",
            showCancelButton: "true"
        }).then((result) => {
            if (result.value) {
                newpage('none', "SelbstTest/" + testdest + ".html", 'instant')
            }
        })
    } else {
        Swal.fire({
            icon: "error",
            title: "Fehler!",
            text: "Der Test wurde noch nicht abgeschlossen oder die Erbegnisse wurden gelöscht! Bitte starte den Test neu!"
        })
    }
}

function thispage(name, url, confirm, thirdparty) {
    const confirmMessage = Swal.mixin({
        customClass: {
            confirmButton: "btngreen",
            cancelButton: "btnred"
        },
        buttonsStyling: false
    });

    const downloadMessage = Swal.mixin({
        customClass: {
            confirmButton: "btnblue"
        },
        buttonsStyling: false
    });

    switch (confirm) {
        case "account":
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Du benötigst ein " +
                        name +
                        " Konto, um dieses Spiel zu spielen! Möchtest du fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " + name + " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            location.href = url;
                        }, 1500);
                    }
                });
            break;

        case "redirect":
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Achtung! Du wirst nun zu " +
                        name +
                        " weitergeleitet! Möchtest du fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " + name + " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            location.href = url;
                        }, 1500);
                    }
                });
            break;

        case "thirdparty":
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Du benötigst ein " +
                        thirdparty +
                        " Konto, um das Spiel zu kaufen und ein " +
                        name +
                        " Konto, um es zu spielen. Möchtest du fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " +
                                thirdparty +
                                " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            location.href = url;
                        }, 1500);
                    }
                });
            break;

        case "instant":
            if (name != "none") {
                confirmMessage
                    .fire({
                        icon: "warning",
                        title: "Achtung! Du wirst nun zu " +
                            name +
                            " weitergeleitet! Möchtest du fortfahren?",
                        showCancelButton: true,
                        cancelButtonText: "Abbrechen",
                        confirmButtonText: "Weiter"
                    })
                    .then((result) => {
                        if (result.value) {
                            location.href = url;;
                        }
                    });
            } else {
                location.href = url;
            }
            break;

        default:
            confirmMessage
                .fire({
                    icon: "warning",
                    title: "Du wirst nun für den Download zu " +
                        name +
                        " weitergeleitet. Fortfahren?",
                    showCancelButton: true,
                    cancelButtonText: "Abbrechen",
                    confirmButtonText: "Weiter"
                })
                .then((result) => {
                    if (result.value) {
                        downloadMessage.fire({
                            icon: "info",
                            title: "Du wirst zu " + name + " weitergeleitet...",
                            showConfirmButton: true,
                            timer: 10000
                        });
                        setTimeout(() => {
                            location.href = url;
                        }, 1500);
                    }
                });
    }
}

function copyThis(ttc) {
    var $copyText = document.createElement('input');
    $("body").append($copyText);
    $copyText.setAttribute("value", ttc);
    $copyText.select();
    document.execCommand("copy");
    $copyText.remove();
    swal.fire({
        icon: "info",
        title: "Der Text wurde in die Zwischenbelage kopiert!",
        showConfirmButton: true,
        timer: 10000
    })
}

function closeTab() {
    close();
}