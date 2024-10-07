/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            // If it's an opening bracket, push it onto the stack
            stack.push(s[i]);
        } else {
            // Otherwise, check if it matches the last opening bracket
            let last = stack.pop();
            if (map[last] !== s[i]) {
                return false;
            }
        }
    }
    
    // If stack is empty, all brackets were matched
    return stack.length === 0;
};


module.exports = { isValid };


