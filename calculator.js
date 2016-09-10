/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

function calculatorModule() {
  let _memory = 0;
  let _total = 0;
  
  return {
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    load: function(newTotal){
     if(typeof newTotal !== 'number') {
      throw new Error('Did not enter a number to load')
     } else {
      _total = newTotal;
      return _total;
     }
    },

  /**
   * Return the value of `total`
   * @return { Number }
   */
    getTotal: function() {
      return _total;
    },

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
    addition: function(valueToAdd) {
      if(typeof valueToAdd !== 'number') {
       throw new Error('Did not enter a number to add')
      } else {
       _total += valueToAdd;
       return _total;
      }
    },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   subtract: function(valueToSubtract) {
    if(typeof valueToSubtract !== 'number') {
      throw new Error('Did not enter a number to subtract')
    } else {
      _total -= valueToSubtract;
      return _total;
    }
   },


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   multiply: function(valueToMultiply) {
    if(typeof valueToMultiply !== 'number') {
      throw new Error('Did not enter a number to multiply')
    } else {
      _total *= valueToMultiply;
      return _total;
    }
   },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   divide: function(valueToDivide) {
    if(typeof valueToDivide !== 'number') {
      throw new Error('Did not enter a number to divide')
    } else {
      _total /= valueToDivide;
      return _total;
    }
   },

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
    recallMemory: function() {
      return _memory;
    },


  /**
   * Stores the value of `total` to `memory`
   */
    saveMemory: function(theTotal) {
      _memory = _total;
      return _memory;
    },

  /**
   * Clear the value stored at `memory`
   */
    clearMemory: function() {
      _memory = 0;
      return _memory;
    }
  /**
   * Validation
   */
  };
};
