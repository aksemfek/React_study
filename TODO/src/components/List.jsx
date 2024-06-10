import "./List.css"
import Item from "./Item";
import { useState } from "react";

const List = ({ todos, onUpdate }) => {

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

    return (
        <div className="List">
            <h4>To do List</h4>
            <input onChange={onSearch} value={search} placeholder="검색어 입력하세요" />
            <div className="li">
                {filterData2.map((todo) => { // 배열에 담길 값을 리스트 형태로 반복적으로 렌더링
                    // 리스트로 렌더링할 때 고융한 key 값이 있어야 한다.
                    return <Item key={todo.id}{...todo} onUpdate={onUpdate}/>;
                })}
            </div>
        </div>
    );
};

export default List;