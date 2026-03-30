$(function(){

    $(HTMLAllCollection).scroll(() => {
        if (window.scrollY <= 100)
        $('.firstbox').hide()
        else {
        $('.firstbox').show()
        }
    });

    $(window).scroll(function() {
        if($(window).scrollTop() >= 1000){
        $('.gotop').fadeIn()
        } else {
        $('.gotop').fadeOut()
        }
    });
   
    $('.gotop, .title img').click(function(event){
        event.preventDefault()
        $('html,body').animate(
            {
                scrollTop : 0 
            },600)
        });


        $('header .title p').click(function(){
            $('header .title p').removeClass('on')
            $(this).addClass('on')
            let idx = $(this).index()
            //console.log(idx)
    
            let sd = $('main section').eq(idx).offset().top-63
            $('html,body').animate({
                scrollTop : sd
            })
        })
        $('.dark').click(function(){
            $('body').toggleClass('dark')
            $('.decorate1').toggleClass('on')
        })
        $(window).scroll(function(){
            $('main section').each(function(){
                if($(this).offset().top <= $(window).scrollTop()+114){
                    let idx = $(this).index()
                    $('header ul li').removeClass('on')
                    $('header ul li').eq(idx).addClass('on')
                }
            })
        })
        
})