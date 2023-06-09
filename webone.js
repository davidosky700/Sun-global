

// Document is ready
$(document).ready(function () {
// Validate Username
$("#usercheck").hide();
let usernameError = true;
$("#usernames").keyup(function () {
	validateUsername();
});

function validateUsername() {
	let usernameValue = $("#usernames").val();
	if (usernameValue.length == "") {
	$("#usercheck").show();
	usernameError = false;
	return false;
	} else if (usernameValue.length < 3 || usernameValue.length > 10) {
	$("#usercheck").show();
	$("#usercheck").html("length of name must be between 3 and 25");
	usernameError = false;
	return false;
	} else {
	$("#usercheck").hide();
	}
}

// Validate Email
const email = document.getElementById("email");
email.addEventListener("blur", () => {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let s = email.value;
	if (regex.test(s)) {
	email.classList.remove("is-invalid");
	emailError = true;
	} else {
	email.classList.add("is-invalid");
	emailError = false;
	}
});

// Validate Password
$("#passcheck").hide();
let passwordError = true;
$("#password").keyup(function () {
	validatePassword();
});
function validatePassword() {
	let passwordValue = $("#password").val();
	if (passwordValue.length == "") {
	$("#passcheck").show();
	passwordError = false;
	return false;
	}
	if (passwordValue.length < 3 || passwordValue.length > 10) {
	$("#passcheck").show();
	$("#passcheck").html(
		"**length of number must be 10"
	);
	$("#passcheck").css("color", "red");
	passwordError = false;
	return false;
	} else {
	$("#passcheck").hide();
	}
}

// Validate Confirm Password
$("#conpasscheck").hide();
let confirmPasswordError = true;
$("#conpassword").keyup(function () {
	validateConfirmPassword();
});
function validateConfirmPassword() {
	let confirmPasswordValue = $("#conpassword").val();
	let passwordValue = $("#password").val();
	if (passwordValue != confirmPasswordValue) {
	$("#conpasscheck").show();
	$("#conpasscheck").html("**Password didn't Match");
	$("#conpasscheck").css("color", "red");
	confirmPasswordError = false;
	return false;
	} else {
	$("#conpasscheck").hide();
	}
}

// Submit button
$("#submitbtn").click(function () {
	validateUsername();
	validatePassword();
	validateConfirmPassword();
	validateEmail();
	if (
	usernameError == true &&
	passwordError == true &&
	confirmPasswordError == true &&
	emailError == true
	) {
	return true;
	} else {
	return false;
	}
});
});

//  const phoneInputField = document.querySelector("#phone");
//     const phoneInput = window.intlTelInput(phoneInputField, {
//      utilsScript:
//      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//    });

//  const info = document.querySelector(".alert-info");

// function process(event) {
//  event.preventDefault();

//  const phoneNumber = phoneInput.getNumber();

//  info.style.display = "";
//  info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
// }

// function getIp(callback) {
//  fetch('https://ipinfo.io/json?token=<your token>', { headers: { 'Accept': 'application/json' }})
//    .then((resp) => resp.json())
//    .catch(() => {
//      return {
//        country: 'us',
//      };
//    })
//    .then((resp) => callback(resp.country));
// }
