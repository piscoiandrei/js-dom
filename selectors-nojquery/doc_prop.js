// EXAMINE THE DOCUMENT OBJECT //

// prints all the properties of document model
console.dir(document)

console.log(document.domain)
console.log(document.URL)
console.log(document.title)
// you can also change properties
document.title = 123;

console.log(document.doctype)
console.log(document.head)
console.log(document.body)

// collection of everything that's in the DOM
console.log(document.all)
// you can grab elements using an index
console.log(document.all[10])

// get all the forms, links etc
// returns a HTML COLLECTION
console.log(document.forms)
console.log(document.links)
console.log(document.images)

