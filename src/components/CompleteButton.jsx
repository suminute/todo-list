function CompleteButton({ todo, onSubmitHandler }) {
  return (
    <button className='complete-btn' onClick={(e) => onSubmitHandler(e, todo.id)}>
      완료
    </button>
  );
}

export default CompleteButton;
