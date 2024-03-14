// ! mobile-nav-button

const mobileNavButton = document.getElementById('mobile-nav');
const navMenu = document.getElementById('nav-menu');

mobileNavButton.addEventListener('click', function () {
    mobileNavButton.classList.toggle('mobile-nav-button-active');
    navMenu.classList.toggle('hidden');
});

// ! navbar 
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// ! Profile
const profileButton =  document.getElementById('profile');

// ! Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById("openModal");

// Get the <span> element that closes the modal
const span = document.getElementById("closeModal");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.classList.remove('hidden');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.classList.add('hidden');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
}



