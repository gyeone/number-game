const $btn = document.querySelector("#btn");
const $result = document.querySelector("#result");
const $hearts = document.querySelectorAll("#heart");
const $replay = document.querySelector("#replay");

let count = 3;
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

$replay.addEventListener("click", () => {
    location.reload();
});

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
    const $inputNum = document.querySelector("#inputNum").value;

    if (
        (typeof ($inputNum.trim() + 0) !== "number" &&
            $inputNum.trim() < 1 &&
            $inputNum.trim() > 100) ||
        $inputNum.trim() === ""
    ) {
        return alert("1부터 100까지의 숫자를 입력하세요");
    }
    console.log($inputNum);
    let num = +$inputNum.trim();

    random(num);
}
