import { useReducer } from "react";

// reducer: 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action){
    console.log(state, action); // action  객체는 increase, data
    if(action.type =="increase"){
        return state + action.state;
    } else if(action.type =="decrease"){
        return state + action.state;
    }
}

const Test = () =>{
    /** 
     * 상태변화가 있다라는 사실을 알리는 발송함수
     * dispatch가 호출되면 상태변화가 요청 되고 그러면,
     * userReducer가 상태변화를 실제로 처리하는 함수를 요청 -> 실제로 만들어야 함
     * 
     * + 버튼 누르면 dispatch함수에 상태변화 요청해야한다.
     */
    const [state, dispatch] = useReducer(reducer,0);

    const onPlus =() =>{
        dispatch({
            type: "increase",
            data: 1,
        })
    }

    const onMinus = () =>{
        dispatch({
            type: " decrease",
            data:1,
        })
    } 

    return <div>
        <h1>0</h1>
        <button onClick={onPlus}>+</button>
        <button onClick={onMinus}>-</button>
    </div>
};

export default Test;