import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const code251 = `Tv[] tvArr = new Tv[3];
tvArr[0] = new Tv();
tvArr[1] = new Tv();
tvArr[2] = new Tv();

Tv[] tvArr = {new Tv(), new Tv(), new Tv()};

Tv[] tvArr = new Tv[100];
for (int i=0;i<tvArr.length;i++){
    tvArr[I] = new Tv();
}`;
const JavaChap06: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>Chap.06 객체 지향 프로그래밍_1</Typography>
      <TextQuoteBlock>
        객체지향의 개념은 프로그램을 실제 세계와 비슷하게 만들려는 노력에서
        탄생했고, ‘실제 세계는 사물(객체)로 이루어져 있으며, 발생하는 모든
        사건들은 사물간의 상호작용이다.’ 라는 개념에 기초한다.
      </TextQuoteBlock>
      <Typography>
        프로그래밍의 개념적 이론을 공부한 지는 너무 오래 되어서 걕체지향의
        개념을 알고 있음에도 객체지향 언어의 정의와는 잘 매칭이 되지 않았던 적이
        많다.
        <br /> 나한테 객체 지향 언어가 무엇이냐고 묻는다면 아마 기존의 절차적
        지향언어에서 객체지향 스타일의 프로그래밍이 가능하게 여러 기능을 추가한
        언어 라고 표현할 수 있을 것 같다.
        <br /> 객체지향언어라고 해서 무조건 객체지향형 프로그래밍을 해야만
        한다기 보단 추가된 기능들을 통해 실제 세계와 비슷한 자료구조와
        상호작용을 프로그램으로 표현할 수 있다는 것이다.
      </Typography>
      <Typography variant='h4'>6-2 클래스와 객체</Typography>
      <Typography>
        클래스란 ‘객체를 정의해 놓은 것’ 또는 ‘객체의 설계도나 틀’ 이라고 정의할
        수 있다.
        <br />
        클래스를 통해 객체를 생성하는 과정을 인스턴스화 라고 하며, 어떤
        클래스로부터 만들어진 객체를 그 클래스의 인스턴스 라고 한다.
      </Typography>
      <Typography>
        클래스는 속성과 기능으로 이루어져있으며, 그 중 속성을 java에서는
        맴버변수라고 말하고 기능은 메소드라고 부른다.
      </Typography>
      <Typography>
        생성 :<br />
        클래스를 통해 인스턴스를 생성할 때는 변수를 생성하는 것과 비슷하게
        <br />
        클래스명 변수명; // 클래스의 객체를 참조하기 위한 참조변수(변수명)를
        선언
        <br />
        변수명 = new 클래스명(); // 클래스의 객체를 생성 후 (new ~~) , 객체의
        주소를 참조 변수에 저장 (변수명 = ~~)
        <br />
        사용 :<br />
        맴버 변수에 접근하려면 <br />
        t.channel = 7; // 클래스로 생성한 인스턴스 t 내부의 변수 channel에 7을
        저장
        <br />
        메서드에 접근하려면 t.channelDown(); // ~~ t 내부의 메서드 channelDown()
        을 호출한다.(실행시킨다)
        <br />
      </Typography>
      <Typography variant='h5'>2.5 객체 배열</Typography>
      <CodeBlock language='java' style={oneDark}>
        {code251}
      </CodeBlock>
      <Typography>
        객체를 배열로 다루는 방법은 객체명으로 배열을 만든 뒤 인스턴스를 생성해
        각 배열의 인덱스에 참조변수를 저장해주는 것이다.
      </Typography>
      <Typography variant='h5'> 2.6 클래스의 또 다른 정의</Typography>
      <Typography>
        객체 지향 언어의 개념을 이해하는데 이 장의 내용이 참조가 될 수 있을 것
        같다.
      </Typography>
      <TextQuoteBlock>
        클래스를 다른 면에서 보면 “데이터와 함수의 결합”이라고 말할 수 있다.
        <br />
        하나의 데이터를 저장하기 위해 변수를, 같은 종류의 데이터를 보다
        효율적으로 다루기 위해서 배열이라는 개념을 도입했으며, 후에는 구조체가
        등장하여 자료형의 종류에 상관없이 서로 관계가 깊은 변수들을 하나로
        묶어서 다룰 수 있도록 했다.
      </TextQuoteBlock>
      <TextQuoteBlock>
        이 이전에 데이터와 함수는 서로 관계가 없는 것처럼 데이터는 데이터끼리,
        함수는 함수끼리 따로 다루어져 왔지만, 사실 함수는 주로 데이터를 가지고
        작업을 하기 때문에 많은 경우에 있어서 데이터와 함수는 관계가 깊다.
      </TextQuoteBlock>
      <Typography>
        또 다른 면에서 보면 사용자 정의 타입 이라고 볼 수 있다.
        <br /> 사용할때 자료형의 사용과 비슷하게 선언, 참조, 초기화 과정을
        거치는 것처럼 일종의 새로운 자료형을 만드는 것으로 볼 수도 있겠다.
      </Typography>
      <Typography variant='h4'>6-3 변수와 메서드</Typography>
      <Typography variant='h5'>3.1 선언 위치에 따른 변수의 종류</Typography>
      <Typography>
        처음 언어를 배울 때 전역변수와 지역변수로 나누어서 구분을 하고 신경써서
        프로그램을 짰던 것 같은데 자바에서는 위치에 따라 세가지로 분류할 수
        있는듯 하다.
      </Typography>
      <Typography>
        1. 인스턴스 변수 <br />
        2. 클래습 변수 <br />
        3. 지역변수
      </Typography>
      <TextQuoteBlock>
        인스턴스 변수는 클래스의 인스턴스를 생성할 때 만들어지고 독립적인
        저장공간을 가지므로 서로 다른 값을 가질 수 있다. 인스턴스마다 고유한
        상태를 유지해야하는 속성의 경우, 인스턴스 변수로 선언한다.
      </TextQuoteBlock>
      <TextQuoteBlock>
        클래스 변수는 인스턴스 변수 앞에 static을 붙이기만 하면 된다. 클래스
        변수는 모든 인스턴스가 공통된 저장공간을 공유하게된다. public을 앞에
        붙이면 전역변수의 성격을 갖는다.
      </TextQuoteBlock>
      <TextQuoteBlock>
        지역변수는 메서드 내에 선언되어 메서드내에서만 사용가능하며, 메서드가
        종료되면 소멸되어 사용할 수 없게된다.
      </TextQuoteBlock>
      <Typography>
        자바로 예제를 풀 때 static으로 선언되지않은 변수라서 에러(워닝?)가 나서
        static으로 고쳐준 적이 있다.
        <br /> 왜 static을 쓰는지 이해가 안됐는데 이제 대충 알 것 같다.
        <br />
        static을 붙이지 않은 변수는 해당 클래스의 인스턴스를 생성할때 마다 새로
        생성되어 각자 다른 값을 가질 수 있고 초기화가 필요하다.
      </Typography>
      <Typography>
        자바는 기본적으로 최상위 클래스 밑에 메인 메서드와 여러 내부 클래스로
        이루어진 구조이기 때문에 해당 클래스 내에서 어떠한 변수명이 계속 그 값을
        유지하려면 (최상위에서 생성하고 같은 변수명으로 같은 값에 접근하려면)
        static을 붙여서 쓰는 것이고, class 내부에 선언 후 해당 클래스의
        인스턴스를 생성할 때마다 새로운 값을 가리키게 하려면 인스턴스 변수를
        사용하는게 아닐까?
      </Typography>
      <Typography>
        다만 주의해야할 것은 인스턴스를 여러개 생성 후 한 인스턴스에서 클래스
        변수를 바꾸면 해당 클래스의 다른 인스턴스 또한 같은 값으로 변경된다는
        것이다.
      </Typography>
      <Typography variant='h5'>3.6 return 문 </Typography>
      <Typography>
        매개변수의 유효성 검사
        <br />
        메서드의 구현부를 작성할 때 타입만 맞으면 어떤 값도 매개변수를 통해
        넘어올 수 있기 때문에 비정상적인 종료를 막기위해 문제가 생길 수 있는
        부분을 먼저 검사해 예외처리를 해서 동작이 유지될 수 있게 해야한다.
      </Typography>
      <Typography variant='h5'>3.7 JVM의 메모리 구조 </Typography>
      <Typography>
        JVM은 메모리를 여러 영역으로 나누어 관리하는데 그 중 가장 주요한
        영역으로 메서드영역, 힙, 호출스택 이 있다.
      </Typography>
      <Typography>
        호출스택에서는 메서드가 호출될 때 메모리를 할당 받고 메서드가 끝나면
        메모리를 반환하고 사라진다. 스택이라는 이름에서 알 수 있듯이 위로 겹겹이
        쌓이는 모습을 보이며 가장 위에있는 메모리는 가장 마지막에 호출된
        메서드이다.
      </Typography>
      <Typography variant='h5'>
        3.8 기본형 매개변수와 참조형 매개변수
      </Typography>
      <TextQuoteBlock>
        기본형 매개변수는 해당 값을 불러와 읽을 수만 있고, 참조형 매개변수는
        읽고 쓰기가 가능하다. 직접적으로 값을 변경하고 싶다면 메서드의 선언부에
        참조형 매개변수를 받아와야한다. 배열은 기본적으로 참조형이기 때문에
        간단히 처리할 때는 변수를 길이가 1인 배열에 저장해두고 배열을 메서드에서
        받아 값을 직접 변경할 수도 있다.
      </TextQuoteBlock>
      <Typography>
        메서드의 실행을 통해 return값을 직접 받아올 수도 있지만 return 없이
        내부에서 참조형 변수를 조작함으로써 외부에 영향을 끼칠 수도 있다.
      </Typography>
      <Typography variant='h5'>3.9 참조형 반환타입</Typography>
      <Typography>
        과거에 print를 통해 배열을 출력하면 타입 @ 주소 값이 출력된다고 배웠다.
        <br />
        메서드의 반환타입으로 참조형 타입을 사용하면 메서드의 반환값은 해당
        타입(클래스 인스턴스)의 참조 주소가 된다.
        <br /> 내부적으로는 그렇지만 말 그대로 객체를 생성해 반환해 사용할 수
        있다고 생각하면 될 것 같다.
      </Typography>
      <Typography variant='h5'>3.10 재귀호출</Typography>
      <Typography>
        메서드 내에서 해당 메서드를 다시 호출하는 것으로 반복문과 유사한 기능을
        한다.
        <br /> 반복문보다 재귀호출의 수행 시간이 더 오래걸린다.
        <br />
        반복문과 재귀호출을 적절히 사용하면 코드를 간결화시키고 알아보기
        쉽게하여 수정하기 편하게 할 수 있다.
        <br />
        재귀호출에서도 스택오버플로우(스택 메모리의 최대 공간을 초과함) 등의
        치명적인 에러가 발생할 수 있어서 매개변수의 유효성 검사가 중요하다.
      </Typography>
      <Typography variant='h5'>3.11 클래스 메서드와 인스턴스 메서드</Typography>
      <Typography>
        메서드 앞에 static을 붙이면 클래스 메서드이고 아니면 인스턴스
        메서드이다.
        <br />
        어떤 때에 static을 사용하는지 헷갈릴 수 있는데 책에서는 이렇게 말하고
        있다.
      </Typography>
      <TextQuoteBlock>
        1. 클래스를 설계할 때, 맴버변수 중 모든 인스턴스에 공통으로 사용하는
        것에 static을 붙인다.
        <br />
        2. 클래스 변수는 인스턴스를 생성하지 않아도 사용할 수 있다.
        <br />
        3. 클래스 메서드는 인스턴스 변수를 사용할 수 없다. -인스턴스 변수는
        인스턴스가 반드시 존재해야만 사용할 수 있는데, 클래스 메서드는 인스턴스
        생성 없이 호출 가능하므로 클래스 메서드가 호출되었을 때 인스턴스가
        존재하지 않을 수도 있다.
        <br />
        4. 메서드 내에서 인스턴스 변수를 사용하지 않는다면(혹은 매개변수만으로
        작업이 가능하다면), static을 붙이는 것을 고려한다.
      </TextQuoteBlock>
      <Typography>
        인스턴스 메서드는 실행 시 호출되어야할 메서드를 찾는 과정이 추가적으로
        필요하기 때문에 시간이 더 걸린다.
      </Typography>
      <Typography>
        이로써 과거에 인스턴스 변수를 선언해서 사용하려다가 에러가 난 이유를 알
        수 있었다. static으로 선언된 메인 메서드 안에서 인스턴스 변수를 선언하고
        사용하려고 했기 때문인 것 같다.
      </Typography>
      <Typography variant='h5'>
        3.12 클래스 멤버와 인스턴스 멤버 간의 참조와 호출
      </Typography>
      <Typography>
        위에서 static 메서드 안에서 인스턴스 메서드를 호출할 수 없다고 했는데,
        그 이유를 같은 장에서 다루고 있었다.
        <br />
        인스턴스 맴버가 존재하는 시점에 클래스 맴버는 항상 존재하지만 클래스
        맴버가 존재하는 시점에 인스턴스 맴버가 존재하지 않을 수도 있기 때문이다.
      </Typography>
    </Paper>
  );
};

export default JavaChap06;
