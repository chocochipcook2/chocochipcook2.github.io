const chap01 = `<div class="sc-jSFkmK jGLdVH"><div><p>---
title: Java의 정석 Chap.01
date: 2022-08-30 00:55:37
tags: [java, jvm, java의정석]
categories: Java의 정석
---</p><h3 id="ch01---">Ch.01. 자바를 시작하기 전에</h3><h5 id="-----br-------------br----">다른 언어를 이미 사용하거나 접해보았던 개발자에게<br>새로운 언어를 배우는 가장 쉬운 방법은 기존에 알고있던 개념과 새로운 언어의 개념을 서로 비교하면서<br>차이점과 공통점을 찾는 것이라고 생각한다.</h5><h5 id="-------javascriptts-c--">내가 접해보았던 그리고 현재 사용중인 언어로는 크게 javascript(TS), C++ 정도가 있다.</h5><blockquote><p>1.1.3 자바언어의 특징</p><blockquote><ol start="1"><li>운영체제에 독립적이다(JVM)</li><li>객체지향 언어이다.</li><li>객체지향 언어면서도 비교적 배우기 쉽다.</li><li>자동 메모리 관리(Garbage Collector)</li><li>네트워크와 분산처리를 지원한다.</li><li>멀티쓰레드를 지원한다.</li><li>동적 로딩을 지원한다.</li></ol></blockquote></blockquote><h5 id="-1-----jvm-br----java---jvm--------docker--br------------">먼저 1장을 펴자마자 가장 생소한 개념은 JVM 이었다.<br>운영체제에 관계없이 동작하기 위해 java로 작성한 코드가 JVM이라는 별도의 소프트웨어 위에서 해석되고 동작된다는 말이었는데 나에겐 docker가 바로 떠올랐다.<br>아직 정확한 개념을 알 수 없지만 대충 내가 생각한 의미는 아래 그림과 같다.</h5><p><img src="/image/jvmImage.png"></p><h5 id="---garbage-collectionbrc-------------br------------------">또 다른 점은 Garbage Collection인데<br>C++에서는 당연히 기본적으로 자동 동작하지 않는 기능이기에 최적화 할때가 아니면 학부수준에서는 신경쓸 필요가 없었다.<br>사실 수동으로 해주지 않아도 작동한다는 점에서 존재와 구조만 대충 이해하고 넘어가면 크게 신경쓰지 않아도 알아서 잘 돌아가지 않을까 싶다.(?)</h5><blockquote><p>1.2 자바 환경 구축</p><blockquote><ol start="1"><li><a href="http://java.sun.com/">http://java.sun.com/</a> 에서 JDK 설치</li><li>자주 참고하기 위한 공식 문서인 Java API 문서를 다운 받는다.</li><li>이클립스, 인텔리제이 등의 개발도구 혹은 편집기를 설치한다.</li><li>간단한 코드를 작성 후 컴파일 및 실행해 본다.</li></ol></blockquote></blockquote><h5 id="jdk-----18-17-11-8---br----m2-macos--macos-arm64----8--arm64--br----">JDK 설치를 위해 사이트에 접속했더니 18, 17, 11, 8 버전의 자바가 있었다.<br> 현재 설지하려는 환경은 애플실리콘(m2) MacOS 이므로 MacOS의 ARM64버전을 받아야하는데 책에서 소개한 8버전의 자바에는 ARM64 버전이 없었다.<br>- 초보자라 잘 못찾는걸지도</h5><p><img src="/image/jdk8arm.png"></p><h5 id="-lts---17-dmg-m1--jdk--">그래서 LTS버전중 최신 버전인 17버전을 dmg파일로 설치해보았다.(m1 용 JDK가 최근에야 개발된듯하다.)</h5><p><img src="/image/javaVersion.png"></p>

<blockquote><p>1.3.1 코드 작성시 기본적인 유의사항</p><blockquote><ol start="1"><li>Public class는 하나의 소스파일에 한개 이하로 존재해야한다.</li><li>Public class가 있는 경우, 소스파일의 이름은 반드시 public class의 이름과 일치해야 한다.(대소문자 구분)</li><li>Public class가 없는 경우, 소스파일의 이름은 내부에서 선언된 class중 어떤 것의 이름이든 관계 없다.</li></ol></blockquote></blockquote><pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}</code></pre>
<h5 id="-heljava---------">
파일명을 Hel.java로 만들었을 때 컴파일러 에러와 함께 파일명을 바꾸라는 안내가 나온다.
</h5>
<p>
<img src="/image/heljava.png">
</p>
<h5 id="-helloworld------helloworldclass---------">
파일명을 HelloWorld로 만들었을 때 컴파일러가 정상 실행되고 HelloWorld.class파일이 생성되며 파일 구동도 잘 되는 것을 확인할 수 있다.</h5><p><img src="/image/hellojava.png"></p><blockquote><p>1.3.4 주석</p><blockquote><p>주석은 //이후로 오는 라인 한줄, /<em>과 </em>/ 사이에 오는 라인 여러 줄로 작성할 수 있다.</p></blockquote></blockquote><h5 id="-c-">이건 C++과 동일한듯?</h5><p><img src="/image/javaBookCover.jpeg"></p><h4 id="------------------">이 외의 많은 내용들은 다른 언어들과 차이점이 거의 없거나 개발 자체에 대한 기초지식에 가까워보여 생략하고 내가 생각하는 포인트들만 찝어보았다.
</h4>
</div>
</div>`;
export default chap01;
