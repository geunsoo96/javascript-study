class ItsME {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

let arr = ["근수", "상호", "예훈", "두진"];
let box = [];

arr.forEach(function (value, index) {
  box.push(new ItsME(index + 1, value, "세종시"));
});
console.log(box);

const fs = require("fs");
let saveFile = JSON.stringify(box, null, 2);
fs.writeFile(`./test.js`, saveFile, "utf8", (err) => {
  if (err) throw err;
});

let boxNim = [];
box.map((value, index) => {
  boxNim.push(value.name + "님");
});

class Ahyeon extends ItsME {
  constructor(id, name, city, eye) {
    super(id, name, city); // super()-->위에 있는거 다 받겠다
    this.eye = eye;
  }
}

let test = new Ahyeon(1, "아연", "대전", true);
console.log(test);
// console.table(geunsoo);
// console.log(geunsoo);
// console.log(geunsoo.name);
