let user= {
    name : "John",
    age: 30,
    toString(){
        return { name: `${this.name}`, age:`${this.age}`}
    }
};

console.log(user);

// JavaScript provides methods:
// -    JSON.stringify to convert objects into JSON.
// -    JSON.parse to convert JSON back into an object.

let student={
    name:'John',
    age:30,
    isAdmin:false,
    courses: ['html','css','js'],
    wife:null
};

let json = JSON.stringify(student);

console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

console.log(typeof json); //string

// The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. 

// Please note that a JSON-encoded object has several important differences from the object literal:
// -    Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
// -    Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.


//JSON.stringify can be applied to primitives as well.

//a number in JSON is just a number
console.log(JSON.stringify("1"));
console.log(typeof(1));
console.log(typeof(JSON.stringify(1)));

//a string in JSON is still a string, but double-quoted.
console.log(JSON.stringify('test'));

console.log(JSON.stringify(true));
console.log(typeof (JSON.stringify(true))); 

console.log(JSON.stringify([1,2,3]));
console.log(typeof JSON.stringify([1,2,3]));

//JSON is data-only cross-language specification, so some javascript object properties are skipped by JSON.stringify
//Namely:
//-  Function properties (methods)
//-  Symbolic properties.
//-  Properties that store undefined.

let user2= {
    sayHi() {
     console.log('Hello');   
    },
    [Symbol("id")] : 123,
    something: undefined
};

console.log(JSON.stringify(user2)); //{}

//nested objects are supported and converted automatically

let meetup = {
    title: "Conference",
    room :{
        number:23,
        participants :["john","ann"]
    }
};

console.log(JSON.stringify(meetup)); 
/* {
    "title":"Conference",
    "room":{
            "number":23,
            "participants":["john","ann"]
        }
    }
*/
//The important limitation : There must be no circular references:

let room ={
    number: 23
};

let meetup2= {
    title : "Conference",
    participants:["john","bob"]
}

meetup2.place=room;  //meetup2 references room
room.occupiedBy=meetup2;  //room references meetup2

//console.log(JSON.stringify(meetup2)); //TypeError: Converting circular structure to JSON

//JSON.parse
//To decode a JSON string, we need another method named JSON.parse.
// -    JSON.parse to convert JSON back into an object.

let numbers=[1,2,3];
numbers=JSON.stringify(numbers);
console.log(numbers);

numbers=JSON.parse(numbers);

console.log(numbers[1]);

//for nested objects
let user3= '{"name":"John","age":35, "isAdmin":false, "friends":[0,1,2,3]}';
user3=JSON.parse(user3);
console.log(user3);
console.log(user3.friends[1]);

//------------------------------///--------------------------//
/*
- Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes   
   "John".
- Object property names are double-quoted also. That’s obligatory. So age:30 becomes 
   "age":30.
- JSON does not support comments. Adding comments to JSON makes it invalid.
- JSON.stringify can be applied to primitives as well.
- Nested objects are supported and converted automatically
- There must be no circular references.
- Property name should be in double quotes.
- no "new" is allowed, only values.
*/

//There's another format named JSON5, which allows unquoted keys, comment etc. But this is a standalone library, not in the specification of the language.

//let str='{ "title":"Conference","date":new Date()}';
let str='{ "title":"Conference","date":"2019-11-18T12:00:00.00Z"}';


let meetup3=JSON.parse(str);
console.log(meetup3);

//console.log(meetup3.date.getDate());  //Error

//The value of meetup3.date is a string, not a Date Object

meetup3=JSON.parse(str, function(key,value){
    if(key=='date')
    {
        return new Date(value);
    }
    return value;
});

console.log(meetup3.date.getDate()); 

//for nested object 

let schedule = `{
        "meetups" :[
            {
                "title" :"Conference", 
                "date"  : "2019-11-17T12:00:00.00Z"
            },
            {
                "title" :"Birthday", 
                "date"  : "2019-11-18T12:00:00.00Z"
            }
        ]
}`;

schedule =JSON.parse(schedule,function(key,value){

    if(key=="date")
        return new Date(value);
    
    return value;

});

console.log(schedule.meetups[0].date.getDate()); //It works