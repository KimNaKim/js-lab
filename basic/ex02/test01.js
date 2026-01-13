//lambda 표현식 (expression) = 값으로 평가가 될 수 있는 코드 조각
//내부적으로 return값이 있어야 함
let a = function (x, y) {
  return x + y;
};
let b = a(10, 20);
console.log(a);
console.log(b);

let n1 = 10;
let b1 = 10 == n1;
console.log(b1);

let isSame = function (x, y) {
  return x == y;
};
let b2 = isSame(10, 20);
console.log(b2);

//람다 표현식 = 함수라는 값을 만들어내는 표현식
//함수를 내부에 담고 있는 변수는 모두 람다라고 표현
//람다로 만들기 전의 기본 형태
let m22 = function () {};

//변수에 람다식으로 함수를 담는 방법들
let m33 = () => 1;
let r3 = m33();
console.log(r3);

let lambAdd = (x, y) => x + y;
let rAdd = lambAdd(5, 10);
console.log(rAdd);
