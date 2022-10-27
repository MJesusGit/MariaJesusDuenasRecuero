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