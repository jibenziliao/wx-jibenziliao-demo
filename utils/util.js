/**
 * 将日期格式化为字符串
 * @param {Date} date 日期
 */
const formatTime = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 日期格式化为字符串时，不足两位数，前面补0
 * @param {Number} n 数字 
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 通用工具库
 */
module.exports = {
  formatTime,
  formatNumber
}
