console.log("main...");

//bind the event
let btnObj=document.getElementById("submitData");

btnObj.onclick =()=>{
  console.log("Submit button clicked...");

    //Case 1
    //get data from the input text or element
    // var firstName=document.getElementById("firstName");
    // var lastName=document.getElementById("lastName");
    // var jobTitle=document.getElementById("jobTitle");
    // var comment=document.getElementById("comment");
    // console.log(firstName.value + lastName.value + jobTitle.value + comment.value);

    // //show data to other div
    // document.getElementById("dataContainer").innerHTML =`First Name : ${firstName.value} <br> 
    //                         Last Name : ${lastName.value} <br>
    //                         Job Title : ${jobTitle.value} <br>
    //                         Comment : ${comment.value} <br>`;


    //Case 2

    let allTextbox= document.querySelectorAll("input[type='text']");
    console.log(allTextbox);

    console.log(allTextbox[0].value);

    // document.getElementById("dataContainer").innerHTML =`First Name : ${allTextbox[0].value} <br> 
    // Last Name : ${allTextbox[1].value} <br>
    // Job Title : ${allTextbox[2].value} <br>
    // Comment : ${allTextbox[3].value} <br>`;


    //Case 3
    let html='';
    let allLables= document.querySelectorAll("label");
    console.log(allLables);
    for(i=0; i<allTextbox.length; i++)
    {
            //you can use allLables[i].htmlFor or allLables[i].innerText
            html +=`${allLables[i].innerText} : ${allTextbox[i].value} <br> `;
    }
    document.getElementById("dataContainer").innerHTML =html;





    
}



