//함수
function getTriangle(base, height) {
  return (base * height) / 2;
}

//익명함수(리터럴 표현)
var getTriangle2 = function (base2, height2) {
  return (base2 * height2) / 2;
};

//화살표 함수
let getTriangle3 = (base3, height3) => (base3 * height3) / 2;
let getCricle = (radius) => radius * radius * Math.PI;

console.log('삼각형의 면적:' + getTriangle(5, 2));
console.log('삼각형의 면적:' + getTriangle2(5, 2));
console.log('삼각형의 면적:' + getTriangle3(5, 2));
console.log('원의 면적:' + getCricle(5));

let make1 = () => console.log('Have a nice day!!');

make1(); //호출

let make2 = (num) => console.log(`num = ${num}`);

make2(100);

let make3 = (a, b) => console.log(`${a} + ${b} = ${a + b}`);

make3(25, 36);
