import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const exampleCode1 = `long add (int a, long b) { return a+b;)
	long add (long a , int b ) { return a+b;}
	println(add( 3, 3 )); //error`;
const exampleCode2 = `Card c = new Card();

class Card {
    Card() { // 매개변수가 없는 생성자
    }
    Card(String k , int num){  //매개변수가 있는 생성자
    }
}`;
const inheritCode1 = `class Parent{}
class Child extends Parent {}`;
const inheritCode2 = `class Circle {
    int x; // 원점의 x좌표
    int y; // 원점의 y 좌표
    int r; // 반지름
}
class Point {
    int x;
    int y;
}
class Circle2 {
    Point c = new Point(); //원점
    int r;
}
`;

const JavaChap07: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>Chap.06 객체 지향 프로그래밍_2</Typography>
      <Typography>
        Chap 6 ~ 7은 이 책에서 가장 중요한 개념으로 저자가 꼭 여러번 반복해서
        학습하라는 당부를 남겼을 정도이다.
        <br />
        분량 자체도 꽤 많은 편이고 소제목 하나 하나 모두 중요한 기초개념들이기
        때문에 6~7장을 3,4주에 걸쳐 다루기로 했다.
      </Typography>
      <Typography variant='h4'>6-4 오버로딩(Overloding)</Typography>
      <Typography variant='h5'>4.1 오버로딩이란?</Typography>
      <Typography>
        자바에서는 한 클래스내에 이미 사용하려는 이름과 같은 이름을 가진
        메서드가 있더라도 매개변수의 개수 또는 타입이 다르면, 같은 이름을
        사용해서 메서드를 정의할 수 있다.
      </Typography>
      <Typography>
        이처럼 한 클래스 내에 같은 이름의 메서드를 여려개 정의하는 것을 ‘메서드
        오버로딩’ 또는 간단히 ‘오버로딩’ 이라고 한다.
      </Typography>
      <Typography>
        주의할 점<br />
        <ol>
          <li>
            매개변수 타입과 개수가 같고 변수명만 달리했을 때 오버로딩이 성립하지
            않고 완전히 같은 메서드가 된다.
          </li>
          <li>
            메서드의 반환 타입만을 달리 했을 때 호출시 구분 불가능하므로
            오버로딩이 성립하지 않는다.
          </li>
          <li>
            매개변수의 타입과 개수가 같지만 순서가 다른 경우에는 오버로딩으로
            간주한다. 단, 둘 중 하나로 확정할 수 없는 방식의 호출에는 컴파일
            에러가 발생한다.
          </li>
        </ol>
      </Typography>
      <CodeBlock>{exampleCode1}</CodeBlock>
      <Typography variant='h5'>4.4 오버로딩의 장점</Typography>
      <Typography>
        오버로딩을 사용하는 이유는 같은 동작을 하지만 입력이 다른 경우 타입별로
        메서드 이름을 정해줄 필요 없이 하나의 메서드 이름으로 사용할 수 있다.
      </Typography>
      <Typography variant='h5'>4.5 가변인자와 오버로딩</Typography>
      <Typography>
        매개 변수의 개수를 동적으로 지정할 수 있는 역할을 하는 것이
        가변인자이다.
        <br /> 가변인자는 ‘타입… 변수명’으로 선언하며 printf() 가 가장 대표적인
        예이다.
        <br /> 가변인자는 매개변수 중에 가장 마지막에 선언헤야한다.
      </Typography>
      <Typography>
        가변인자는 내부적으로 배열을 생성해 이용한다. 그래서 인자가 없거나
        해당타입으로 이루어진 배열을 넣거나 여러개를 넣는 것도 가능하다.
      </Typography>
      <Typography>
        오버로딩된 메서드가 존재할 때 가변인자를 이용하면 서로 타입이 같은 경우
        호출할 때 메서드가 구분되지 않아 에러가 발생한다.
      </Typography>
      <Typography variant='h4'>6-5 생성자</Typography>
      <Typography>
        생성자는 인스턴스가 생성될 때 호출되는 ‘인스턴스 초기화 메서드’ 이다.
        <br />
        생성자의 이름은 클래스의 이름과 같아야한다.
        <br />
        생성자는 리턴값이 없다.(메서드와 비슷하지만 void를 붙이지 않는다)
      </Typography>
      <CodeBlock>{exampleCode2}</CodeBlock>
      <Typography>
        생성자도 메서드와 마찬가지로 오버로딩이 가능하며 인스턴스를 생성할 때
        선택해서 생성이 가능하다. <br />
        다만 주의할 점은 연산자 new 가 인스턴스를 생성하는 것이지 생성자가
        인스턴스를 생성하는 것이 아니다.
      </Typography>
      <Typography>
        생성자는 반드시 클래스당 하나 이상이 필요하지만 따로 정의해주지 않으면
        컴파일러가 자동으로 아무런 기능이 없고 클래스이름과 같은 기본 생성자를
        추가해준다.
      </Typography>
      <Typography variant='h5'>5.3 매개변수가 있는 생성자</Typography>
      <Typography>
        인스턴스 변수가 있는 생성자의 경우 기본생성자를 이용하면 인스턴스변수를
        하나하나 초기해줘야 하지만 매개변수가 있는 생성자를 이용해 내부에
        초기화하는 기능을 넣으면 호출시에 편리하고 코드를 보다 직관적이게 만들
        수 있다.
      </Typography>
      <Typography variant='h5'>
        5.4 생성자에서 다른 생성자 호출하기 - this(), this
      </Typography>
      <Typography>
        같은 클래스의 맴버들 간에 서로 호출할 수 있는 것처럼 생성자 간에도 서로
        호출이 가능하다. 생성자의 이름으로 클래스 이름 대신 this()를 사용한다,
        한 생성자에서 다른 생성자를 호출할 때에는 반드시 생성자 내의 첫 줄에서만
        호출이 가능하다.
      </Typography>
      <Typography>
        생성자는 일반적으로 비슷한 기능이 일부 포함되어있어 서로 연결해주면
        코드가 간략해지고 수정도 편해진다.
      </Typography>
      <Typography>
        this는 참조변수로 인스턴스 자신을 가리킨다. static메서드에서 인스턴스
        맴버들을 사용할 수 없는 것처럼, this 역시 사용할 수 없다. 인스턴스가
        생성되면서 그 참조변수를 값으로 갖기 때문이다.
      </Typography>
      <Typography variant='h4'>6-6 변수의 초기화</Typography>
      <Typography>
        맴버변수는 자동으로 기본값으로 초기화가 이루어지지만 지역변수는 사용하기
        전에 반드시 초기화해야한다.
      </Typography>
      <Typography>맴버 변수의 초기화 방법은 3가지가 있다.</Typography>
      <ol>
        <li>명시적 초기화</li>
        <li>생성자</li>
        <li>초기화 블럭</li>
      </ol>
      <Typography variant='h5'>6.2 명시적 초기화</Typography>
      <Typography>
        변수를 선언과 동시에 초기화하는 것을 명시적 초기화라고 한다.
      </Typography>
      <Typography variant='h5'>6.3 초기화 블럭</Typography>
      <Typography>
        클래스 내에 블럭{}을 만들고 안에 코드를 작성한다.
        <br />
        static &#123; &#125;
        <br />
        &#123; &#125;
      </Typography>
      <Typography>
        생성자 보다 인스턴스 초기화 블럭이 먼저 수행된다.
        <br />
        모든 생성자에 공통으로 수행되어야하는 문장들이 있을 때 인스턴스 블럭에
        넣어주면 코드가 간결해진다.
        <br />
        프로그래머는 이와같은 객체지향 언어의 요소들을 잘 이해하고 활용하여
        코드의 중복을 최대한 제거하기 위해서 노력해야한다.
      </Typography>
      <img src={Images.initBlock} />
      <Typography>
        실행 순서는 클래스 로드( 프로그램 실행시) -&raquo; 클래스 명시적 초기화
        -&raquo; 클래스 초기화 블럭 -&raquo; 클래스 호출 -&raquo; 인스턴스
        명시적 초기화 -&raquo; 인스턴스 초기화 블럭 -&raquo; 생성자 순이다.
      </Typography>
      <Typography variant='h3'>Chap.07 객체지향 프로그래밍 2</Typography>
      <Typography variant='h4'>7-1 상속</Typography>
      <CodeBlock>{inheritCode1}</CodeBlock>
      <Typography>
        언뜻 보기에 부모가 자식보다 커 보이지만 Child클래스는 Parent클래스의
        모든 맴버들을 상속받기 때문에 집합관계로 나타내면 자식클래스가
        부모클래스보다 큰 범위를 나타낸다.
      </Typography>
      <Typography>
        생성자와 초기화 블럭은 상속되지 않는다. 맴버만 상속된다.
        <br />
        자손 클래스의 맴버 개수는 조상 클래스보다 항상 같거나 많다.
      </Typography>
      <Typography variant='h5'>1.2 클래스간의 관계- 포함관계</Typography>
      <CodeBlock>{inheritCode2}</CodeBlock>
      <Typography variant='h5'>1.3 클래스간의 관계 결정하기</Typography>
      <Typography>
        클래스를 작성할 때 상속관계를 맺어줄 것인지 포함관계를 맺어줄 것인지
        결정하는 것은 때때로 혼돈스러울 수 있다.
        <br /> 그럴 때는 ~은 ~이다 와 ~은 ~을 가지고 있다 를 넣어서 문장을
        만들어보면 관계가 보다 명확해진다.
        <br />
        ~은 ~이다 라는 말이 성립한다면 상속관계를 맺어주고 ~은 ~을 가지고 있다는
        문장이 성립한다면 포함관계를 맺어주면 된다.
      </Typography>
      <Typography variant='h5'>1.4 단일 상속</Typography>
      <Typography>자바에서는 오직 단일 상속만을 허용한다.</Typography>
      <Typography variant='h5'>1.5 Object 클래스 </Typography>
      <Typography>
        모든 클래스의 최상위에 있는 조상클래스이다.
        <br />
        Object클래스에는 toString(), equals()같은 매서드를 포함하고 있어 따로
        정의하지 않고도 자바의 모든 클래스가 사용할 수 있다.
      </Typography>
    </Paper>
  );
};

export default JavaChap07;
