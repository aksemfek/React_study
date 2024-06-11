// import { useEffect, useState } from "react";

import { useState } from "react";

// const Test = () => {

//     const [username, setUsername] = useState("");
//     const [message, setMessage] = useState("");

//     useEffect(() => {
//         // console.log('렌더링 완료됨');
//         // console.log({
//         //     username,message
//         // })
//         console.log('마운트 될때만 실행');
//     }, []);

//     const onChangeUsername = e =>
//         setUsername(e.target.value);

//     const onChangeMessage = e =>
//         setMessage(e.target.value);

//     // const onClick = () =>{
//     //     alert(username + " : " +message)
//     //     setUsername("");
//     //     setMessage("")
//     // }


//     return (
//         <div>
//             <input type="text" name="username" value={username} onChange={onChangeUsername}></input>
//             <input type="text" name="message" value={message} onChange={onChangeMessage}></input>
//             {/* <button onClick={onClick }>확인</button> */}
//             이름 : {username} 닉네임 : {message}
//         </div>
//     );
// };

// export default Test;

// const Test = () => {
//     const names =['자바', '스프링', '스프링부트'];

//     const nameList=names.map((name, index) =>
//     <li key={index}>{name}</li>);

//     return(
//         <div>
//             <ul>
//                 {nameList}
//             </ul>
//         </div>
//     )
// }

const Test = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'java' },
        { id: 2, text: 'spring' },
        { id: 3, text: 'springBoot' },
    ]);

    const [input, setInput] = useState('');
    const [nextId, setNextId] = useState(4);

    const nameList = names.map(name =>
        <li key={name.id}> {name.text} </li>
    )

    const onChange =e =>{setInput(e.target.value)}

    const onClick = () =>{
        const name2=names.concat({
            id:nextId,
            text:input
        });
        setNextId(nextId);
        setNames(name2);
        setInput('');
    }

    return (
        <>
            <input onChange={onChange} value={input} />
            <button onClick={onClick}>추가</button>
            <ul>
                {nameList}
            </ul>
        </>
    );


}

export default Test;