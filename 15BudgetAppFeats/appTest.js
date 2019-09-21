


////////////// BUDGET CONTROLLER //////////////
///////////////////////////////////////////////

/*

THIS FUNCTION HANDLES EVERYTHING THE DO WITH THE BUDGET CALCULATIONS AND DATA

*/


var budgetController = (function() {
    
    // function contructors for creating new expense/income instances
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    // prototype method that will calculate the percentage of income spent
    Expense.prototype.calcPercentage = function(totalIncome) {

        if (totalIncome > 0) {
        this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }

    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // calculate totals function
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });

        data.totals[type] = sum;
    };

    //////// OUR APPS MAIN DATA STRUCTURE ////////
    var data = {
        
        allItems: {
            exp: [],
            inc: []
        },
        
        totals: {
            exp: 0,
            inc: 0
        },

        budget: 0,
        percentage: -1,
        default: 0
  
    };
    ////////////////////////////////////////////

    // public methods
    return {

        // method that adds a new item
        addItem: function(type, des, val) {
            
            var newItem, ID;
            
            // create new ID

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our data structure 
            data.allItems[type].push(newItem);

            // return the new element so it can be used by other modules
            return newItem;
        },

        // method that deletes an item
        deleteItem: function(type, id) {
            var ids, index;

            // example
            // id = 6
            // data.allItems[type][id];
            // ids = [1 2 4 6 9]
            // indexe = 3

            // loop over all elements in the inc/exp array
            ids = data.allItems[type].map(function(current) {
                return current.id;
            })

            index = ids.indexOf(id);

            // only remove the item if it actually exists
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        // method that calculates the budget
        calculateBudget: function() {

            // calculate total income and expenses

            calculateTotal('exp');
            calculateTotal('inc');

            // calculate the budget: income - expenses

            data.budget = data.totals.inc - data.totals.exp;

            // calculate the percentage of income we spent

            if (data.totals.inc > 0) {

                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);

            } else  {
                data.percentage = -1;
            }

        },

        // method for calculating the percentages
        calculatePercentages: function() {

            /*
            example:
            take an expense... exp = 20
            take the income... inc = 100
            divide exp / inc * 100 = the percentage ((20/100 = .2) * 100 = 20%)
            */

            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });

        },

        // method for getting percentages
        getPercentages: function() {

            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage();
            });

            return allPerc;

        },

        // method that returns an object of the budget data
        getBudget: function() {

            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }

        },


        // public testing method used to view our data structure in the console
        testing: function() {
            console.log(data);
        }
    };

})();



////////////// USER INTERFACE CONTROLLER //////////////
///////////////////////////////////////////////////////

/*

THIS FUNCTION HANDLES EVERYTHING TO DO WITH THE USER INTERFACE

*/

var UIController = (function() {


    // object that holds all the html selector names for easy access by other modules
    // this allows us to pass in the DOMstrings object to other functions instead of having to write out the selector every time
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description', // target for challenge #4: check input for mistakes
        inputValue: '.add__value',  // target for challenge #4: check input for mistakes
        inputBtn:  '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

//////////////////////// CHALLENGE #1 NUMBER FORMATTING ////////////////////////
////////////////////////////////////////////////////////////////////////////////

function formatNumber(num, type) {
    console.log('button was clicked');
    var num, numSet1, numSet2, numSet3, numSet4, int, dec, splitDecimal, result, typeStr;

    num = num.toFixed(2);
    splitDecimal = num.split('.');
    int = splitDecimal[0];
    dec = splitDecimal[1];

    console.log('the number is: ' + int);
    console.log('the number of characters is: ' + int.length);
    console.log('the decimal is: .' + dec);


    //////////////////////// CHALLENGE #2 FIX -0.00 BUG ////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    
    // this is what is causing the displayBudget function to display "-0.00" on init
    // because 0 is inherently "fasly" the ternary operator was evaluating to be an "exp" every time init ran

    function getTypeStr() {
      if (type === 'exp') {
          console.log('check type ran exp');
          typeStr = '-' + ' ';
          return typeStr;
      } else if (type === 'inc') {
          console.log('check type ran inc');
          typeStr = '+' + ' ';
          return typeStr;
      } else if (type === 'default') {
          typeStr = '';
          return typeStr;
      }
    };



    function uptoThousand() {

        getTypeStr();

        result = typeStr + num;
        return result;
    };

    function thousands(intPos, substr) {

        numSet1 = int[intPos];
        numSet2 = int.substr(substr);

        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + '.' + dec; // return
        return result;

    };

    function tensThousands(intPos, intPos2, substr) {

        numSet1 = int[intPos] + int[intPos2];
        numSet2 = int.substr(substr);

        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + '.' + dec; // return
        return result;

    };

    function hundredsThousands(intPos, intPos2, intPos3, substr) {

        numSet1 = int[intPos] + int[intPos2] + int[intPos3];
        numSet2 = int.substr(substr);

        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + '.' + dec;
        return result;

    };

    function millions(intPos, substr, substr2, substrConst){
        
        numSet1 = int[intPos];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);

        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec;
        return result;

    };

    function tensMillions(intPos, intPos2, substr, substr2, substrConst){

        numSet1 = int[intPos] + int[intPos2];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);

        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec;
        return result;

    };

    function hundredsMillions(intPos, intPos2, intPos3, substr, substr2, substrConst){
        
        numSet1 = int[intPos] + int[intPos2] + int[intPos3];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);
        
        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec;
        return result;

    };

    function billions(intPos, substr, substr2, substr3, substrConst){

        numSet1 = int[intPos];
        numSet2 = int.substr(substr, substrConst);
        numSet3 = int.substr(substr2, substrConst);
        numSet4 = int.substr(substr3, substrConst);

        getTypeStr();

        result = typeStr + numSet1 + ',' + numSet2 + ',' + numSet3 + '.' + dec;
        return result;

    };

    // if number is in the thousands (2,500)
    if (int.length === 4) {

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

    } else {

        console.log('else triggered');
        uptoThousand();
    }
    
    return result;

  };
  
