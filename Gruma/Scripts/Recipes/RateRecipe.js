$(document).ready(function () {
    RateRecipe.Index.Init();
});
var RateRecipe = RateRecipe || {};
(function ($, undefined) {

    RateRecipe.Index = function () {
        function init() {
            _view = $('#rateRecipeModal');
            initControls();
            initEvents();
        }
        function initControls() {
            _view.find(".rate-recipe").raty({
                number: 5
            });
        }

        function initEvents() {
          
        }

        return {
            Init: init
            //View: _view
        };

    }();

})(jQuery);
