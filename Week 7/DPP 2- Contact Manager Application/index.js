let contacts=[];

function addContact(name,number)
{
    contacts[contacts.length]={name:name,phone:number};
    console.log("Contact has been added");
}
addContact("Aarzu",8669538757);
addContact("Swalu",8668334616);
console.log(contacts);

function deleteContact(name)
{
    let deleted1=false;
    let newContacts=[];
    for(let i=0; i< contacts.length;i++)
    {
        if(contacts[i].name=== name)
        {
            contacts.splice(i,1);
            deleted1=true;
            console.log("Contact found & deleted");
            return;
        }
        else
        {
            newContacts[newContacts.length]=contacts[i];
        }
    }
    console.log("Contact not found");
}
deleteContact("Aarzu");

function displayContacts()
{
    for(let contact of contacts)
    {
        console.log(contact.name, " - ", contact.phone);
    }
}
displayContacts();

//arbitrary number of parameters 
function addMultipleContacts()
{
    //add contact object
    for(let i=0; i< arguments.length;i++)
    {
        addContact(arguments[i].name, arguments[i].phone);        
        console.log(arguments[i].name, arguments[i].phone);
    }
    
}
addMultipleContacts({name:"Mahi",phone:8421333973},{name:"Isak",phone:9423578650});

//return value
function findContact(name)
{
    for(let contact of contacts)
    {
        if(contact.name===name)
            return contact;
    }
    return null;
}

let found = findContact("Mahi");
console.log("Contact found: ",found);

// function expression
const updateContact=function(name,newNumber)
{
    for(let contact of contacts)
    {
        if(contact.name===name)
        {
            contact.phone=newNumber;
            console.log("Contact found & phone number is updated");
            return;
        }

    }
    console.log("Contact not available");
};
updateContact("Isak",7038067760);
displayContacts();

//arrow function
let count=0;
const countContacts=()=>{
    for(let i=0;i<contacts.length;i++)
    {
        count++;
    }
    return count
};
console.log("Total number of Contacts :",countContacts());
