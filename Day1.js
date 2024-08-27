//JS is devloed by Brendan Eich 
//it is dynamic language

//first section
//let,const,var
//checking ways to delcare variable by keywords
var hello="globalvar"
let login="true"
const pwd=45675
_king=2 //not a good approcah

console.log(hello);
console.log(login);
console.log(pwd);
console.log(_king);

//let,s see difference
var hello="again hello"
// let login=false
login="false"
//pwd="demo"

console.log(hello);
console.log(login);
console.log(pwd);

//notes:
//var varible are global scoped var we declare same variable with same name again and value gone changed easily with new value
//the variable declared with let can,t be redeclared within a scope
//scope can be global scope,if else block,try,catch block,for loop block etc.
//we cannot assign new value to variable which was declared with cost keyword.
//always use let for better productivity.
// --------------------------------------------------------------------------------------------------- first section ends here!

//second section
//naming convention testing variable
//as rules says

//write way to declare varible
let Acc="hello"
let acc2="67889"
let _user="Deepak"
let $login=true
console.table([Acc,acc2,_user,$login]) //log multiple expression together.

//wrong way to declare varible
// let 5hello="4"
// let #yt="nobi"
// let A chicka=true
//let new=2

//Notes:
//we declare variable names starts with uppercase,lowercase letter,_,$
//varible names cannot start with number and doesn,t has any specail character 
// than $,_. variable names can,t allowed spaces.
//don,t use variable name as reserved keywords

//popular convention to delcare variable names
//camelcase convention
let userId=true
let gameScore="45"

//try to use variable name in such way which says some description
// ----------------------------------------------------------------------------------part2 ends



// section three

//notes:
//Datatypes
/*
in javascript datatypes are classified into two types based on how 
they stored in memory and accessed.
1.primitive datatypes
  1.number
  2.string
  3.null
  4.undefind
  5.Bigint(+n)
  6.Symbol(used in react for make component unique)
  7.Boolean

2.non-primitive datatypes
1.Array
2.Objects
3.Function
*/


//we check datatype by using type of function in two different ways
let myNumber=2
let myString="Js is love"
let userHaslogin=true
let myNull=null
let myUndefind=undefined
//special case
let id=Symbol(2)
let id2=Symbol(2)
//specail case

//testing all primitive datatypes
console.log(typeof(myNumber));
console.log(typeof(myString));
console.log(typeof(userHaslogin));
console.log(typeof(myNull));
console.log(typeof(undefined));
console.log("Symbol",typeof id);//another way to write  type of function

//one is rare case 
//we get type of null is object
//and others are as given below
//number
//string
//undefind
//boolean
//symbol
//bigint

//testing all non-primitve datatypes ==>datatype
let myArray=[2,3]
let myObj={
  paymentId:"456777",
  payment:"2000rs"
}
let fucReference=function score()
{
  console.log("user scored incremented");
}

console.table([typeof(myArray),typeof(myObj),typeof(fucReference)])
// --------------------------------------------------------------------------------part3 ends here!

// section four

//stack and heap in short
//primitve dataypes are follwed stack
//non primitive datatypes are followed heap

//stack:upar se upar
//in stack varibles copy reference is given to another variable.
//so if we changed another variables value our oringal value can,t affected.
//common stack oreder is:lifo
let orignalVar="myName is anirrudh"
console.log("originalvar after delcare",orignalVar);
let newVar=orignalVar
console.log("original var after assining to antoere var",orignalVar);
console.log("newVar after assingnig",newVar);
newVar=2
console.log("originalVar value after=> newvar newvalue",orignalVar);
console.log("newvar value",newVar);
//as you see our original value can,t changed


//heap:direct reference provided
let usersName=["deepak","sujal"]
let anotherNames=usersName
console.log("afterdeclar==>",usersName);
console.log("anthername===>",anotherNames);
//let,s change in anothername
anotherNames[0]="Ankit" //changin value deepak to new value
console.log("anthername after change===>",anotherNames);
console.log("username after change in another name===>",usersName);
//as you see our original value get affeted due to direct reference
// --------------------------------------------------------------------------part4 ends

// bonus section
//so let,s talk about our spacial case of symbol which i forgot earlier
//you can refer line no 88 to 91 for more clarificaton

//in line no 88 to 91 i declared symbol with same value two different variable
//specail case test
let a=2
let b=2
console.log("without symbol",a===b);
console.log("with symbol",id===id2); //these are symbols which are declared in between line 88 to 91
// bonus section ends here!