var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click',function(){
    menuSide.classList.toggle('expandir')
})