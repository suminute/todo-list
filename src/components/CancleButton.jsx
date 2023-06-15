function CancleButton({ todo, onSubmitHandler }) {
  return (
    <button className='cancle-btn' onClick={(e) => onSubmitHandler(e, todo.id)}>
      취소
    </button>
  );
}

export default CancleButton;
