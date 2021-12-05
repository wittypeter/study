var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {
        this.stack.push(val);
        this.minStack.push(val);
    } else {
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.stack.length) {
        return this.stack[this.stack.length - 1];
    }

    return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (this.minStack.length) {
        return this.minStack[this.minStack.length - 1];
    }

    return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */