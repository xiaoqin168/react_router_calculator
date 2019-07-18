import {CHANGE_NUM,CHANGE_SIGN} from './action'
const defaultState = {
    value:'',
    sign:'',
    statePreNum:'',
    inputStatePre:'',
    num_index:'',
    calculSateNum:'',
    calculStateOpetation:''
}
//reducer 可以接受state，但是绝不能修改state
export default (state = defaultState , action) => {
    switch(action.type){
        case CHANGE_NUM:
            state.value = action.data;
            state.inputStatePre = action.preInput;
            return Object.assign({}, state, action);
        case CHANGE_SIGN:
            state.statePreNum = action.data;
            state.inputStatePre = action.preInput;
            state.value = action.data;
            state.sign=action.optation;
            state.calculSateNum =action.calculNum;
            state.calculStateOpetation=action.calculOptation
            return Object.assign({},state,action);
        default:
            return state;
    }
}