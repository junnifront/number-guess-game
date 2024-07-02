//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 down!
//랜덤번호가 > 유저번호 up!
//reset버튼을 누르면 게임이 리셋된다.
//3번의 기회를 다쓰면 게임이 끝난다. (더이상 추측 불가. 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면 알려준다. 기회를 깎지 않는다.


let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 3;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];
let image = document.getElementById("image");
let answerArea = document.getElementById("answer-area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value=""});


function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답: ", computerNum);
    answerArea.textContent = `The answer: ${computerNum}`;
}

pickRandomNum();

function play() {
    let userValue = Number(userInput.value);

    if(userValue < 1 || userValue > 100) {
        resultArea.textContent = "1에서 100 사이 숫자를 입력해주세요";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요"
        return;
    }

    history.push(userValue);
    console.log(history);

    chances--;
    chanceArea.textContent = `남은 기회 : ${chances}`;
    console.log("chance", chances);

    if(userValue < computerNum) {
        resultArea.textContent = "UP!!!"
    } else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!!"
    } else {
        resultArea.textContent = "YOU GUESSED IT!!!"
        gameOver = true;
    }


    if(chances < 1 && userValue !== computerNum){
        gameOver = true;
        resultArea.textContent = `틀렸습니다. 숫자는 ${computerNum}이었습니다.`;
    }

    if(gameOver){
        playButton.disabled = true;
    }
}

function reset() {
    //user input 창이 깨끗하게 정리되고
    userInput.value = "";
    //새로운 번호가 생성되고
    pickRandomNum();
    chances = 3;
    //결과
    resultArea.textContent = "결과값이 입력됩니다."
    playButton.disabled = false;
    gameOver = false;
    history = [];
    chanceArea.textContent = `남은 기회 : ${chances}`;

}