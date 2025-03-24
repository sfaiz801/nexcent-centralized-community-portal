function menuToggle() {
    const mobileNav = document.querySelector('.mobile-nav');
    if (window.getComputedStyle(mobileNav).display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none";
    }
}
