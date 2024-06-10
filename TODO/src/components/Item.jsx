import "./Item.css"

const Item = ({ id, isDo, content, date , onUpdate }) => {

    const onCheckbox = () =>{
        onUpdate(id);
    }

    return (
        <div className="TodoItem">
            <input onChange={onCheckbox} type="checkbox" readOnly checked={isDo} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button>삭제</button>
        </div>
    );
};

export default Item;