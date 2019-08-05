import React, { Component } from 'react';
import './index.styl'
import { Link } from 'react-router-dom';
//引入热门搜索请求方法
import { reqHotWord,reqKeyWord } from '../../api/index'

export default class Seach extends Component {
  state = {
    rotWord:[],
    data:[],
    value:""
  };
  async componentDidMount(){
    const result = await reqHotWord()
    // console.log(result.hotKeywordVOList)
    this.setState({
      rotWord:result.hotKeywordVOList
    })
  }

  changeDate= async (e) =>{
    await this.setState({
      value:e.target.value
    })
    if (this.state.value!==""){
      let data = this.state.value
      //console.log(data)
      const result = await reqKeyWord(data)
      //console.log(result)
      this.setState({
        data:result
      })

    }
  }
  // componentDidUpdate(){
  //
  // }
  render() {
    return <div>
        <div className="seach">
          <div className="seach_top">
            <div className="seach_input">
              {/*<p>人字拖，限时9.9</p>*/}
              <span className="iconfont icon-seachx"></span>
              <input type="text" placeholder="人字拖，限时9.9" onChange={this.changeDate}/>
            </div>
              <span><Link to="/home">取消</Link></span>
          </div>
        </div>
        <div className={!this.state.value?"seach_bottom":"seach_bottom on"}>
          <p className="seach_title">热门搜索</p>
          <ul>
            {
              this.state.rotWord.map((item,index)=>{
                return <li key={index}>{item.keyword}</li>
              })
            }
          </ul>
        </div>
        <div className={this.state.value?"seach_list on":"seach_list"}>
          <ul>
            {
              this.state.data.map((item,index)=>{
                return <li key={index}>{item}</li>
              })
            }

          </ul>
        </div>
      </div>;

  }
}