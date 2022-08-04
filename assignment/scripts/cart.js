console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

var basket = [];
let oldItems = [];
const maxItems = 5;

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
addItem('sawdust');

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

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

function isFull(items) {
    if (items.length < maxItems) {
        return false;
    }   return true;
}

console.log('when basket is empty, return false: ', isFull(basket));
console.log('wastebasket has all the old items from old basket, return true: ', isFull(oldItems));

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`

function addItem2 (item) {
    if (isFull(basket) === false) {
        basket.push(item);
        return true;
    }   return false;
}
console.log('Adding stuff (expect true)', addItem2('stuff1'));
console.log('Adding stuff (expect true)', addItem2('stuff2'));
console.log('Adding stuff (expect true)', addItem2('stuff3'));
console.log('Adding stuff (expect true)', addItem2('stuff4'));
console.log('Adding stuff (expect true)', addItem2('stuff5'));
console.log('Adding stuff (expect false)', addItem2('stuff6'));

console.log(basket);

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

function removeItem(item, array) { //ah, multiple parameters in function so function could reference any array, not just 'basket'
   if(array.indexOf(item)>=0) {
    oldItems.push(array[array.indexOf(item)]); //is there a way to push the output of array.splice() into newItems? array.spice returns an array, and i couldn't figure out how to use array.asString
    array.splice(array.indexOf(item),1);
    console.log('in removeItem(). basket is: ', array);
    return true;
   } return null;
} 

console.log('return stuff2 to shelves, expecting true: ', removeItem("stuff2", basket));
console.log('short term memory loss! return stuff2 to shelves? expecting null: ', removeItem("stuff2", basket));
console.log('*ALL* of your old items are still here, you indecisive slob: ', oldItems);

function removeItem2(array, item1, item2) { //trying it out to remove *up to two items*
    item1Index = array.indexOf(item1);
    item2Index = array.indexOf(item2);
    if(item1Index >= 0 && item2Index >= 0) {
     array.splice(item1Index,1);
     array.splice(item2Index,1);
     console.log('in function: ', array, item1, item2);
     return true;
    } else if (item1Index >= 0 && (item2Index < 0 || item2Index === undefined)) {
        array.splice(item1Index,1);
        console.log('in function: ', array, item1, item2);
        return true;   
    } else if ((item1Index < 0 || item2Index === undefined) && item2Index >= 0) {
        array.splice(item2Index,1);
        console.log('in function: ', array, item1, item2);
        return true;
    }
    console.log('in function: ', array, item1, item2);
    return null;
 } 

console.log('expect true: ', removeItem2(basket, "stuff5","stuff3"));
console.log('expect true: ', removeItem2(basket, "stuff1","stuff2"));
console.log('expect true: ', removeItem2(basket, "stuff4"));

console.log('Adding stuff (expect true)', addItem2('stuff1'));
console.log('Adding stuff (expect true)', addItem2('stuff2'));
console.log('Adding stuff (expect true)', addItem2('stuff3'));
console.log('Adding stuff (expect true)', addItem2('stuff4'));
console.log('Adding stuff (expect true)', addItem2('stuff5'));

console.log('expect true: ', removeItem2(basket, 'stuff6','stuff4'));
console.log('expect null: ', removeItem2(basket, 'stuff6','stuff7'));
console.log('expect null: ', removeItem2(basket, 'stuff7'));


