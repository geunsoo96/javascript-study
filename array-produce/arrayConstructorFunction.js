// array 생성자 함수

// 예제1
const arr = new Array(10);
console.log(arr);
// [ <10 empty items> ]
console.log(arr.length);
// 10

// 예제2
console.log(Object.getOwnPropertyDescriptors(arr));
/* {
  length: { value: 10, writable: true, enumerable: false, configurable: false }  
} */
// 설명충이 출력됨.

// 예제3
// 배열의 요소는 최대 0포함 (4294967295)개의 양의 정수를 가질 수 있음.
// 음수거나 4294967596이상부턴 에러발생
new Array(4294967295);
// 배열은 요소를 최대 4,294,967,295개 가질수 있다.

// Array 생성자 함수는 new연산자와 함께 호출하지 않더라도, 배열을 생성하는 생성자 함수로 동작함.
console.log(Array());
// []

console.log(Array(1, 2, 3));
// [1,2,3]
// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성

console.log(Array({}));
// [ {} ]
// 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성

// 까먹었어서 적어두는 기본 생성자 함수
// 객체를 생성하는 역할을 하는 함수임
// object 생성자 함수 예제
// function Teacher(name, age, subject) {
//   (this.name = name),
//     (this.age = age),
//     (this.subject = subject),
//     (this.teach = function (student) {
//       console.log(`${student}에게 ${this.subject}를 가르칩니다`);
//     });
// }
// const jay = new Teacher("jay", 30, "javascript");
// console.log(jay);
// jay.teach("fran");

// console.log(jay.constructor);
// console.log(jay instanceof Teacher);

// const jay2 = Teacher("jay", 30, "Javascript");
// console.log(jay2);
// console.log(age);
