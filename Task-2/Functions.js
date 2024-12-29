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