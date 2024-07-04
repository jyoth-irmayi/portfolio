const uname = document.getElementById('name');
const uemail = document.getElementById('email');
const usubject = document.getElementById('subject');
const umessage = document.getElementById('message');
const form = document.getElementById('submit-form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const subject_error = document.getElementById('subject_error');
const message_error = document.getElementById('message_error');

form.addEventListener('submit', (e) => {
    var email_check = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

    if (uname.value == '' || uname.value == null) {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    } else {
        name_error.innerHTML = "";
    }

    if (!uemail.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Enter valid email";
    } else {
        email_error.innerHTML = "";
    }

    if (usubject.value ==='' || usubject.value == null) {
        e.preventDefault();
        subject_error.innerHTML = "Subject is required";
    } else {
        subject_error.innerHTML = "";
    }

    if (umessage.value == '' || umessage.value == null) {
        e.preventDefault();
        message_error.innerHTML = "Enter a message";
    } else {
        message_error.innerHTML = "";
    }
});
