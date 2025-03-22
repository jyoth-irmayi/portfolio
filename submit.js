document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('submit-form');
    const uname = document.getElementById('name');
    const uemail = document.getElementById('email');
    const usubject = document.getElementById('subject');
    const umessage = document.getElementById('message');

    const name_error = document.getElementById('name_error');
    const email_error = document.getElementById('email_error');
    const subject_error = document.getElementById('subject_error');
    const message_error = document.getElementById('message_error');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        let valid = true;
        const email_check = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

        // Validation checks
        if (uname.value.trim() === '') {
            name_error.innerHTML = "Name is required";
            valid = false;
        } else {
            name_error.innerHTML = "";
        }

        if (!uemail.value.match(email_check)) {
            email_error.innerHTML = "Enter a valid email";
            valid = false;
        } else {
            email_error.innerHTML = "";
        }

        if (usubject.value.trim() === '') {
            subject_error.innerHTML = "Subject is required";
            valid = false;
        } else {
            subject_error.innerHTML = "";
        }

        if (umessage.value.trim() === '') {
            message_error.innerHTML = "Enter a message";
            valid = false;
        } else {
            message_error.innerHTML = "";
        }

        // Stop submission if any validation fails
        if (!valid) return;

        // Prepare data for Google Apps Script
        const data = new URLSearchParams({
            name: uname.value,
            email: uemail.value,
            subject: usubject.value,
            message: umessage.value
        });

        // Replace with your correct Google Apps Script URL
        fetch('https://script.google.com/macros/s/AKfycbygJoolisTC0Zac7RU9igumMg_rm22bE6VpZC8MeUcEyccoZ6pU0lX8TqGnHudGFy17/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === "success") {
                    alert("Message sent successfully!");
                    form.reset(); // Clear form after successful submission
                } else {
                    alert("Error sending message: " + data.message);
                }
            })
            .catch(error => {
                alert("Failed to send message. Please try again later.");
                console.error("Error:", error);
            });
    });
});
