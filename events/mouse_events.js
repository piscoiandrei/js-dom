// MOUSE EVENTS ----------------------------------------------------------------------

//let button = document.getElementById('button').addEventListener('click', click_event);

function click_event(e) {
    console.log('Btn has been clicked')
    document.getElementById('header-title').textContent = 'Changed'
    document.querySelector('#main').style.backgroundColor = 'grey'

    console.log(e)
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.className)
    console.log(e.target.classList)


    var output = document.getElementById('output')
    output.innerHTML = '<h3>' + e.target.id + '</h3>'

    // the type of the event
    console.log(e.type)


    // coordinates of the mouse relative to the whole pg
    console.log(e.clientX)
    console.log(e.clientY)


    // checks if the user presses a key while clicking
    console.log(e.altKey)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
}


let button = document.getElementById('button')


button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);


var box = document.getElementById('box')
// only for itself
box.addEventListener('mouseenter', runEvent)
box.addEventListener('mouseleave', runEvent)
// for inner elements of the 'box'
box.addEventListener('mouseover', runEvent)
box.addEventListener('mouseout', runEvent)

// detects movement inside the box
box.addEventListener('mousemove', runEvent)


function runEvent(e) {
    console.log('Event type: ' + e.type)

    // offsetX/offsetY - are relative to the parent container
    //out = document.getElementById('output')
    //out.innerHTML = '<h3> MOuseX: ' + e.offsetX + '</h3>' + '<h3> MOuseY: ' + e.offsetY + '</h3>'


    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 49)"

}