/*Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.*/ 


function largestPalindromeProduct(n) {
    let upper_limit = Math.pow(10,n) - 1;
    let lower_limit = 1 + parseInt(upper_limit/ 10,10)
    let max_product = 0;
    
    for(let i = upper_limit; i >= lower_limit ; i--){
      for (let j = i; j >= lower_limit; j-- ){
        let product = i * j;
        if(product < max_product)
          break
          let number = product
          let reverse = 0
    
          while(number != 0){
            reverse = reverse * 10 + number%10;
            number = parseInt(number / 10 ,10)
          }
          if(product == reverse && product > max_product)
          max_product = product
      }
    }
      return max_product;
    }
    
    largestPalindromeProduct(3);