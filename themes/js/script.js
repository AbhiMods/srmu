let vh = .01 * window.innerHeight;
document.documentElement.style.setProperty("--vh", `${vh}px`), window.addEventListener("resize", (() => {
    let e = .01 * window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${e}px`)
})), jQuery((function(e) {
    var t = e(".footer_bottom"),
        a = e(window),
        o = a.height() / 2;
    a.on("scroll", (function() {
        e(this).scrollTop() > o ? t.addClass("scrollTopActive") : t.removeClass("scrollTopActive")
    })).on("resize", (function() {
        o = e(this).height()
    }))
})), $((function() {
    var e = 0;
    $(window).on("load scroll", (function(t) {
        var a = $(this).scrollTop();
        Math.abs(e - a) <= 15 || (a > e && e > 150 || a > e && e > 1 && window.innerWidth <= 767 ? ($("header").addClass("scrolling-down"), $("header").removeClass("scrolling-up")) : ($("header").addClass("scrolling-up"), $("header").removeClass("scrolling-down")), e = a, a > 150 ? ($("header").addClass("sml-header"), $(".menu_content, .menu_btn").removeClass("active")) : $("header").removeClass("sml-header"))
    }))
}));
var topHeaderHeight = $(".top_header").outerHeight();
$("html").css("--top-header-height", `${topHeaderHeight}px`), $("[data-dropdown_btn]").click((function() {
    var e = $(this).attr("data-dropdown_btn");
    $(this).hasClass("active") ? ($(this).removeClass("active"), $(`[data-dropdown = ${e}]`).removeClass("active")) : ($(this).addClass("active"), $(`[data-dropdown = ${e}]`).addClass("active"), $(`[data-dropdown]:not([data-dropdown = ${e}])`).removeClass("active"), $(`[data-dropdown_btn]:not([data-dropdown_btn = ${e}])`).removeClass("active"))
})), $(document).click((function(e) {
    var t = $(e.target);
    t.attr("data-dropdown_btn") || (t.closest("[data-dropdown]").length > 0 ? t.closest("[close-on-insideclick]").length > 0 && ($("[data-dropdown]").removeClass("active"), $("[data-dropdown_btn").removeClass("active")) : ($("[data-dropdown]").removeClass("active"), $("[data-dropdown_btn").removeClass("active")))
}));
let headerheight = 0;

function setHeaderHeight() {
    headerheight != $("header").outerHeight() && (headerheight = $("header").outerHeight(), document.documentElement.style.setProperty("--header-height", `${headerheight}px`)), requestAnimationFrame(setHeaderHeight)
}

function setWhiteSpaceVariable() {
    var e = document.querySelector(".container"),
        t = e.currentStyle || window.getComputedStyle(e),
        a = parseInt(t.paddingLeft),
        o = e.offsetWidth - 2 * a,
        n = (document.body.clientWidth - o) / 2;
    document.documentElement.style.setProperty("--white-space", `${n}px`)
}

function no_to_words(e) {
    var t = Math.abs(e);
    return t >= 1e7 ? t = (t / 1e7).toFixed(2) + " Cr" : t >= 1e5 ? t = (t / 1e5).toFixed(2) + " Lac" : t >= 1e3 && (t = (t / 1e3).toFixed(2) + " K"), t
}
requestAnimationFrame(setHeaderHeight), $("[for_tab]").click((function() {
    var e = $(this).attr("for_tab");
    $("[for_tab]").each((function() {
        $(this).attr("for_tab") == e ? $(this).addClass("active") : $(this).removeClass("active")
    })), $("[tab]").each((function() {
        $(this).attr("tab") == e ? $(this).addClass("active") : $(this).removeClass("active")
    })), initSwipers()
})), setWhiteSpaceVariable(), window.addEventListener("resize", (() => {
    setTimeout((() => {
        setWhiteSpaceVariable()
    }), 50)
}));
var footerHeight = $("footer").outerHeight();

function commaSeparateNumber(e) {
    for (;
        /(\d+)(\d{3})/.test(e.toString());) e = e.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    return e
}
if ($("html").css("--height", `${footerHeight}px`), $(".counter").length > 0) {
    var a = 0;
    $(window).scroll((function() {
        var e = $(".counter").offset().top - window.innerHeight;
        0 == a && $(window).scrollTop() > e && ($(".counter-value").each((function() {
            var e = $(this),
                t = e.attr("data-count"),
                a = t.includes("%"),
                o = t.includes("+"),
                n = t.includes("K");
            t = t.replace(/\D/g, ""), $({
                countNum: parseInt(e.text())
            }).animate({
                countNum: parseInt(t)
            }, {
                duration: 2e3,
                easing: "swing",
                step: function() {
                    var t = Math.round(this.countNum);
                    a && (t += "%"), n && (t += "K"), o && (t += "+"), e.text(t)
                },
                complete: function() {
                    var t = this.countNum;
                    a && (t += "%"), n && (t += "K"), o && (t += "+"), e.text(t)
                }
            })
        })), a = 1)
    }))
}
$("[for-tab]").click((function() {
    var e = $(this).attr("for-tab"),
        t = $(this).attr("tab-name");
    t ? ($(`[data-tab][tab-name=${t}]`).removeClass("active"), $(`[for-tab][tab-name=${t}]`).removeClass("active")) : ($("[data-tab]").removeClass("active"), $("[for-tab]").removeClass("active")), $(`[data-tab=${e}]`).addClass("active"), $(`[for-tab=${e}]`).addClass("active")
})), $(".fixed_form_btn ul li").hover((function() {
    $(this).addClass("active"), $(this).siblings("li").removeClass("active")
})), $(".accordion_title").click((function() {
    $(this).parents(".accordion_box").toggleClass("active"), $(this).next(".accordion_content").slideToggle(), $(this).parents(".accordion_box").siblings(".accordion_box").removeClass("active"), $(this).parents(".accordion_box").siblings(".accordion_box").find(".accordion_content").slideUp()
}));
var initialImgSrc = $(".apply_accordion_box.active").find(".accordion_title").data("img");
$(".apply_inner .images img").attr("src", initialImgSrc), $(".apply_accordion_box .head").click((function() {
    var e = $(this).data("img");
    setTimeout((function() {
        $(".apply_inner .images img").attr("src", e)
    }), 250)
})), $("[data-hover_btn]").hover((function() {
    var e = $(this).attr("data-hover_btn");
    $(this).addClass("active"), $(`[data-hover = ${e}]`).addClass("active"), $(`[data-hover]:not([data-hover = ${e}])`).removeClass("active"), $(`[data-hover_btn]:not([data-hover_btn = ${e}])`).removeClass("active")
})), $(document).hover((function(e) {
    var t = $(e.target);
    t.attr("menu-dropdown_btn") || (t.closest("[menu-dropdown]").length > 0 ? t.closest("[close-on-insideclick]").length > 0 && ($("[menu-dropdown]").removeClass("active"), $("[menu-dropdown_btn").removeClass("active")) : ($("[menu-dropdown]").removeClass("active"), $("[menu-dropdown_btn").removeClass("active")))
})), window.innerWidth > 767 ? ($('[menu-dropdown="program_menu"]').hover((function() {
    $(this).addClass("active"), $('[menu-dropdown_btn="program_menu"]').addClass("active")
}), (function() {
    $(this).removeClass("active"), $('[menu-dropdown_btn="program_menu"]').removeClass("active")
})), $("[menu-dropdown_btn]").hover((function() {
    var e = $(this).attr("menu-dropdown_btn");
    $(this).hasClass("active") ? ($(this).removeClass("active"), $(`[menu-dropdown = ${e}]`).removeClass("active")) : ($(this).addClass("active"), $(`[menu-dropdown = ${e}]`).addClass("active"), $(`[menu-dropdown]:not([menu-dropdown = ${e}])`).removeClass("active"), $(`[menu-dropdown_btn]:not([menu-dropdown_btn = ${e}])`).removeClass("active"))
}))) : $("[menu-dropdown_btn]").click((function() {
    var e = $(this).attr("menu-dropdown_btn");
    $(this).hasClass("active") ? ($(this).removeClass("active"), $(`[menu-dropdown = ${e}]`).removeClass("active")) : ($(this).addClass("active"), $(`[menu-dropdown = ${e}]`).addClass("active"), $(`[menu-dropdown]:not([menu-dropdown = ${e}])`).removeClass("active"), $(`[menu-dropdown_btn]:not([menu-dropdown_btn = ${e}])`).removeClass("active"))
})), $(".close_menu_large").click((function() {
    $('[menu-dropdown="program_menu"]').removeClass("active"), $('[menu-dropdown_btn="program_menu"]').removeClass("active")
})), $(".menu_icon").click((function() {
    $("body").addClass("menu_opend")
})), $(".close_menu, .backdrop").click((function() {
    $("body").removeClass("menu_opend")
})), setTimeout((() => {
    $('<span class="ddp-click"><i class="fa-solid fa-chevron-down"></i></span>').appendTo(".has_submenu"), $(".ddp-click").click((function() {
        $(this).siblings(".sub_menu").slideToggle(), $(this).closest(".has_submenu").toggleClass("active"), $(this).closest(".has_submenu").siblings(".has_submenu").find(".sub_menu").slideUp(), $(this).closest(".has_submenu").siblings(".has_submenu").removeClass("active")
    }))
}), 500);