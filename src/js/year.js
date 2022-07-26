document.addEventListener('DOMContentLoaded', () => {
    var disYear = document.querySelector('#lblYear');
    var disYear2 = document.querySelector('#lblYear2');
    var lblYear = new Date().getFullYear();
    disYear.textContent = parseInt(lblYear);
    disYear2.textContent = parseInt(lblYear);


})

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
btn.addEventListener('click', () => {

    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')

})