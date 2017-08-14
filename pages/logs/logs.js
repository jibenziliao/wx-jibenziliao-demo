//logs.js
const util = require('../../utils/util') 
Page({
  data: {
    logs: []
  },
  onLoad () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  goHome () {
    wx.navigateBack()
  }
})
