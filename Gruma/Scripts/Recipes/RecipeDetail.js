$(document).ready(function () {
    $(".comments-container").mCustomScrollbar({
        theme: "dark-thick"
    });
    RecipeDetail.Index.Init();
});

var RecipeDetail = RecipeDetail || {};
(function ($, undefined) {

    RecipeDetail.Index = function () {
        function init() {
            _view = $('#recipe-detail');
            initControls();
            initEvents();

        }
        function initControls() {
            _view.find(".rating-recipe").raty({
                readOnly: true,
                path: "/Content/Images",
                starOn: "starOn.png",
                starOff: "starOff.png",
                number: 5,
                score: 4,
                width: 140
            });
            _view.find(".rating-recipe-related").raty({
                readOnly: true,
                path: "/Content/Images",
                starOn: "starOn.png",
                starOff: "starOff.png",
                number: 5,
                score: 4,
                width: 140
            });
            $('#tabs a').click(function (e) {
                e.preventDefault();
                $(this).tab('show');
            })
            $('#tabs a:first').tab('show');
        }

        function initEvents() {
            //Rate recipe modal
            _view.find("#rateRecipeBtn").click(function () {
                $.ajax({
                    type: "GET",
                    url: "RateRecipe",
                    success: function (data) {
                        var _viewModals = $("#load-modals");
                            _viewModals.append(data);
                            _viewModals.find("#rateRecipeModal").modal({
                                keyboard: false,
                                show: true
                            });
                            _viewModals.find(".rate-recipe").raty({
                                path: "/Content/Images",
                                starOn: "starOn.png",
                                starOff: "starOff.png",
                                number: 5,
                                width: 190
                            });
                    }
                });
            });
            //See rating reviews modal
            _view.find("#seeReviewsBtn").click(function () {
                $.ajax({
                    type: "GET",
                    url: "SeeRatingReviews",
                    success: function (data) {
                        var _viewModals = $("#load-modals");
                        _viewModals.append(data);
                        _viewModals.find("#seeRatingReviewsModal").modal({
                            keyboard: false,
                            show: true
                        });
                        //_viewModals.find(".rate-recipe").raty({
                        //    path: "/Content/Images",
                        //    starOn: "starOn.png",
                        //    starOff: "starOff.png",
                        //    number: 5,
                        //    width: 190
                        //});
                        _viewModals.find(".comments-container").mCustomScrollbar({
                            theme: "dark-thick"
                        });
                    }
                });
            });
        }

        return {
            Init: init
            //View: _view
        };

    }();

})(jQuery);
