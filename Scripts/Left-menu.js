$.fn.Leftmenu = function(e) {
    function r() {
        $(".Left-menu").find("li").unbind();
        $(".Left-menu").find("ul").hide(0);
        if (window.innerWidth <= 768) {
            o();
            s();
            if (n == true) {
                a();
                n = false
            }
        } else {
            u();
            i();
            if (t.type == "horizontal" && t.align == "right" && n == false) {
                a();
                n = true
            }
        }
    }

    function i() {
        $(".Left-menu li").bind("mouseover", function() {
            $(this).children("ul").stop(true, true).fadeIn(t.speed)
        }).bind("mouseleave", function() {
            $(this).children("ul").stop(true, true).fadeOut(t.speed)
        })
    }

    function s() {
        $(".Left-menu > li").bind("click", function() {
            if ($(this).children("ul").css("display") == "none") {
                $(this).find("ul").slideDown(t.interval)
            } else {
                $(this).children("ul").slideUp(t.interval)
            }
        })
    }

    function o() {
        $(".Left-menu > li:not(.showhide)").hide(0);
        $(".Left-menu > li.showhide").show(0);
        $(".Left-menu > li.showhide").bind("click", function() {
            if ($(".Left-menu > li").is(":hidden")) {
                $(".Left-menu > li").slideDown(300)
            } else {
                $(".Left-menu > li:not(.showhide)").slideUp(300);
                $(".Left-menu > li.showhide").show(0)
            }
        })
    }

    function u() {
        $(".Left-menu > li").show(0);
        $(".Left-menu > li.showhide").hide(0)
    }

    function a() {
        $(".Left-menu > li").addClass("right");
        var e = $(".Left-menu").width();
        var t = $(".Left-menu").children("li");
        var n = 0;
        $(".Left-menu").children("li:not(.showhide)").detach();
        for (var r = t.length; r >= 1; r--) {
            $(".Left-menu").append(t[r])
        }
    }
    var t = {
        speed: 300,
        type: "horizontal",
        align: "left"
    };
    $.extend(t, e);
    var n = false;
    if (t.type == "vertical") {
        $(".Left-menu").addClass("vertical");
        if (t.align == "right") {
            $(".Left-menu").addClass("right")
        }
    }
    $(".Left-menu").prepend("<li class='showhide'><span class='title'>MENU</span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");
    r();
    $(window).resize(function() {
        r()
    })
}