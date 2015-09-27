(function($) {
    $.fn.justnum = function(options) {
        var defaults = {
            allow: false
        };

        options || (options = {});
        defaults = $.extend(defaults, options);

        var allow = (options.allow === true) ? true : false;

        this.keypress($.fn.justnum.keypress);

        if (options == 'destroy') {
            this.unbind('keypress');
        }

        return this.data('justnum.allow', options.allow);
    };

    $.fn.justnum.keypress = function(e) {
        var allow = $.data(this, 'justnum.allow');
        var verifyNumber;

        if (allow) {
            verifyNumber = (e.which == 8 || e.which == undefined || e.which == 0 || e.which == 44 || e.which == 46) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
        } else {
            verifyNumber = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
        }

        if (verifyNumber) {
            e.preventDefault();
            alert('Insira apenas números');
        }
    };
}(jQuery));
