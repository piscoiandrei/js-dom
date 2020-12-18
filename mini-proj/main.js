let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

// form submit event
form.addEventListener('submit', addItem)
// delete event
itemList.addEventListener('click', removeItem)
// filter items
filter.addEventListener('keyup', filterItems)

// add item
function addItem(e) {
    e.preventDefault() // disabling the normal submission of the form
    console.log(1)

    // Get input value
    var formText = document.getElementById('input-id').value

    // Create new <li>
    var li = document.createElement('li')
    // add class
    li.className = 'list-group-item'

    // add text node with input val
    li.appendChild(document.createTextNode(formText))


    // Create delete button element
    var deleteBtn = document.createElement('button');
    //add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    // append text node
    deleteBtn.appendChild(document.createTextNode('x'))

    // append btn to li
    li.appendChild(deleteBtn)

    // append li to list
    itemList.appendChild(li)
}


// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
}


function filterItems(e) {
    var text = e.target.value.toLowerCase()
    // get lis
    var items = itemList.getElementsByTagName('li') // returns HTML COLLECTION
    // convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        }
        else {
            item.style.display = 'none'
        }
    });
}