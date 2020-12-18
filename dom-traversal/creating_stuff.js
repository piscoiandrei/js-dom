// create a div
var newDiv = document.createElement('div')

// add class
newDiv.className = 'hello'

// add id
newDiv.id = 'hello_id'

// add attribte
newDiv.setAttribute('title', 'Hello Div')

// create a text node
var newDivText = document.createTextNode('hello worlddddd')

// add text to div
newDiv.appendChild(newDivText)


// insert the newDiv in the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')

console.log(newDiv)
// what you insert
container.insertBefore(newDiv, h1)
                              // the element you insert it before