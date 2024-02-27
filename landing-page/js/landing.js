const logout_btn = document.querySelector('#logout-btn');

logout_btn.addEventListener('click', ()=>{
    /* Se redirige a login */
    alert("se termina la sesion");
    window.location.href= "/login/login.html";
})