
var mywindow = $(window);
var mypos = mywindow.scrollTop(); // Position of the window
var up = false;
var newscroll; // Stores new position off window


$(window).scroll(function () { //Activates function on scroll event
    
    newscroll = mywindow.scrollTop();
    
    if (newscroll > mypos && !up) {
        $('.social').stop().fadeOut(); // fades out icons and stops animation
        $( '.header').stop().fadeOut(); // fades out navigation and stops animation
        up = !up;
        } 
            else if (newscroll < mypos && up) {
                $('.social').stop().fadeIn(); // fades in icons and stops animation
                $('.header').stop().fadeIn(); // fades in navigation and stops animation
                up = !up;
            }
    
    mypos = newscroll;

});
