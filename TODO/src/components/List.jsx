import "./List.css"
import Item from "./Item";
import { useState } from "react";
import { useMemo, useContext } from "react";
import { TodoListContext } from "../App";

const List = () => {

    const { todos } = useContext(TodoListContext);


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
    const { total, doCnt, notDo } = useMemo(() => {
        const total = todos.length;
        const doCnt = todos.filter(
            (todo) => todo.isDo).length;
        const notDo = total - doCnt;

        return {
            total,
            doCnt,
            notDo,
        }
    }, [todos]); // 콜백 함수가 반환하는 값을 그대로 반환해줌 / deps를 기준으로 메모리제이션함
    // 빈 배열로 설정했으므로 첫번째 콜백함수의 연산반환이 컴포넌트가 최초로 렌더링 되었을 때 한번만 이루어짐
    // useMemo로 만들면 연산은 딱 한번만 수행

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
                    return <Item key={todo.id}{...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;