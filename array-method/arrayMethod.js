// 배열 메서드
// 자바스크립트 배열을 다룰때 유용한 다양한 빌트인 메서드를 제공한다.
// Array 생성자 함수는 정적 메서드를 제공
// 배열 객체의 프로토타입인 Array.prototype은 프로토타입 메서드를 제공
/* 
원본배열을 직접 변경하는 메서드
원본배열을 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드 두가지가 있다. */

const arr = [1];
// push 메서드는 원본 배열을 직접 변경한다.
arr.push(2);
// arr배열 끝에 2라는 요소를 추가
console.log(arr);
// [1,2]

// concat 메서드는 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr);
// [1,2]
console.log(result);
// [1,2,3]
