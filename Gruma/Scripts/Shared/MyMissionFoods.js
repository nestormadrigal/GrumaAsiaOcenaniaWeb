$(document).ready(function () {
    MyMissionFoods.Index.Init();
});

var MyMissionFoods = MyMissionFoods || {};
(function ($, undefined) {

    MyMissionFoods.Index = function () {
        function init() {
            _view = $("#my-mission-cont");
            initControls();
            initEvents();

        }
        function initControls() {
            _view.find("select").selectmenu({
                menuWidth: 160
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
