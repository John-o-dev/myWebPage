// será uma função que será chamada no scroll quando a página estiver pronta
var loadImages;

// quando a página estiver pronta
$(document).ready(function(){

    // suavizar transição da aparição da imagem
    $(".lazy-img img").on('load', function(){
        $(this).addClass("loaded");
    })

    $(document).on("scroll", function(){
        loadImages();
        
        //console.log("Scroll na página!");
        /*
            // pego a imagem
        var image = $(".lazy-img img");
            // pego o valor do atributo data-url
        url = image.data("url");
            // seto o atributo src de img com o que peguei de data-url
        image.attr("src", url);
        */
    });

    // substitui o src da imagem pelo valor de  data-url
    (loadImages = function(){
        $.each($(".lazy-img"), function(){
            var block = $(this);
            var image = block.find("img");

            if(isOnScreen(block)){
                var url = image.data("url");

                // prevem da imagem ser carregada constantemente
                if(image.attr("src") != url){
                    image.attr("src", url);
                };
            }
        });
    })();
});

// faz os calculos para saber se a imagem está na tela
function isOnScreen(element){
    var win = $(window);

    var screenTop = win.scrollTop();
    var screenBottom = screenTop + win.height();

    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();

    return elementBottom > screenTop && elementTop < screenBottom;
}