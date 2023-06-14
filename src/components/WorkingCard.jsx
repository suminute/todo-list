import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";

function WorkingCard(props) {
  return (
    <div key={props.todo.id} className='todo-card'>
      <div>{props.todo.title}</div>
      <div>{props.todo.body}</div>
      <div className='button'>
        <DeleteButton todo={props.todo} onSubmitHandler={props.onSubmitHandler} />
        <CompleteButton todo={props.todo} onSubmitHandler={props.onSubmitHandler} />
      </div>
    </div>
  );
}

export default WorkingCard;
