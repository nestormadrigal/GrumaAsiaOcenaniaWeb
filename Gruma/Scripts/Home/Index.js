$(document).ready(function () {
    Home.Index.Init();
});

var Home = Home || {};
(function ($, undefined) {
    
    Home.Index = function () {
        function init () {
            _viewMissionFood = $('#my-mission-cont');
            initControls();  
            initEvents();
            
        }
        function initControls() {
            $('select.language').selectmenu({
                menuWidth: 70,
                format: addressFormatting
            });
            
            $("#slides").slides({
                preload: true,
                preloadImage: '~/Content/Images/loading.gif',
                play: false,
                pause: 2500,
                hoverPause: true
            });
        }
   
        function initEvents(){
            $("#my-mission").click(function () {
                if ($(this).hasClass("active")) {
                    $("#shadow-mymission").fadeOut(1000);
                    $("#my-mission-cont").animate({
                        right: -550
                    },{
                        queue: true,
                        duration: 750
                    }, "linear");            
                    $("#my-mission").animate({
                        right: 0
                    },{
                        queue: true,
                        duration: 750
                    }, "linear");
                    $("#my-mission").removeClass("active");
                }
                else {                        
                    $("#shadow-mymission").fadeIn(1000);
                    $("#my-mission-cont").animate({
                        right: 0
                    },{
                        queue: true,
                        duration: 750
                    }, "linear");
            
                    $("#my-mission").animate({
                        right: 530
                    },{
                        queue: true,
                        duration: 750
                    }, "linear");
                    $("#my-mission").addClass("active");
                }
            });

            $("#shadow-mymission").click(function () {
                $("#shadow-mymission").fadeOut(1000);
                $("#my-mission-cont").animate({
                    right: -550
                },{
                    queue: true,
                    duration: 750
                }, "linear");
                $("#my-mission").animate({
                    right: 0
                },{
                    queue: true,
                    duration: 750
                }, "linear");
                $("#my-mission").removeClass("active");
        
            });
        }

        var addressFormatting = function (text) {
            var newText = text;
            //array of find replaces
            var findreps = [
                { find: /^([^\-]+) \- /g, rep: '<span class="ui-selectmenu-item-header">$1</span>' },
                { find: /([^\|><]+) \| /g, rep: '<span class="ui-selectmenu-item-content">$1</span>' },
                { find: /([^\|><\(\)]+) (\()/g, rep: '<span class="ui-selectmenu-item-content">$1</span>$2' },
                { find: /([^\|><\(\)]+)$/g, rep: '<span class="ui-selectmenu-item-content">$1</span>' },
                { find: /(\([^\|><]+\))$/g, rep: '<span class="ui-selectmenu-item-footer">$1</span>' }
            ];

            for (var i in findreps) {
                newText = newText.replace(findreps[i].find, findreps[i].rep);
            }
            return newText;
        }

        return {
            Init: init
            //View: _view
        };

    }();

})(jQuery);
