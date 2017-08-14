//app.js
App({
  onLaunch () {
    //调用API从本地缓存中获取数据
    let logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getInitInfo (cb) {
    let that = this
    if (that.globalData.userInfo) {
      typeof cb === "function" && cb(that.globalData)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: res => {
          that.globalData.userInfo = res.userInfo
          typeof cb === "function" && cb(that.globalData)
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    menu: [
      {
        url: '../view/view',
        text: 'view'
      }, {
        url: '../scroll-view/scroll-view',
        text: 'scroll-view'
      }, {
        url: '../swiper/swiper',
        text: 'swiper'
      }, {
        url: '../movable-view/movable-view',
        text: 'movable-view'
      }, {
        url: '../cover-view/cover-view',
        text: 'cover-view'
      }
    ]
  }
})
