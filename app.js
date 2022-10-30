 $(function(){

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



    /* HOVER = GMAIL */
    $('#introduction a:first').mouseenter(function(){
        $('a i:first').css('color', '#0bceaf' );
    })

    $('#introduction a:first').mouseleave(function(){
        $('a i:first').css('color', '#fff' );
    })


    /* HOVER = NUMBER */
    $('#introduction a:eq(1)').mouseenter(function(){
        $('a i:eq(1)').css('color', '#0bceaf' );
    })

    $('#introduction a:eq(1)').mouseleave(function(){
        $('a i:eq(1)').css('color', '#fff' );
    })



    //Menu Responsive
    $('#hamburger').on('click', function() {

            $('#times').removeClass('pidor');
            $('#hamburger').addClass('pidor');
            $('.item').addClass('active');
            $('.item').addClass('animate__animated animate__fadeInUp');
    })

    $('#times').on('click', function() {

            $('#times').addClass('pidor');
            $('#hamburger').removeClass('pidor');
            $('.item').removeClass('active');
    })

    $('.item').on('click', function() {
        if($('.item').hasClass('active')) {
            $('.item').removeClass('active');
        }
        else {
            $('.item').addClass('active');
            $('.item').addClass('animate__animated animate__fadeInUp');
        }
    })

});



//Verify (if) user -> has connected in GOOGLE account
function show_login_status(network, status){
    
    if(status == false){
        $('#copyMail').on('click', function(e){
            e.preventDefault();
        })
    }
}


//  Loader Bar execution time
setTimeout(function(){
    $('#loader_bg').fadeToggle();
}, 4); // 

