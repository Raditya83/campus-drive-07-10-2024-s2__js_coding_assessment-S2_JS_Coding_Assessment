/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a map of Roman numeral symbols and their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        // Get the current value and the next value (if exists)
        let currentValue = romanMap[s[i]];
        let nextValue = romanMap[s[i + 1]];
        
        // If the current value is less than the next value, subtract it
        if (nextValue && currentValue < nextValue) {
            total -= currentValue;
        } else {
            // Otherwise, add the current value
            total += currentValue;
        }
    }
    
    return total;
};

module.exports = { romanToInt };
