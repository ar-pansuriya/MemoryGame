let started = false;
let h3 = document.querySelector('h3');
let level = 0;
let boxes = ["brown", "burlywood", "olive", "palevioletred"];
let gameseq = [];
let usereq = [];

// keypress to start game
window.addEventListener('keypress', () => {
    if (started == false) {
        started = true;
        levelup();
    }
});
// glow boxes functionality
function glow(v) {
    v.classList.add('glow');
    setTimeout(() => {
        v.classList.remove('glow');
    }, 100);
}
//level up functionality
function levelup() {
    usereq = [];
    level++;
    h3.innerHTML = `Level ${level}`;
    // generate random index for glow boxes
    let randomindex = Math.floor(Math.random() * 4);
    let randomcolor = boxes[randomindex];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    glow(randombtn);
}
//for check answer
function checkans(indx) {
    if (usereq[indx] === gameseq[indx]) {
        if (usereq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerHTML = `Game Over !! Press Any Key To Start Game`;
        reset();
    }
}
//reset all Functionality
function reset() {
    usereq = [];
    gameseq = [];
    started = false;
    level = 0;
}
//for user click btn functionality
let allbtn = document.querySelectorAll('.box');
allbtn.forEach((vi) => {
    vi.addEventListener('click', btnclick);
});

function btnclick() {
    if (started) {
        let btn = this;
        glow(btn);
        let usercolor = btn.getAttribute('id');
        usereq.push(usercolor);
        checkans(usereq.length - 1);
    }
};

