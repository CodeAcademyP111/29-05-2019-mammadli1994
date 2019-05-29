////cuzi sehvim var hansisa dongude onu axtarib tapa bilmedim



$(document).ready(function () {

    $(".convert").click(function () {
        $(".modal_content").hide();
    })

    $(".main img").click(function () {
        var img = $(this).data("img");
        var msg = $(this).data("msg");
        var index = $(this).data("index");
        $(".slider").children().eq(0).attr("src", `img/large/${img}`);
        $(".slider").children().eq(1).text(msg);
        if ($(".active")) {
            $(".active").removeClass("active");
        }
        $(".navigator").children().eq(index).children().eq(1).addClass("active");
        $(".modal_content").show();
    })

    $(".navigator .item").click(function () {
        var img = $(this).data("img");
        var msg = $(this).data("msg");
        $(".slider").children().eq(1).text(msg);
        $(".slider").children().eq(0).attr("src", `img/small/${img}`);
        if ($(".active")) {
            $(".active").removeClass("active");
        }
        $(this).children().eq(1).addClass("active");
    })

    $(".right").click(function () {
        var next = $(".active").parent().next();
        if (next.length != 0) {
            var img = next.data("img");
            var msg = next.data("msg");
            $(".slider").children().eq(0).attr("src", `img/small/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            next.children().eq(1).addClass("active");
        } else {
            var img = $(".navigator").children().eq(0).data("img");
            var msg = $(".navigator").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src", `img/small/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            $(".navigator").children().eq(0).children().eq(1).addClass("active");
        }
    })





    $(".left").click(function () {
        var prev = $(".active").parent().next();
        if (prev.length != 0) {
            var img = prev.data("img");
            var msg = prev.data("msg");
            $(".slider").children().eq(0).attr("src", `img/small/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            prev.children().eq(1).addClass("active");
        } else {
            var img = $(".navigator").children().eq(0).data("img");
            var msg = $(".navigator").children().eq(0).data("msg");
            $(".slider").children().eq(0).attr("src", `img/small/${img}`);
            $(".slider").children().eq(1).text(msg);
            if ($(".active")) {
                $(".active").removeClass("active");
            }
            $(".navigator").children().eq(0).children().eq(1).addClass("active");
        }
    })

})