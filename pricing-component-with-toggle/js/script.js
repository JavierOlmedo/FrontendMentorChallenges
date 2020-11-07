const toogle = document.getElementById('toggle');
const flexy = document.getElementById('flexy');

toogle.addEventListener('change', (e) => {
    flexy.classList.toggle('show-monthly');
});