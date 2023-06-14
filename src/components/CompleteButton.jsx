function CompleteButton(props) {
  return (
    <button className='complete-btn' onClick={(e) => props.onSubmitHandler(e, props.todo.id)}>
      완료
    </button>
  );
}

export default CompleteButton;
