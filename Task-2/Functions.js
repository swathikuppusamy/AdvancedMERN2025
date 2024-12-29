//1.Functions with Arguments without return type:
var displayName=(name)=>{
    console.log(name);
}
displayName("SwathiKuppusamy");
//2.Functions with Arguments with return type:
var multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(2,3));
//3.Functions without Arguments with return type:
var data=()=>{
    return Math.random();
}
console.log(data());
var printit=()=>{
    return "Hi,this is Swathi";
}
console.log(printit());
//4.Functions with Arguments without return type:
var songs=(hits)=>{
    console.log(hits);
}
songs("You and Me...")
//Rest Operators vs Spread Operators
var sum=(...numbers)=>{
    var total=0;
    for(let num of numbers){
        total +=num;
    }
    return total;
}
console.log(sum(10,12,23,25,34,35));
//spread
var a1=[2,3,4,5];
var a2=[4,8,9,12];
var tot=[...a1,...a2];
var [a,b,c,...d]=tot;
console.log(tot);
console.log(d);
//for each function-day 3
arr=[10,20,30,40,[45.6,46.9],"kEC"]
arr.forEach((element,index) => {
    console.log("Element is ",element," and its index is ",index);
});
obj={
        "FirstName":"Swathi",
        "LastName":"Kuppusamy",
        "Age":45
    }
//Object is not iterable

// obj.forEach((key,value)=>{
//     console.log(key,value);
// })
for(let ele in obj){
    console.log(ele);
}
//the for in doesnot consider the elements

