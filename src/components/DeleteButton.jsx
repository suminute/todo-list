function DeleteButton(props) {
  return (
    <button className='delete-btn' onClick={(e) => props.onSubmitHandler(e, props.todo.id)}>
      삭제하기
    </button>
  );
}

export default DeleteButton;
