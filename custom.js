let image = document.querySelector('.loder');
let hide = document.querySelector('.pre-loder');
let center2 = document.querySelector('.center2')
let play = document.querySelector('.play1');
let pause = document.querySelector('.pause1');
let center = document.querySelector('.center');
window.addEventListener('load',function (event) {
    event.preventDefault()
    hide.classList.add('ppp')

})
play.addEventListener('click',function () {
    if (play.classList.contains('switch1')) {
        play.classList.remove('switch1');
        Video.pause();
    }else{
    play.classList.add('switch1');
    Video.play();
    }
})