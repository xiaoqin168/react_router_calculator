import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../header/index';
import './index.scss';
/**
    @author Mothpro
* */
class App extends React.Component {
    render() {
        return (
            <div className="container">
                {/* 导航条 */}
                <Header />
                <div className="content">
                    {/* 页面内容区域 */}
                    {this.props.children}
                </div>
            </div>
        );
    }
}
// class App extends React.Component{
//       constructor(props){
//         super(props);
//         this.state={
//           name:"zhanshan2",
//           age:123
//         }
//         // this.state={
//         //   name:this.props.name,
//         //   age:this.props.age
//         // }
//       }
//       add(){
//         this.state.name="guw";
//         this.state.age++;
        
//       }
//       render(){
//         this.add();
//         console.log("nihao1");
//         const name=this.state.name;
//         const age=this.state.age;
//         return(
//           <div>
//           <p>性別：{name}</p>
//           <p>年齡：{age}</p>
//           </div>

//         );
//       }
// }
// class App extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           arr: [{
//               "userName": "fangMing", "text": "123333", "result": true
//           }, {
//               "userName": "zhangSan", "text": "345555", "result": false
//           }, {
//               "userName": "liSi", "text": "567777", "result": true
//           }, {
//               "userName": "wangWu", "text": "789999", "result": true
//           },],
//           age:123,
//       }
//   }



 

//   render() {
//       return (
//           <div>
//               <ComentList arr={this.state.arr} ages={this.state.age}> //这里把state里面的arr传递到子组件
//               </ComentList>
             
//           </div>

//       )
//   }
// }

// class ComentList extends React.Component {
//   constructor(props) {
//       super(props);
      

//   }
//   render() {
//       return (
//           <div className="list">
//               <ul>
//               <p> {this.props.ages}</p>
//                   {
//                       this.props.arr.map(item => { 
//                           return (
//                               <li key={item.userName}>
//                                   {item.userName} 评论是:{item.text}
//                               </li>
//                           )
//                       })
//                   }
//               </ul>
           
//           </div>
//       )
//   }
// }


export default App;
