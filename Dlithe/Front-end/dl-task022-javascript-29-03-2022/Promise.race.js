// Promise.race()

const promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"one");
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"Two")
});
const promise3=[promise1,promise2];
Promise.race(promise3).then((value)=>{
    console.log(value)
});