jQuery(document).ready((function() {
    jQuery(".phone").keypress((function(h) {
        jQuery(this).val().length;
        if (8 != h.which && 0 != h.which && (h.which < 48 || h.which > 57)) return !1
    })), jQuery(".number").keypress((function(h) {
        jQuery(this).val().length;
        if ((h.which < 48 || h.which > 57) && 46 != h.which) return !1
    })), jQuery(".digits").keypress((function(h) {
        jQuery(this).val().length;
        if (h.which < 48 || h.which > 57) return !1
    })), jQuery(".email").on("keyup", (function(h) {
        var i = jQuery(this).val().length;
        return !(8 != h.which && 0 != h.which && 46 != h.which && (h.which < 48 || h.which > 57) && (h.which < 95 || h.which > 122) && (h.which < 63 || h.which > 90)) && ((0 != i || 95 != h.which && 63 != h.which) && void 0)
    }))
}));