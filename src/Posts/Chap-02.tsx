import * as React from 'react';

const Chap02=`<div class="sc-jSFkmK jGLdVH"><div><p>---
title: Java의 정석 Chap.02
date: 2022-08-30 00:57:01
tags: [java, jvm, java의정석]
categories: Java의 정석
---</p><h3 id="chap02--variables">Chap.02 변수 Variables</h3><blockquote><p>2.1 변수</p><blockquote><ol start="1"><li>변수의 선언 int a;</li><li>변수의 초기화 int a = 0;
<ul><li>한줄에 여러개 가능 
<code>java 
int a, b;  또는  int a=17, b=10;</code></li></ul></li><li>변수의 이름
<ul><li>대소문자 구분, 길이 제한 x</li><li>예약어 사용 불가능 ( 예약어 = 기본적으로 언어에 깔려있는 클래스나 변수, 메서드의 이름)</li><li>숫자로 시작하면 안된다</li><li>특수문자는 _ 와 $ 만 허용한다.</li></ul></li></ol><p>그 외 권장되는 규칙 :</p><ul><li>클래스 이름의 첫 글자는 항상 대문자, 변수와 메서드의 이름 첫 글자는 항상 소문자</li><li>여러 단어로 이루어진 이름은 단어의 첫 글자를 대문자로 한다.(Pascal case)</li><li>상수의 이름은 모두 대문자로 한다. 여러 단어로 이루어진 경우 _ 로 구분한다.
  <ul><li>PI, MAX_NUMBER</li></ul></li><li>이름은 용도를 알기 쉽게 의미 있는 이름을 쓰는 것이 좋다.</li></ul></blockquote></blockquote><h5 id="-----br----------------------">변수 선언은 사실 특별할게 없는 듯하다.<br> '그 외  권장되는 규칙'이 다른 프로그래밍 언어나 환경에서도 동일하게 사용될 수 있는데 코드 가독성이나 호출시에 오인 방지를 위해 습관을 들이면 좋겠다.</h5><blockquote><p>2.2 변수의 타입</p><pre><code>기본형과 참조형
    기본형 변수 ( primitive type) :
        boolean, char, int, long, float, double, byte, short 8개
    참조형 변수 ( reference type) :
        객체의 주소를 저장한다. 
            사용예시 : 클래스이름 변수이름;
            Date today = new Date();</code></pre><blockquote><p>2.2.1 기본형 변수</p><ul><li><p>boolean을 제외한 나머지 7개 기본형 변수는 서로 연산과 변환이 가능하다.</p><ul><li>정수형 변수는 4가지(int, long, byte, short)인데 저장할 수 있는 값의 범위가 다르므로 메모리를 절약하려면 byte나 short를 사용한다. \n cpu가 가장 효율적으로 처리할 수 있는 타입은 int로 주로 정수형에는 int를 사용한다.</li></ul><p>2.2.2 상수와 리터럴
    상수는 한번 값을 저장하면 다른 값으로 변경할 수 없다.
    변수 선언과 동일하며 앞에 final을 붙여준다.
    상수는 선언과 동시에 반드시 초기화한다.(사용 전에만 초기화하면 된다)</p><pre><code>리터럴은 영단어로 literally가 문자 그대로 혹은 정확하게 를 의미하는 것과 같이 상수 그 자체를 표현하는 말이다. 내가 직접 선언한 
    final int FIRST_VALUE = 12;    
가 아닌 12, 19, 1.3824같은 숫자형태 그대로를 칭하는 말이다.

리터럴의 타입
    정수형에서는 진법을 나타내는 접두사를 사용한다. 
     0은 8진수, 0x는 16진수, 0b는 2진수 이다.

    정수형 중간에는 구분자 _ 를 넣어 보기 편하게 쓸 수 있다.

    실수형에서는 타입을 구분하는 접미사를 사용한다.
    float에는 f를 붙인다. d는 double을 나타내지만 기본적으로 생략하면 double타입으로 간주한다.</code></pre><ul><li><p>리터럴 접미사는 long과 float의 l (헷갈림 방지를 위해 L), f 만 신경 쓰면 된다.</p><pre><code>  문자 리터럴
  문자 리터럴은 문자 하나를 작은 따옴표로 감싼것으로 빈 문자 리터럴은 사용할 수 없고 ‘’ x , 문자열을 감쌀 수 없다 ‘Java’ x
  문자열 리터럴은 빈 문자열을 허용한다 “”
  

  문자열에서의 덧셈 연산자
  덧셈 연산자는 피연산자가 모두 숫자일 때는 두 수를 더하지만, 피연산자 중 어느 한 쪽이 string이면 나머지 한 쪽을 먼저 string으로 변환한 다음 두 string을 결합한다.js</code></pre><p>이를 활용해 아무 내용이 없는 빈 문자열””을 사용해 다른 타입의 값을 문자열로 변환하는 방법도 있다.</p></li></ul></li></ul></blockquote></blockquote></div></div>`
export default Chap02;