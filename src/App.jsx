import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DeleteButton from "./components/DeleteButton";
import CancleButton from "./components/CancleButton";
import CompleteButton from "./components/CompleteButton";
import WorkingCard from "./components/WorkingCard";
import DoneCard from "./components/DoneCard";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.className == "input-title") {
      setTitle(event.target.value);
    } else if (event.target.className == "input-body") {
      setBody(event.target.value);
    }
  };

  const onSubmitHandler = (event, id) => {
    //추가하기(add-btn)을 눌렀을 때
    if (event.target.className == "add-btn") {
      event.preventDefault();
      const newTodo = {
        id: todo.length + 1,
        title,
        body,
        isDone: false,
      };
      setTodo([...todo, newTodo]);
      setTitle("");
      setBody("");
    }

    //삭제하기 눌렀을 때
    else if (event.target.className == "delete-btn") {
      const newTodo = todo.filter((todo) => todo.id !== id);

      setTodo(newTodo);
    }

    //완료 눌렀을 때
    else if (event.target.className == "complete-btn") {
      const newTodo = todo.map((todo) => {
        if (todo.id === id) {
          todo.isDone = true;
        }
        return todo;
      });

      setTodo(newTodo);
    }

    //취소 눌렀을 때
    else if (event.target.className == "cancle-btn") {
      const newTodo = todo.map((todo) => {
        if (todo.id === id) {
          todo.isDone = false;
        }
        return todo;
      });

      setTodo(newTodo);
    }
  };

  return (
    <div className='app-container'>
      <header>
        <div>My Todo List</div>
        <div>React</div>
      </header>
      <form>
        <label>제목</label>
        <input className='input-title' value={title} onChange={onChangeHandler}></input>
        <label>내용</label>
        <input className='input-body' value={body} onChange={onChangeHandler}></input>
        <button className='add-btn' onClick={onSubmitHandler}>
          추가하기
        </button>
      </form>
      <main>
        <h2>Working...🔥</h2>
        <div className='card-container'>
          {todo
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return <WorkingCard todo={todo} onSubmitHandler={onSubmitHandler} />;
            })}
        </div>
        <h2>Done...!🎉</h2>
        <div className='card-container'>
          {todo
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return <DoneCard todo={todo} onSubmitHandler={onSubmitHandler} />;
            })}
        </div>
      </main>
    </div>
  );
}

export default App;
