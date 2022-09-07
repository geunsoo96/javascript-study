// 배열 요소의 추가와 갱신
// 객체 뿐만 아니라 배열에도 요소를 동적으로 추가 가능
// 존재하지 않는 인덱스를 사용해 값을 할당하면 새로운 요소가 추가됨 --> length 프로퍼티 값은 자동 갱신

const arr = [0];
arr[1] = 1;
// 인덱스 1번째 요소는 1을 가리킨다.
// --> 배열 요소의 추가

console.log(arr);
// [0, 1]
console.log(arr.length);
// 2
// 요소가 하나 추가됐기 때문에 2가 출력

arr[100] = 100;
// arr라는 배열에 인덱스값이 100번째인 요소에 숫자 100을 할당한다.
console.log(arr);
// [ 0, 1, <98 empty items>, 100 ]
console.log(arr.length);
// 여백에 출력된 <98 empty items>를 포함하여 기존 두개에서 99개가 추가 되었기 때문에 101이 출력됨
console.log(Object.getOwnPropertyDescriptors(arr));
/* {
  '0': { value: 0, writable: true, enumerable: true, configurable: true },       
  '1': { value: 1, writable: true, enumerable: true, configurable: true },       
  '100': { value: 100, writable: true, enumerable: true, configurable: true },   
  length: {
    value: 101,
    writable: true,
    enumerable: false,
    configurable: false
  }
} */
// 설명충 소환
arr[1] = 10;
console.log(arr);
// [ 0, 10, <98 empty items>, 100 ]
// 인덱스의 1번째 요소가 갱신이 되었기 때문에 위에 콘솔과 다르게 여기서는 1번째에 10이 출력됨.

const arr1 = [];
// arr1이라는 변수에 빈배열을 할당했다.
// 할당시 반드시 0이상의 정수(또는 정수형태의 문자열)을 사용해야함
arr1[0] = 1;
//arr1이라는 변수의 0번째 요소에 숫자 1을 할당
arr1["1"] = 2;
//arr1이라는 변수의 1번째 요소에 숫자 2을 할당
arr1["foo"] = 3;
// 완벽하게 문자라서 영향X
arr1.bar = 4;
// 프로퍼티임 --> 불가능
arr1[1.1] = 5;
// 실수여서 불가능
arr1[-1] = 6;
// 음수여서 불가능
// 1.1, -1 둘다 출력하면 문자("")로 찍힘

console.log(arr1);
//[ 1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6 ]
console.log(arr1.length);
// 2
// 프로퍼티는 length에 영향을 주지 않는다.
