import React, {Component} from 'react';
import Home from '../home'
import Item from '../item'
import Live from '../live'
import Topic from '../topic'
import Cart from '../cart'
import Me from '../me'
import Seach from '../seach'
import { Route, Switch,Redirect } from 'react-router-dom';
import Footer from '../../components/footer'




export default class Main extends Component {
  state={
    isFooter:''
  }

  componentWillReceiveProps(nextProps){
    //console.log(nextProps);
    const result = nextProps.location.pathname
    //console.log(result);
    this.setState({
      isFooter:result
    })
  }
  componentDidMount(){
    //console.log(this)
    const result = this.props.location.pathname
    //console.log(result)
    this.setState({
      isFooter:result
    })
  }
  render() {
    return <div>
      <Switch>
        <Route path="/seach" component={Seach}/>
        <Route path="/item" component={Item}/>
        <Route path="/topic" component={Topic}/>
        <Route path="/home/item/list2" component={Live}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/me" component={Me}/>
        <Route path="/home" component={Home}/>
        <Redirect to="/home/goods"/>
      </Switch>
      {
        this.state.isFooter==='/me'?"":<Footer />
      }
    </div>;
  }
}
