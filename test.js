function findOppositeNumber(n, inputNumber) {
  return inputNumber > n / 2 ? inputNumber - n / 2 : inputNumber + n / 2;
}
// console.log(findOppositeNumber(10, 6));

function merge2String(s1, s2) {
  let result = "";
  let i = 0;
  for (i; i < Math.min(s1.length, s2.length); i++) {
    result += s1[i] + s2[i];
  }
  result += s1.length > s2.length ? s1.substr(i) : s2.substr(i);
  return result;
}
// console.log(merge2String("abc", "1234"));

let input = document.getElementById("input");
let result, guesses;
function newGame() {
  result = Math.floor(Math.random() * 10) + 1;
  guesses = 3;
  document.getElementById(
    "message"
  ).innerHTML = `Bạn còn ${guesses} lượt dự đoán!`;
  document.getElementById(
    "history"
  ).innerHTML = `<h2 class="center">Lịch sử</h2>`;
}

function showResult() {
  if (guesses <= 0) {
    document.getElementById(
      "message"
    ).innerHTML = `Bạn đã hết lượt. Hãy chơi lại!`;
    input.value = "";
    return 0;
  }
  if (isNaN(input.value)) {
    document.getElementById("message").innerHTML = `Vui lòng nhập số!`;
  } else {
    guesses--;
    document
      .getElementById("history")
      .insertAdjacentHTML("beforeend", `<p class="center">${input.value}</p>`);
    if (input.value == result) {
      document.getElementById(
        "message"
      ).innerHTML = `Chúc mừng bạn đã đoán chính xác!`;
    } else {
      if (guesses == 0) {
        document.getElementById(
          "message"
        ).innerHTML = `Rất tiếc, bạn đã sai và hết lượt. Kết quả là ${result}!`;
      } else {
        document.getElementById(
          "message"
        ).innerHTML = `Rất tiếc, bạn đã sai. Bạn còn ${guesses} lượt.`;
      }
    }
  }
  input.value = "";
}

document.getElementById("submit").onclick = () => {
  if (input.value != "") {
    showResult();
  }
};
input.onkeydown = (event) => {
  if (event.key == "Enter" && input.value != "") {
    showResult();
  }
};
document.getElementById("reset").onclick = () => {
  newGame();
  input.value = "";
};
newGame();
