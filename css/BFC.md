[TOC]

## BFC: 块级格式化上下文

* 浮动元素，float除了none以外的值。
* 绝对定位元素，position(absolute,fixed)
* display 为以下其中之一的值 inline-blocks，table-cells，table-captions  
  注意："display:table" 本身并不产生 BFC，而是由它产生匿名框，匿名框中包含 "display:table-cell" 的框会产 BFC
* overflow 除了 visible 以外的值（hidden，auto，scroll）