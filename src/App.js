import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Input} from 'antd';
import * as action from './action';
import './calcul.css'

class App extends React.Component{
  render(){
    const btns=['AC','+/-','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];
    //const btns = [1,2,3,4,5,6,7,8,9,'+','-','*','.','/','=','AC','%'];
    const { actions,value } = this.props;
    return (
      <div className='calcul'>
      <Input  placeholder="请输入" value={value} />
      <div className='items'>
        {
          btns.map((item,index)=><Button key={item} onClick={()=>{actions.changeNum(item)}}>{item}</Button>)
        }
       </div> 
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(action, dispatch) }),
)(App);
