let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);

let but = document.getElementById("themes");
let text_chenge_color = document.getElementById("themes_but_color");

but.addEventListener("click", tog_color);

function tog_color(){
    if (rootStyles.getPropertyValue('--color_1')=="rgb(8, 8, 8)"){
        root.style.setProperty('--color_1', 'rgb(255, 255, 255)');
        root.style.setProperty('--color_2', 'rgb(51, 51, 51)');
        root.style.setProperty('--placeholder_color', 'rgb(170, 170, 170)');
        text_chenge_color.innerText="темную"
    }else{
        root.style.setProperty('--color_1', 'rgb(8, 8, 8)');
        root.style.setProperty('--color_2', 'rgb(190, 190, 190)');
        root.style.setProperty('--placeholder_color', 'rgb(100, 100, 100)');
        text_chenge_color.innerText="светлую"
    }
};