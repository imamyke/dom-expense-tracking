const todoList = document.querySelector('#todolist')
const priceItems = document.querySelectorAll('.price')

for(let price of priceItems ) {
  Number(price.innerText > 0) 
  ? price.classList.add('up') 
  : price.classList.add('down')
}

// delete
const deleteItem = (item) => {
  if(item.target.classList.contains('delete')) {
    item.target.parentNode.remove()
  }
}

// create
const createItem = (item) => {
  const inputs = document.querySelectorAll('input')
  if (!inputs[0].value.trim()) {
    return alert("請輸入內容唷~")
  }
  const newList = document.createElement('div')
  newList.setAttribute('class', 'item')
  const newItem = `
    <span>${inputs[0].value}</span>
    <span class="price ${inputs[1].value > 0 ? 'up' : 'down'}">${inputs[1].value}</span>
    <div class="btn delete">delete</div>
  `
  newList.innerHTML = newItem
  todoList.appendChild(newList)
  inputs.forEach(input => input.value = '')
}

// create
window.addEventListener('keydown', item => {
  if (item.key === 'Enter') {
    createItem(item)
  }
})

// delete
todoList.addEventListener('click', item => deleteItem(item))