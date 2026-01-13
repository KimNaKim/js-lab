//컬렉션과 오브젝트

// 1. 컬렉션
let list = [1, 2, "삼", 4];
console.log(list);

console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);

list[1] = "이";
console.log(list);

// 2. 오브젝트
let user = {
  no: 1,
  name: "홍길동",
  phone: "01012345678",
  hobby: ["축구", "농구"],
};
//JSON의 object와는 key 값의 쌍따옴표 차이밖에 없음
console.log(user);
console.log(user.hobby);
