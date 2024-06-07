import { useEffect, useState } from 'react'
import './App.css'
import Viewer from './Viewer'
import Buttons from './Buttons'

function App() {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState();
  
  /**
   *  useEffect(function, deps(배열))
   *  1. mount: 컴포넌트가 화면에 가장 처음 렌더링 될 때(function, []);
   *  2. update: 특정 값이 업데이트될때 실헹(function,[..])
   *  3. unmount: 컴포넌트가 화면에 사라질때 
   */
  // number 값이 변결되었을 때 원하는 동작을 만들 수 있다.(콜백 함수, 배열 형태)
  // set함수는 비동기로 동작하여 이전의 값이 출력될 가능성이 있음
  useEffect(() =>{
    console.log(`number : ${number} / input : ${input}` );
  }, [number, input])

  const onClickButton = (value) => {
    setNumber(value + number); // 값 다시 세팅
  }
  return (
    <div className='App'>
      <h1>숫자 세기</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value);
        }}></input>
      </section>
      <section>
        <Viewer number={number} /> {/* 자식 컴포넌트, view컴포넌트의 number에 전달 */}
      </section>
      <section>
        <Buttons onClickButton={onClickButton} /> {/* 자식 컴포넌트, Buttons 컴포넌트의 onClickButton 전달 */}
      </section>
    </div>
  )
}

export default App;
