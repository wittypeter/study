[TOC]

## horizontal center
1. 父元素）text-align，（子元素）inline-block
```css
.parent {
  text-align: center;
}

.child {
  display: inline-block | inline-flex;
}
```

优点：兼容性好，支持低版本浏览器

缺点：需要同时在父元素和子元素上设置

适用场景：子元素数量少（或只有一个），并且需要兼容低版本浏览器时使用

2. （子元素）display:table;margin:auto;（左右auto即可）

```css
.child {
  display: table;
  margin: auto | 0 auto;
}
```

这个方法利用display:table这个样式把子元素转化成类表格元素，从而可以用margin:auto来自动居中。方案的优点是只需要在子元素上加CSS，但display:table在IE8以上浏览器才有效果，所以本方法只适合用在较高版本浏览器中。

优点：只需要在子元素设置。

缺点：不兼容IE6和IE7

适用场景：子元素数量多，不方便修改父元素的属性，对浏览器版本要求相对较低时使用

3. （父元素）position:relative，（子元素）absolute+left+transform（translateX(-50%)）

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
```

优点：不影响其他元素
缺点，transform兼容性

**notice:** position的top:50%;left:50%;是相对于界面宽高的。translate的-50%,-50%是相对于div本身宽高的。相当于先将div左上角居中，再将div中心点居中。

4. flex
* 父元素）display:flex;justify-content:center;
```css
.parent {
  display: flex;
  justify-content: center;
}
```

优点：只设parent
缺点：flex兼容性差，而且比较耗资源

* 父元素）display:flex;（子元素）margin:0 auto;
```css
.parent {
  display: flex;
}

.child {
  margin: 0, auto;
}
```

优点：代码简单
缺点，污染父元素，flex兼容性问题

## vertical center

1. (父）table-cell + vertical-align
```css
.parent {
  display: table-cell;
  vertical-align: middle;
}
```

优点：兼容性比较好，换成table可以兼容IE6,7
缺点：table-cel会不能和float、position:absolute同时设置。（只能在外parent外套一层div.wrap才能设置float）

2. 父）position:relative；（子）absolute +top+ transform

```css
.parent {
  position: relative;
}

.child: {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```

3. (父)flex + align-items

```css
.parent {
  display: flex;
  align-items: center;
}
```

## horizontal & vertical center

1. （父）text-align + table-cell + vertical-align，（子）inline-block（兼容性方案）

```css
.parent {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.child {
  display: inline-block | inline | inline-flex;
}
```

2. (父) position: relative （子）absolute + transform（不影响父元素方案，不兼容）

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
3. absolute + margin: auto
```css
.parent {
  poition: relative;
}

.child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}
```
### 原理
* 正常设置　`margin: auto`, 实际效果为　`margin: 0 auto`
* `position: absolute` 时, margin-top, margin-bottom 会由计算结果产生

4. 父）flex + justify - content + align - items（不影响子元素方案，不兼容）

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```
