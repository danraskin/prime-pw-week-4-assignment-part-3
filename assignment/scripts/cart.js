console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = [];
let oldItems = [];

//   - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added

function addItem (item) {
    basket.push(item)
    return true;
}
console.log('Adding apples (expect true)', addItem('apples'));

//   - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line

function listItems (items) {
    for (x of items) {
        console.log(x);
    }
}

addItem('dog');
addItem('lemur');
addItem('gerbil');
addItem('spittle');

console.log(`The items my basket are: ${basket}`);

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
console.log(basket);

function empty(items) {
    for (let i = items.length-1; items.length > 0; i--) {
        console.log(items[i]); //useful for testing;
        oldItems.push(items.pop());  //this PUSHES all the POPped items into an OLD items array for storage.
        
    }
}
empty(basket);
console.log(`Basket is now`, basket);
console.log('all your old items are here: ', oldItems);
// this was took me a minute. I forgot that the for loop *keeps running as long as second condition is TRUE* 
//rather than *keeps running until the second condition is true*
//I also forgot my terminating condition did not need to involve i!
