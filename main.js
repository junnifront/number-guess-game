//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    if(userValue < computerNum) {
        resultArea.textContent = "UP!";
    }else if(userValue> computerNum) {
        resultArea.textContent = "DOWN!";
    }else {    
        resultArea.textContent = "COLLECT!";
    }
}

pickRandomNum();