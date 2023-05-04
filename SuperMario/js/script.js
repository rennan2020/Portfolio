const mario = document.querySelector('.mario');
const pipe = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500);
}

constloop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosiotion = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosiotion < 80){

        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition}px';

    }

}, 10)

document.addEventListener('keydown', jump);