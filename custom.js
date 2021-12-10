let image = document.querySelector('.loder');
let center2 = document.querySelector('.center2')
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let center = document.querySelector('.center');
window.addEventListener('load',function () {
     image.classList.add('abc')
     center2.classList.add('ab')

})
pause.addEventListener('click',function () {
    video.pause();
})