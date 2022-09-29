// 비동기 통신 복습
// 두개의 차이점 알아보기

const test1 = (test) => {
  return new Promise((resolve, reject) => {
    console.log("상희존예");
    resolve(test);
  });
};

test1("상희존예머신").then((value) => {
  console.log("시작");
  setTimeout(() => {
    console.log(value);
  }, 2000);
});

const test2 = new Promise((resolve, reject) => {
  console.log("상희존예");
  resolve("상희존예머신");
}).then((result) => {
  setTimeout(() => {
    console.log(result);
  }, 2000);
  console.log("시작");
});

// -------------------------------------------------------
// 1부터 10까지 출력되는 과정(Promise 버젼으로)
const Count = new Promise((resolve) => {
  console.log("start");
  resolve(1);
})
  // then --> promise가 종료되면 resolve에 들어간 값을 받을 수 있음
  // resolve에 들어간 값은 1
  .then((value) => {
    console.log(value);
    // 출력 시키고
    return (value += 1);
    // 반환값으로 1 더해줌
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
    // 앞에 내용 계속 밑으로 반복
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  });
