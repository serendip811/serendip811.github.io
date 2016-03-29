---
layout: post
title: "Google Fonts Early Access"
date: 2016-03-29 21:15:20 +0900
categories: jekyll update
description: Google Fonts에 등록되기 전, 미리 만나볼 수 있는 폰트들(한글 폰트를 포함!)
customjs:
 - http://code.jquery.com/jquery-1.4.2.min.js
customcss:
 - /css/grd.css
---

[Forum][google-fonts-early-access-forum]을 통해 요청받은 폰트들은 [Google Fonts][google-fonts]에 등록 되기 전에 [Google Fonts Early Access][google-fonts-early-access]에 공개 되어 전 세계의 사용자들로 부터 피드백과 검증을 받게 된다. 피드백을 통해 검증완료(graduated) 된 폰트는 [Google Fonts][google-fonts]로 등록된다. 검증완료 되었다고 [Google Fonts Early Access][google-fonts-early-access]에서 빠지거나 하지는 않으나, 실 서비스에 사용해도 괜찮을지는 모르겠다.

다양한 한글 폰트들이 등록되어 있어서, 국내에서 인기가 많은 편인듯 하다. 요 사이트 또한 아래의 '나눔 고딕 코딩'체가 적용되어있다.

## Usage
{% highlight html %}
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);
{% endhighlight %}

{% highlight html %}
font-family: 'Nanum Gothic Coding', monospace;
{% endhighlight %}

[google-fonts]: https://www.google.com/fonts
[google-fonts-early-access]: https://www.google.com/fonts/earlyaccess
[google-fonts-early-access-forum]: https://groups.google.com/forum/?fromgroups=#!forum/early-access-fonts
