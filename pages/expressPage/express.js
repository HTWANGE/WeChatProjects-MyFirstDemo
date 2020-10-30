Page({

  /**
   * 页面的初始数据
   */
  data: {
    expressInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 获取快递信息
   * num 快递单号
   */
  getExpressInfo: function(num){
    var that = this;
    var coname = 'huawei';
    num = '806820160474';
    
    wx.request({
      url: 'https://m.kuaidi100.com/app/query/?coname=' + coname +
        '&com=shunfeng&nu='+num, //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'apikey': '2e24c33be1e7f7dafebc496c07441138' // 默认值
      },
      success(res) {
        console.log()
        that.setData({
          expressInfo: ['111', '111', '111', '111', '111', '111', '111', '111', '111', '111']
        })
      }
    })
  }
})