
const carrosDestaques = document.querySelector("#carros_destaques");
document.querySelector(".direita").onclick = () => {
    carrosDestaques.scrollBy({
        left: 520,
        behavior:"smooth"
    });
}

document.querySelector(".esquerda").onclick = () => {
    carrosDestaques.scrollBy({
        left: -520,
        behavior: "smooth"
    });
}
    