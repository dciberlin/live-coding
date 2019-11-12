//Any variables declared inside the IIFE are not visible to the outside world.

(function (){
    //we keep these variables private inside this closure scope
    let myGrades=[93,95,88,0,55,91];

    let average=function(){
        let total=myGrades.reduce(function(accumulator,item){return accumulator + item;},0);
        return 'Your average grade is '+ total/myGrades.length + '.';
    }
    
    let failing=function(){
        let failingGrades=myGrades.filter(function(item){
            return item < 70;
        });

        return 'You failed '+ failingGrades.length + ' times.';
    }
    //console.log(failing());

})();

//console.log(failing());  //variables and functions are hidden from the parent (global) namespace

//We can use local variables inside this function without accidentally overwriting existing global variables, still access the global variables.

const global="Hallo, I am global variable";
let temp="I am testing";


(function (){
    //we keep these variables private inside this closure scope
    let myGrades=[93,95,88,0,55,91];

    let average=function(){
        let total=myGrades.reduce(function(accumulator,item){return accumulator + item;},0);
        return 'Your average grade is '+ total/myGrades.length + '.';
    }
    
    let failing=function(){
        let failingGrades=myGrades.filter(function(item){
            return item < 70;
        });

        return 'You failed '+ failingGrades.length + ' times.';
    }
    const global="Blah";
    let temp="I am not testing";

    console.log(average());
    console.log(failing());
    console.log(global);
    console.log(temp);

})();

console.log(global);
console.log(temp);
