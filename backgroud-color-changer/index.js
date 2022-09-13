const colorChanger = document.getElementById('color-changer')
const body = document.getElementById('body')
const colorName = document.getElementById('color-discription')

const colors = ["red", "green", "black", "yellow", "violet"]
const randomNumber = Math.ceil( Math.random() * 4 )
colorName.innerText = colors[randomNumber]

body.style.backgroundColor = colors[randomNumber]
colorChanger.addEventListener( "click" , function changeColor(){
  window.location.reload(true)
  console.log('hello')
})
//  