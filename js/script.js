var toggleMenu = document.getElementById("toggle_menu");
var menuEl = document.getElementById("header");

toggleMenu.addEventListener('click', function() {
    this.classList.toggle('menu_active');
    menuEl.classList.toggle('menu_active');

})