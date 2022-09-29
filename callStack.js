const func1 = () => {
  console.log("1");
  func2();
};
const func2 = () => {
  console.log("2");
  func3();
};
const func3 = () => {
  console.log("3");
};
func1();
// 1 2 3

// --------------------------------------------

console.log(1);
// 나 먼저 출력
setTimeout(() => {
  console.log(2);
}, 0);
// 0초도 시간이다...난 0초를 즐겼다가 나가겠어
console.log(3);
// 0초동안 3의 놀라운 빈집털이
// 출력값 --> 1 3 2
