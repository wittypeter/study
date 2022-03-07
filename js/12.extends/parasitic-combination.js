
function Parent(name) {
    this.name = name;
}

Parent.prototype.sayName = function() {
    return 'i\'m parent, my name is ' + this.name;
}

function Child(name, age) {
    // 组合 - 构造函数
    Parent.call(this, name);
    this.age = age;
}

// 寄生 - 原型
Child.prototype = Object.create(Parent.prototype);