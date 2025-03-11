//-- reverse a String --//
        // function reverseString(str) {
        //     return str.split('').reverse().join('');
        // }

        // // Example usage:
        // let string = "hello";
        // let reversedString = reverseString(string);
        // console.log(reversedString);

//-- fibonacci series --//

        // function fibonacci(n) {
        //     let fibSeries = [0, 1];  // First two Fibonacci numbers
        
        //     for (let i = 2; i < n; i++) {
        //         fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        //     }
        
        //     return fibSeries;
        // }
        
        // // Example usage:
        // let n = 10;  // Number of Fibonacci numbers to generate
        // let series = fibonacci(n);
        // console.log(series);
        
// factorial of a number
        // function factorial(n) {
        //     let result = 1;
        //     for (let i = 1; i <= n; i++) {
        //       result *= i;
        //     }
        //     return result;
        //   }
          
        //   console.log(factorial(5));

// sum of the digits of a number
        function sumOfDigits(num) {
            let sum = 0;
            
            num = Math.abs(num);
          
            while (num > 0) {
              sum += num % 10;
              num = Math.floor(num / 10);
            }
            
            return sum;
          }
          
          console.log(sumOfDigits(1234));
          console.log(sumOfDigits(-1234));
          