import React, { Component } from 'react';
import './index.styl'
//引入头部组件
import HomeContent from '../../components/header/index'
//引入轮播图组件
import MySwiper from '../../components/swiper/index'
//引入图片
import img1 from '../../images/6/1.jpg'
import img2 from '../../images/6/2.jpg'
import img3 from '../../images/6/3.jpg'
import img4 from '../../images/6/4.png'

export default class index extends Component {
  state={
    imgs:[img1,img2,img3]
  }
  render() {
    return <div>
      <HomeContent/>
      <MySwiper imgs={this.state.imgs}/>

      <div className="live_content">
        <div className="live_content_top">
          <p>夏凉热卖</p>
          <span>清凉一夏</span>
        </div>

        <div className="live_content_bottom">
          <div className="live_content_item">
            <img src={img4} alt=""/>
            <div className="content_img_text">
              <span>可裸睡针织棉，植物抗菌柔弹</span>
            </div>

            <div className="content_text">
              <p className="text1">全棉针织条纹大豆纤维夏被 可机洗</p>
              <div>
                <p className="text2">￥159</p>
                <p className="text3">￥199</p>
              </div>
              <p className="text4">抄底优惠</p>
            </div>
          </div>

          <div className="live_content_item">
            <img src={img4} alt=""/>
            <div className="content_img_text">
              <span>可裸睡针织棉，植物抗菌柔弹</span>
            </div>

            <div className="content_text">
              <p className="text1">全棉针织条纹大豆纤维夏被 可机洗</p>
              <div>
                <p className="text2">￥159</p>
                <p className="text3">￥199</p>
              </div>
              <p className="text4">抄底优惠</p>
            </div>
          </div>

          <div className="live_content_item">
            <img src={img4} alt=""/>
            <div className="content_img_text">
              <span>可裸睡针织棉，植物抗菌柔弹</span>
            </div>

            <div className="content_text">
              <p className="text1">全棉针织条纹大豆纤维夏被 可机洗</p>
              <div>
                <p className="text2">￥159</p>
                <p className="text3">￥199</p>
              </div>
              <p className="text4">抄底优惠</p>
            </div>
          </div>

          <div className="live_content_item">
            <img src={img4} alt=""/>
            <div className="content_img_text">
              <span>可裸睡针织棉，植物抗菌柔弹</span>
            </div>

            <div className="content_text">
              <p className="text1">全棉针织条纹大豆纤维夏被 可机洗</p>
              <div>
                <p className="text2">￥159</p>
                <p className="text3">￥199</p>
              </div>
              <p className="text4">抄底优惠</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}