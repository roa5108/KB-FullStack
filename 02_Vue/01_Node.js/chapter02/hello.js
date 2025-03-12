const hello = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

//1번 or 2번 사용. 동일함
//1번
module.exports = hello;

//2번
exports.hello = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};
