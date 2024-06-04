import { Fragment } from "react";
import { useState } from "react";
import Computer from "./components/Computer";
import Count from "./components/Count";

// import Header from "./components/Header"
// import Main from "./components/Main"
// import Footer from "./components/Footer"
// import Button from "./components/Button"
// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// const Header = () => { // Header 컴포넌트
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

//const arr=[1,2];

//const [one,two] =arr;

// const state=useState(); //배열반환 

// console.log(state);  //두개 요소 들어가 있는 배열형태[undefined, f()]

//                      //                            [새롭게 생성된 state값, state값 변경하는 함수

// const Computer = ({ power }) => {
//   return (
//     <div>{power === "ON" ?
//       <h1>ON</h1> : <h1>OFF</h1>
//     }</div>
//   )
// }

// function App() { // App 컴포넌트
//   const [state, setState] = useState(0);
//   const [power, setPower] = useState("OFF");
//   console.log(state);

//   return (// 리렌더링(reRendering - 컴포넌트의 state값이 바뀌면 컴포넌트가 return을 다시한다 -> 
//     //화면을 다시 그린다. -> 그리고  그때, 변경된 state값도 바로 화면에 반영된다.)
//     <>
//       <div>
//         <Computer power={power} />
//         <button onClick={()=>{
//           setPower(power ==="ON"?"OFF":"ON");
//         }}>{power==="ON"?"끈다":"켠다"}</button>
//       </div>

//       <div>
//         <h1>{state}</h1>
//         <button onClick={() =>{
//           setState(state+1);
//         }}
//         >+</button>
//       </div>
//     </>
//   )
// }

function App() {
  return (
    <>
      <Computer></Computer>
      <Count></Count>
    </>
  )
}


export default App
