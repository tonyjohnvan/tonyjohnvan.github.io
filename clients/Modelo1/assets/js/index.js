$(function () {

    var navExpand = 0;
    var subNavExpand = 0;
    /*image preload*/
    new Image().src = "assets/img/3dcomment.gif";
    new Image().src = "assets/img/shareview.gif";
    new Image().src = "assets/img/path.gif";
    new Image().src = "assets/img/embed.gif";

//    $('body').scroll(function () {
//        if (($('.modelo-welcome').offset().top < (0 - $(window).height()))) {
//            $('.js-nav').css({
//                'background': 'rgba(255,255,255,0.95)',
//                'padding': '20px 0 20px 20px',
//                '-webkit-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
//                '-moz-box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)',
//                'box-shadow': '1px 2px 3px rgba(0, 0, 0, .1)'
//            });
//            navExpand = 1;
//            $('.modelo-hero-center').css({
//                'margin-top' : '0'
//            });
//            $('.navbar.modelo').css({
//                'position': 'absolute'
//            });
//        } else if (navExpand == 1 && subNavExpand == 0) {
//            $('.js-nav').css({
//                'background': 'transparent',
//                'padding': '60px 0 20px 20px',
//                '-webkit-box-shadow': 'none',
//                '-moz-box-shadow': 'none',
//                'box-shadow': 'none'
//            });
//            $('.modelo-hero-center').css({
//                'margin-top' : '20px'
//            });
//
//            $('.navbar.modelo').css({
//                'opacity': '0'
//            });
//            setTimeout(function(){
//                $('.navbar.modelo').css({
//                    'position': 'initial',
//                    'opacity': '1'
//                });
//                $('.modelo-hero-center').css({
//                    'margin-top' : '-120px'
//                });
//            },370);
//
//            navExpand = 0;
//        } else {
//
//        }
//    });

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


    $(".onepagescroll").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function (index) {
            if (index == 1 && navExpand == 1 && subNavExpand == 0) {
                $('.js-nav').css({
                    'background': 'transparent',
                    'padding': '60px 0 20px 20px',
                    '-webkit-box-shadow': 'none',
                    '-moz-box-shadow': 'none',
                    'box-shadow': 'none',
                });
                navExpand = 0;
            } else if (index > 1) {
                $('.js-nav').css({
                    'background': 'rgba(255,255,255,0.95)',
                    'padding': '20px 0 20px 20px',
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

//    $('.fullpage').fullpage({
//        //Navigation
////        menu: false,
////        anchors:['firstPage', 'secondPage'],
////        navigation: false,
////        navigationPosition: 'right',
////        navigationTooltips: ['firstSlide', 'secondSlide'],
////        showActiveTooltips: false,
////        slidesNavigation: true,
////        slidesNavPosition: 'bottom',
//
//        //Scrolling
//        css3: true,
//        scrollingSpeed: 700,
//        autoScrolling: true,
//        fitToSection: true,
//        scrollBar: false,
//        easing: 'easeInOutCubic',
//        easingcss3: 'ease',
//        loopBottom: false,
//        loopTop: false,
//        loopHorizontal: true,
//        continuousVertical: false,
//        normalScrollElements: '#element1, .element2',
//        scrollOverflow: false,
//        touchSensitivity: 15,
//        normalScrollElementTouchThreshold: 5,
//
//        //Accessibility
//        keyboardScrolling: true,
//        animateAnchor: true,
//        recordHistory: true,
//
//        //Design
//        controlArrows: true,
//        verticalCentered: true,
//        resize : false,
//        sectionsColor : ['#ccc', '#fff'],
//        paddingTop: '3em',
//        paddingBottom: '10px',
//        fixedElements: '#header, .footer',
//        responsive: 0,
//
//        //Custom selectors
//        sectionSelector: '.section',
//        slideSelector: '.slide',
//
//        //events
//        onLeave: function(index, nextIndex, direction){},
//        afterLoad: function(anchorLink, index){},
//        afterRender: function(){},
//        afterResize: function(){},
//        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
//        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
//    });
});