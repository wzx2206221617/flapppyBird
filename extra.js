//微信部分api的使用

export class Tool{
  constructor(){
    //初始化数据（没有数据初始化，不写）
  }
  //手机振动的效果
  zhendong(){
    wx.vibrateLong({
      success(){
         console.log('振动了一次');
      }
    })
  }
//播放音乐
  voice(src,loop){
    //创建音频
    const music =wx.createInnerAudioContext();
    //音频文件的路径
    music.src=src;
    //设置循环播放
    music.loop=loop;
    //播放
   return music;
  }
  //获取手机信息
  getTelInfo(){
    wx.getSystemInfo({
      success(res) {
        console.log(res);
      }
    })
  }
  //获取用户信息
  getUserInfo(){
    //创建用户信息按钮
    const button=wx.createUserInfoButton({
      tpye:'text',
      text:'请授权用户信息',
      style:{
        left:100,
        top:50,
        width:150,
        height:75,
        backgroundColor:'#3ed4a0',
        borderColor:'#e3415',
        borderWidth:2,
        borderRadius:10,
        color:'golden',
        textAlign:'center',
        fontSize:16,
        lineHeight:20
      }
    });
    //监听按钮的点击事件
    button.onTap(res=>{
      if(res.UserInfo){
        //用户授权了
        console.log(res.UserInfo);
        //销毁按钮
        button.destroy();
      }
    });
  }
}
