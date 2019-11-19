
// console.log("1");
// setTimeout(function(){console.log("2")},3000);
// console.log("3");
// setTimeout(function(){console.log("4")},1000);

//Output : 1 3 4 2

// The executor should call only one resolve or one reject. The promise’s state change is final. All further calls of resolve and reject are ignored:
// The executor should do a job (something that takes time usually) and then call resolve or reject to change the state of the corresponding Promise object.
// The Promise that is either resolved or rejected is called “settled”, as opposed to a initially “pending” Promise.

let promise1 = new Promise(function(resolve,reject){
    //our code....executor...
    //console.log("promise...");
    setTimeout(()=>resolve("done..changed"),1000);
});

promise1.then(
result => console.log("success " +result),  //first parameter is always for the resolve/success
error => console.log("error "+error),  //second parameter is always for the reject/failure
);

let promise2 = new Promise(function(resolve,reject){
setTimeout(()=>reject("failure"),1000);
});

promise2.then(
result => console.log(result),
error => console.log(error),
);

//blocking /non blocking code

function myFunction(){
setTimeout(function(){
    console.log("hello from my function...");
},1000)
}
myFunction();

/*
- A function that is passed with the arguments resolve and reject. 

- The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object). 

- The resolve and reject functions, when called, resolve or reject the promise, respectively. 
Promise.all()
Promise.allSettled()
Promise.any()
Promise.prototype.catch()
Promise.prototype.finally()
Promise.prototype.then()
Promise.race()
Promise.reject()
Promise.resolve()
*/

// The executor should call only one resolve or one reject. The promise’s state change is final. All further calls of resolve and reject are ignored:

// The idea is that a job done by the executor may have only one result or an error.
// Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.

let promise3=new Promise(function(resolve,reject){

    //Case 1
    //reject(new Error("I am rejected statement..."));  
    //resolve("At promise3...done","DCI"); //ignored

    //case 2
    resolve("At promise3...done","DCI");
    reject(new Error("I am rejected statement..."));  //ignored
    setTimeout(()=>resolve("my time is out...."));  //ignored
});

promise3.then(
result => console.log("Promise3:success " +result),  
error => console.log("Promise3:error "+error), 
);
/*
let promise4=new Promise(function(resolve,reject){

    reject(new Error("Opps something wrong at promise4..."));  
   
});

promise4.catch(err=>{console.log("Catch: " +err)});
*/
console.log("Promise with finally....");

new Promise(function(resolve,reject){

  
    resolve("done..");
    //reject(new Error("Opps something wrong at promise4..."));  
   
})
.finally(()=>console.log("finally done..."))
.then(result=>console.log(result))
.catch(err=>{console.log("Catch: " +err)});