// Array.push
// 인수로 전달받은 모든 값을 원본배여르이 마지막 요소로 추가하고 변경된 length 프로퍼티 값을 반환한다.
// 원본 배열을 직접 견경한다

const arr1 = [1, 2];

let result = arr1.push(3, 4);
// result라는 변수는 3,4라는 요소를 마지막에 추가한 arr1이라는 변수를 가리킨다.
console.log(result);
// 요소를 추가하고 반환된 length값을 반환
// 4
console.log(arr1);
// [1,2,3,4]

const arr2 = [1, 2];
arr2[arr2.length] = 3;
// push와 동일한 처리
// 추가할 요소가 하나 뿐일때 더 효과적인 문법
console.log(arr2);
// [1,2,3]

const arr3 = [1, 2];
const newArr = [...arr3, 3, 4];
// 스프레드 문법
console.log(newArr);
// [1,2,3,4]
