// Mode Light & Dark 

/* $("#flexSwitchCheckChecked").click(function (e) {

    let bodyBackgrounColor = $("body").css("background-Color")
    let text = $("#flexSwitchCheckCheckedlabel").text()
    let textLight = "Switch To Light"
    let textDark = "Switch To Dark"

    if (bodyBackgrounColor === "rgb(255, 255, 255)") {
        $("#flexSwitchCheckCheckedlabel").text(textLight)
        $("body").css({ "background-color": "rgb(19, 19, 20)" ,"color": "rgb(255, 255, 255)"})
        $("#moonIcon").attr("class","fa-solid fa-moon d-none");
        $("#sunIcon").attr("class"," fa-regular fa-sun ");
    }
    else {
        $("#flexSwitchCheckCheckedlabel").text(textDark)
        $("body").css({ "background-color": "rgb(255, 255, 255)" ,"color": "rgb(19, 19, 20)"})
        $("#moonIcon").attr("class","fa-regular fa-sun d-none ");
        $("#sunIcon").attr("class"," fa-solid fa-moon ");
    }

}); */



var countDownDate = new Date("Jul 12, 2024 12:29:25").getTime();
var counterDown = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#days").text(`${days} D`);
    $("#hours").text(`${hours} h`);
    $("#minutes").text(`${minutes} m`);
    $("#seconds").text(`${seconds} s`);

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(counterDown);
        document.getElementById("demo").innerHTML = "TIME EXPIRED";
    }
}, 1000);


$(".open").click(function (e) {
    $(".open").css({ "left": 280 })
    $(".sliderbar-menu").css("display", "inline")
    $(".sliderbar-menu").animate({ width: 280 }, 500)


});


$(".close-icon").click(function (e) {
    $(".open").css({ "left": 0 })
    $(".sliderbar-menu").animate({ width: 0 }, 500, () => {
        $(".sliderbar-menu").css("display", "none")
    })



});




$(".singer1-content").slideUp(.5)
$(".singer2-content").slideUp(.5)
$(".singer3-content").slideUp(.5)
$(".singer4-content").slideUp(.5)



$(".singer1-header").click(function (e) {

    let singer1Height = $(".singer1").outerHeight(true);
    let singer1Contentheight = $(".singer1-content").outerHeight(true);
    let singer1hHeaderheight = $(".singer1-header").outerHeight(true);


    $(".singer2-content").slideUp(300, () => {
        $(".singer2-content").animate({ height: 0 }, 300)
    })
    $(".singer3-content").slideUp(300, () => {
        $(".singer3-content").animate({ height: 0 }, 300)
    })
    $(".singer4-content").slideUp(300, () => {
        $(".singer4-content").animate({ height: 0 }, 300)
    })



    if (singer1Height != singer1hHeaderheight) {
        $(".singer1-content").slideUp(300, () => {
            $(".singer1-content").animate({ height: 0 }, 300)
        })
    }
    else {
       
        $(".singer1-content").slideDown(300, () => {
            $(".singer1-content").animate({ height: 300 }, 300)
        })

    }

});

$(".singer2-header").click(function (e) {
    let singer2Height = $(".singer2").outerHeight(true);
    let singer2Contentheight = $(".singer2-content").outerHeight(true);
    let singer2hHeaderheight = $(".singer2-header").outerHeight(true);

    $(".singer1-content").slideUp(300, () => {
        $(".singer1-content").animate({ height: 0 }, 300)
    })
    $(".singer3-content").slideUp(300, () => {
        $(".singer3-content").animate({ height: 0 }, 300)
    })
    $(".singer4-content").slideUp(300, () => {
        $(".singer4-content").animate({ height: 0 }, 300)
    })



    if (singer2Height != singer2hHeaderheight) {
        $(".singer2-content").slideUp(300, () => {
            $(".singer2-content").animate({ height: 0 }, 300)
        })
    }
    else {
        $(".singer2-content").slideDown(300, () => {
            $(".singer2-content").animate({ height: 300 }, 300)
        })

    }

});

$(".singer3-header").click(function (e) {

    let singer3Height = $(".singer3").outerHeight(true);
    let singer3Contentheight = $(".singer3-content").outerHeight(true);
    let singer3hHeaderheight = $(".singer3-header").outerHeight(true);
    $(".singer1-content").slideUp(300, () => {
        $(".singer1-content").animate({ height: 0 }, 300)
    })
    $(".singer2-content").slideUp(300, () => {
        $(".singer2-content").animate({ height: 0 }, 300)
    })
    $(".singer4-content").slideUp(300, () => {
        $(".singer4-content").animate({ height: 0 }, 300)
    })



    if (singer3Height != singer3hHeaderheight) {
        $(".singer3-content").slideUp(300, () => {
            $(".singer3-content").animate({ height: 0 }, 300)
        })
    }
    else {
        $(".singer3-content").slideDown(300, () => {
            $(".singer3-content").animate({ height: 300 }, 300)
        })

    }

});

$(".singer4-header").click(function (e) {
    
    let singer4Height = $(".singer4").outerHeight(true);
    let singer4Contentheight = $(".singer4-content").outerHeight(true);
    let singer4hHeaderheight = $(".singer4-header").outerHeight(true);
    $(".singer1-content").slideUp(300, () => {
        $(".singer1-content").animate({ height: 0 }, 300)
    })
    $(".singer2-content").slideUp(300, () => {
        $(".singer2-content").animate({ height: 0 }, 300)
    })
    $(".singer3-content").slideUp(300, () => {
        $(".singer3-content").animate({ height: 0 }, 300)
    })



    if (singer4Height != singer4hHeaderheight) {
        $(".singer4-content").slideUp(300, () => {
            $(".singer4-content").animate({ height: 0 }, 300)
        })
    }
    else {
        $(".singer4-content").slideDown(300, () => {
            $(".singer4-content").animate({ height: 360 }, 300)
        })

    }

});





// textarea check length

$("#textarea").keyup(function (e) {
    let val = Array.from($("#textarea").val()).length;

    if (val > 100) {
        $("#btnForm").addClass("disabled")
        $("#btnForm").css("background-color", "#E68285")

    } else {
        $("#btnForm").removeClass("disabled")
        $("#btnForm").css("background-color", "#D62E33")

    }
});