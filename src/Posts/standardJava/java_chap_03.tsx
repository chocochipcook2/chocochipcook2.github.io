import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button, Paper, Typography } from "@mui/material";

import Images from "../../Assets/Images";

const JavaChap03: React.FC = () => {
  const [showSome, setShowSome] = useState<boolean>(false);
  const jsCode1: string = `const [showSome, setShowSome] =useState<boolean>(false); 
  <Button
  title='hide&changeColor' 
  color={showSome ? "primary" :"secondary"} 
  onClick={() => {setShowSome(!showSome); } 
  />
   {showSome ?
  <Button title='reveal' /> : <></> } `;
  const operators = ` +=, *=, /=, <<= 등`;
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>Chap.03. 연산자</Typography>
      <Typography variant='h4'>&nbsp;3.1.3 연산자의 종류</Typography>
      <img src='./Images/operatorFunctionalDepart.png' />
      <Typography variant='h6'>
        위와 같이 기능적으로 분류할 수 있고, 피연산자의 개수로 분류할 수도 있다.
        <br />
        해당 연산자가 가져야하는 피연산자의 개수에 따라 단항연산자, 2항연산자,
        3항연산자로 분류한다.
      </Typography>
      <Typography variant='h4'>3.1.4. 피연산자의 우선순위</Typography>
      <img src={Images.operatorPriority} />
      <img src={Images.operatorPriority2} />
      <Typography variant='h6'>
        피연산자의 우선순위 규칙은 아래와 같다.
        <br />
        1. 산술 &gt; 비교 &gt; 논리 &gt; 대입
        <br />
        2. 단항 &gt; 2항 &gt; 3항
        <br />
        3. 단항 연산자와 대입연산자를 제외한 모든 연산의 진행방향은 왼쪽에서
        오른쪽이다.
      </Typography>
      <Typography variant='h4'>3.1.5. 산술변환</Typography>
      <Typography variant='h6'>
        대략적 정의: 연산 수행 직전에 발생하는 피연산자의 자동 형변환
        <br />
        C언어에서도 있는 개념으로 산술연산자를 사용할 때 암시적으로 형변환이
        일어나기 때문에 각 연산 후에 타입에 유의해야한다.
        <br />
        피연산자의 타입을 표현 범위가 더 큰 타입으로 변환해 일치시키며
        정수형에서는 int보다 작은 타입은 int로 통일 변환된다.
      </Typography>
      <Typography variant='h4'>3.2. 전위 연산자, 후위 연산자</Typography>
      <Typography variant='h6'>
        자주 사용하지만 단독으로 사용하는 경우가 많아 무슨 차이인지 기억이
        안나는 경우가 많았는데
        <br />
        전위연산자는 값 참조 이전에 증감연산 실행, 후위연산자는 값 참조 이후에
        증감연산을 실행한다.
        <br />
        복합적인 수식 내에서 일어나므로 단독사용시는 신경 쓰지 않아도 된다.
      </Typography>
      <Typography variant='h4'>3.3 산술 연산자</Typography>
      <img src={Images.typetransError} />
      <Typography variant='h6'>
        형변환은 (type) 변수 으로 사용하는데 <br />
        값 저장시의 오버플로우 발생과, 연산 직후 오버플로우의 발생 모두
        주의해야한다.
        <br />
        문자끼리의 연산도 가능한데 문자는 유니코드로 저장되고 유니코드간
        연산으로 알고리즘 문제 풀이에 응용될 수 있을 것 같다. 리터럴, 상수
        끼리의 연산은 컴파일러가 미리 계산해서 컴파일 되기 때문에 형변환 문제가
        발생되지않고, 상수간의 계산식이 아무리 늘어나도 실행시의 성능차이는
        없다.
      </Typography>
      <Typography variant='h4'>3.4 비교연산자</Typography>
      <Typography variant='h6'>
        문자열의 비교는 ==이 아니라 equals()를 사용한다.
      </Typography>
      <img src={Images.stringEquals} />
      <Typography variant='h6'>
        내용이 같음에도 다른 객체이면 ==는 false를 반환한다. <br />
        문자열의 내용 비교를 위해서는 equals()를 사용한다. *** Java와 C에서의
        printf의 차이 - %n
        <br />
        %n이 예제에 자주 쓰여있어서 저걸 왜 끝에 붙이는 걸까 의문이 들었는데
        자바에서는 \n과 비슷한 줄바꿈(개행)역할을 하고
        <br />
        C에서는 %n이전에 쓰인 문자의 개수를 뒤에 오는 인자(주소)에 입력하는
        역할을 하기 때문에 오해하지 않아야한다.
      </Typography>
      <Typography variant='h4'>3.5.1 논리연산자</Typography>
      <Typography variant='h5'>효율적인 연산</Typography>
      <Typography variant='h6'>
        AND나 OR연산에서 앞에 놓인 피연산자에 따라 바로 그 연산 전체의 결과가
        정해진다면 뒤에 놓인 피연산자는 평가하지 않는다.
        <br />
        따라서 앞에 놓일 피연산자를 조금 더 빈도나 범위가 넓은것으로 하면
        연산속도가 빨라질 수 있겠다.
        <br />또 뒤의 피연산자가 평가되지 않을 때, 안에 들어간 수식 또한
        연산되지않으므로 전위연산자나 후위연산자가 있어도 실행되지않는다.
      </Typography>
      <Typography variant='h4'>3.5.2 비트연산자</Typography>
      <img src={Images.bitORAND} />
      <img src={Images.bitXOR} />
      <Typography variant='h6'>
        비트연산자는 위의 동작을 활용해 비트마스킹 이라는 자료구조 기법에 사용될
        수 있는데, 메모리 소모가 적고 빠른 동작을 보장한다.
        <br />
        알고리즘 문제 풀이에 등장하기도 한다.
      </Typography>
      <Typography variant='h5'>~ 비트 전환 연산자</Typography>
      <Typography variant='h6'>
        1의 보수를 반환하며 결과값에 +1을 하면 2의 보수 즉, 음의 정수변환이
        가능하다. - 자동 형변환으로 int로 변환된다.
      </Typography>
      <Typography variant='h5'> &laquo;, &raquo; shift연산자</Typography>
      <Typography variant='h6'>
        왼쪽은 2의 제곱, 오른쪽은 2로 나누기와 동일한 결과를 갖는다. <br />
        실행속도가 / 연산자보다 빠르므로 실행속도가 매우 중요한 프로그램이나
        위의 비트마스킹을 위한 변수생성에 쓰이기 좋다.
      </Typography>
      <Typography variant='h4'>3.6 그 외의 연산자</Typography>
      <Typography variant='h5'>3.6.1 조건 연산자 : ? </Typography>
      <Typography variant='h6'>
        유일한 3항 연산자이다.
        <br />
        <CodeBlock language='javascript' style={oneDark}>
          {jsCode1}
        </CodeBlock>
        <Button
          color={showSome ? "primary" : "secondary"}
          onClick={() => {
            setShowSome(!showSome);
          }}
          size='large'
        >
          hide&changeColor
        </Button>
        {showSome ? <Button>revealed</Button> : <></>}
        &lsaquo;- 버튼을 눌러보세요
        <br />
        react-native로 어플을 만들때(front-end) 이런 느낌의 코드를 자주 사용해서
        익숙한 구문이다.
        <br />
        단순히 if문을 쓰는 것보다 속성 자체를 사용자의 동작에 따라 바꾸기도 좋고
        화면 자체의 구성을 바꾸기도 좋아 자주 사용한다.
      </Typography>
      <Typography variant='h5'>3.6.2 복합대입연산자</Typography>
      <Typography variant='h6'>{operators}</Typography>
    </Paper>
  );
};

export default JavaChap03;
