function isPlainObject(obj) {
    const objToString = Object.prototype.toString;
    if (!obj || objToString.call(obj) !== '[object Object]') {
        return false;
    }

    const proto = Object.getPrototypeOf(obj);

    if (!proto) {
        return true;
    }

    const Ctor = Object.prototype.hasOwnProperty(proto, 'constructor') && proto.constructor;

    // TODO: 为什么jQuery中不直接判断Ctor是不是等于Object呢
    return typeof Ctor === 'function' && Function.prototype.toString.call(Ctor) === Function.prototype.toString.call(Object); 
}