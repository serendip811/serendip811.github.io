---
layout: post
title: "javascript 'this' keyword"
date: 2016-04-06 23:03:20 +0900
categories: jekyll update
description: javascript의 this 키워드에 대해
customcss:
 - http://fezvrasta.github.io/popper.js/css/popper.css
---

## 1. Global this

{% highlight javascript %}
console.log(this === window); // true
var foo = "bar";
console.log(this.foo); // "bar"
console.log(window.foo); // "bar"
{% endhighlight %}

## 2. Function this

{% highlight javascript %}
foo = "bar";
function testThis() {
  this.foo = "foo";
}
console.log(this.foo); //logs "bar"
testThis();
console.log(this.foo); //logs "foo"
{% endhighlight %}

## 3. Prototype this

{% highlight javascript %}
function Thing() {
  console.log(this.foo);
}
Thing.prototype.foo = "bar";
var thing = new Thing(); //logs "bar"
console.log(thing.foo);  //logs "bar"
{% endhighlight %}

## 4. Object this

{% highlight javascript %}
var obj = {
  foo: "bar",
  logFoo: function () {
    console.log(this.foo);
  }
};
obj.logFoo(); //logs "bar"
{% endhighlight %}

## 5. DOM Event this

{% highlight javascript %}
function Listener() {
  document.getElementById("foo").addEventListener("click",
    this.handleClick);
}
Listener.prototype.handleClick = function (event) {
  console.log(this); //logs "<div id="foo"></div>"
};
var listener = new Listener();
document.getElementById("foo").click(); //logs "<div id="foo"></div>"
{% endhighlight %}

## 6. HTML this

{% highlight html %}
<div id="foo" onclick="console.log(this);"></div>
<script type="text/javascript">
document.getElementById("foo").click(); //logs <div id="foo"...
</script>
{% endhighlight %}

## 7. jQuery this

{% highlight html %}
<div class="foo bar1"></div>
<div class="foo bar2"></div>
<script type="text/javascript">
$(".foo").each(function () {
  console.log(this); //logs <div class="foo...
});
$(".foo").on("click", function () {
  console.log(this); //logs <div class="foo...
});
$(".foo").each(function () {
  this.click();
});
</script>
{% endhighlight %}

## 8. Inside call(), apply() and bind() functions

{% highlight javascript %}

function add(inc1, inc2) {
  return this.a + inc1 + inc2;
}

var o = {a: 4};
document.write(add.call(o, 5, 6) + "<br />"); //15
//above add.call(o,5,6) sets `this` inside
//add() to `o` and calls add() resulting:
// this.a + inc1 + inc2 =
// `o.a` i.e. 4 + 5 + 6 = 15
document.write(add.apply(o, [5, 6]) + "<br />"); //15
// `o.a` i.e. 4 + 5 + 6 = 15

var g = add.bind(o, 5, 6);       //g: `o.a` i.e. 4 + 5 + 6
document.write(g() + "<br />");  //15

var h = add.bind(o, 5);          //h: `o.a` i.e. 4 + 5 + ?
document.write(h(6) + "<br />"); //15
// 4 + 5 + 6 = 15
document.write(h() + "<br />");  //NaN
//no parameter is passed to h()
//thus inc2 inside add() is `undefined`
//4 + 5 + undefined = NaN
{% endhighlight %}


[sample]: http://fezvrasta.github.io/popper.js/
[github]: https://github.com/FezVrasta/popper.js
