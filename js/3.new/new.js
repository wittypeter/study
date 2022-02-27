function newFunction(ctor) {
    const obj = {};

    const Constructor = Array.prototype.shift.call(arguments);

    obj.__proto__ = Constructor;

    const res = Constructor.apply(obj, arguments);

    return typeof res === 'object' ? res : obj;
}