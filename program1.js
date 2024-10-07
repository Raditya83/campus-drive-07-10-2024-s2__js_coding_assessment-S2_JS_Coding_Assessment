/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of open brackets
    let stack = [];
    
    // Hash map to match opening and closing brackets
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (map[char]) {
            stack.push(char);
        } else {
            let last = stack.pop();
       if (map[last] !== char) {
                return false;
            }
        }
    }
    
   return stack.length === 0;
};

module.exports = { isValid };



