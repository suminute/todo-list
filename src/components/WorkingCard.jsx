import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";

function WorkingCard({ todo, onSubmitHandler }) {
  return (
    <div className='card-container'>
      {todo
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div key={todo.id} className='todo-card'>
              <div>{todo.title}</div>
              <div>{todo.body}</div>
              <div className='button'>
                <DeleteButton todo={todo} onSubmitHandler={onSubmitHandler} />
                <CompleteButton todo={todo} onSubmitHandler={onSubmitHandler} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default WorkingCard;
