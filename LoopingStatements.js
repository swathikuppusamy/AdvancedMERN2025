a=['12','23','45.3','35.78','a',"abcd",'ab'];
 console.log(a);
// 1.for...in loop
// for(var c in a){
//     console.log(a[c]);
// }
for(var c of a){
    console.log(c);
}