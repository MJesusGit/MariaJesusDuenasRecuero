/*Animacion menu responsive*/

addEventListener('DOMContentLoaded',() => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })

    }
})

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(links) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    links.className = "seleccionado";
}

//apartado de tabs-formacion
let tabheader = document.getElementsByClassName("tab-header")[0];
let tabIndicator= document.getElementsByClassName("tab-indicator")[0];
let tabbody = document.getElementsByClassName("tab-body")[0];

let tabsPane=  tabheader.getElementsByTagName("div");

for(let i=0; i<tabsPane.length;i++){
    tabsPane[i].addEventListener("click", function(){
        tabheader.getElementsByClassName("active")
[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabbody.getElementsByClassName("active")
[0].classList.remove("active");
    tabsBody[i].getElementsByClassName("div")
[i].classList.add("active");

       // tabIndicator.style.left = 'calc(calc(100%/4) * ${i})`

    });

}
