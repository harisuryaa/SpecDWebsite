document.querySelector(".play-btn").addEventListener("click", () => {
    document.querySelector(".hero-popup1").classList.add("on-popup");
    document.body.style.overflow = 'hidden';
});

document.querySelector(".popup-close-btn").addEventListener("click", () => {
    document.querySelector(".hero-popup1").classList.remove("on-popup");
    document.body.style.overflow = 'auto';
});

document.querySelector(".hero-popup1").addEventListener("click", () => {
    document.querySelector(".hero-popup1").classList.remove("on-popup");
    document.body.style.overflow = 'auto';
});

document.querySelector(".project-start-btn").addEventListener("click", () => {
    document.querySelector(".project-popup").classList.add("on-popup");
});