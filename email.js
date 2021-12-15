let a = 1; //控制JS中函数停止
let NAME;
let PASSWPRD;
let PHONE;
let BIRTHDAY;
let SEX;
let AGREE;
function start() {
  checkName();
  if (a === 0) {
    //在下面函数中，如果出现报错弹窗，则a=0，停止运行下面的函数
    return;
  }
  checkPassword();
  if (a === 0) {
    return;
  }
  CheckAgainPassword();
  if (a === 0) {
    return;
  }
  Phone();
  if (a === 0) {
    return;
  }
  Birthday();
  if (a === 0) {
    return;
  }
  CheckSex();
  if (a === 0) {
    return;
  }
  agreeDeal();
  if (a === 0) {
    return;
  }
  show();
}

//代码开始
function goON() {
  //报错后，用户重新输入，a自增1，函数继续运行
  a++;
}

function checkName() {
  let Catch = document.querySelector('#name');
  let name = Catch.value;
  if (name === '' || name === undefined || name === null) {
    alert('请输入用户名！');
    a = 0;
  }
  NAME = name;
}

function checkPassword() {
  let testLen = document.querySelector('#password');
  let password = testLen.value;
  let len = password.length;
  if (len === '' || len === undefined || len === null) {
    alert('请输入密码!');
    a = 0;
  } else if (len < 8) {
    alert('密码长度小于8位！');
    a = 0;
  } else if (len > 8) {
    alert('密码长度大于8位！');
    a = 0;
  }
  PASSWPRD = password;
}

function CheckAgainPassword() {
  let once = document.querySelector('#password');
  let password = once.value;
  let twice = document.querySelector('#againPassword');
  let againPassword = twice.value;
  if (
    againPassword === '' ||
    againPassword === undefined ||
    againPassword === null
  ) {
    alert('请再次输入密码！');
    a = 0;
  } else if (password != againPassword) {
    alert('重复密码与原密码不符！');
    a = 0;
  }
}

function Phone() {
  let oTxt = document.querySelector('#phone');
  let phone = oTxt.value;
  if (phone === '' || phone === undefined || phone === null) {
    alert('请输入手机号！');
    a = 0;
  } else if (isNaN(phone) || phone < 10000000000 || phone > 99999999999) {
    alert('请正确输入手机号！');
    a = 0;
  }
  PHONE = phone;
}

function Birthday() {
  let oTxt = document.querySelector('#birth');
  let birthday = oTxt.value;
  //获取日期
  let date = new Date();
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let dateStr = year * 10000 + month * 100 + day;
  parseInt('date');
  parseInt('birthday');

  if (birthday === '' || birthday === undefined || birthday === null) {
    alert('请输入出生日期！');
    a = 0;
  }
  if (isNaN(birthday)) {
    alert('请正确输入出生日期！');
    a = 0;
  }
  if (birthday > dateStr) {
    alert('请正确输入出生日期！');
    a = 0;
  }
  BIRTHDAY = birthday;
}

function CheckSex() {
  let radios = document.getElementsByName('sex');
  for (let i = 0; i < radios.length; i++) {
    //判断那个单选按钮为选中状态
    if (radios[i].checked) {
      //弹出选中单选按钮的值
      // alert(radios[i].value);
      SEX = radios[i].value;
      return;
    }
  }
  if (i === radios.length) {
    alert('请选择性别！');
    a = 0;
  }
}

function agreeDeal() {
  let count = 0;
  let checkArray = document.getElementsByName('agree');
  for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i].checked == true) {
      //在此可以对选中的标签进行操作
      count++;
    }
  }
  if (count == 0) {
    //至此，说明没有标签被选择到，可以进行相应的操作
    alert('请勾选霸王条款！');
  } else {
    AGREE = '√已阅读并同意霸王条款';
  }
}

function show() {
  document.getElementById('show').innerHTML =
    '<br>' +
    '你填写的信息是：' +
    '<br>' +
    '用户名：' +
    NAME +
    '<br>' +
    '用户密码：' +
    PASSWPRD +
    '<br>' +
    '手机号：' +
    PHONE +
    '<br>' +
    '出生日期：' +
    BIRTHDAY +
    '<br>' +
    '性别：' +
    SEX +
    '<br>' +
    AGREE;
}

// {
//   //获取日期
//   let date = new Date();
//   let year = date.getFullYear();
//   let month =
//     date.getMonth() + 1 < 10
//       ? '0' + (date.getMonth() + 1)
//       : date.getMonth() + 1;
//   let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//   let dateStr = year * 10000 + month * 100 + day;
//   console.log(dateStr);
// }
