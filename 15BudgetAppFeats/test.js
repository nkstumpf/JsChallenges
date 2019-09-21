function formatNumber(originalNum) {
    console.log('button was clicked');
    var originalNum, numSet1, numSet2, numSet3, numSet4, numSet5, int, dec, splitDecimal, result, p;

    p = document.getElementById("demo");
    p.textContent = int;
    
    
      // The "toFixed" method which converts the number to a string and keeps only 2 decimals
      originalNum = originalNum.toFixed(2);
  
      // Then the split method is used which breaks the input up by '.' and returns a string 
      splitDecimal = originalNum.split('.'); // returns a string
  
      // Sets the value of int to whichever portion of the string is at index [0] (the integer)
      int = splitDecimal[0];
  
      // Sets the value of dec to whichever portion of the string is at index [1] (the decimal)
      dec = splitDecimal[1];

      console.log('the number is: ' + int);
      console.log('the number of characters is: ' + int.length);
      console.log('the decimal is: .' + dec);

    // if number is in the thousands (2,500)

    if (int.length === 4) {

        numSet1 = int[0];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(1);
        console.log('numSet2 is: ' + numSet2);

        console.log(result = numSet1 + ',' + numSet2 + '.' + dec);
        console.log('first statement triggered');

      // if the number is in the tens of thousands (49,578)  
    } else if (int.length === 5) {

        numSet1 = int[0] + int[1];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(-3);
        console.log('numSet2 is: ' + numSet2);

        console.log(result = numSet1 + ',' + numSet2 + '.' + dec);
        console.log('second statement triggered');

      // if the number is in the hundreds of thousands (495,789)  
    } else if (int.length === 6) {

        numSet1 = int[0] + int[1] + int[2];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(-3);
        console.log('numSet2 is: ' + numSet2);
        // numSet3 = int.substr(-3);

        console.log(result = numSet1 + ',' + numSet2 + '.' + dec);
        console.log('third statement triggered');

      // if the number is in the millions (4,957,892)
    } else if (int.length === 7) {

        numSet1 = int[0];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(1, 3);
        console.log('numSet2 is: ' + numSet2);
        numSet3 = int.substr(4, 3);
        console.log('numSet3 is: ' + numSet3);

        console.log(result = numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec);
        console.log('third statement triggered');

      // if number is in the tens of millions (49,578,942)  
    } else if (int.length === 8) {

        numSet1 = int[0] + int[1];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(2, 3);
        console.log('numSet2 is: ' + numSet2);
        numSet3 = int.substr(5, 3);
        console.log('numSet3 is: ' + numSet3);

        console.log(result = numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec);
        console.log('fourth statement triggered');

      // if number is in the hundreds of millions (249,578,942)  
    } else if (int.length === 9) {

        numSet1 = int[0] + int[1] + int[2];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(3, 3);
        console.log('numSet2 is: ' + numSet2);
        numSet3 = int.substr(6, 3);
        console.log('numSet3 is: ' + numSet3);
        console.log(int);

        console.log(result = numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec);
        console.log('fifth statement triggered');

      // if the number is in the billions (2,495,789,427) 
    } else if (int.length === 10) {

        numSet1 = int[0];
        console.log('numSet1 is: ' + numSet1);
        numSet2 = int.substr(1, 3);
        console.log('numSet2 is: ' + numSet2);
        numSet3 = int.substr(3, 3);
        console.log('numSet3 is: ' + numSet3);
        numSet4 = int.substr(6, 3);
        console.log('numSet4 is: ' + numSet4);
        console.log(int);

        console.log(result = numSet1 + ',' + numSet2 + ',' + numSet3 + ',' + numSet4 + '.' + dec);
        console.log('sixth statement triggered');
    } else if (int.length > 10) {
        console.log('Yea like you make that much...');
    }
    
    p = document.getElementById("demo");
    p.textContent = result;
    
    return p;
  };