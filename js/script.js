var toggleMenu = document.getElementById('toggle_menu');
var menuEl = document.getElementById('header');
var navLinks = document.querySelectorAll('.nav_link');


toggleMenu.addEventListener('click', function() {
    document.body.classList.toggle('menu_active');
})

navLinks.forEach(element => {
    element.addEventListener('click', function() {
        document.body.classList.toggle('menu_active');
    })
});