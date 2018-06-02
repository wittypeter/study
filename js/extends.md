# The implementation of JS inheritance


```js
function Animal (name) {
  this.name = name || 'Animal';
  
  this.sleep = function () {
    console.log(`${this.name} is sleeping`);
  }
}

Animal.protptype.eat = function (food) {
  console.log(`${this.name} is eating ${food}`)
}
```

1. Proptype chain inheritance

```js
function Cat () {
}

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';
```

特点：

* 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
* 父类新增原型方法/原型属性，子类都能访问到
* 简单，易于实现

缺点：

* 可以在Cat构造函数中，为Cat实例增加实例属性。如果要新增原型属性和方法，则必须放在new Animal()这样的语句之后执行。
* 无法实现多继承
* 来自原型对象的引用属性是所有实例共享的
* 创建子类实例时，无法向父类构造函数传参

2.  Constructure inherition

```js
function Cat (name) {
  Animal.call(this);
  this.name = name || 'cat';
}
```
特点：

* 解决了1中，子类实例共享父类引用属性的问题
* 创建子类实例时，可以向父类传递参数
* 可以实现多继承（call多个父类对象）

缺点：

* 实例并不是父类的实例，只是子类的实例
* 只能继承父类的实例属性和方法，不能继承原型属性/方法
* 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

3. Instance inheritance

```js
function Cat (name) {
  const animal = new Animal();
  animal.name = name || 'cat';
  return animal;
}
```

特点：

* 不限制调用方式，不管是new 子类()还是子类(),返回的对象具* 有相同的效果

缺点：

* 实例是父类的实例，不是子类的实例
* 不支持多继承

4. 拷贝继承

```js
function Cat (name) {
  const animal = new Animal();
  for(const attr in animal) {
    Cat.prototype[attr] = attr;
  }

  Cat.prototype.name = name || 'cat';
}
```

特点：

* 支持多继承

缺点：

* 效率较低，内存占用高（因为要拷贝父类的属性）
* 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）

5. 组合继承

```js
function Cat (name) {
  Animal.call(this);
  this.name = name || 'cat';
}

Cat.prototype = new Animal();
Cat.protptype.constructor = Cat;
```

特点：

* 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
* 既是子类的实例，也是父类的实例
* 不存在引用属性共享问题
* 可传参
* 函数可复用

缺点：

* 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

6. 寄生组合继承

```js
function Cat (name) {
  Animal.call(this);
  this.name = name || 'cat';
}

(function (){
  let Super = function(){};
  super.prototype = Animal.prototype;

  Cat.prototype = new Super();
  Cat.prototype.constructor = Cat;
})();
```

特点：

* 堪称完美

缺点：

* 实现较为复杂

