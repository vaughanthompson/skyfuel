    $(document).ready(function(){
        $.localScroll({
                target: 'body',
                queue: false,
                hash: false,
                duration: 500,
                easing: 'easeOutQuad'
        });


        $('a#toTop').css('opacity','0');
        new Waypoint({
        element: document.getElementsByTagName('main'),
        handler: function(direction) {
            if (direction === 'down') {
                $('a#toTop').fadeTo(500,'1.0');
            }
            else {
                $('a#toTop').fadeTo(500,'0');
            }
        },
            offset: '-250%'
        })

  

        // Mobile Navigation
        $('#navClose').hide();

        $('#navClose').click(function(){
            $(this).hide();
            $('#navCart').show();
            $('#navTrigger').show();
            $("div.mblnavContainer").scrollTo(0);
            $('div.mblnav').hide();
            $('html, body').removeClass('noscroll');
            return false;
        });

        $('#navTrigger').click(function(){
            $(this).hide();
            $('#navCart').hide();
            $('#navClose').show();
            $('div.mblnav').fadeTo(400,1);
            $('html, body').addClass('noscroll');
            return false;

        });


    new Waypoint({
        element: document.getElementsByTagName('body'),
        handler: function(direction) {
            if (direction === 'down') {
                $('#navMobile').fadeTo(1000,'1.0');
            }
            else {
                $('#navMobile').hide();
            }
        },
            offset: '-50%'
    });







    $('.triggerCat1').click(function(){
        $(this).toggleClass('active');
        $('.shopCat.cat1').slideToggle();
        return false;
    });

    $('.triggerCat2').click(function(){
        $(this).toggleClass('active');
        $('.shopCat.cat2').slideToggle();
        return false;
    });

    $('.triggerCat3').click(function(){
        $(this).toggleClass('active');
        $('.shopCat.cat3').slideToggle();
        return false;
    });

    $('.triggerCat4').click(function(){ 
        $(this).toggleClass('active');
        $('.shopCat.cat4').slideToggle();
        return false;
    });










    /*
    new Waypoint({
        element: document.getElementById('inpageNav'),
        handler: function(direction) {
            if (direction === 'down') {
                $('header.sticky').animate({opacity: "show"}, {queue : false, duration:500});
                $('#navHeader div#mblNavControl a .icon-ic-menu').addClass('darker');
            }
            else {
                $('header.sticky').animate({opacity: "hide"}, {queue : false, duration:350});
                $('#navHeader div#mblNavControl a .icon-ic-menu').removeClass('darker');
            }
        },
            offset: '0'
        })
    new Waypoint({
        element: document.getElementById('inpageNavEnd'),
        handler: function(direction) {
            if (direction === 'down') {
                $('header.sticky').animate({opacity: "hide"}, {queue : false, duration:350});
            }
            else {
                $('header.sticky').animate({opacity: "show"}, {queue : false, duration:350});
            }
        },
            offset: '50%'
        })
            */




    }); 
