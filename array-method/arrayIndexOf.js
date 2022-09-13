// indexOf 메서드
// 원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러개 있다면 첫번째로 검색된 요소의 인덱스를 반환한다.
// 원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.

const arr = [1,3,3,2];

console.log(arr.indexOf(2));
// 몇번째 요소에 있는지 --> 2라는 요소는 3번째에 있으니 3이 출력
console.log(arr.indexOf(4));
// 4라는 요소는 존재하지 않으므로 -1 출력
console.log(arr.indexOf(2, 1));
// 두번째 인수는 검색을 시작할 인덱스, 두번째 인수를 생략하면 처음부터 검색
// 3이 출력

const food = ['apple','banana','durian'];
if(food.indexOf('lemon') === -1) {
    // 만약 food 배열에 lemon이라는 요소가 존재하지 않는다면
    food.push('orange');
    // food 배열에 orange 추가
}
console.log(food);
// [ 'apple', 'banana', 'durian', 'orange' ]

// ↑다른 예시
const foods = ['kimchi','rice','chobab','jjambbong'];
if(!foods.includes('hambuger')) {
    foods.push('durian');
}
console.log(foods);