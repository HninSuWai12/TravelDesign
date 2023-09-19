var hambuger = document.getElementById('hambuger');
var menu = document.getElementById('nav-bar');
var icon = document.querySelector('.hambuger i')
hambuger.addEventListener('click', function() {
    menu.classList.toggle('active');
    var isOpen = menu.classList.contains('active');
    icon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';

});