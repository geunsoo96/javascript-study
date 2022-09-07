// 배열 요소의 참조
// 참조 --> 객체의 실제 위치를 가리키는 포인터

const arr1 = [1, 2];
console.log(arr1[0]);
// 1
// 인덱스가 0인 요소를 참조
console.log(arr1[1]);
// 2
// 인덱스가 1인 요소를 참조

const arr2 = [1, 2];
console.log(arr2[2]);
// undefined
// 인덱스가 2인 요소를 참조 --> 존재하지 않음

// ※희소 배열
const arr3 = [1, , 3];
// 인덱스가 1인 요소가 존재하지 않는다.
console.log(arr3[1]);
// undefined
console.log(arr3[3]);
// undefined
console.log(Object.getOwnPropertyDescriptors(arr3));
/*  '0': { value: 1, writable: true, enumerable: true, configurable: true },       
  '2': { value: 3, writable: true, enumerable: true, configurable: true },       
  length: { value: 3, writable: true, enumerable: false, configurable: false }  */
// 인덱스가 1인 요소가 존재하지 않아서 출력X
