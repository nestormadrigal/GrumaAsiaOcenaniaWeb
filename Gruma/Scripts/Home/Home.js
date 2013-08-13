
(function () {
    
    //$('select.search').selectmenu({
    //    menuWidth: 169
    //    format: addressFormatting
    //});
    //function addressformatting(text) {
    //    var newtext = text;
    //    //array of find replaces
    //    var findreps = [
    //        { find: /^([^\-]+) \- /g, rep: '<span class="ui-selectmenu-item-header">$1</span>' },
    //        { find: /([^\|><]+) \| /g, rep: '<span class="ui-selectmenu-item-content">$1</span>' },
    //        { find: /([^\|><\(\)]+) (\()/g, rep: '<span class="ui-selectmenu-item-content">$1</span>$2' },
    //        { find: /([^\|><\(\)]+)$/g, rep: '<span class="ui-selectmenu-item-content">$1</span>' },
    //        { find: /(\([^\|><]+\))$/g, rep: '<span class="ui-selectmenu-item-footer">$1</span>' }
    //    ];

    //    for (var i in findreps) {
    //        newtext = newtext.replace(findreps[i].find, findreps[i].rep);
    //    }
    //    return newtext;
    //}
    //$("select.language").selectmenu();
    
    $("#slides").slides({
        preload: true,
        preloadImage: 'Content/Images/loading.gif',
        play: false,
        pause: 2500,
        hoverPause: true
    });

    $('.dropdown-toggle').dropdown();

    $("#my-mission").click(function () {
        if ($(this).hasClass("active")) {
            $("#shadow-mymission").fadeOut(1000);
            $("#my-mission-cont").animate({
                right: -550
            },
            {
                queue: true,
                duration: 750
            }, "linear");            
            $("#my-mission").animate({
                right: 0
            }, 
            {
                queue: true,
                duration: 750
            }, "linear");
            $("#my-mission").removeClass("active");
        }
        else {                        
            $("#shadow-mymission").fadeIn(1000);
            $("#my-mission-cont").animate({
                right: 0
            },
            {
                queue: true,
                duration: 750
            }, "linear");
            
            $("#my-mission").animate({
                right: 530
            }, 
            {
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
        },
        {
            queue: true,
            duration: 750
        }, "linear");
        $("#my-mission").animate({
            right: 0
        },
        {
            queue: true,
            duration: 750
        }, "linear");
        $("#my-mission").removeClass("active");
        
    });


    //****** Recipes Scripts *****//
    $("#ourFavorites").carousel();

})(jQuery);

