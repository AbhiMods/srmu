/**
 * Splits new lines of text into separate divs
 *
 * ### Options:
 * - `width` string The width of the box. By default, it tries to use the
 *	 element's width. If you don't define a width, there's no way to split it
 *	 by lines!
 *	- `tag` string The tag to wrap the lines in
 *	- `keepHtml` boolean Whether or not to try and preserve the html within
 *	 the element. Default is true
 *
 *	@param options object The options object
 *	@license MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
! function(t) {
    function e(t) {
        return t.clone().css({
            position: "absolute"
        })
    }

    function n(e) {
        for (var i, l = [], r = 0; r < e.length; r++)
            if ("BR" !== e[r].nodeName) {
                if (3 == e[r].nodeType) i = h(e[r].textContent || e[r].toString());
                else {
                    var s = t(e[r]).clone();
                    i = n(s.contents());
                    for (var a = 0; a < i.length; a++) s.empty(), i[a] = s.html(i[a]).wrap("<p></p>").parent().html()
                }
                for (var o = 0; o < i.length; o++) "" !== i[o] && l.push(i[o])
            } else l.push("<br>");
        return l
    }

    function h(t) {
        return t.split(/\s+/)
    }

    function i(e, n, h) {
        var i = t(e = '<div class="stop">' + e).find('*:not(:has("*"))').html(n).closest(".stop").slice(-1);
        return i.children().each((function(t, e) {
            e.style.setProperty("--line-index", h)
        })), i.html()
    }
    t.fn.splitLines = function(l) {
        var r = {
            width: "auto",
            tag: "<div>",
            wrap: "",
            keepHtml: !0
        };
        l && t.extend(r, l);
        var s = e(this),
            a = this.contents(),
            o = this.text();
        this.append(s), s.text("42");
        var p = s.height() + 2;
        s.empty();
        var m = e(s),
            d = r.width;
        "auto" === r.width && (d = this[0].offsetWidth), m.width(d), this.append(m);
        for (var c, f = r.keepHtml ? n(a) : h(o), u = 0, v = 0; v < f.length; v++) {
            var g = m.html();
            m.html(g + f[v] + " "), m.html() != c ? m.height() > p && (c = m.html(), m.html(g), s.append(i(r.tag, m.html(), u)), m.html(""), v--, u++) : (c = "", s.append(i(r.tag, m.html(), u)), m.html(""))
        }
        s.append(i(r.tag, m.html(), u)), this.html(s.html())
    }
}(jQuery);