
function formatNumber(num, type) {
    console.log('button was clicked');
    var num, numSet1, numSet2, numSet3, numSet4, int, dec, splitDecimal, result, p ,typeStr;

    p = document.getElementById("demo");
    p.textContent = int;
    
    //////////////////////
    // TEST "TYPE":

    // type = 'inc';
    // type = 'exp';
    type = 'default';
    console.log('the type is: ' + type);

    // TEST NUMBER:

    // num = 25.45678;
    // num = 250.45678;
    // num = 2500.45678;
    // num = 25000.45678;
    // num = 250000.45678;
    // num = 2500000.45678;
    // num = 25000000.45678;
    // num = 250000000.45678;
    num = 2500000000.45678;

    ///////////////////////
  
    num = Math.abs(num);
    num = num.toFixed(2);
    splitDecimal = num.split('.');
    int = splitDecimal[0];
    dec = splitDecimal[1];

    console.log('the number is: ' + int);
    console.log('the length is: ' + int.length);
    console.log('the decimal is: .' + dec);

    function getTypeStr() {
      if (type === 'exp') {
          console.log('getType returned: exp');
          typeStr = '-' + ' ';
      } else if (type === 'inc') {
          console.log('getType returned: inc');
          typeStr = '+' + ' ';
      } else if (type === 'default') {
          console.log('getType returned: default');
          typeStr = '';
      }
    };

    function uptoThousand() {

        getTypeStr();

        result = typeStr + num;
    };

    function thousands(intPos, substr) {

        numSet1 = int[intPos];
        numSet2 = int.substr(substr);

        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + '.' + dec); // return

    };

    function tensThousands(intPos, intPos2, substr) {

        numSet1 = int[intPos] + int[intPos2];
        numSet2 = int.substr(substr);

        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + '.' + dec); // return

    };

    function hundredsThousands(intPos, intPos2, intPos3, substr) {

        numSet1 = int[intPos] + int[intPos2] + int[intPos3];
        numSet2 = int.substr(substr);

        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + '.' + dec);

    };

    function millions(intPos, substr, substr2, substrConst){
        
        numSet1 = int[intPos];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);

        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec);

    };

    function tensMillions(intPos, intPos2, substr, substr2, substrConst){

        numSet1 = int[intPos] + int[intPos2];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);

        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec);
    };

    function hundredsMillions(intPos, intPos2, intPos3, substr, substr2, substrConst){
        
        numSet1 = int[intPos] + int[intPos2] + int[intPos3];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);
        
        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec);
    };

    function billions(intPos, substr, substr2, substr3, substrConst){

        numSet1 = int[intPos];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);
        numSet4 = int.substr(substr3, substrConst);

        getTypeStr();

        console.log(result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + ',' + numSet4 + '.' + dec);

    };

    // if number is less than a thousand (25 or 250)
    if (int.length < 4) {

        uptoThousand();

    // if number is in the thousands (2,500)
    } else if (int.length === 4) {

        thousands(0, 1);

    // if the number is in the tens of thousands (49,578)  
    } else if (int.length === 5) {

        tensThousands(0, 1, -3);

    // if the number is in the hundreds of thousands (495,789)  
    } else if (int.length === 6) {

        hundredsThousands(0, 1, 2, -3);

    // if the number is in the millions (4,957,892)
    } else if (int.length === 7) {

        millions(0, 1, 4, 3);

    // if number is in the tens of millions (49,578,942)  
    } else if (int.length === 8) {

        tensMillions(0, 1, 2, 5, 3);

    // if number is in the hundreds of millions (249,578,942)  
    } else if (int.length === 9) {

        hundredsMillions(0, 1, 2, 3, 6, 3);

      // if the number is in the billions (2,495,789,427) 
    } else if (int.length === 10) {

        billions(0, 1, 3, 6, 3);

    } else if (int.length > 10) {
        console.log('Yea like you make that much...');
    }
    
    p = document.getElementById("demo");
    p.textContent = result;
    
    return p;
  };