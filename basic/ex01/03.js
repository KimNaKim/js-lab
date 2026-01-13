//조건문과 반복문

let n1 = 10;

if (n1 == 10) {
  console.log("10입니다");
} else {
  console.log("10이 아닙니다.");
}

//반복문(자바와 완전히 같음)
list = [1, 2, 3, 4];
for (let i = 0; i < 4; i++) {
  console.log(list[i]);
}
console.log("----------------------------");
//for-each문
for (const element of list) {
  console.log(element);
}
