let list = [1, 2, 3, 4, 5];

//for문을 돌면서 새로운 리스트를 만들기(깊은 복사)
let newList = list.map((i) => i * 2);
console.log(list);
console.log(newList);
