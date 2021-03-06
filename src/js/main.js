$(document).ready(function() {
    
//    OPEN MODAL
    
    $('.feedback').click(function(e) {
        e.preventDefault();
        $('.modal-bg').fadeIn(300, function() {
            $('#modal-form').css({
                'display': 'block' 
            }).animate({
                'opacity': 1 
            }, 300);
        });
    });
    
    
//    CLOSE MODAL
    
    $('.modal-form__close').click(function() {
        $('#modal-form').animate({
            'opacity': 0
        },300, function() {
            $('#modal-form').css({'display':'none'});
            $('.modal-bg').fadeOut(300);
        });
    });
    
//    CLOSE CATEGORIES
    $('.categories__close').click(function() {
        $('.categories__header').animate({
            opacity: 0
        }, 500);
        $('.categories__items').animate({
            opacity: 0
        }, 500);
        $(this).fadeOut(200, function() {
            $('.categories').animate({
                width: 2,
                padding: 0,
                'margin-left': 0
            }, 500, function() {
                $('.categories').animate({
                   top: '150%',
                    'margin-top': 0
                }, 500, function() {
                    $('.categories__header').animate({
                       'margin-left': -100 
                    });
                    $('.categories__items').animate({
                       'margin-right': -100 
                    }, 500);
                }); // end animate 2
                $('.overlay').fadeOut(500);
            }); // end animate
        }); // end fadeOut
    }); // end click
    
//    OPEN CATEGORIES
    $('.menu').click(function() {
        $('.categories__items').css('display', 'block');
        var widthCategory;
        var marginLeft;
        var paddingAll;
        var width = $(window).width();
        var height = $('.categories').height();
        var marginTop = -height/2;
        if( width >= 1200 ) {
            widthCategory = 1100;
            marginLeft = -550;
            paddingAll = 30;
        }
        else if( width < 1200 && width >= 992 ) {
            widthCategory = 970;
            marginLeft = -485;
            paddingAll = 30;
        }
        else if( width < 992 && width >= 767 ) {
            widthCategory = width-30;
            marginLeft = -widthCategory/2;
            paddingAll = 30;
        }
        else if( width < 767 && width >= 575 ) {
            widthCategory = width-30;
            marginLeft = -widthCategory/2;
            paddingAll = '30 10 10 10';
        }
        else if( width < 575 && width >= 480 ) {
            widthCategory = width-8;
            marginLeft = -widthCategory/2;
            paddingAll = '12';
        }
        else {
            widthCategory = width-30;
            marginLeft = -widthCategory/2;
            paddingAll = '30 10 10 10';
        }
        $('.overlay').fadeTo(500, 0.6);
        $('.categories').animate({
            'margin-top': marginTop,
            top: '50%'
        }, 500, function() {
            $('.categories').animate({
                'margin-left': marginLeft,
                padding: paddingAll,
                width: widthCategory
            }, 500, function() {
                $('.categories__header').animate({
                    opacity: 1,
                    'margin-left': 0
                }, 500);
                $('.categories__items').animate({
                    opacity: 1,
                    'margin-right': 0
                }, 500);
                $('.categories__close').fadeIn(500);       
            }); // end animate 2
        }); // end animate
    }); // end click
    
//    NAV-MOBILE
    $('.nav-mobile').click(function() {
        $(this).toggleClass('nav-mobile_active');
        $('.burger-menu').toggleClass('burger-menu_open');
        $('html,body').toggleClass('not-scroll');
    }); // end click
    
//    TURN ARROW ACCORDION
    $('.article__link').click(function() {
        if( $(this).children('.article__icon').hasClass('article__icon_down') ) {
            $(this).children('.article__icon').removeClass('article__icon_down');
        }
        else {
            $('.article__icon').removeClass('article__icon_down');
            $(this).children('.article__icon').addClass('article__icon_down');
        }
    }); // end click
    
//    FANCYBOX
    
    $("[data-fancybox]").fancybox({
        toolbar: false
    });
    
//    BLOCKUOTE
    
    var blockquote = $('blockquote');
    
    var blockquote_text = blockquote.text();
    
    blockquote.html('"' + blockquote_text + '"');
    
});