# Which JS loop is fast?
Hello Guys Today i will discuss which loop among "for","while" and "do-while" is faster?
I am comparing only these 3 loops in this post.

Let's get started...

I am going to perform this test at 10 billion value for the loops

## For loop -
``` let count = 0;
let start = new Date().getTime();
for(let i = 0; i<10000000000;i++){
  count += i
}
let end = new Date().getTime();

console.log((end - start)/1000)
```

## OUTPUT -
I performed it 10 times and got the result in seconds
```
22.01
14.56
14.49
14.93
15.03
15.10
15.30
15.11
16.34
15.92
```
[DEV](https://dev.to/shubhamtiwari909/which-js-loop-is-fast-3k00)