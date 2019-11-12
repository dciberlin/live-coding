// function game()
// {
//     let score=Math.random() *100;
//     console.log(score);
// }
//game();

//IIFe style 
(function game(){
    let score=Math.random() *100;
    console.log(score);
})();

console.log('another example...');

let test = {
    a: "a value",
    b: "b value",
    c: function() { return "c value";}
}
console.log(test);
console.log("c value==>"+test.c());


let y=(function (goodLuck){
    let score=Math.random()*10;
    console.log('score: '+ score);
    console.log(score+goodLuck >=5);

   return {
        a : function(){
            return score+5;
        }
    }
})(2);
console.log('value of the y...');
console.log(y); //return object {}
console.log('object value=> '+y.a()); 

//Normal function
function addTogether()
{
    let x=20,y=20;
    let answer=x+y;
    console.log(answer);
}
addTogether();

//iife way 1
(function addTogether(){
    let x=20,y=20;
    let answer=x+y;
    console.log(answer);
})();

//iife way 2 : Without Name
(function (){
    let x=20,y=20;
    let answer=x+y;
    console.log(answer);
})();

//iife way 3 : With Arrow
(()=>{
    let x=20,y=20;
    let answer=x+y;
    console.log(answer);
})();

(function (){
    //we keep these variables private inside this closure scope
    var myGrades=[93,95,88,0,55,91];

    var average=function(){
        var total=myGrades.reduce(function(accumulator,item){return accumulator + item;},0);
        return 'Your average grade is '+ total/myGrades.length + '.';
    }
    
    var failing=function(){
        var failingGrades=myGrades.filter(function(item){
            return item < 70;
        });

        return 'You failed '+ failingGrades.length + ' times.';
    }

    console.log(average());
    console.log(failing());

})();


//iife + closure

var myGradesCalculate=(function (){
    //we keep these variables private inside this closure scope
    var myGrades=[93,95,88,0,55,91];

    //Expose these functions via an interface while hiding the implementation of the module within the function() block
    return {

        average :function(){
            var total=myGrades.reduce(function(accumulator,item){return accumulator + item;},0);
            return 'Your average grade is '+ total/myGrades.length + '.';
        },
        
        failing : function(){
            var failingGrades=myGrades.filter(function(item){
                return item < 70;
            });
    
            return 'You failed '+ failingGrades.length + ' times.';
        }
    }


})();
console.log(myGradesCalculate.average());
console.log(myGradesCalculate.failing());