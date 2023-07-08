console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form has been submitted successfully!");
}

function alertUser(){
	alert('You are as cool as the cat B)')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('#cat-photo')

img.addEventListener('mouseover', alertUser)