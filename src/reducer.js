import {CHANGE_NUM,CHANGE_SIGN} from './action'
const defaultState = {
    value:'',
    sign:'',
    pre_num:'',
    input_pre:'',
    num_index:'',
    calcul_state_num:'',
    calcul_state_optation:''
}
//reducer 可以接受state，但是绝不能修改state
export default (state = defaultState , action) => {
    switch(action.type){
        case CHANGE_NUM:
            state.value = action.data;
            state.input_pre = action.pre_input;
            return Object.assign({}, state, action);
        case CHANGE_SIGN:
            state.pre_num = action.data;
            state.input_pre = action.pre_input;
            state.value = action.data;
            state.sign=action.data1;
            state.calcul_state_num =action.calcul_num;
            state.calcul_state_optation=action.calcul_optation
            return Object.assign({},state,action);
        default:
            return state;
    }
}
// case CHANGE_NUM:
//     state.value = action.data;
//     state.pre_num=action.num_pre;
//     state.input_pre=action.pre_input;
//     state.num_index=action.index_num
//     return Object.assign({}, state, action);
// case CHANGE_SIGN:
//     state.sign = action.data1;
//     state.value = action.data;
//     state.pre_num=action.num_pre;
//     state.input_pre=action.pre_input
//    return Object.assign({},state,action);