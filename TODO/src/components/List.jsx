import "./List.css"
import Item from "./Item";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {

    const [search, setSearch] = useState("");

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    const filterData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase()
                .includes(search.toLowerCase())
        );
    };

    const filterData2 = filterData();

    const analyze = () => {
        const total = todos.length;
        const doCnt = todos.filter(
            (todo) => todo.isDo).length;
        const notDo = total - doCnt;

        return {
            total,
            doCnt,
            notDo,
        }
    };
    const { total, doCnt, notDo } = analyze();

    return (
        <div className="List">
            <h4>To do List</h4>
            <div>total : {total}</div>
            <div>doCnt : {doCnt}</div>
            <div>notDo : {notDo}</div>
            <input onChange={onSearch} value={search} placeholder="검색어 입력하세요" />
            <div className="li">
                {filterData2.map((todo) => { // 배열에 담길 값을 리스트 형태로 반복적으로 렌더링
                    // 리스트로 렌더링할 때 고융한 key 값이 있어야 한다.
                    return <Item key={todo.id}{...todo} onUpdate={onUpdate} onDelete={onDelete} />;
                })}
            </div>
        </div>
    );
};

export default List;