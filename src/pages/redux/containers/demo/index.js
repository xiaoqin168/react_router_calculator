import Tools from 'utils/index';
import React from 'react';
import { Button } from 'qnui';
import './index.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './action';

/**
    @author Mothpro
    这是一个演示的Demo组件，用于演示redux的使用
* */
 class Demo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { actions, counter } = this.props;
        const plan = counter > 0 ? (<p>{`叫你点你还真点啊！${counter}`}</p>) : '';
        return (
            <div>
                {plan}
                <Button
                    type="primary"
                    className="redux-demo"
                    onClick={() => {
                        actions.clickDemo(() => {

                        }, () => {});
                    }}
                >
点我看看
                </Button>
            </div>
        );
    }
} 
/* const createStore=function(initState){
    let state=initState;
    let listeners=[];

    function subscribe(listener){
        listeners.push(listener);
    }

    function changeState(newState){
        state=newState;
        for(let i=0; i<listeners.length; i++){
            const listener = listeners[i];
            listener();
        }
    }

    function getState(){
        return state;
    }

    return {
        subscribe,
        changeState,
        getState
    }
}
let initState={
    count:0
}

let store=createStore(initState);

store.subscribe(()=>{
    let state=store.getState();
    console.log(state.count);    
})
store.changeState({
    count:store.getState().count+1
});
store.changeState({
    count:store.getState().count-1
});
store.changeState({
    count:'abc'
}); */
// If you want your app to work offline and load faster, you can change
    /* const createStore=function(initState){
        let state=initState;
        let listeners=[];
    
        function subscribe(listener){
            listeners.push(listener);
        }
    
        function changeState(newState){
            state=newState;
            for(let i=0; i<listeners.length; i++){
                const listener = listeners[i];
                listener();
            }
        }
    
        function getState(){
            return state;
        }
    
        return {
            subscribe,
            changeState,
            getState
        }
    }
    let initState={
        count:0
    }
    
    let store=createStore(initState);
    
    store.subscribe(()=>{
        let state=store.getState();
        console.log(state.count);    
    })
    store.changeState({
        count:store.getState().count+1
    });
    store.changeState({
        count:store.getState().count-1
    });
    store.changeState({
        count:'abc'
    }); */
    function plan(state,action){
        switch(action.type){
            case 'increment':
                return {
                    ...state,
                    count:state.count+1
                }
            case 'decrement':
                return {
                    ...state,
                    count:state.count-1
                }
            default:
                return state;
        }
    }
    const createStore=function( plan,initState){
        let state=initState;
        let listeners=[];
    
        function subscribe(listener){
            listeners.push(listener);
        }
    
        function changeState(action){
            state=plan(state,action);
            for(let i=0; i<listeners.length; i++){
                const listener = listeners[i];
                listener();
            }
        }
    
        function getState(){
            return state;
        }
    
        return {
            subscribe,
            changeState,
            getState
        }
    }
    let initState={
        count:0
    };
    let store=createStore(plan,initState);
    store.subscribe(()=>{
        let state=store.getState();
        console.log(state.count);
    })
    store.changeState({
        type:'increment'
    });
    store.changeState({
        type:'decrememt'
    });
    store.changeState({
        count:'abc'
    })
export default connect(
    state => state.Demo,
    dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(Demo);
