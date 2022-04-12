function UnicodeEnc(str) {
  let value = '';

  for (let i = 0; i < str.length; i++) {
    value += "\\u" + ("0000" + parseInt(str.charCodeAt(i)).toString(16)).substr(-4);
    return value;
  }
}

function string2bytes(str) {
  //string转为字节数组
  let byteArr = [];

  for (let i = 0; i < str.length; i++) {
    byteArr.push(str.charCodeAt(i));
  }

  return byteArr;
}

console.log(UnicodeEnc("w"));
console.log(string2bytes("hello"));
console.log(String.fromCharCode(104, 101, 108, 108, 111)); //参数类型是多个可变参数
//如果非要传入数组，使用下面两种形式

console.log(String.fromCharCode(...[104, 101, 108, 108, 111]));
console.log(String.fromCharCode.apply(null, [104, 101, 108, 108, 111]));