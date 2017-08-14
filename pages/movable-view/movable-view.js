Page({
  data: {
    x: 0,
    y: 0
  },
  tap (e) {
    this.setData({
      x: 30,
      y: 30
    })
  },
  onReachBottom (e) {
    console.log(e)
  }
})