const allRulers=['Cersei Lannister','Ahmad','Maurice','Swantje','Irem','Florian'];
const times=[5000,3000,2000,1000,1000,1000];
let index=0;
let currentRuler;

const changeRuler= (rulerName,time) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(rulerName);
        },time)
    });
};
/*
Here main difference is that first operation has 5000 so it means this operation will wait 5ms and then execute and after that next (then) operation (3000) will execute and so on. So it is difference then previous example chainingWithoutPromise.
*/
changeRuler(allRulers[index],times[index]) //index=0, changeRuler('Cersei Lannister',5000)
.then((result,error)=>{   
    //resolve(rulerName);   
    //then's first parameter (result) is always for the resolve/success
    //then's second parameter (error) is always for the reject/failure
    currentRuler=result;
    console.log(currentRuler);  //'Cersei Lannister'
    index++;  // index=1
    return changeRuler(allRulers[index],times[index]); //index=1, changeRuler('Ahmad',3000)

})
.then((result,error)=> {   //resolve(rulerName);  
    currentRuler=result;
    console.log(currentRuler);  //'Ahmad'
    index++;  // index=2
    return changeRuler(allRulers[index],times[index]); 
})
.then((result,error)=> {   //resolve(rulerName);  
    currentRuler=result;
    console.log(currentRuler);  //'Maurice'
    index++;  // index=3
    return changeRuler(allRulers[index],times[index]); 
})
.then((result,error)=> {   //resolve(rulerName);  
    currentRuler=result;
    console.log(currentRuler);  //'Swantje'
    index++;  // index=4
    return changeRuler(allRulers[index],times[index]); 
})
.then((result,error)=> {   //resolve(rulerName);  
    currentRuler=result;
    console.log(currentRuler);  //'Irem'
    index++;  // index=5
    return changeRuler(allRulers[index],times[index]); 
})
.then((result,error)=> {   //resolve(rulerName);  
    currentRuler=result;
    console.log(currentRuler);  //'Florian'
    index++;  // index=6
    return changeRuler(allRulers[index],times[index]); 
})