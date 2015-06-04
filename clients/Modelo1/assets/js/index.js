var navExpand = 0;
var subNavExpand = 0;
$(function () {

    /*image preload*/
    new Image().src = "/frontpage/assets/img/3dcomment.gif";
    new Image().src = "/frontpage/assets/img/shareview.gif";
    new Image().src = "/frontpage/assets/img/path.gif";
    new Image().src = "/frontpage/assets/img/embed.gif";


    $('.navbar-toggle').on('tap click', function () {
        if (subNavExpand == 0) {
            $('.js-nav').css({
                'background': 'rgba(255,255,255,0.95)',
                'padding': '10px 0 10px 20px',
                '-webkit-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                '-moz-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                'box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)'
            });
            subNavExpand = 1;
        } else if (navExpand == 0) {
            $('.js-nav').css({
                'background': 'rgba(142, 142, 142, 0.50)',
                'padding': '36px 0 20px 20px',
                '-webkit-box-shadow': 'none',
                '-moz-box-shadow': 'none',
                'box-shadow': 'none'
            });
            subNavExpand = 0;
        } else {
            subNavExpand = 0;
        }
    });

    $(".onepagescroll").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {
//            GIFverticalFit();
            GIFverticalFit();

            if (index == 1 && navExpand == 1 && subNavExpand == 0) {
                $('.js-nav').css({
                    'background': 'rgba(142, 142, 142, 0.24)',
                    'padding': '25px 0 20px 20px',
                    '-webkit-box-shadow': 'none',
                    '-moz-box-shadow': 'none',
                    'box-shadow': 'none',
                });
                navExpand = 0;
            } else if (index == 1 && navExpand == 1 && subNavExpand == 1) {
                navExpand = 0;
            } else if (index > 1) {
                $('.js-nav').css({
                    'background': 'rgba(255,255,255,0.95)',
                    'padding': '10px 0 10px 20px',
                    '-webkit-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                    '-moz-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                    'box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                });
                navExpand = 1;
            }
        },  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function (index) {
        },   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

//    $(window).on('resize', function () {
//        setTimeout(function () {
//        }, 500);
//    });
    jQuery(window).bind('orientationchange', function(e) {

        switch ( window.orientation ) {

            case 0:
            {
                $('#viewport').attr('content','width=device-width, initial-scale = 1.0, user-scalable = no');
                location.reload();
            }
                break;

            case 90:
            {
                $('#viewport').attr('content','initial-scale = 0.5, user-scalable = no');
                GIFverticalFit();
            }
                break;

            case -90:
            {
                $('#viewport').attr('content','initial-scale = 0.5, user-scalable = no');
                GIFverticalFit();
            }
                break;
            default :
            {
                $('#viewport').attr('content','width=device-width, initial-scale = 1.0, user-scalable = no');
                location.reload();
                GIFverticalFit();
            }
                break;
        }

    });
});

function GIFverticalFit() {
    if ($(window).width() > 1163) {
        $(".jsImgFixSide").height() > $(window).height() * 0.9 ?
            $(".jsImgFixSide").height($(window).height() * 0.905) : $(".jsImgFixSide").css({ 'height': '90%', 'width': 'auto'});
        $(".jsImgFixVert").height() > $(window).height() * 0.7 ?
            $(".jsImgFixVert").height($(window).height() * 0.705).css('width', 'auto') : $(".jsImgFixVert").height($(window).height() * 0.7).css({'width': '90%', 'height': 'auto'});
    }
}