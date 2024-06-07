// const Main = () => {
//   const student = {
//     name: "홍길동",
//     isLogin: true,
//   };

  // return (
  //   <>
  //     {student.isLogin ? (
  //       <div>로그아웃</div>
  //     ) : (
  //       <div>로그인</div>
  //     )}
  //   </>
  // )

//   // if (student.isLogin) {
//   //   return <div className="logout">로그아웃</div>;
//   // } else {
//   //   return <div>로그인</div>
//   // }

// }

// const Main = () => {
//   const num = 10;
//   const obj = { a: 1 };

//   return (
//     <main>
//       <h2>{num % 2 == 0 ? "짝수" : "홀수"}</h2>
//       {num}
//       {obj.a}
//     </main>
//   )
// }
import "./Main.css";

const Main = () => {
  const student = {
    name: "홍길동",
    isLogin: true,
  };

  return (
    <>
      {student.isLogin ? (
        <div className="logout"> 로그아웃</div>
      ) : (
        <div>로그인</div>
      )}
    </>
  )
}

export default Main;