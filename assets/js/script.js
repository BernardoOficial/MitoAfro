/* ABRIR E FECHAR MENU */

var icone = document.querySelector(".iconeMenuMobile");
var navMobile = document.querySelector(".navMobile");
var buttomMenuMobile = document.querySelector(".buttomMenuMobile");

icone.addEventListener("click", function () {
    navMobile.classList.add("navMobileAtivo");
    icone.classList.add("desativado");
    buttomMenuMobile.classList.add("ativo");
});

buttomMenuMobile.addEventListener("click", function () {
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

const link = document.querySelector('[data-link]');
link.addEventListener('click', scrollSuave);

function scrollSuave(evento) {

    evento.preventDefault()

    let section = document.querySelector('#section').offsetTop;

    let posYWindow = window.pageYOffset;
    let pos = posYWindow;

    let id = setInterval(animation, 1)

    function animation() {

        if (pos >= section) {
            clearInterval(id) // Para o setInterval
        }
        else {
            pos += 4;
            window.scrollTo(0, pos)
            // console.log(window.scroll(0, pos))
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

// ----Elemento HTML: ---
// <button data-link-desce>Clique para descer 100 pixels</button>

// const link = document.querySelector('[data-link-desce]');
// link.addEventListener('click', (evento) => {

//     evento.preventDefault();

//     // Vai descer 100px sempre em relação ao todo da página.
//     window.scroll(0, 100);
//     // window.scrollTo(0, 100);
// })
