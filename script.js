
$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

const carrosDestaques = document.querySelector("#carros_destaques");

document.querySelector(".direita").onclick = () => {
    carrosDestaques.scrollBy({
        left: 520,
        behavior:"smooth"
    });
};

document.querySelector(".esquerda").onclick = () => {
    carrosDestaques.scrollBy({
        left: -520,
        behavior: "smooth"
    });
}
});