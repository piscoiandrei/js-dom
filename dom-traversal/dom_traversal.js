// TRAVERSING THE DOM //
var itemList = document.querySelector('#items')

// parentNode
console.log(itemList.parentNode)
itemList.parentNode.style.backgroundColor = 'red'

// you can chain it
console.log(itemList.parentNode.parentNode.parentNode)



//parentElement
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor = 'white' // blue to see diff

// you can chain it
console.log(itemList.parentElement.parentElement.parentElement)

// parentNode and parentElement can be used interchangeably


//children

console.log(itemList.children) // returns a HTML Collection
itemList.children[3].style.backgroundColor = 'yellow'


// firstElementChild
console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello First'

// lastElementChild
console.log(itemList.lastElementChild)
itemList.lastElementChild.textContent = 'Hello last'


// nextElementSibling
console.log(itemList.nextElementSibling)

// previousElementSibling
console.log(itemList.previousElementSibling)