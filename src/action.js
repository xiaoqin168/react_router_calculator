export const CHANGE_NUM = 'CHANGE_NUM'
export const CHANGE_SIGN = 'CHANGE_SIGN'
export const CHANGE_NUM_TWO = 'CHANGE_NUM_TWO'
export const GET_RESULT = 'GET_RESULT'
export function changeNum(text){
    return (dispatch,getState)=>{
        const { sign } = getState()
        const { value } = getState()
        const { input_pre } = getState()
        const { pre_num} = getState()
        const {calcul_state_num} = getState()
        const {calcul_state_optation} = getState()
            let result = 0;
            let num_pre=0;
            let pre_input =''
            let mid_num=''
            let calcul_num=''//用来标记计算符前的的数字
            let calcul_optation=''//用来标记最后一个计算符
            if(typeof(text)=='number'||text=='.'){
                console.log(value)
                 mid_num=value//用来拼接value
                 //判断value是否要重新记录,如果前一个数是运算符号时要重新给value赋值
                 if(typeof(input_pre)!='number'){
                     if(input_pre!='.')//如果前面是运算符且不是'.',重新拼接value
                     {
                         mid_num=''
                         result=((mid_num+''+text))
                    }                     
                 }
                 else{}
                 if((mid_num+'').indexOf('.')==-1||typeof(text)=='Number')//indexOf在string使用，检查是否前面存在小数点
                    result=((mid_num+''+text))
                 else
                 if((mid_num+'').indexOf('.')!=-1&&text=='.')
                 {
                    text=''
                    result=(((mid_num+''+text))) 
                 }
                else
                result=((mid_num+''+text))           
                dispatch({
                    type:CHANGE_NUM,
                    data:result,//result作为最后的结果返回去
                    pre_input:text//记录上一次的输入
                })
            }
            else{ 
               if(text==='AC')//AC一切恢复常态
                {
                     result = 0;
                     num_pre=0;
                     pre_input ='';
                     text=''
                }
                else {
                    //如果不是第一次运算
                    if(sign){
                        if(sign=='='||sign=='+/-'||sign=='%'){
                            calcul_num=calcul_state_num//运算符前的数据一直不变
                            calcul_optation=calcul_state_optation//最后一个运算符
                        }
                        else
                        {
                            calcul_num=value//拦截运算符前的数据
                            calcul_optation=sign//拦截当前运算符
                        }
                        //'+''-''*''/'
                        if(sign=='+'||sign=='-'||sign=='*'||sign=='/')
                        {
                            if(typeof(input_pre)=='number'||text=='+/-'||text=='%'){
                                if(text=='+/-'){
                                 num_pre=-(eval(pre_num+sign+(value)))
                                }
                                else if(text=='%'){
                                 num_pre=eval(pre_num+sign+(value/100))//规避错误
                                }
                                else
                                num_pre=eval(pre_num+sign+Number(value))
                            }
                             else 
                             num_pre=pre_num
                        }
                       else if(sign=='+/-'){
                        if(text=='+/-')
                        num_pre=-(value)
                        else if(text=='%')
                        num_pre=value/100
                        else
                        num_pre=value
                      
                       }
                       //
                       else if(sign=='%'){
                        if(text=='%')
                        num_pre=value/100
                        else if(text=='+/-')
                        num_pre=-(value)
                        else 
                       // num_pre=pre_num
                       num_pre=value
                    }
                       else if(sign=='='){
                        if(text=='=')
                        {
                            if(calcul_state_optation=='%'){
                                num_pre=pre_num
                            }
                            else
                            num_pre= eval(pre_num+calcul_state_optation+(calcul_state_num))        
                        }                            
                        else
                        num_pre=pre_num
                       }
                    }
                    //第一次运算
                    else
                   {
                    num_pre=Number(pre_num+value)
                    if(text=='%')
                    num_pre=(value)/100
                    else if(text=='+/-')
                    num_pre=-(value)
                } 
                   }
                dispatch({
                     type:CHANGE_SIGN,
                     data1:text,//记录运算符
                     //num_pre,//shang
                     calcul_num,
                     pre_input:text,
                     data:num_pre,//每次计算的结果作为上一次的数据
                     calcul_optation
                 })
            }
        }
    }     

