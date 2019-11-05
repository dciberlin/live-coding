
//using the following method.   
// DOMOBJ.appendchild(child)
// DOMOBJ1.insertAdjacentElement( position, DOMOBJ2 )
// DOMOBJ1.insertAdjacentHTML( position, string )
// position = “beforebegin” => Before DOMOBJ1 itself
// position = “afterbegin” => Inside, before 1st child
// position = “beforeend” => Inside, after last child
// position = “afterend” => After DOMOBJ1 itself

//Task 1:
//get mainDiv
let mainDivObj=document.getElementById('mainDiv');

//Create H1 Element using dom method and put in main Div.
//set id as test
let h1Tag=document.createElement('H1');
h1Tag.id='test';
mainDivObj.appendChild(h1Tag);

//add one button inside mainDiv with click event bind and when click on it
//show message “Hallo i am from onclick with listener”
let btnObj=document.createElement('button');
btnObj.innerHTML="Hi";
btnObj.onclick = () => {
    console.log('Hallo i am from onclick with listener...');
}
mainDivObj.appendChild(btnObj);

//Task 2:
//2.1 :  Add 4 sub div inside main div.please specify id to every sub div like id=one, id=two, id=three, id=four
let divOne=document.createElement('div');
divOne.id='one';
mainDivObj.appendChild(divOne);
let divTwo=document.createElement('div');
divTwo.id='two';
mainDivObj.appendChild(divTwo);
let divThree=document.createElement('div');
divThree.id='three';
mainDivObj.appendChild(divThree);
let divFour=document.createElement('div');
divFour.id='four';
mainDivObj.appendChild(divFour);

// 2.2 : Insert p tag with dummy text at sub div two.
let pTag=document.createElement('P');
pTag.innerText='I am p tag inside the div container two';
divTwo.appendChild(pTag);

// 2.3 : Insert img tag with dummy image at sub div four.
let imgTag=document.createElement('img');
//imgTag.setAttribute('src','https://digitalcareerinstitute.org/media/dci.svg');
imgTag.src="https://digitalcareerinstitute.org/media/dci.svg";
divFour.appendChild(imgTag);

// 2.4 : Insert button tag before the end of the mainDiv with text “Test Me Event”
let btnEventTag=document.createElement('button');
btnEventTag.innerText='Test Me Event';
mainDivObj.appendChild(btnEventTag);

// 2.5 : Insert h6 tag before the main Div tag
let h6Tag=document.createElement('h6');
h6Tag.innerText='I am h6 tag';
mainDivObj.insertAdjacentElement('beforebegin',h6Tag);
//mainDivObj.insertAdjacentHTML('beforebegin','<h6>I am h6 tag </h6>');

// 2.6 : Insert h3 tag just after the main div tag
let h3Tag=document.createElement('h3');
h3Tag.innerText='I am h3 tag';
mainDivObj.insertAdjacentElement('afterend',h3Tag);

// 2.7 : Insert a tag just before the four div tag.
let aTag=document.createElement('a');
//aTag.href="https://techjobsfair.com";
aTag.setAttribute('href','https://techjobsfair.com');
aTag.innerText='I am a tag';
divFour.insertAdjacentElement('beforebegin',aTag);

// 2.8 : Insert p tag after the end of the main div tag.
let pTag2=document.createElement('p');
pTag2.innerText='I am p tag after the end fo the main div tag';
mainDivObj.insertAdjacentElement('afterend',pTag2);

// 2.9 : Show all div box with adding border but every div has different border color.
mainDivObj.style.border='5px solid blue';
divOne.style.border='4px dotted skyblue';
divTwo.style.border='3px dotted lightblue';
divThree.style.border='2px double red';
divFour.style.border='1px outset purple';

// 2.10 : Set background color for the p tag and foreground color for the text inside of the p tag.
pTag.style.background='black';
pTag.style.color='darkorange';
pTag2.style.background='black';
pTag2.style.color='darkorange';

// 2.11 : Change a element/tag url link color from the blue to dark red.
aTag.style.color='darkred';

// 2.12 : Apply onclick event to button and Change text “Test Me Event” of the button.
btnEventTag.onclick= () => {
    btnEventTag.innerText ='I have clicked';
}

// 2.13 : Add button and assign text “Change href” and bind the function which change the href of the a tag.
let btnChangeObj=document.createElement('button');
btnChangeObj.innerText='Change href';
btnChangeObj.onclick = () =>{
    aTag.setAttribute('href','https://digitalcareerinstitute.org');
}
document.body.appendChild(btnChangeObj);

// 2.14 : Add button and assign text “Calculate” and perform the +, - and / and display in the front/page.
//Not clear so we can skip

// 2.15 : Add h4 tag with id “greeting” , text “Hallo DCI” and p tag with id “thedate”, text How are you?
let h4Tag=document.createElement('h4');
h4Tag.setAttribute('id','greeting');
h4Tag.innerText='Hallo DCI';

let pTag3=document.createElement('p');
pTag3.setAttribute('id','thedate');
pTag3.innerText='How are you?';

document.body.appendChild(h4Tag);
document.body.appendChild(pTag3);

// 2.16 : Add input type “text” and id “myname”
let inputTag=document.createElement('input');
inputTag.type='text';
inputTag.id='myname';
document.body.appendChild(inputTag);

// 2.17 : Add button with id “saymyname”, text “Say hallo”.
let btnGreetObj=document.createElement('button');
btnGreetObj.id='saymyname';
btnGreetObj.innerText='Say hallo';
document.body.appendChild(btnGreetObj);

// 2.18 : Get name which entered in the textbox myname and show when click on the button “saymyname” and also need to replace “DCI” text with entered name from the h4.
btnGreetObj.onclick = () => {
    alert(inputTag.value);
    h4Tag.innerText =`Hallo ${inputTag.value}`;
}


