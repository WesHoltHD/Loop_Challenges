//* 1) Print odds 1-20
//* Using a loop write code that will console.log all of the odd values from 1 up to 20.

//      for (var i = 0; i < 21 ; i++)
//          if (i % 2 > 0) {
//              console.log(i);
//          }

for(var i = 1; i<20 ; i+= 2) {
    console.log(i);
}

//! Her Solution in Yellow is a mutch simpler equation; it was more thought out before hand;



//* 2) Decreasing Multiples of 3
//* Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (var i = 99; i > -1 ; i-- ) {
    if(i % 3 == 0){
        console.log(i);
    }
}

//! Essentially the same situation

//* 3) Print the sequence
//* Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for (var i = 4; i > -4; i-= 1.5) {
    console.log(i);
}

//! Essentially the same situation

//* 4) Sigma
//* Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

var sum = 0;

for (var i = 1; i < 101; i++) { 
    sum += i;
}
    console.log(sum);

//^  Lines 40 - 45
//^ 40)   a sum variable must be created and start with a value of 0...
//^ 41)   the index of [i] is added to the sum; all numbers will be added resulting in (1+2+3..+99+100) = 5050....
//^ 42)   the index and the sum are added together
//^ 43)   MUST close the equation before calling a console.log...
//^ 44)   console.log(sum) is called OUTSIDE of the for loop and function...

//* 5) Factorial
//* Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

sum = 1;

for (var i = 1 ; i < 13; i++) {
    sum *= i;
}
console.log(sum);

//^  Lines 57-62
//^ 57)   The value of sum MUST start with value of 1 because 0 * anything will equal to 0;
//^ 59)   Similar to the Sigma equation, the value of [i] must be times the value of sum starting at 1...
//^ 60)   the Index and the Sum are multiplied together
//^ 61)   MUST close the equation before calling a console.log...
//^ 62)   console.log(sum) is called OUTSIDE of the for loop and function...