const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    console.log(document.addEventListener('keydown',jump))
}


document.addEventListener('keydown',jump );