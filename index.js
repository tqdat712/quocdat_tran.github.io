$(".container-fluid").parent("nav").hover(
    function(){
        $(this).children('collapse').collapse('show');   
    }
)

, function() {
    $(this).children('collapse').collapse('hide');
}