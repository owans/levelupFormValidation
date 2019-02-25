// Access DOM elements
const passwordInput = document.getElementById('password-input');
const confirmPassword = document.getElementById('confirm-password');
const errorMsg = document.getElementById('error-message');
const fullNameInput = document.getElementById('full-name');
const submitButton = document.getElementById('submit-button');
const sidebar = document.getElementById('sidebar');
const commentForm = document.getElementById('comment-form');

//During submission of user details the form resets and welcome the user with his/her name on the side bar
submitButton.addEventListener('click', ($event) => {
  $event.preventDefault()
  sidebar.textContent = 'Hi there, ' + fullNameInput.value;
  commentForm.reset();
});

//Validate Pasword when user input characters between 6 and 12
passwordInput.addEventListener('input', ($event) => {
    if($event.target.value.length >= 6 && $event.target.value.length <= 12){
        submitButton.removeAttribute('disabled');
    }else{
      submitButton.setAttribute('disabled', 'true');
    }
  });
