
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Button from "./components/Button"
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

function App() { // App 컴포넌트
  const buttons={
    text:"메일",
    color:"green",
    name:"리액트",
    a:1,
  };

  return (
    <>
      <Header></Header>  
      <Main></Main>
      <Button {...buttons} ></Button>
      <Button text={"웹툰"} ></Button>
      <Button text={"카페"} >
        <div>자식</div>
      </Button>
      <Footer></Footer>
    </>
  )
}


export default App
