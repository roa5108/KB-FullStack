function addContact(
  name,
  mobile,
  home = '없음',
  address = '없음',
  email = '없음'
) {
  let str =
    `name=${name},mobile=${mobile},home=${home},` +
    `address=${address},email=${email}`;
  console.log(str);
}

addContact('홍길동', '010-123-123');
addContact('이몽룡', '010-233-233', '02-132-3231');
