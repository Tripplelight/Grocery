/*function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
}*/

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".hamburger-menu");
    const sidebar = document.querySelector(".sidebar");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });
});

