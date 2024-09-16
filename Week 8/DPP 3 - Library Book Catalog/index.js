//1.
let bookCatalog={
    "Let Us C" :{
    author:"Yashavant Kanetkar",
    available:true,
    copies:4
    },
    "Java":{
        author:"E balagurusamy",
        available:false,
        copies:0
    }
};
//2
function displayCatalog()
{
    for (let book in bookCatalog) {
        console.log(bookCatalog[book]);
    }
}
displayCatalog();

//3
function addBook(catalog,title,writer,status,copies)
{
    catalog[title]={author:writer,available:status,copies:copies};
}
addBook(bookCatalog,"Atomic Habits","James Clear",true,6);
console.log("After adding new Book");
displayCatalog();

//4
function removeBook(catalog,title)
{
    if(catalog[title])
    {
        delete catalog[title];
    }
}
removeBook(bookCatalog,"Java");
console.log("Afer removal");
displayCatalog();

//5
function isBookInCatalog(catalog,title)
{
    if(title in catalog)
    {
        console.log(title + " Book is exists");
    }
    else{
        console.log(title+ " Book does'nt exist");
    }
}

isBookInCatalog(bookCatalog,"C++");

//6
let Title="2 states";
let Author="Chetan bhagat";
bookCatalog[Title]={author:Author,available:true,copies:5};
displayCatalog();

//7
console.log(bookCatalog["Let Us C"]);
console.log(bookCatalog["2 states"].author);

//8
bookCatalog.printAvailability=function(title)
{
    if(this[title])
    {
        console.log("Available")
    }
    else{
        console.log("not available");
    }
}
bookCatalog.printAvailability("Atomic Habits");

//Optional chaining

// console.log('copies',bookCatalog["Let Us C"]?.copies);
// console.log('author',bookCatalog["Java"]?.author);

//Set & Get MetaData
Object.defineProperty(bookCatalog["Atomic Habits"],"author",{
    writable:true,
    enumerable:true,
    configurable:true,
});

console.log("MetaData: ", Object.getOwnPropertyDescriptor(bookCatalog["Atomic Habits"],"author"));

bookCatalog["Atomic Habits"].author="JS Katre";
console.log(bookCatalog);