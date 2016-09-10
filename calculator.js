module.exports = function() {
  let _memory = 0;
  let _total = 0;
  let _displayedNumber = [];
  
  return {
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
    load: function(digit){
      if (digit === undefined) {
        return _displayedNumber;
      }
      if(_displayedNumber.indexOf('.') >= 0 && digit === '.'){
        throw new Error('You can only have one decimal in a number.')
      } else {
        _displayedNumber.push(digit);
        return _displayedNumber;
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
   *valueToAdd is an array of digits in a number
   */
    add: function(valueToAdd) {
      var valueAsNum = parseFloat(valueToAdd.join(''));
      if(typeof valueAsNum !== 'number') {
       throw new Error('Did not enter a number to add')
      } else {
       _memory += valueAsNum;
       return _memory;
      }
    },

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
    subtract: function(valueToSubtract) {
      var valueAsNum = parseFloat(valueToSubtract.join(''));

      if(typeof valueAsNum !== 'number') {
        throw new Error('Did not enter a number to subtract')
      } else {
        _memory -= valueAsNum;
        return _memory;
      }
    },


  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
    multiply: function(valueToMultiply) {
      var valueAsNum = parseFloat(valueToMultiply.join(''));

      if(typeof valueAsNum !== 'number') {
        throw new Error('Did not enter a number to multiply')
      } else {
        _memory *= valueAsNum;
        return _memory;
      }
    },

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
    divide: function(valueToDivide) {
      var valueAsNum = parseFloat(valueToDivide.join(''));

    if(typeof valueAsNum !== 'number') {
      throw new Error('Did not enter a number to divide')
    } else {
      _memory /= valueAsNum;
      return _memory;
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
   * Stores the value of `total` to `memory` and clears _displayedNumber
   */
    saveMemory: function() {
      _memory = parseFloat(_displayedNumber.join(''));
      _displayedNumber = [];
      return _memory;
    },

  /**
   * Clear the value stored at `memory`
   */
    clearMemory: function() {
      _memory = 0;
      return _memory;
    },

    

  /**
   * Validation
   */
  };
};
