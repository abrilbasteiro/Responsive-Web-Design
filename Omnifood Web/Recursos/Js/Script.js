$(document).ready(function() {
   
    /*STICKY NAVIGATION*/
    $(".js--section-features").waypoint(function(direction){
            if (direction == "down") {
            $("nav").addClass("sticky");
        
            } else {
            $("nav").removeClass("sticky");}

        }, {offset: '60px'}
    )

    
    /*SCROLL ON BUTTONS*/
    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top},1000);
    });

    $(".js--scroll-to-start").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
        
    });
    

    /*ANIMATIONS ON SCROLL*/
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animated");} , {offset: "50%"}
               
    );

    $(".js--wp-2").waypoint(function (direction) {
        $(".js--wp-2").addClass("animated");} , {offset:"50%"}
        
    );

    $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animated");} , {offset: "50%"}
               
    );

    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animated");} , {offset: "50%"}
               
    );

    /*MOBIL NAV*/
    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav")
        var icon = $(".js--nav-icon ion-icon")
        /*cambiar de icono*/
        if (icon.attr("name") == "close") {
            icon.attr("name", "menu");
         } 
         else {
            icon.attr("name", "close")
         }

        nav.slideToggle(200)

    
    })



})