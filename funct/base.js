$(document).ready(function(){

    var cursor = document.querySelector(".cursor-circle");

    document.addEventListener("mousemove", function(e){
        cursor.style.cssText = "left: "+ e.clientX + "px; top: " + e.clientY + "px;";
    });

    var lastScrollTop = 0;

    
    window.addEventListener("scroll", function(){ 
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        $("body").addClass("scrollDown");
        $("body").removeClass("scrollUp");
    } else {
        $("body").removeClass("scrollDown");
        $("body").addClass("scrollUp");
    }
    if(window.pageYOffset < 100) {
        $("body").addClass("scrolledToTop");
    } else {
        $("body").removeClass("scrolledToTop");
    }
    lastScrollTop = st <= 0 ? 0 : st;
    }, false);

    $(".logo, .hamby, input, textarea, button, a").hover(function(){
        $(".cursor-circle").addClass("hover");
    }, function(){
        $(".cursor-circle").removeClass("hover");
    });

    $(".hamby").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $("body").removeClass("navigationActive");
        } else {
            $(this).addClass("active");
            $("body").addClass("navigationActive");
        }
    });

    $(document).scroll(function(){
        if($(".service-container").length) {
            for(var i = 0; i<$(".service-container").length; i++){
                if($(this).scrollTop() >= ($(".service-container").eq(i).offset().top - 400)) {
                    $(".service-container").eq(i).addClass("active");
                }
            }
        }

        if($(".steps-wrapper").length){
            if($(this).scrollTop() >= ($(".steps-wrapper").offset().top - 400)) {
                $(".steps-wrapper").addClass("active");
            }
        }

        if($(".work-display div").length){
            for(var i = 0; i<$(".work-display div").length; i++){
                if($(this).scrollTop() >= ($(".work-display div").eq(i).offset().top - 400)) {
                    $(".work-display div").eq(i).addClass("active");
                }
            }
        }

    });

    
    $('input[name="name"]').keyup(function(){
        if($(this).val() == 0){
            $(this).parent().removeClass("wrong success");
            $(this).parent().addClass("empty");
        } else {
            $(this).parent().removeClass("empty");

            if(/^[^.?!@<>{}()]*$/.test($(this).val())){
                $(this).parent().removeClass("wrong");
            } else {
                $(this).parent().addClass("wrong");
                $(this).parent().removeClass("success");
            }
        }
    });
    $('input[name="name"]').focusout(function(){
        if($(this).val() != 0 && /^[^.?!@<>{}()]*$/.test($(this).val())){
            $(this).parent().addClass("success");
        } else {
            $(this).parent().removeClass("success");
        }
    });

    $('input[name="email"]').keyup(function(){
        if($(this).val() == 0){
            $(this).parent().removeClass("wrong success");
            $(this).parent().addClass("empty");
        } else {
            $(this).parent().removeClass("empty");

            if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($(this).val())){
                $(this).parent().removeClass("wrong");
            } else {
                $(this).parent().addClass("wrong");
                $(this).parent().removeClass("success");
            }
        }
    });
    $('input[name="email"]').focusout(function(){
        if(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($(this).val())){
            $(this).parent().addClass("success");
        } else {
            $(this).parent().removeClass("success");
        }
    });

    $('input[name="phone"]').keyup(function(){
        
        if($(this).val() == 0){
            $(this).parent().removeClass("wrong success");
            $(this).parent().addClass("empty");
        } else {        
            $(this).parent().removeClass("empty");
            if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{0,10}$/im.test($(this).val())){
                $(this).parent().removeClass("wrong");
            } else {
                $(this).parent().addClass("wrong");
                $(this).parent().removeClass("success");
            }
        }
    });
    $('input[name="phone"]').focusout(function(){
        if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{0,10}$/im.test($(this).val())){
            $(this).parent().addClass("success");
        } else {
            $(this).parent().removeClass("success");
        }
    });

    $('input[name="title"]').keyup(function(){
        if($(this).val() == 0){
            $(this).parent().addClass("empty");
            $(this).parent().removeClass("success");
        } else {
            $(this).parent().removeClass("empty");
        }
    });

    
    $('textarea[name="message"]').keyup(function(){
        if($(this).val() == 0){
            $(this).parent().addClass("empty");
            $(this).parent().addClass("empty");
            $(this).parent().removeClass("success");
        } else {
            $(this).parent().removeClass("empty");
            $(this).parent().removeClass("empty");
        }
    });

    $(".submit-button").click(function(){
        if($('input[name="email"]').parent().hasClass("success") && $('input[name="name"]').parent().hasClass("success") && $('input[name="phone"]').parent().hasClass("success") && $('textarea[name="message"]').val() != 0 && $('input[name="title"]').val() != 0){
            $(".contact-form-wrapper form").addClass("success");
            $(".contact-form-wrapper form").removeClass("error");
        } else {
            $(".contact-form-wrapper form").removeClass("success");
            $(".contact-form-wrapper form").addClass("error");

            if($('input[name="name"]').val() == 0) {
                $('input[name="name"]').parent().addClass("empty");
            }
            if($('input[name="email"]').val() == 0) {
                $('input[name="email"]').parent().addClass("empty");
            }
            if($('input[name="phone"]').val() == 0) {
                $('input[name="phone"]').parent().addClass("empty");
            }
            if($('input[name="title"]').val() == 0) {
                $('input[name="title"]').parent().addClass("empty");
            }
            if($('textarea[name="message"]').val() == 0) {
                $('textarea[name="message"]').parent().addClass("empty");
            }

        }
    });


});