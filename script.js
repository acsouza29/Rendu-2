document.addEventListener("DOMContentLoaded", function () {
    function toggleMenu() {
        document.querySelector(".menu").classList.toggle("open");
    }

    document.querySelector(".burger-icon").addEventListener("click", toggleMenu);

    document.querySelector(".close-btn").addEventListener("click", toggleMenu);

    var draggableElems = document.querySelectorAll('.draggable');
    var draggies = [];

    for (var i = 0; i < draggableElems.length; i++) {
        var draggableElem = draggableElems[i];
        var draggie = new Draggabilly(draggableElem, {});
        draggies.push(draggie);
    }
});
