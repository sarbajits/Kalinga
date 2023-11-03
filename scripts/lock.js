// var iframe = document.getElementById('form_google');

// function reloadIframe() {
//     iframe.src = iframe.src;  // Reload the iframe
// }


document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        lock();
    }
});

function checkPasswordAndRemoveOverlay() {
    const password = document.getElementById('passwordInput').value;

    // Replace 'your_password' with your actual password
    if (password === 'ss') {
        document.getElementById('overlay').style.zIndex = -100;
    } else {
        // alert('Incorrect password. Please try again.');
    }
}

function checkPasswordAndRefresh() {
    const password = document.getElementById('passwordInput').value;

    // Replace 'your_password' with your actual password
    if (password === 'ss') {
        location.reload();
        password === "";
    } else {
        // alert('Incorrect password. Please try again.');
    }
}

function lock() {
    document.getElementById('passwordInput').value="";
    document.getElementById('overlay').style.zIndex = 999;
}

// lock();