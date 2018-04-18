[TOC]

# 单行文本

使用 `text-overflow: ellipsis` 属性，　部分浏览器需要加　`width` 属性

```css
{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* width:  */
}
```

# 多行文本

## WebKit 浏览器或移动端的页面

使用 `text-overflow: ellipsis` 属性　+　其他结合属性

 * `display: -webkit-box` 必须结合的属性，　将对象作为弹性生说盒子模型显示
 * `-webkit-box-orient` 必须结合的属性, 设置或检索伸缩盒对象的子元素的排列方式

 ```css
 {
   display: -webkit-box;
   overflow: hidden;
   text-overflow: ellipsis;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
 }
 ```

## 跨浏览器

相对定位, 设置高度, 模拟 `...`

```css
p {
  position: relative;
  line-height: 15px;
  height: 45px;
  overflow: hidden;
}

p::after {
  content: "...";
  font-weight: bold;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 20px 1px 45px;
}
```

* 注意

      1. height 高度正好是 line-height 的倍数
      2. IE6-7 不显示 content 内容，所以要兼容 E6-7 可以是在内容中加入一个标签，比如用
            <span class="line-clamp">...</span>
         去模拟
      3. 要支持 IE8，需要将 ::after 替换成 after
