let inventory=["File","pen","notebook","Eraser","stapler"];
function displayInventory()
{
    for(let i=0;i < inventory.length;i++) {
        console.log("index : " + i , ", value :" + inventory[i]);      
    }
    
}
displayInventory()
function addItem()
{
    inventory.push("Duster");
    console.log(inventory);

}
addItem();

function removeLastItem()
{
    inventory.pop();
    console.log(inventory);
}
removeLastItem();

function removeFirstItem()
{
    inventory.shift();
    console.log(inventory);
}
removeFirstItem();

function addItemToBeginning()
{
    inventory.unshift("Sharpner");
    console.log(inventory);
}
addItemToBeginning();

//reverse
function reverseInventory()
{
    inventory.reverse();
    console.log(inventory);
}
reverseInventory();

//join 
function joinInventory()
{
    inventory.join();
    console.log(inventory);
}
joinInventory();

//inventoryToString
function inventoryToString()
{
    console.log(inventory.toString());
}
inventoryToString();

//removeItem
function removeItem()
{
    console.log(inventory.splice(2));
}
removeItem();

//searchItem
function searchItem()
{
   let item = inventory.indexOf("pen");
   console.log(item);
}
searchItem();

//sortInventory
function sortInventory()
{
    inventory.sort();
    console.log(inventory);
}

sortInventory();

//slice
function getInventorySlice()
{
    let arr2=inventory.slice(0,2);
    console.log(arr2);
    
}
getInventorySlice();

//delete
function deleteitem()
{
    delete inventory[1];
    console.log(inventory);
}
deleteitem();
