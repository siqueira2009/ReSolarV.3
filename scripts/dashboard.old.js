function toggleMenu() {
    let menu = document.getElementById('menu');
    let mainContent = document.getElementById('main-content');
    let menuIcon = document.getElementById('menuIcon');
    
    menu.classList.toggle('closed');
    
    // Opcional: animar o ícone
    if (menu.classList.contains('closed')) {
        menuIcon.style.transform = 'rotate(90deg)';
    } else {
        menuIcon.style.transform = 'rotate(0deg)';
    }
}