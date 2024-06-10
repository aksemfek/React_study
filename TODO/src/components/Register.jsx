import { useRef, useState } from "react";
import "./Register.css";

const Register = ({ onCreate }) => {

    const [content, setContent] = useState("");
    const inputRef = useRef();

    const onkeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }

    const onContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if (content === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(content);  //할일에 넣은 값을 세팅해서 기존 배열과 띄운다
        setContent("");
    }

    return (
        <div className="Register">
            <input onKeyDown={onkeydown} ref={inputRef} value={content} onChange={onContent} placeholder="할일"></input>
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Register;