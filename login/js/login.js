/* importaciones */
import { getUsers, newUser } from "../../api/api.js";


const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const botonSendSingUp = document.getElementById('botonSendSingUp');
const botonSendLogIn = document.getElementById('botonSendLogIn');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordLog = document.getElementById('passwordLog');
const emailLog = document.getElementById('emailLog');

document.addEventListener('DOMContentLoaded',()=>{
	/* Borrar los formularios */
	
})

/* Evento subir login */
loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			signupBtn.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

/* Evento sign-up */
signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')
		}
	});
});

/*Agregar usuario*/
botonSendSingUp.addEventListener('click',async ()=>{
	
	console.log("nombre", name1.value);
	console.log("email", email.value);
	console.log("password", password.value);

	const usuarioNuevo = {
		nombre: name1.value,
		email: email.value,
		password: password.value
	}

	/* Se agrega usuario a la base de datos */
	await newUser(usuarioNuevo);
	name1.value = "";
	email.value = "";
	password.value = "";
	alert('usuario creado con exito, ahora puede hacer login')

	/*Se borran datos*/
	

	/* Ir al login */
	/* loginBtn.click(); */
})


/*login */
botonSendLogIn.addEventListener('click', async ()=>{
	const usuarios = await getUsers();
	console.log("Los usuarios son: ", usuarios);

	/* Se hace filtro */

	const userFiltrado = usuarios.filter(buscarEmail).filter(buscarPassword);
	console.log("Los usuarios filtrados son:", userFiltrado);

	function buscarEmail(user){
		if(emailLog.value){
			return user.email === emailLog.value;
		}else{
			return user;
		}
	}

	function buscarPassword(user){
		if(passwordLog.value){
			return user.password === passwordLog.value;
		}else{
			return user;
		}
	}

	/* Revisar si un usuario está en la base de datos */
	if(userFiltrado.length > 0){
		alert('Usuario registrado, se dirige a vista LANDING PAGE');

	}else{
		alert('Usuario o contraseña incorrecta, ingrese de nuevo credenciales');
		emailLog.value = "";
		passwordLog.value = "";
	}

	console.log("email Log: ", emailLog.value);
	console.log("password Log: ", passwordLog.value);
})

