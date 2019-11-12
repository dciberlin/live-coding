//function that returns function

function retirement (retirementAge)
{
    var a=" years left until retirement";  //is declared outside of the anonymous function
    
    return function(yearOfBirth)
    {
        var age=2019-yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS= retirement(66);
console.log(typeof(retirementUS));
console.log(retirementUS);
retirementUS(1990);

var retirementGermany=retirement(67);
var retirementIceland=retirement(65);

console.log('Retirement in Germany...');
retirementGermany(1990);
console.log('Retirement in Iceland...');
retirementIceland(1990);

//short way
console.log('Short way...');
retirement(66)(1990);

//One more example

function interviewQuestion(job)
{
    return function(name)
    {
        if(job=="designer")
            console.log(name+', can you please explain what UX design?');
        else if(job=="teacher")
            console.log('what subject do you teach, '+name+ '?');
        else
            console.log('Hallo '+name+ ', what do you do?');
    }
}

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Bob');
interviewQuestion()('Martin');

//counter example : Create a counter variable that is the scope of a function.
//                  Create an inner function that increases the counter by 1.

function inc()
{
    let counter=0;

    return function()
    {
        counter++;
        return counter;
    }
}

let c=inc();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3
console.log(c()); //4
console.log(c()); //5
