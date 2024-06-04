// const Button = (props) => {
//     return <button style={{ color: props.color }}>{props.text}</button>
// };

// const Button = ({ text, color, children }) => {
//     return (
//         <button onClick={()=>{
//             console.log(text);
//         }}
//         style={{color:color}}>
//             {text}
//             {children}
//         </button>
//     );
// };

const Button = ({ text, color, children }) => {
    const onClickButton = () => {
        console.log(text);
    }
    return (
        <button onClick={onClickButton}
        onMouseOver={onClickButton}
        style={{color:color}}>
            {text}
            {children}
        </button>
    )

};

Button.defaultProps = {
    color: "pink",
}

export default Button;

