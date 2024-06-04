import { Fragment } from "react";
import { useState } from "react";
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

function App() { // App 컴포넌트
  const [state,setState] = useState(0);
  console.log(state);

  return(
    <>
      <h2>{state}</h2>
      <button onClick={() =>{
        setState(state+1);
      }}
      >+</button>
    </>
  )
}


export default App
