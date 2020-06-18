
// выезжающее теги
let tags = document.querySelectorAll(".tegs-sho");
let left_panel = document.getElementById("left_panel");
let right_panel = document.getElementById("right_panel");
let arrow_hide_teg = document.getElementById("arrow_hide_teg");

for (let elem of tags) {
    elem.addEventListener("click", function() {
        left_panel.classList.toggle("menu_left_panel_activ");
    });
}

arrow_hide_teg.addEventListener("click", function() {
    left_panel.classList.remove("menu_left_panel_activ");
});

right_panel.onclick=function(e){
    let teg_but = e.target.closest('.tegs-sho');
    if(!teg_but){
        left_panel.classList.remove("menu_left_panel_activ");
    }
}

// конец выезжаюших тегов

// адвинка менюшка
let admin_but = document.getElementById("admin-but");
let menu_admin = document.getElementById("admin-menu");
let main_wrap = document.getElementById("menu_wrap");

admin_but.addEventListener("click", function() {
    menu_admin.classList.toggle("admin-menu-activ");
});

main_wrap.onclick=function(e){
    let admin_but_chec = e.target.closest('#admin-but');
    if(!admin_but_chec){
        menu_admin.classList.remove("admin-menu-activ");
    }
}
// конец менюшки