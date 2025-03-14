const obj = {
  name: '홍길동',
  getName() {
    console.log(this.name);
  },
};
// obj.getName();
// const obj = {
//   name: '홍길동',
//   getName() {
//     console.log(this.name);
//   },
// };
// const irum = obj.getName;
// irum();
// const obj = {
//   name: '홍길동',
//   getName() {
//     console.log(this.name);
//   },
// };
// const irum = obj.getName.bind(obj); //bind는 this를 찾아주는 역할을 한다.
// irum();
// const obj = {
//   name: '홍길동',
//   getName() {
//     console.log(this.name);
//   },
//   obj2: {
//     age: 25,
//     getAge() {
//       console.log(this.age);
//     },
//   },
// };
// const irum = obj.getName.bind(obj); //bind는 this를 찾아주는 역할을 한다.
// irum();
// const nai = obj.obj2.getAge.bind(obj.obj2);
// nai();
