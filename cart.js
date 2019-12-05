// console.log('hey bitch')
shoppingCart = []

function addItem () {
  console.log(shoppingCart)
  let song = document.getElementById('songTitle').innerHTML
  shoppingCart.push(song)
  console.log(song)
  console.log(shoppingCart)
}