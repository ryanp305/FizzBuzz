// count numbers 1 - 100 to figure out if each number is divisible by 3, 5, or both
for (i=1; i<=100; i++){
     // for each number, check the following:

    //is the number divisible by 3?
    if (i % 3 === 0) {
        //if yes, then see if it is also divisible by 5
        if (i % 5 === 0) {

        //if the number is divisible by 3 and 5: Print FizzBuzz
            document.write("FizzBuzz <br />");
       
        } else {
             //if it is only divisible by 3: print Fizz
            document.write("Fizz <br />");
        }

    } else if (i % 5 ===0) {
            //check to see if the number is divisible by 5
            //if it is: print Buzz
            document.write("Buzz <br />");
        } else {
            //see if the number is not divisible by 3 or 5
            //if it is: print the number  
            document.write(i + "<br />");
        }

 
}


