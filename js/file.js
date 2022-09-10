let character = document.querySelector(".character");
let block = document.querySelector(".block");
let score = document.querySelector("p .score");
let startBtn = k = document.querySelector(".start button")
let counter = 0;


startBtn.onclick = function () {
    document.querySelector(".start").classList.add("hide");
    block.style.animation = "move 2s infinite linear";
    setTimeout(function () {
        block.style.animation = "move 1s infinite linear";
    }, 2000)
}


document.querySelector("html").addEventListener("click", () => {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(() => {
        character.classList.remove("animate");
    }, 500)
})

let check = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft > 30 && blockLeft < 60 && characterTop > 330) {
        block.style.animation = "none"
        alert(`YOU LOSE TRY AGAIN YOUR SCORE IS : ${Math.floor(counter / 100)}`);
        counter = 0;
        block.style.animation = "move 1s infinite linear";

    } else {
        counter++;
        score.textContent = counter < 10 ? `0${Math.floor(counter / 100)}` : Math.floor(counter / 100);
    }
}, 10);