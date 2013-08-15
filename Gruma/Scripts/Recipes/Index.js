$(document).ready(function () {
    Recipes.Index.Init();
});

var Recipes = Recipes || {};
(function ($, undefined) {
    
    Recipes.Index = function () {
        function init () {
            _view = $('#recipe-detail');
            initControls();  
            initEvents();
            
        }
        function initControls() {            
            $("#ourFavorites").carousel();
            $(".results-gallery").mCustomScrollbar({
                theme: "dark-thick"
            });
        }

        function initEvents() {
            $(".results-gallery ul > li").mouseover(function () { $(this).find(".descrip-result").show() });
            $(".results-gallery ul > li").mouseleave(function () { $(this).find(".descrip-result").hide() });
            $(".results-gallery ul > li").click(function () {
                window.location.href = "Recipes/RecipeDetail";
            });
        }

    return {
        Init: init
        //View: _view
    };

}();

})(jQuery);		
