//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'to-do-list-2g8rgxl29-2bxc189098c',
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