////////////////////////////////////////////////////////////////////////////////  
////////////////////////////////////////////////////////////////////////////////

    // Node List forEach function

    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {

        getInput: function() {

            /////////////////////// CHALLENGE #4: ALERT IF INPUT ERROR //////////////////////////////////

            return {
                type: document.querySelector(DOMstrings.inputType).value, // will either be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            // crate html string with text 

            if (type === 'inc') {
                element = DOMstrings.incomeContainer;

                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            };

            // replace the placeholder text with actual data

            //////////// WHERE WE CALL THE FORMAT NUMBER METHOD ///////////////

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type)); // HERE ^
            
            // insert into the DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

        },

        // method that deletes a list item from the UI
        deleteListItem: function(selectorID) {

            var el = document.getElementById(selectorID)
            el.parentNode.removeChild(el);

        },

        // clear input fields 
        clearFields: function() {
            var fields, fieldsArr;

            // returns a "list" not an array - will need to comvert this to an array using the slice() method
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

            // .slice() method is in array.prototype we can access it here and then pass in fields as the argument using the .call() method!
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
                
            });

            fieldsArr[0].focus();

        },

        displayBudget: function(obj) {

            // WHERE WE ADD THE NUMBER FORMATTING PT2

            var type;

            ///////// CHALLENGE #2 CHANGE THE IF STATEMENT HERE /////////

            
            if (obj.budget === 0) {
                type = 'default';
                console.log('type = ' + type);
            } else if (obj.budget > 0) {
                type = 'inc';
                console.log('type = ' + type);
            } else if (obj.budget < 0) {
                type = 'exp';
                console.log('type = ' + type);
            }

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            
            // document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
            // only show percentage if the result is > 0
            
            if (obj.percentage > 0) {

                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';

            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';

            }
        },

        displayPercentages: function(percentages) {

            // returns a "node" list
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            nodeListForEach(fields, function(current, index) {
                
                if (percentages[index] > 0) {
                current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }

            });
        },

        // get the current month and year
        displayMonth: function() {

            var year, month, now;

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            now = new Date();

            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

        },

        // method for "changing" the type of the inc/exp dropdown
        changedType: function() {

            var fields = document.querySelectorAll(
                DOMstrings.inputType, + ',' + 
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            );

            nodeListForEach(fields, function(cur) {
                cur.classList.toggle('red-focus');
            });

            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');

        },

        getDOMstrings: function() {

            return DOMstrings;
        }
    };

})();

////////////// GLOBAL APP CONTROLLER //////////////
///////////////////////////////////////////////////

/*

THIS FUNCTION HANDLES COMMUNICATION BETWEEN THE OTHER TWO MODULES

*/

var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        // using the "change" event
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

    }

    var updateBudget = function() {

        // 1. Calculate the budget

        budgetCtrl.calculateBudget();

        // 2. method that returns the budget

        // needs to be stored in a variable because the method "returns" something 
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget on the UI

        UICtrl.displayBudget(budget);

    };    

    var updatePercentages = function() {

        // 1. calculate the percentages
        budgetCtrl.calculatePercentages();

        // 2. read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        // 3. update the UI with the new percentages
        UICtrl.displayPercentages(percentages);

    };

    var ctrlAddItem = function() {

        var input, newItem;

        // 1. Get field input data

        input = UICtrl.getInput();
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0 ) {

            // 2. Add the item to the budget controller

            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the new item to the UI

            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the input fields

            UICtrl.clearFields();

            // 5. calculate and update budget

            updateBudget();

            // 6. calculate and update the percentages

            updatePercentages();


        }

    };

    var ctrlDeleteItem = function(event) {

        var itemID, splitID, type, ID;

        // traverse the DOM up the the parent elelment that contains the ID
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        // do NOT fire the function unless there is an item ID

        if (itemID) {

            // split the id by the " - "
            splitID = itemID.split('-');
            // type = income or expense
            type = splitID[0];
            // ID = the ID
            ID = parseInt(splitID[1]);

            // 1. delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);

            // 2. delete the item from the UI
            UICtrl.deleteListItem(itemID);

            // 3. Update and show the new budget
            updateBudget();

            // 4. calculate and update the percentages

            updatePercentages();
        }

    };

    return {
        init: function() {
            console.log('Application has started.');

            // display date

            UICtrl.displayMonth();

            // reset UI 
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });

            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();