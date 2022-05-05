$( document ).ready(function() {
    

$(function() {
    $(".button1")
        .mouseover(function() { 
            var src = $('.start-image').attr("src").match(/[^\.]+/) + "-on.png";
            $('.start-image').attr("src", src);
        })
        .mouseout(function() {
            var src = $('.start-image').attr("src").replace("-on.png", ".png");
            $('.start-image').attr("src", src);
        });
});

});