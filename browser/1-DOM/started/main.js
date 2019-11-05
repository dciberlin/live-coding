console.log("Hallo world");

var greetingObj=document.getElementById("greeting");
console.log(greetingObj);

greetingObj.innerHTML="Hello World";

var saymynameObj=document.getElementById("saymyname");

saymynameObj.onclick=function(){
    //alert("I am button and cliked...");

    var mynameObj=document.getElementById("myname");divContainer
    thedateObj.innerHTML="Hallo " + mynameObj.value 
                        + " Today is " + getDayName()[0]
                        + " only " + getDayName()[1] +" days left until the weekend";


    //by class
    var exampleObj= document.getElementsByClassName("example");
    console.log(exampleObj);
    exampleObj[0].innerHTML =" I am from backend";

    //querySelector
   var exampleSelectorObj= document.querySelector('.example');
   console.log(exampleSelectorObj);
   exampleSelectorObj.style.backgroundColor="Yellow";

    //querySelectorAll
    var exampleAllSelectorObj= document.querySelectorAll('.example');
    console.log(exampleSelectorObj);
    for(i=0; i<exampleAllSelectorObj.length; i++)
    {
        exampleAllSelectorObj[i].style.backgroundColor="red";
    }

    //selector  + #idname
    var divContainerObj=document.querySelector("#divContainer");
    divContainerObj.innerHTML="#IDName access and replace";
   
   
    function getDayName(){
        var weekDays=['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

        //current date
        var date=new Date();
        //current day
        var day=date.getDay(); // return day from 1 to 7
     
        var arr=[weekDays[day-1],5-day];

       return arr;
    }

};

//add dynamic input type text
var input=document.createElement("input");
input.type="text";
input.className="testClass";
document.body.appendChild(input);

var divContainerObj=document.querySelector("#divContainer");
let newHeading=document.createElement('h1');
newHeading.innerHTML="I am Heading from the backend - added dynamically";
divContainerObj.insertAdjacentElement("beforebegin",newHeading);

divContainerObj.insertAdjacentHTML("afterend","<h3>I am here h3 testing</h3>");


