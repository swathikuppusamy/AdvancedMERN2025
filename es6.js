//1.variables
//2.Arrow Functions
arrowfun=(dep)=>{
    return dep[2];
}
console.log(arrowfun(["'thar,ani","swa","thi"]))
//3.Destructuring parameter-->left to right
var marks=[90,98,97,96]
var [x,y,z]=marks
console.log(x);
//4.Ternary operator
a=13;
console.log((a%2==0)?"Even":"Odd")
//5.Spread Operator--->
stulist=["Swa","swe","thar","Sow","thi","kaa","arya"];
newlist=["pavi","kumar","kavi","septem"];
gh=[...stulist,...newlist]//
// if we dont use ... before newlist'Swa',
// 'swe',
// 'thar',
// 'Sow',
// 'thi',
// 'kaa',
// 'arya',
// [ 'pavi', 'kumar', 'kavi', 'septem' ]
// ]
console.log(gh)
ph=["pavi","kumar","kavi","septem",...stulist]
console.log(ph)
//6.Rest Operators
// function restop(a,b,..c){
// }
//7.Scope Operator
//  i.Local Scope/Block Scope
//  ii.Global scope
//8.hoisting
// cannot acces a before initialisation-let ,const
// other than var eventhough that is global scope it generates a  reference error
// var : gives the output wihtout any error and gives the  value as undefined
