// KEYBOARD EVENTS

var itemInput = document.querySelector('input[type="text"]')

//itemInput.addEventListener('keydown', runEvent)
//itemInput.addEventListener('keyup', runEvent)
itemInput.addEventListener('keypress', runEvent)


// OTHER

itemInput.addEventListener('focus', runEvent)
itemInput.addEventListener('blur', runEvent) // when you click out of the element

itemInput.addEventListener('cut', runEvent)
itemInput.addEventListener('paste', runEvent)
itemInput.addEventListener('copy', runEvent)

// anything you do with this inputItem will trigger this event
itemInput.addEventListener('input', runEvent)


var select = document.querySelector('select')
select.addEventListener('change', runEvent) // this will work with 'input' event aswell


function runEvent(e) {
  console.log(e.type)

  //prints element to a div
  //document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>'

}