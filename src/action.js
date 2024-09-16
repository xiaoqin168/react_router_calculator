export const CHANGE_NUM = 'CHANGE_NUM';
export const CHANGE_SIGN = 'CHANGE_SIGN';
export const CHANGE_NUM_TWO = 'CHANGE_NUM_TWO';
export const GET_RESULT = 'GET_RESULT';
export function changeNum(text){
    return (dispatch,getState)=>{
        const { sign,value,inputStatePre,statePreNum,calculSateNum,stateHistory, calculStateOpetation} = getState();
        let result = 0;
        let history='';//记录历史记录
        let clearPoint='';//清除多余的小数点
        let preNum=0;
        let preInput ='';
        let midNum='';
        let calculNum='';//用来标记计算符前的的数字
        let calculOptation='';//用来标记最后一个计算
            history=stateHistory+text;
            console.log("history",history);
            if(typeof(text)=='number'||text=='.'){
                    midNum=value//用来拼接value
                         //判断value是否要重新记录,如果前一个数是运算符号时要重新给value赋值
                        if(typeof(inputStatePre)!='number'){
                            if(inputStatePre!='.')//如果前面是运算符且不是'.',重新拼接value
                             {
                                midNum='';
                                result=((midNum+''+text));
                            }                     
                         }
                        if((midNum+'').indexOf('.')==-1||typeof(text)=='Number')//indexOf在string使用，检查是否前面存在小数点
                        {
                             result=((midNum+''+text));
                        }else if((midNum+'').indexOf('.')!=-1&&text=='.'){
                            clearPoint='';
                            result=(((midNum+''+clearPoint))); 
                        }else{
                            result=((midNum+''+text));    
                        }   
                        dispatch({
                            type:CHANGE_NUM,
                            data:result,//result作为最后的结果返回去
                            preInput:text,//记录上一次的输入
                            history
                        })
                    }else{
                        if(text==='AC'){
                         result = 0;
                         preNum=0;
                         preInput ='';
                         text='';
                        }else
                        {
                            if(sign){
                                if(sign=='='||sign=='+/-'||sign=='%'){
                                    calculNum=calculSateNum;//运算符前的数据一直不变
                                    calculOptation=calculStateOpetation;//最后一个运算符
                                }else{
                                calculNum=value;//拦截运算符前的数据
                                calculOptation=sign;//拦截当前运算符
                            }
                            if(sign=='+'||sign=='-'||sign=='*'||sign=='/'){
                                if(typeof(inputStatePre)=='number'||text=='+/-'||text=='%'){
                                    try {
                                        switch(text){
                                            case '+/-':preNum=-(eval(statePreNum+sign+(value)));break;
                                            case '%':preNum=eval(statePreNum+sign+(value/100));break;
                                            default:preNum=eval(statePreNum+sign+Number(value));
                                        }        
                                    }catch (error){
                                        alert(error);
                                    }
                                }else 
                                preNum=statePreNum;
                            }else if(sign=='+/-'||sign=='%'){
                                switch(text){
                                    case '+/-': preNum=-(value);break;
                                    case '%': preNum=value/100; break; default:preNum=value;
                               }  
                           }else if(sign=='='){
                                switch(text){
                                    case '=':{ 
                                       if(calculStateOpetation=='%')
                                       preNum=statePreNum;
                                       else{
                                        try {
                                            preNum= eval(value+calculStateOpetation+(calculSateNum));  
                                           }catch (error) {
                                               alert(error);
                                           }
                                       }
                                    }break;
                                    case '+/-':  preNum=-statePreNum; break; 
                                    case '%':    preNum=-statePreNum/100; break;
                                    default:     preNum=statePreNum;
                               }
                           }
                        }else{
                        preNum=Number(statePreNum+value);
                        if(text=='%')
                        preNum=(value)/100;
                        else if(text=='+/-')
                        preNum=-(value);
                    }
                }
                dispatch({
                         type:CHANGE_SIGN,
                         optation:text,//记录运算符
                         calculNum,
                         preInput:text,
                         data:preNum,//每次计算的结果作为上一次的数据
                         calculOptation,
                         history
                     })
                }
        }
}     

