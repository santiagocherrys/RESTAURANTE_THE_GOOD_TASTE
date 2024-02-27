const logout_btn = document.querySelector('#logout-btn');
const gallery_menu_btn = document.querySelector('#gallery-menu-btn');

logout_btn.addEventListener('click', ()=>{
    /* Se redirige a login */
    alert("se termina la sesion");
    window.location.href= "/login/login.html";
});

gallery_menu_btn.addEventListener('click', ()=>{
    /* Se redirige a galeria y carta */
    window.location.href= "/gallery-and-cart/index.html";
});