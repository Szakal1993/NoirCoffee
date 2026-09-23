document.addEventListener("DOMContentLoaded", () => {

    const burger = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".menu");
    const mobileLinks = document.querySelectorAll(".menu a");

    burger.addEventListener("click", () => {

        burger.classList.toggle("active");
        mobileMenu.classList.toggle("active");

    });


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            burger.classList.remove("active");
            mobileMenu.classList.remove("active");

        });

    });


    const year = document.querySelector("#year");

    year.textContent = new Date().getFullYear();

});