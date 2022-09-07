// Array.of
// 전달된 인수를 요소로 갖는 배열을 생성한다.
// Array 생성자 함수와 다르게 전달된 인수가 1개이고, 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
// 잘 몰라서 적어놓는 상식 --> 인수: 함수가 호출될때 함수로 값을 전달해주는 값

Array.of(1); /* 작성 양식 */
console.log(Array.of(1));
// [1]
console.log(Array.of(1, 2, 3));
// [1,2,3]
console.log(Array.of("string"));
// ['string']
