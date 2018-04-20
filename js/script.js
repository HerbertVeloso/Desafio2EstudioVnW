//ÂNCORA DINÂMICA
$('.navbar__link').click(function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);
});

//MENU RESPONSIVO
$(".navbar__bars").click(function() {
    if($(".navbar__links").hasClass("open")) {
        $(".navbar__links").hide(400).removeClass("open");
    }
    else {
        $(".navbar__links").show(400).addClass("open");
    }
});

//FUNÇÃO CLICAR LINK DO MENU E ESCONDER
window.onresize=function() {
    getDimensions();
}
function getDimensions() {
    var largura = window.innerWidth;
    if(largura <= 768){
        $(".navbar__links").hide(0).removeClass("open");
        $(".navbar__link").click(function() {
            $(".navbar__links").hide(400).removeClass("open");
        });
    }
    else{
        $(".navbar__links").show(0);
        $(".navbar__link").click(function() {
            $(".navbar__links").show(0).addClass("open");
        });
    }; 
}
getDimensions();