//string 
let name = "parvesh";
console.log(name);

//number 
let age = 18;
console.log(age);
console.log("my age is"+age);
console.log("my age is ",age);

//float 
let height = 5.9
console.log(height);
//in c ,print("%f", height);

//javascript dynamic type language (we donot define type of variable /data))
//int age =18; string name ="parvesh"float height=6.0;
//in jd, we just use let keyword to take any type of data value 

//boolen 
let isstudent=true;
console.log(isstudent);
// is js case sensitive?
let a=10;  // a in lower case variable
let A=20;  // A in upper case variable
console.log(a,A);  //10 20
// js is case sensitive language

//undefined
let x;  // variable is declared but not initialized
console.log(x);  //undefined

//null
let y=null;  // variable is declared and initialized with null value
console.log(y);  //null

// object data type
// let objectName = {key1: value1, key2: value2, ...};
let person = {
    name: "Kunal",
    age: 20,
    height: 5.6, isStudent: true,
    address: {
        city: "Delhi", state: "Delhi", pincode: 110001
    }
};
console.log(person);
let address= {
    "ke1":"string value",//vlaue is string
    "key2":1234,//vlaue is number 
    "homeaddress":{"city":"delhi"},//value is object 
    "officeaddress":{"city":"rohtak"} // value is object 
}
console.log(address);
console.log(address.homeaddress.city);
//print city of office address
console.log("my office city is "+ address.officeaddress.city);
// array data type' 

let myFriends= ["Mohit", "Rahul", "Amit", "Sahil"];
console.log(myFriends);
console.log(myFriends[0]);  //Mohit
console.log(myFriends[2]); //Amit
//my best friends is rahul & sahil
console.log("myFriends are " + myFriends[1] +"&"+ myFriends[3]);//string concatenation
//or
console.log(`myFriends are ${ myFriends[0]} &${myFriends[1]}` );

//date date type 
let currentDate = new Date();
console.log(currentDate);
let myDOB = new Date



