/* ABRIR E FECHAR MENU */

var icone = document.querySelector(".iconeMenuMobile");
var navMobile = document.querySelector(".navMobile");
var buttomMenuMobile = document.querySelector(".buttomMenuMobile");

icone.addEventListener("click", function() {
    navMobile.classList.add("navMobileAtivo");
    icone.classList.add("desativado");
    buttomMenuMobile.classList.add("ativo");
});

buttomMenuMobile.addEventListener("click", function() {
    navMobile.classList.add("navMobile");
    navMobile.classList.remove("navMobileAtivo");
    icone.classList.add("iconeMenuMobile");
    icone.classList.remove("desativado");
    buttomMenuMobile.classList.add("buttomMenuMobile");
    buttomMenuMobile.classList.remove("ativo");

    icone.style.transition = "2s";
    buttomMenuMobile.style.transition = "2s";
})


/* SCROLL SUAVE */

function scrollSuave() {

    event.preventDefault()

    let section = document
        .querySelector('#section')

    let pos = 0;
    let id = setInterval(animation, 1)

    function animation() {
        if(pos == 630) {
            clearInterval(id) // Para o setInterval
        }
        else {
            pos += 2
            window.scroll(0, pos) 
            console.log(window.scroll(0, pos))
        }
    }
    
    
    // console.log(window.scroll)
    // O window.scroll se baseia em relação ao scroll da página.
    // console.log(section.offsetTop)
    //offsetTop significa a distância do elemento até o topo da página.

    //get attribute pega uma informação dentro de um elemento html
    // var id = .getAttribute('href');
    // console.log(id);

}