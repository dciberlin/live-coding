//Chaining of the operation with TimeOut function, without promises.
let currentRuler= 'Cersei Lannister';
const changeRuler= (firstRuler,secondRuler,thirdRuler,fourthRuler,finalRuler) =>{
setTimeout(()=>{
       currentRuler=firstRuler;
       console.log('firstRuler:' + currentRuler);
       setTimeout(()=>{
           currentRuler=secondRuler;
           console.log('secondRuler:' +currentRuler);
           setTimeout(()=>{
               currentRuler=thirdRuler;
               console.log('thirdRuler:' +currentRuler);
               setTimeout(()=>{
                   currentRuler=fourthRuler;
                   console.log('fourthRuler:' +currentRuler);
                   setTimeout(()=>{
                       currentRuler=finalRuler;
                       console.log('finalRuler:' +currentRuler);
                   },1000)
               },1000)
           },2000)
       },3000) 
},5000)
};

changeRuler('Ahmad','Maurice','Swantje','Irem','Florian');

/*
Here most outside setTimeOut has 5000 (5ms) so this function will wait 5ms and then it will goes
inside other setTimeOut and this will wait for 3000 (3ms) and then it will execute and so on ..
So until 5ms will reach to finish (1ms)... so first statement will execute firstRuler:Ahmad
*/
//output
// firstRuler:Ahmad
// secondRuler:Maurice
// thirdRuler:Swantje
// fourthRuler:Irem
// finalRuler:Florian
