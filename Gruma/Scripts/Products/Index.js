$(document).ready(function () {
    Products.Index.Init();
});

var Products = Products || {};
(function ($, undefined) {

    Products.Index = function () {
        function init() {
            _view = $('.products');
            initControls();
            initEvents();

        }
        function initControls() {
           
        }

        function initEvents() {
           
        }

        return {
            Init: init
            //View: _view
        };

    }();

})(jQuery);
