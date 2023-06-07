score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeyup = function (e) {
    if (e.key === 'Enter' ) {
        bunny = document.querySelector('.bunny');
        bunny.classList.add('animateBunny');
        setTimeout(() => {
            bunny.classList.remove('animateBunny')
        }, 900);
    }
    if (e.key == 'Right') {
        bunny = document.querySelector('.bunny');
        bunnyx = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('left'));
        bunny.style.left = bunnyx + 112 + "px";
    }
    if (e.key == 'Left') {
        bunny = document.querySelector('.bunny');
        bunnyx = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('left'));
        bunny.style.left = (bunnyx - 112) + "px";
    }
}


setInterval(() => {
    bunny = document.querySelector('.bunny');
    gameOver = document.querySelector('.gameover');
    obstacle = document.querySelector('.barrier');

    dx = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(bunny, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(barrier, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(barrier, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over!";
        barrier.classList.remove('barrierani');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(barrier, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            barrier.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "POINTS SCORED: " + score;
}