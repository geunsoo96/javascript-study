// Array.from
// 유사 배열 객체(array like object)또는 이터러블 객체(iterable object)를 인수로 전달받아 배열로 변환하여 반환한다.

// 유사 배열 객체를 변환하여 배열을 생성한다
console.log(Array.from({ length: 2, 0: "a", 1: "b" }));
// ['a','b']
// 배열이 두개이고, 첫번째가 문자열 a, 두번째가 문자열 b라는 뜻

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블
console.log(Array.from("hello"));
// ['h','e','l','l','o']

// length만 존재하는 유사배열객체를 전달하면 undefined 폭발
console.log(Array.from({ length: 3 }));
// [undefined, undefined, undefined]

// 두번째 인수로 전달한 콜백함수의 반환값으로 구성된 배열을 반환한다.
console.log(Array.from({ length: 3 }, (_, i) => i));
// [0,1,2]

// 유사 배열 객체와 이터러블 객체
/* 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고, length 프로퍼티를 갖는 객체를 말한다. 
유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다. */

// 유사 배열 객체
const arrayLike = {
  0: "apple",
  1: "banana",
  2: "orange",
  length: 3 /* <--- 이거 안쓰면 바로 밑에꺼도 출력이 안됨. */,
};

console.log(arrayLike);
// { '0': 'apple', '1': 'banana', '2': 'orange', length: 3 }

// 배열처럼 for문으로 순회하기
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
  // apple banana orange
}
