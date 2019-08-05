//引入swiper
import Swiper from 'swiper'
import '../../static/swiper.css'
import './index.styl'
import {withRouter} from "react-router-dom"
import PropTypes from 'prop-types'


import React, { Component } from 'react';

class MySwiper extends Component {
  static propTypes={
    imgs:PropTypes.array.isRequired
  }

  componentDidMount(){
    //console.log(this.props);
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }


  render() {
    return <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.props.imgs.map((item,index) => {
              return <div className="swiper-slide" key={index}><img src={item} alt=""/></div>
            })
          }
          {/*<div className="swiper-slide"><img src={img1} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img2} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img3} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img4} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img5} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img6} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img7} alt=""/></div>*/}
          {/*<div className="swiper-slide"><img src={img8} alt=""/></div>*/}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>;
  }
}

export default withRouter(MySwiper)