//menu





//slides

document.addEventListener('DOMContentLoaded', function () {
    var stream = document.querySelector('.global-slide');
    var items = document.querySelectorAll('.item-slide');
    var prev = document.querySelector('.left');
    var next = document.querySelector('.right');

    prev.addEventListener('click', function () {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.item-slide');
    });

    next.addEventListener('click', function () {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.item-slide');
    });
});