// const Button = (props) => {
//     return <button style={{ color: props.color }}>{props.text}</button>
// };

const Button = ({ text, color, children }) => {
    return <button style={{ color: color }}>
        {text}
        {children}
        </button>
};

Button.defaultProps = {
    color: "pink",
}

export default Button;

