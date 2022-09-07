// 배열 리터럴
// 0개 이상의 요소를 쉼표로 구분하여 대괄호([])로 묶는다
// 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재한다

// 예제1
const arr1 = [1, 2, 3];
console.log(arr1.length);
// 3

// 예제2
const arr2 = [];
console.log(arr2.length);
// 0

// 예제3
const arr3 = [1, , 3]; /* 희소 배열 */
// 희소 배열의 length는 배열의 실제 요소 개수봗 언제나 크다
console.log(arr3.length);
// 3
console.log(arr3);
// [ 1, <1 empty item>, 3 ]
console.log(arr3[1]);
// undefined
// 프로퍼티 키가 1인 프로퍼티가 존재하지 않기 때문
