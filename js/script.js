const input = document.querySelectorAll('.input');
const container = document.querySelectorAll('.formfields');
const visBtn = document.getElementById('visBtn');
const password = document.getElementById('password');
const logInBtn = document.getElementById('logInBtn');
const passwordHelp = document.getElementById('passwordHelp');
const pwLabel = document.getElementById('pwLabel');


//When page loads, check if there's autofill data in order to show the label and text on the form properly
for(i = 0; i < input.length; i++){	
	if(input[i].value){		
		container[i].classList.add('active');
	};
};

//Input field functionality 
for(i = 0; i < input.length; i++){
	(function(j){
		input[i].addEventListener('focus', () => {
			container[j].classList.add('active');
		});
		input[i].addEventListener('blur', () => {
			if(!input[j].value){
				container[j].classList.remove('active');
			};
		});
	})(i);
};

//Show & hide password
visBtn.addEventListener('click', () => {
	visBtn.classList.toggle('fa-eye');
	visBtn.classList.toggle('fa-eye-slash');
	visBtn.classList.toggle('text-muted');
	if(password.type === "password"){
		password.type = "text";
	} else {
		password.type = "password";
	};
});

//Link 'wrong password' message to 'Log In' button
logInBtn.addEventListener('click', () => {
	if(passwordHelp.style.display === "none" && password.value){
		passwordHelp.style.display = "block";
		pwLabel.style.color = "#FF5555";
		pwLabel.style.fontSize = "0.8rem";

	} else {
		passwordHelp.style.display = "none";
		pwLabel.style.color = "#1D2951";
		pwLabel.style.fontSize = "0.9rem"
	};
});