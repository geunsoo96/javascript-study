// 프로퍼티
// 객체 내부의 속성을 의미

// 객체 생성
let ob = { a: 1 };
console.log(ob);
// { a: 1 }

// property 접근하기
console.log(ob.a);
// 1

// property 수정하기
ob.a = 0;
console.log(ob.a);
// 0

// property 추가하기
ob.b = 2;
console.log(ob);
// { a: 0, b: 2 }

// property 삭제하기
delete ob.b;
console.log(ob.b);
// undefined
