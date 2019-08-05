import React, { Component } from 'react';
//引入滑动库
import BScroll from 'better-scroll'
import './index.styl'
import { Link } from 'react-router-dom';
import {reqData} from '../../api/index'
import img1 from "../../images/4/1.jpg"


export default class topic extends Component {
  state={
    data:[]
  }

  async componentDidMount(){
    new BScroll('.header_bottom2',{
      click:true,
      scrollX:true
    });
    this.page=1
    const result = await reqData(this.page,2)
    const data = result.result
    //console.log(data)
    data.forEach((item,index)=>{
      const final = item.topics
      this.setState({
        data:[...this.state.data,...final]
      })
    })
//console.log(this.state.data)
    window.addEventListener('scroll',()=>{
      this.handleScroll()
    })
  }
//懒加载，拉到底部更新数据
  handleScroll = async ()=>{
    //获取视口高度，和滚动条滚动距离高度，元素高度
    let clienHeight = document.documentElement.clientHeight;
    let scrollTop = Math.round(document.documentElement.scrollTop);
    let scrollHeight = document.documentElement.scrollHeight;
    //console.log(clienHeight,scrollTop,scrollHeight)
    if (scrollHeight-clienHeight-scrollTop<=1){
      //console.log(this.page)
      this.page++
      const result = await reqData(this.page,2)
      const data = result.result
      //console.log(data)
      data.forEach((item,index)=>{
        const final = item.topics
        this.setState({
          data:[...this.state.data,...final]
        })
      })
    } 
  }
  //当加载数据时切换页面卸载当前组件会报错，要停止请求更新数据
  componentWillUnmount(){
    this.setState=()=>{
      return
    }
  }


  render() {
    return <div>
      <header>
        <div className="header_top">
          <Link to="/home"><span className="iconfont icon-home icon1"></span></Link>
          <span className="text1">发现</span>
          <span className="text2">甄选家</span>
          <Link to="/cart"><span className="iconfont icon-car icon2"></span></Link>
          <Link to="/seach"><span className="iconfont icon-seachx icon3"></span></Link>
        </div>
        <div className="header_bottom2">
          <ul>
            <li>居家</li>
            <li>阿斯顿</li>
            <li className="active">推荐</li>
            <li>的速度111</li>
            <li>居家2222</li>
            <li>阿斯顿</li>
            <li>分公司的</li>
            <li>的速度</li>
          </ul>
        </div>
      </header>

      <div className="bigImg"><img src={img1} alt=""/></div>
      {
        this.state.data.map((item,index)=>{
          if (item.type===0) {
            return <div className="topic_content_one" key={index}>
              <div className="content_one_top">
                <img src={item.avatar} alt=""/>
                <span>{item.nickname}</span>
              </div>
              <p>{item.title}</p>
              <img src={item.picUrl} alt=""/>
              <div className="content_one_bottom">
                <span className="iconfont icon-seachx"></span>
                <span>{item.readCount}人看过</span>
              </div>
            </div>
          }else {
            return <div className="topic_content_two" key={index}>
              <div className="content_two_left">
                <div>
                  <img src={item.avatar} alt=""/>
                  <span>{item.nickname}</span>
                </div>
                <p className="text1">{item.title}</p>
                <p className="text2">{item.subTitle}</p>
                <div className="two_left_bottom">
                  <span className="iconfont icon-seachx"></span>
                  <span>{item.readCount}人看过</span>
                </div>
              </div>
              <div className="content_two_right">
                <img src={item.picUrl} alt=""/>
              </div>
            </div>
          }
        })
      }




      <div className="aaa">

      </div>
    </div>;
  }
}