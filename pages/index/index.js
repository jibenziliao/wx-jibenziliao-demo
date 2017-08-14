// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    motto: '你好，世界！',
    userInfo: {},
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
      }
    ]
  },
  // 跳转日志页
  goLogs () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 跳转路由
  goRoute (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  onLoad () {
    // 调用应用实例的方法获取全局数据
    app.getUserInfo(userInfo => {
      // 更新数据
      this.setData({
        userInfo: userInfo
      })
    })
  }
})
