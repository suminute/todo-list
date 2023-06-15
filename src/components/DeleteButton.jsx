function DeleteButton({ todo, onSubmitHandler }) {
  return (
    <button className='delete-btn' onClick={(e) => onSubmitHandler(e, todo.id)}>
      삭제하기
    </button>
  );
}

export default DeleteButton;
