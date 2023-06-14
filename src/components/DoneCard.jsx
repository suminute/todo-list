import DeleteButton from "./DeleteButton";
import CancleButton from "./CancleButton";

function DoneCard(props) {
  return (
    <div key={props.todo.id} className='todo-card'>
      <div>{props.todo.title}</div>
      <div>{props.todo.body}</div>
      <div className='button'>
        <DeleteButton todo={props.todo} onSubmitHandler={props.onSubmitHandler} />
        <CancleButton todo={props.todo} onSubmitHandler={props.onSubmitHandler} />
      </div>
    </div>
  );
}

export default DoneCard;
