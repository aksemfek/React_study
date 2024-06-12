import { useContext } from "react";
import "./Item.css"
import { TodoListContext } from "../App";

const Item = ({ id, isDo, content, date }) => {

    const {onUpdate, onDelete} = useContext(TodoListContext)

    const onCheckbox = () => {
        onUpdate(id);
    }

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onCheckbox} type="checkbox" readOnly checked={isDo} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
};

export default Item;