 $(function(){

    //  Loader Bar execution time
    setTimeout(function(){
        $('#loader_bg').fadeToggle();
    }, 4); // 4500

    //Responsive NavBar
    $('#hamburger').on('click', function() {

        $('#times').removeClass('hide_element');
        $('#hamburger').addClass('hide_element');
        $('.item').addClass('active');
        $('.item').addClass('animate__animated animate__fadeInUp');
    })

    $('#times').on('click', function() {

        $('#times').addClass('hide_element');
        $('#hamburger').removeClass('hide_element');
        $('.item').removeClass('active');
    })

    $('.item').on('click', function() {
        if($('.item').hasClass('active')) {
            $('.item').removeClass('active');
            
            $('#hamburger').removeClass('hide_element');
            $('#times').addClass('hide_element');
        }
        else {
            $('.item').addClass('active');
            $('.item').addClass('animate__animated animate__fadeInUp');

            $('#times').removeClass('hide_element');
            $('#hamburger').addClass('hide_element');
        }
    })

    /* Change la couleur du background de NAV pendant la scroll */ 
    $(window).scroll(function() {    
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > 5) {
            $('nav').addClass("navbarInScroll");
        }
        else{
            $('nav').removeClass("navbarInScroll");
        }
    }); 


    // Smooth scrolling to page anchor on click
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top },1000);
            }
        }
    });

    /* HOVER GMAIL */
    $('#introduction a:first').mouseenter(function(){
        $('a i:first').css('color', '#0bceaf' );
    })

    $('#introduction a:first').mouseleave(function(){
        $('a i:first').css('color', '#fff' );
    })
});



