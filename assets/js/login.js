document.addEventListener('DOMContentLoaded', function () {
    var formsubmit = document.getElementById('id_logmein');
    formsubmit.addEventListener('click', handleClickOrTouchsubmit);
    formsubmit.addEventListener('touchstart', handleClickOrTouchsubmit);

    function handleClickOrTouchsubmit(e) {
        e.preventDefault();
        var form = document.getElementById('id_login_form');
        var url = '../pages/login.php';
        var method = 'POST';
        var formData = new URLSearchParams(new FormData(form)).toString();
        if (form.checkValidity()) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 400) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.status === 'success') {
                        window.location = response.destination;
                    } else {
                        login_error = document.getElementById('login_error');
                        login_error.innerHTML = response.destination;
                    }
                }
            };
            xhr.send(formData);
        } else {
            form.classList.add('was-validated');
        }
    }
});

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    eyeIcon.classList.toggle('bi-eye');
    eyeIcon.classList.toggle('bi-eye-slash');
});