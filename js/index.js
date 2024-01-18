let buttons = document.querySelectorAll(".foodIcon");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let targetMenuId = button.getAttribute("data-target");
        let targetMenu = document.getElementById(targetMenuId);

        targetMenu.classList.toggle("visible");
    });
});






