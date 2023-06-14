function CancleButton(props) {
  return (
    <button className='cancle-btn' onClick={(e) => props.onSubmitHandler(e, props.todo.id)}>
      취소
    </button>
  );
}

export default CancleButton;
