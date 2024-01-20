function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function showContactInfo() {
    document.getElementById('email-placeholder').innerText = 'Email: example@email.com';
    document.getElementById('phone-placeholder').innerText = 'Phone: +123 456 7890';
    document.getElementById('address-placeholder').innerText = 'Address: 123 Street, City, Country';
}

// Callback function to be executed after successful captcha verification
function onCaptchaVerify(response) {
    if (response) {
        showContactInfo();
    } else {
        // Handle verification failure
        alert('Captcha verification failed. Please try again.');
    }
}