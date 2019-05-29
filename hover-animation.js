$(document).ready(function(){

    $(".eph-insignia").hide();

    $(".linkedin-prof-pic").hover(function(){
        $(".linkedin-prof-pic").fadeOut();
        $(".eph-insignia").fadeIn();
    });    

    $(".linkedin-prof-pic").mouseleave(function(){
        $(".eph-insignia").fadeOut();
        $(".linkedin-prof-pic").fadeIn();
    });    

});