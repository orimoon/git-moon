$(document).ready(function () {
    $("#fullPage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage", "fifthPage", "sixthpage"],
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $(".home-wrap").css({
                    width: "450px",
                    height: "450px",
                });
                // 
            }
        },
       
    });
});
