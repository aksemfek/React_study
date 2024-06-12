import { useState, useRef } from 'react'

import './App.css'
import Header from './components/Header'
import Register from './components/Register'
import List from './components/List'
import { useReducer } from 'react'
import { useCallback } from 'react'
import { createContext } from 'react'

const copyData = [
  {
    id: 0,
    idDo: false,
    content: "스프링 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    idDo: false,
    content: "프로젝트 스터디 하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    idDo: false,
    content: "헬스가기",
    date: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [action.data, ...state]

    case "update":
      return state.map((item) => item.id === action.targetId ? { ...item, isDo: !item.isDo } : item)

    case "delete":
      return state.filter((todo) => todo.id != action.targetId)

    default:
      return state;
  }
}

// 외부에다 선언 -> 리렌더링될때마다 다시 생성될 필요가 없기 때문에 외부에 선언
export const TodoListContext = createContext();

function App() {

  const [todos, dispatch] = useReducer(reducer, copyData);

  const idState = useRef(3);

  const onUpdate = (targetId) => {
    //  todos state값들 중에 targetId와 일치하는 Id를 갖는 item의 isDo를 변경
    dispatch({
      type: "update",
      targetId: targetId,
    });
  };

  // todos배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 배열
  const onDelete = (targetId) => {
    dispatch({
      type: 'delete',
      targetId: targetId,
    })

  }

  const onCreate = useCallback((content) => {
    dispatch({
      type: "create",
      data: {
        id: idState.current++,
        isDo: false,
        content: content,
        date: new Date().getTime(),
      }
    })
    // setTodos([newTodo, ...todos]); //추가하고자하는 값들이랑 기존의 todos배열 
  }, []);

  return (
    <div className='App'>

      <Header />
      <TodoListContext.Provider
        value={{
          todos,
          onCreate,
          onUpdate,
          onDelete
        }}> 

        <Register />
        <List />
      </TodoListContext.Provider>
    </div>
  )
}

export default App
