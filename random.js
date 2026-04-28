const $ex = document.querySelector("#ex");
const $level_container = document.querySelector(".level-container");
const $quiz = document.querySelector(".quiz");
const $btn = document.querySelector("#btn");
const $result = document.querySelector("#result");
const $hearts = document.querySelectorAll("#heart");
const $replay = document.querySelector("#replay");

let count = 3;
let randomNum;
let maxNum;

$replay.addEventListener("click", () => {
    location.reload();
});

function levelSelect(level) {
    switch (level) {
        case 1:
            maxNum = 10;
            break;
        case 2:
            maxNum = 50;
            break;
        case 3:
            maxNum = 100;
            break;
    }
    randomNum = Math.floor(Math.random() * maxNum) + 1;

    $ex.innerHTML = `1부터 ${maxNum}까지 중 랜덤한 숫자를 <strong>UP & DOWN</strong> 힌트를 이용해 맞춰보세요!`;

    $level_container.classList.add("sr-only");
    $quiz.classList.remove("sr-only");
}

function random(num) {
    count--;
    $result.textContent = "";

    if (num === randomNum) {
        $result.textContent = "정답🎉";
        $replay.classList.remove("sr-only");
        $btn.disabled = true;
        return;
    }
    if (count === 0) {
        $result.textContent = `실패, 정답은 ${randomNum}!`;
        $hearts[count].textContent = "💥";
        $replay.classList.remove("sr-only");
        $btn.disabled = true;
        return;
    }

    let hint = num > randomNum ? "DOWN" : "UP";
    $result.textContent = "힌트: " + hint;
    $hearts[count].textContent = "💥";
}

function isNum() {
    const $inputNum = document.querySelector("#inputNum").value.trim();
    if (
        isNaN(+$inputNum) ||
        +$inputNum < 1 ||
        +$inputNum > maxNum ||
        $inputNum === ""
    )
        return alert(`1부터 ${maxNum}까지의 숫자를 입력하세요`);

    let num = +$inputNum;

    random(num);
}
