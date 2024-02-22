window.onscroll = function () {
    const header = document.querySelector('nav');
    const ulElement = document.querySelector('#target-ul');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        ulElement.classList.remove('bg-background');
        ulElement.classList.remove('border-gray-500');
        ulElement.classList.remove('border');
    } else {
        header.classList.remove('navbar-fixed');
        ulElement.classList.add('bg-background');
        ulElement.classList.add('border-gray-500');
        ulElement.classList.add('border');
    }
}



