import React, {Component} from 'react';
import Main from './pages/main'

import { Route, Switch } from 'react-router-dom';





export default class App extends Component {
  // componentDidMount(){
  //   console.log(this)
  // }
  render() {
    return <div>
      <Switch>
        <Route path="/" component={Main}/>
      </Switch>
    </div>;
  }
}


// export default function App() {
//   return <div>
//     <Switch>
//       <Route path="/seach" component={Seach}/>
//       <Route path="/item" component={Item}/>
//       <Route path="/topic" component={Topic}/>
//       <Route path="/cart" component={Cart}/>
//       <Route path="/me" component={Me}/>
//       <Route path="/home" component={Home}/>
//       <Redirect to="/home/goods"/>
//     </Switch>
//     <Footer/>
//   </div>
//}
