$(function(){
	"use strict";
	 // Show the navbar when the page is scrolled up
    var MQL = 750;
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar').height();
        $(window).on('scroll',
        {
            previousTop: 0
        },function()
            {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.navbar').hasClass('is-fixed')) {
                        $('.navbar').addClass('is-visible');
                    } else {
                        $('.navbar').removeClass('is-visible is-fixed');
                    }
                } else if (currentTop > this.previousTop) {
                    //if scrolling down...
                    $('.navbar').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) 
					{
					$('.navbar').addClass('is-fixed');
					}
                }
                this.previousTop = currentTop;
            });
    }
});