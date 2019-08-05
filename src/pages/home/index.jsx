import React, { Component } from 'react';
import "./home.styl";
//引入图片
import img1 from '../../images/1/1.jpg'
import img2 from '../../images/1/2.jpg'
import img3 from '../../images/1/3.jpg'
import img4 from '../../images/1/4.jpg'
import img5 from '../../images/1/5.jpg'
import img6 from '../../images/1/6.jpg'
import img7 from '../../images/1/7.jpg'
import img8 from '../../images/1/8.jpg'

//引入Header组件
import Header from '../../components/header/index'
//引入轮播图
import MySwiper from '../../components/swiper/index'
//引入组件
import HomeContent from '../../components/homeContent/index'
import ContentBottom from './contentBottom/index'

export default class Home extends Component {

  state={
    imgs:[img1,img2,img3,img4,img5,img6,img7,img8]
  };
  render() {

    return (
      <div>
        <Header/>
        <MySwiper imgs={this.state.imgs}/>
        <HomeContent/>
        <ContentBottom/>

      </div>
      )
  }
}