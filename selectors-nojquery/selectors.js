// getElementById //
let headerTitle = document.getElementById('header-title')
let header = document.getElementById('main-header')
console.log(headerTitle)
console.log(header)



//getElementsByClassName//
var items = document.getElementsByClassName('list-group-item')
console.log(items)
// accessing - items[index]
items[1].textContent = 'Hello2'
items[1].style.fontWeight = 'bold'
items[1].style.backgroundColor = 'yellow'

// you can't use the selector methods with the 'items' object because it's a HTML Collection
// items.textContent = 'fwejf' -- ERROR
// you need to loop through it 

for (var i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'magenta'
}



// getElementsByTagName //
// works the same as getElementsByClassName()
var li = document.getElementsByTagName('li')
// no explination needed



// querySelector()//
// only grabs the 1st item out of a collection
// You have to use CSS syntax as argument
let header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 15px #ccc'

//                           selects by TAG name, only gets the 1st one
var input = document.querySelector('input')
input.value = 'HelloWorld'

var submit = document.querySelector('input[type="submit"]')
submit.value = "SEND"


var item = document.querySelector('.list-group-item')
item.style.backgroundColor = 'orange'


var item = document.querySelector('.list-group-item:last-child')
item.style.backgroundColor = 'pink'


// querySelectorAll()//

// returns a NodeList - you can run array functions on it
var titles = document.querySelectorAll('.title')
console.log(titles)

var every_other = document.querySelectorAll('li:nth-child(odd)')

for (var i = 0; i < every_other.length; i++) {
    every_other[i].style.backgroundColor = 'red'
}
