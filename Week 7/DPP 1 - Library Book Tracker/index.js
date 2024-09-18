const prompt=require("prompt-sync")({signint:true});
let books=[];
let statuses=[];
let n= Number(prompt("Number of Books : "));
for(let i=0;i<n;i++)
{
    books[i]=prompt("Enter Title of Book : ");
    statuses[i]='Available';
}
for(let i=0;i<n;i++)
{
        console.log("Title : "+ books[i] +" status: " + statuses[i]);
}

let bookTitle=prompt("Enter book Title for which you have to update status: ");
let action=prompt("Choose the action : borrow, return or exit: ");
while(action!=='exit')
{
   
   let found=false;
   for(let i=0;i<n;i++)
   {
    if(books[i]=== bookTitle){
        found=true;
        if(action==="borrow" && statuses[i]==="Available")
        {
            statuses[i]="Borrowed";
            console.log(bookTitle + " book is borrowed");
        }
        else if(action==="return" && statuses[i]==="Borrowed"){
            statuses[i]="Available";
            console.log(bookTitle + " book is returned ");
        }
        else{
            console.log("book already in correct statuses");
        }
        
    }
    }
    if(found===false)
    {
         console.log("book not found");
    }
    break;
}

console.log("Using Do-while");
let index=0;
do{
    console.log("Title: " + books[index] + "  statuses : "+ statuses[index]);
    index++;
}
while(index<n);
