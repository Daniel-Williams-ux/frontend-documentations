const Btn = () => {
  const clickHandler = () => {
    console.log('clicked')
  }
  return (
      <button onClick={clickHandler}>
        Click me
      </button>
  )
}

export default Btn;


const Btn = () => {
  const clickHandler = () => {
    console.log('mouse hovered')
  }
  return (
      <button onMouseOver={clickHandler}>
        Click me
      </button>
  )
}

export default Btn;
