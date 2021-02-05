function doSomething(){
    console.log(3333);
}
console.log(2222);
//doSomething();
//setTimeout(doSomething,10000);

// setTimeout(function(){
// console.log('lazy and waiting')
// },4000)

// setTimeout(()=>{
//     console.log('lazy and waiting')
//     },5000)
// console.log(4444);
// console.log(4444);
// console.log(4444);

setInterval(function(){
    console.log('doing it')
},3000)