//Let try to understand Node Vs Element
console.log(document instanceof Node);
console.log(document instanceof Element);
console.log(document.firstChild);
console.log(document.firstChild instanceof Node);
console.log(document.firstChild instanceof Element);
console.log(document.firstChild.nextSibling);
console.log(document.firstChild.nextSibling instanceof Node);
console.log(document.firstChild.nextSibling instanceof Element);
console.log(Element.prototype.__proto__ ===Node.prototype);
console.log(Document.prototype.__proto__ ===Node.prototype);

var myList= document.getElementsByTagName('ul')[0];
let firstListItem=myList.firstChild;
console.log(firstListItem);

var x= document.getElementById("second").previousElementSibling;  //return just HTML element
console.log(x);
document.getElementById("demo").innerHTML=x.innerHTML;

var y= document.getElementById("second").previousSibling;  //return Node text object
console.log(y);

var z=document.getElementById("second");
console.log(z);

var childList=document.getElementsByTagName('ul')[0];
console.log(childList.childNodes);

 firstListItem=document.querySelector('li');
console.log(firstListItem);

let list = firstListItem.parentElement;
let allItems=list.children;
let thirdItem=allItems[2];
console.log(thirdItem);


let pTag=document.getElementsByTagName('p')[0];
console.log(pTag);
let closestTag= pTag.previousElementSibling.closest('ul').lastElementChild;
console.log(closestTag);

