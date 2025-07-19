// Hide .image initially
document.querySelector('.image').style.display = 'none';

// Toggle sidebar and icons
document.querySelector('.hamburger').addEventListener("click", () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebarGo');
    const ham = document.querySelector('.ham');
    const image = document.querySelector('.image');
    if (sidebar.classList.contains('sidebarGo')) {
        ham.style.display = 'inline';
        image.style.display = 'none';
    } else {
        ham.style.display = 'none';
        setTimeout(() => {
            image.style.display = 'inline';
        }, 300);

    }
});
