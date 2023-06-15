import DeleteButton from "./DeleteButton";
import CancleButton from "./CancleButton";

function DoneCard({ todo, onSubmitHandler }) {
  return (
    <div key={todo.id} className='todo-card'>
      <div>{todo.title}</div>
      <div>{todo.body}</div>
      <div className='button'>
        <DeleteButton todo={todo} onSubmitHandler={onSubmitHandler} />
        <CancleButton todo={todo} onSubmitHandler={onSubmitHandler} />
      </div>
    </div>
  );
}

export default DoneCard;
