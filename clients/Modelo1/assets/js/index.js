/**
 * Created by fanzhang on 5/7/15.
 */

$(function () {

    var navExpand = 0;
    var subNavExpand = 0;
    /*image preload*/
    new Image().src = "assets/img/3dcomment.gif";
    new Image().src = "assets/img/shareview.gif";
    new Image().src = "assets/img/path.gif";
    new Image().src = "assets/img/embed.gif";

    $('body').scroll(function () {
        if (($('.modelo-welcome').offset().top < (0 - $(window).height()))) {
            $('.js-nav').css({
                'background': 'rgba(255,255,255,0.95)',
                'padding': '20px 0 20px 20px',
                '-webkit-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                '-moz-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                'box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)'
            });
            navExpand = 1;
            $('.modelo-hero-center').css({
                'margin-top' : '0'
            });
            $('.navbar.modelo').css({
                'position': 'absolute'
            });
        } else if (navExpand == 1 && subNavExpand == 0) {
            $('.js-nav').css({
                'background': 'transparent',
                'padding': '60px 0 20px 20px',
                '-webkit-box-shadow': 'none',
                '-moz-box-shadow': 'none',
                'box-shadow': 'none'
            });
            $('.modelo-hero-center').css({
                'margin-top' : '20px'
            });

            $('.navbar.modelo').css({
                'opacity': '0'
            });
            setTimeout(function(){
                $('.navbar.modelo').css({
                    'position': 'initial',
                    'opacity': '1'
                });
                $('.modelo-hero-center').css({
                    'margin-top' : '-120px'
                });
            },370);

            navExpand = 0;
        } else {

        }
    });

    $('.navbar-toggle').on('tap click',function(){
        if (subNavExpand == 0) {
            $('.js-nav').css({
                'background': 'rgba(255,255,255,0.95)',
                'padding': '20px 0 20px 20px',
                '-webkit-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                '-moz-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
                'box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)'
            });
            subNavExpand = 1;
        } else if ( navExpand == 0) {
            $('.js-nav').css({
                'background': 'transparent',
                'padding': '60px 0 20px 20px',
                '-webkit-box-shadow': 'none',
                '-moz-box-shadow': 'none',
                'box-shadow': 'none'
            });
            subNavExpand = 0;
        } else {
            subNavExpand = 0;
        }
    })
});