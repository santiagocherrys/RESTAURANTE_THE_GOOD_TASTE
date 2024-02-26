console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');
const botonSendSingUp = document.getElementById('botonSendSingUp');
const botonSendLogIn = document.getElementById('botonSendLogIn');
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordLog = document.getElementById('passwordLog');
const emailLog = document.getElementById('emailLog');

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

/* Obtener datos del signup */
botonSendSingUp.addEventListener('click',()=>{
	console.log("nombre", name1.value);
	console.log("email", email.value);
	console.log("password", password.value);
})


/* Obtener datos del login */
botonSendLogIn.addEventListener('click',()=>{
	console.log("email Log: ", emailLog.value);
	console.log("password Log: ", passwordLog.value);
})

