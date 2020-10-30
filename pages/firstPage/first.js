Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "事件的类别",
    btnText: "这是按钮的内容",
    isDisplay: true,
    lists: [
      '点击事件 tap',
      '长按事件 longtap',
      '触摸事件 touchstart、touchend、touchmove、touchcancel',
      '其他 submit input'],
    eventTypes: [
      'bind 绑定',
      'catch 绑定'
    ],
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

  btnToSecondView: function(){
    console.log("To Second Page")
    wx.navigateTo({
      url: '../secondPage/second'
    })
  },

  /**
   * 按钮点击事件
   */
  btnClick: function(){
    var that = this
    var isDisplay = that.data.isDisplay
    var tempList = that.data.lists;
    // 删除并返回数组的第一个元素
    tempList.shift()
    this.setData({
      text: "你好呀",
      isDisplay: !isDisplay,
      lists: tempList
    })
  }
})