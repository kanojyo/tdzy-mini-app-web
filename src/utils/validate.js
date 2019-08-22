
/*小写字母开头，小写字母或是数字结尾*/
export function isvalidUsercode(str) {
  const reg = /^[a-zA-Z]+[a-zA-Z0-9_]{2,}$/
  return reg.test(str)
}

/*姓名*/
export function isvalidUsername(str) {
  const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,5}$/
  return reg.test(str)
}

/* 数字和26个英文字母组成的6~18字符串*/
export function isvalidPassword(str) {
  const reg =  /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,18}$/
  return reg.test(str)
}


/* 手机号*/
export function isvalidPhone(str) {
  const reg = /^1[345789]\d{9}$/
  return reg.test(str)
}


/* 车牌号*/
export function isvalidVecle(str) {
  const reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/
  return reg.test(str)
}



/* 合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}


/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/* 正则表达式验证包含0的正整数*/
export function integer(str) {
  const reg = /^([1-9]\d*|[0]{1,1})$/
  return reg.test(str)
}

/* 正则表达式验证2位小数点*/
export function decimals(str) {
  const reg = /^\d+(\.\d{0,2})?$/
  return reg.test(str)
}

/* 检索字符串里面带img标签*/
export function imgMatch(str) {
  const reg = /<img[^>]*>/gi
  return str.match(reg)
}

/* 检索字符串里面带src标签*/
export function srcMatch(str) {
  const reg = /((http|https):\/\/)+(\w+|-\.)+(\w+)[\w\/\.\-]*(jpg|gif|png|jpeg)/gi
  return str.match(reg)
}

//正则表达式验证大于0的正整数
export function positiveInteger(str) {
  const reg = /^[0-9]*[1-9][0-9]*$/
  return str.match(reg)
}

//正则表达式验证1到365的整数
export function positiveNum365(str) {
  const reg = /^([1-9][0-9]{0,1}|365)$/
  return str.match(reg)
}
//正则表达式验证正数且保留2位有效小数点
export function positiveFloatNum2(str) {
  const reg = /^([1-9]\d*|0)(\.\d{1,2})?$/
  return str.match(reg)
}











