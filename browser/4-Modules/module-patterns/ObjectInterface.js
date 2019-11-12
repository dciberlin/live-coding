//IIFE can return a value that can be assigned to a variable.
//this approach lets us decide what variables/methods we want to keep private
// what variables/methods we want to expose by putting them in the return statement

let myGradesCalculate=(function (){
    //we keep these variables private inside this closure scope
    let myGrades=[93,95,88,0,55,91];

    //Expose these functions via an interface while hiding the implementation of the module within the function() block
    return {

        average :function(){
            let total=myGrades.reduce(function(accumulator,item){return accumulator + item;},0);
            return 'Your average grade is '+ total/myGrades.length + '.';
        },
        
        failing : function(){
            let failingGrades=myGrades.filter(function(item){
                return item < 70;
            });
    
            return 'You failed '+ failingGrades.length + ' times.';
        },
        getArray : function() {
            return myGrades;
        }
    }


})();
console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());

//console.log(myGrades);  //error
console.log(myGradesCalculate.myGrades);  //undefined
console.log(myGradesCalculate.getArray()); //[93,95,88,0,55,91]