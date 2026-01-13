//함수(상태변환 x)
//f(x) = x+1
//js의 객체들은 모두 1급 객체(클래스를 통하지 않아도 접근이 가능)
//그렇기 때문에 해당 함수(행위)를 단독으로 변수에 담는 것이 가능
//자바는 불가능(무조건 클래스를 담아야 함)
function f(x) {
  return x + 1;
}

let a = f(3);
console.log(a);
console.log(f(5));

//쉽지만 불안함(계산 시에 타입 검사가 안 됨)
function add(x, y) {
  return x + y;
}

let num = add(5, "십");
console.log(num);
