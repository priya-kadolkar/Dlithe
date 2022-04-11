const promise1 = new Promise((resolve, reject) => {
    throw 'Uh-oh!';
  });
  
  promise1.catch((error) => {
    console.error(error);
  });
  // expected output: Uh-oh!

  //Promise.all()

const promise12 = Promise.resolve(3)
const promise13 = 42;
const promise14 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise12, promise13, promise14]).then((values) => {
  console.log(values); 
});
// expected output: Array [3, 42, "foo"]


  //Promise.allSettled
const promise = Promise.resolve("success");
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'failed'));
const promises = [promise, promise2];

// Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result)));
Promise.allSettled(promises).
  then((values) => console.log(values));

// expected output:
// "fulfilled"
// "rejected"

const promise15 = Promise.reject(0);
const promise16 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise17 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises1 = [promise15,promise15, promise16, promise17];

Promise.any(promises1).then((value) => console.log(value)); 

// expected output: "quick"

// Promise.race()

const promise18=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"one");
});
const promise19=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,"Two")
});
const promise3=[promise18,promise19];
Promise.race(promise3).then((value)=>{
    console.log(value)
});

