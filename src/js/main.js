$(document).ready(function() {
    
//    CLOSE CATEGORIES
    $('.categories__close').click(function() {
        $('.categories__close').fadeOut(500);
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
                   top: '100%',
                    'margin-top': 0
                }, 500, function() {
                    $('.categories__header').animate({
                       'margin-left': -100 
                    });
                    $('.categories__items').animate({
                       'margin-right': -100 
                    });
                }); // end animate 2
                $('.overlay').fadeOut(500);
            }); // end animate
        }); // end fadeOut
    }); // end click
    
//    OPEN CATEGORIES
    $('.menu').click(function() {
        $('.overlay').fadeTo(500, 0.6);
        $('.categories').animate({
            'margin-top': -300,
            top: '50%'
        }, 500, function() {
            $('.categories').animate({
                'margin-left': -550,
                padding: 30,
                width: 1100
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
    
});