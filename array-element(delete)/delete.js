// 배열 요소의 삭제
// 배열-->객체이기 때문에 특정요소를 삭제할 목적으로 delete 연산자를 사용할 수 있다.
const arr = [1, 2, 3, 4];

delete arr[2];
// arr이라는 이름의 변수의 2반째 요소를 삭제
// 0부터 시작이니까 세번째 요소인 3이 삭제
console.log(arr);
// [ 1, 2, <1 empty item>, 4 ]
console.log(arr.length);
// 4
// length 프로퍼티에 영향을 주지 않음 --> 희소배열이 된다
// 배열=객체이긴한데 자바스크립트에서는 순번(key)이 정해져 있는 배열 같은 경우 delete를 사용해도 삭제된 요소를 희소배열로 만들고 length 프로퍼티를 보존해준다.

const arr2 = [1, 2, 3];
// splice(삭제를 시작할 인덱스, 삭제할 요소 수)
arr2.splice(1, 1);
console.log(arr2);
// [1,3]

console.log(arr2.length);
// 2

// delete: 희소배열이 되고 length프로퍼티에 영향이 없음
// splice: 삭제한 요소만큼 length프로퍼티가 갱신됨
