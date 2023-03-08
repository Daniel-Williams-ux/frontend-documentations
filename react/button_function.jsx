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


//comparing HTML with React

//HTML
<button id="js-btn" onclick="clickHandler()"
>Click me!</button>

//JS Event Handling
const jsbt = document.getElementById('js-btn')
jsbt.addEventListener('click', function () {
  console.log('clicked')
})

//React
<button onMouseOver={clickHandler}>
 Click me!</button>
//function is not invoked in react
  
