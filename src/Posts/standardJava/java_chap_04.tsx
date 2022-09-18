import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button, Paper, Typography } from "@mui/material";

import Images from "../../Assets/Images";

const ifCodeDefault = `if (조건식) {

  }`;
const switchCodeDefault = `switch (조건식) {
		case 값1 : 
		

			break;
		case 값2 : 
		

			break;
		…
		default :

}`;
const forCodeDefault = `for (int i=1;i<=5;i++) {

}`;
const enhancedForCodeDefault = `for (타입 변수명 : 배열 또는 컬렉션) {

}`;
const whileCodeDefault = `while (조건식) {

}`;
const doWhileCodeDefault = `do {

} while (조건식);
`;
const JavaChap04: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>Chap.04. 조건문과 반복문</Typography>
      <Typography variant='h4'>4.1 조건문</Typography>
      <Typography variant='h5'>if문</Typography>
      <CodeBlock language='java' style={oneDark}>
        {ifCodeDefault}
      </CodeBlock>
      <Typography variant='h6'>
        조건식은 반드시 true or false 여야한다.(0, 1, 문자열 불가능?)
        <br />
        if else 문을 사용하면 상반된 조건에 대해 다른 동작을 할때 효율적인 코드
        작성이 가능하다.
      </Typography>
      <Typography variant='h5'>switch문</Typography>
      <CodeBlock language='java' style={oneDark}>
        {switchCodeDefault}
      </CodeBlock>
      <Typography variant='h6'>
        일부러 break문을 생략해 차례차례 실행되고 어느시점에서 이탈하도록만들
        수도 있겠다.
        <br />
        switch문의 제약조건
        <br />
        조건식의 결과값이 반드시 정수 또는 문자열이어야 하며 case문의 값은
        반드시 상수 여야한다.(변수, 실수 x)
        <br /> ㄴ 문자 리터럴은 유니코드로 변환된 정수로 취급, 문자열 리터럴은
        JDK 1.7부터 허용된다. 정수 상수에는 final int 를 사용해 선언한 상수도
        가능하다.
        <br />
        범위를 지정하려면 직접 모든 경우의 수를 case로 관리하거나 조건식의
        결과를 미리 결과에 따라 분류한 정수 몇개에 *mapping? *matching?해 두고
        사용하는것이 좋겠다.
        <br />
        (*단순히 한 요소당 한 요소를 가리키게 만드는 형태의 자료구조를 말하고자
        함)
        <br />
        tip:
        <br />
        case는 case 5: case 6: case 7: 형태로 붙여 쓸 수 있다.
        <br />
        if else 문을 사용하면 상반된 조건에 대해 다른 동작을 할때 효율적인 코드
        작성이 가능하다.
      </Typography>
      <Typography variant='h5'>
        조건문과 자주 사용되는 Math.random() 메소드
      </Typography>
      <Typography variant='h6'>
        기본 범위 : <br />
        0.0 &lsaquo;= Math.random() &lsaquo; 1.0
        <br />
        사용 :<br />
        Math.random() * 범위
      </Typography>
      <Typography variant='h4'>4.2 반복문</Typography>
      <Typography variant='h5'>4.2.1 for문</Typography>
      <CodeBlock language='java' style={oneDark}>
        {forCodeDefault}
      </CodeBlock>
      <Typography variant='h6'>초기화는 한번에 여러 변수 가능</Typography>
      <img src={Images.loopInnerVariable} />
      <Typography variant='h6'>
        짝수 홀수 제곱 역순 순환 반복하는 변수를 만들어낼 수 있다.
      </Typography>
      <img src={Images.loopArrayStructure} />
      <Typography variant='h6'>기본적인 격자형태를 생성하는 반복문</Typography>
      <Typography variant='h5'>향상된 for문</Typography>
      <CodeBlock language='java' style={oneDark}>
        {enhancedForCodeDefault}
      </CodeBlock>
      <Typography variant='h6'>
        간략히 말하자면 배열의 길이만큼 반복하며 내부 변수에는 해당 반복 회차를
        인덱스로 갖는 요소를 할당한다. (1회차에는 1번째 요소)
        <br />
        javascript의 foreach loop 와 닮아있다.
      </Typography>
      <Typography variant='h5'>4.2.2 while문</Typography>
      <CodeBlock language='java' style={oneDark}>
        {whileCodeDefault}
      </CodeBlock>
      <Typography variant='h6'>
        조건식이 true인 경우 반복실행, 조건식을 변수로 두고 특정상황에 맞춰
        false로 바꿈으로써 반복문을 중지하는 활용이 가능하다.
      </Typography>
      <Typography variant='h5'>4.2.3 do - while 문</Typography>
      <CodeBlock language='java' style={oneDark}>
        {doWhileCodeDefault}
      </CodeBlock>
      <Typography variant='h6'>
        그 밖에 break;와 continue;를 통해 반복문을 중지하거나 다음 사이클로
        건너뛸 수 있다.
      </Typography>
      <Typography variant='h5'>이름 붙은 반복문</Typography>
      <Typography variant='h6'>
        Loop1 : for(){} , break Loop1; 을 이용해 복합적인 반복문에서 특정
        반복문을 지정해 이탈 시킬 수 있다.
        <br />
        C의 goto 같은 느낌인듯하다.
        <br /> C에서는 코드의 가독성이 낮아지고 복잡한 형태의 loop를 만들 수
        있어 사용을 지양하는 모양인데
        <br /> java에서 label이 달린 loop는 반복문에서만 사용되어서 잘 사용하면
        유용하고 코드도 간단해지지 않을까 싶다.
      </Typography>
    </Paper>
  );
};

export default JavaChap04;
