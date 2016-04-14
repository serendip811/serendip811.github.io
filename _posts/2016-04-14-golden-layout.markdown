---
layout: post
title: "Golden Layout"
date: 2016-04-14 20:27:20 +0900
categories: jekyll update
description: 황금 (비율의) 레이아웃을 만들어내는 js
customcss:
 - https://golden-layout.com/assets/css/goldenlayout-base.css
 - https://golden-layout.com/assets/css/goldenlayout-dark-theme.css
---
황금 (비율의) 레이아웃을 만들어내는 javascript.
vim이나 gui 텍스트 에디터에서 많이 지원하는 수평/수직으로 레이아웃을 나누는 기능을 javascript와 css만을 이용하여 웹페이지에서 구현할 수 있게 해준다. 어드민 툴 등 복잡한 레이아웃 설정이 필요한 곳에서 사용하면 좋을 듯.

드래그&드롭을 이용한 레이아웃 정렬, 크기 변경 등의 기능들을 잘 갖추고 있다.

[샘플페이지][sample], [github페이지][github] 참고.

## Sample
<div id="layout" style="width:100%;height: 500px;"></div>
<script type="text/javascript" src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="https://golden-layout.com/assets/js/goldenlayout.min.js"></script>
<script type="text/javascript">
var config = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { text: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { text: 'B' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { text: 'C' }
            }]
        }]
    }]
};

var myLayout = new GoldenLayout( config, document.getElementById( 'layout') );

myLayout.registerComponent( 'testComponent', function( container, state ){
  container.getElement().html( '<h2>' + state.text + '</h2>');
});
myLayout.init();

</script>

## Usage
{% highlight javascript %}
var config = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { text: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { text: 'B' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { text: 'C' }
            }]
        }]
    }]
};

var myLayout = new GoldenLayout( config, document.getElementById( 'layout') );

myLayout.registerComponent( 'testComponent', function( container, state ){
  container.getElement().html( '<h2>' + state.text + '</h2>');
});
myLayout.init();
{% endhighlight %}

[sample]: https://golden-layout.com/examples/
[github]: https://github.com/deepstreamIO/golden-layout
