let screen = document.getElementById("screen");
let currentValue = "0";
let operator = "";
let previousValue = "";

// 스크린에 띄우는 함수
function updateScreen() {
  // 길이 제한
  const maxLength = 15;
  if (currentValue.length > maxLength) {
    currentValue = currentValue.slice(0, maxLength);
  }
  screen.textContent = currentValue;
}

// 화면 초기화
function clearScreen() {
  currentValue = "0";
  operator = "";
  previousValue = "";
  updateScreen();
}

// 숫자 클릭하면 스크린에 띄우는 함수
function NumberClick(number) {
  if (currentValue === "0") {
    currentValue = number;
  } else {
    currentValue += number;
  }
  updateScreen();
}

// 연산자 클릭할 때 연산자 띄우는 함수
function OperatorClick(newOperator) {
  if (operator === "") {
    previousValue = currentValue;
    operator = newOperator;
    currentValue = "0";
  } else {
    previousValue = calculateResult();
    operator = newOperator;
    currentValue = "0";
  }
  updateScreen();
}

// 계산 결과값
function calculateResult() {
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentValue);

  switch (operator) {
    case "+":
      return (num1 + num2).toString();
    case "-":
      return (num1 - num2).toString();
    case "*":
      return (num1 * num2).toString();
    case "/":
      if (num2 === 0) {
        return "Infinity";
      }
      return (num1 / num2).toString();
    default:
      return currentValue;
  }
}

// 초기화 버튼 눌렀을 때 화면 초기화하는 이벤트
document.getElementById("CE").addEventListener("click", clearScreen);
// 계산 결과값 나오는 이벤트
document.getElementById("equal").addEventListener("click", function () {
  currentValue = calculateResult();
  operator = "";
  previousValue = "";
  updateScreen();
});



// 숫자 , 연산자 버튼을 클릭했을 떄 이벤트
for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener("click", function () {
    NumberClick(i.toString());
  });
}

document.getElementById("add").addEventListener("click", function () {
  OperatorClick("+");
});
document.getElementById("minus").addEventListener("click", function () {
  OperatorClick("-");
});
document.getElementById("multiply").addEventListener("click", function () {
  OperatorClick("*");
});
document.getElementById("divide").addEventListener("click", function () {
  OperatorClick("/");
});
