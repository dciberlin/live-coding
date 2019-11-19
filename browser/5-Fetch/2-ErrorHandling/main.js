// console.log('Hallo World');
// idontexist;
// console.log("Hallo DCI");

//1

try {
    console.log('Hallo World');
    //idontexist;
    console.log("Hallo DCI");

}
catch(e)
{
    console.log("Opps Something went wrong. Please contact administrator!");
    //storing inside the file and database
    //console.log("Something wrong:"+e.stack);
}
finally{
    console.log("This always run");
}

console.log("This is run after try/catch-block");

//2

let json='{"age":33}';
try{
    //logic will or your code will come here
    let user=JSON.parse(json);
    if(!user.name)
    {
        throw SyntaxError('Incomplete data: no name given in json');
    }
}
catch(error)
{
    console.log("Opps Something wrong...");
    console.log('json invalid ' + error.message);
    console.log(error instanceof SyntaxError); // true
    console.log(error.message);                // "missing ; before statement"
    console.log(error.name);                   // "SyntaxError"
    console.log(error.fileName);               // "Scratchpad/1"
    console.log(error.lineNumber);             // 1
    console.log(error.columnNumber);           // 4
    console.log(error.stack);                  // "@Scratchpad/1:2:3\n"
}

//3
console.log("Let check error with method/functions...");

console.log("doSomething part...");

function doSomething(x)
{
    if(x>5)
    {
        throw 'Opps, Something wrong';
    }
    console.log('x is less or equal to 5, all good');
}

try{
    doSomething(6);
    console.log('not reached');
}
catch(e)
{
    console.log('Exception: '+e);
    console.log('Error Message: '+e.message);
}

//4
//one level more nested
console.log("doSomethingAgain part...");

function doSomethingAgain()
{
    doSomething(6);
}

try{
    doSomethingAgain(); //first calling defined new function
    console.log('not reached at doSomethingAgain...');
}
catch(e)
{
    console.log('doSomethingAgain Exception: '+e);
    console.log('doSomethingAgain Error Message: '+e.message);
}

//5
//more two nested level
console.log("doSomethingAgainAndAgain part...");

function doSomethingAgainAndAgain()
{
    doSomethingAgain();
}

try{
    doSomethingAgainAndAgain(); //first calling defined new function
    console.log('not reached at doSomethingAgainAndAgain...');
}
catch(e)
{
    console.log('doSomethingAgainAndAgain Exception: '+e);
    console.log('doSomethingAgainAndAgain Error Message: '+e.message);
}