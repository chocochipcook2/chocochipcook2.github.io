import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const codeEx1_1 = `public Object clone() {
	Object obj = null;
	try{
		obj = super.clone();
	} catch(CloneNotSupportedException e) {}
	return obj;
}
*/***************/*
	public Point clone(){
		Object obj = null;
	try{
		obj = super.clone();
	} catch(CloneNotSupportedException e) {}
	return (Point)obj;
}
`;
const JavaWeek07: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>
        JavaStudy Week07
        <br />
        Chap.09.java.lang패키지와 유용한 클래스
      </Typography>
      <Typography variant='h4'>1. java.lang 패키지</Typography>
      <Typography>
        java.lang 패키지의 클래스들은 import문 없이도 사용할 수 있게 되어있다.
      </Typography>
      <Typography variant='h5'>1.1 object클래스 </Typography>
      <Typography>
        object클래스는 맴버 변수는 없고 오직 11개의 메서드만 가지고 있다.
      </Typography>

      <ul>
        <li>protected Object clone() : 객체 자신의 복사본을 반환한다.</li>
        <li>
          public boolean equals(Object obj) : 객체 자신과 객체 obj가 같은
          객체인지 알려준다.(같으면 true)
        </li>
        <li>
          protected void finalize() : 객체가 소멸될 때 가비지 컬렉터에 의해
          자동적으로 호출된다. 이 때 수행되어야 하는 코드가 있을 때
          오버라이딩한다.
        </li>
        <li>
          public Class getClass() : 객체 자신의 클래스 정보를 담고 있는
          Class인스턴스를 반환한다.
        </li>
        <li>public int hashCode() : 객체 자신의 해시코드를 반환한다.</li>
        <li>
          public String toString() : 객체 자신의 정보를 문자열로 반환한다.
        </li>
        <li>
          public void notify() : 객체 자신을 사용하려고 기다리는 쓰레드를 하나만
          깨운다.
        </li>
        <li>
          public void notifyAll() : 객체 자신을 사용하려고 기다리는 모든
          쓰레드를 깨운다.
        </li>
        <li>
          public void wait() : 다른 쓰레드가 notify()나 notifyAll()을 호출할
          때까지 현재 쓰레드를
        </li>
        <li>
          public void wait(long timeout) 무한히 또는 지정된 시간(timeout,
          nanos)동안 기다리게 한다.
        </li>
        <li>
          public void wait(long timeout, int nanos) (timout은 천 분의 1초,
          nanos는 10&#8313;분의 1초)
        </li>
      </ul>
      <Typography fontWeight='bold'>- equals(Object obj)</Typography>
      <Typography>
        매개변수로 객체의 참조변수를 받아서 비교하여 그 결과를 boolean값으로
        알려주는 역할을 한다. 주소값 비교이므로 동일한 인스턴스가 아니라면
        false를 반환한다.
      </Typography>
      <Typography>
        String 클래스의 equals메서드는 오버라이딩 되어 각 인스턴스가 갖는 문자열
        값을 비교하도록 되어있다.
      </Typography>
      <Typography fontWeight='bold'>- hashCode()</Typography>
      <Typography>
        그 해시 코드가 맞다. (보안상 안전한 해시화는 아니다)
      </Typography>
      <Typography>객체의 주소값으로 해시코드를 만들어 반환한다.</Typography>
      <Typography>
        2bit JVM 에서는 중복된 해시 코드가 발생되지 않았지만 64bit JVM에서는
        8byte 주소값으로 4byte 헤시코드를 만들기 때문에 해시코드가 중복될 수
        있다.
      </Typography>
      <Typography>
        String클래스의 hashCode()는 문자열이 같으면 동일한 해시코드를 반환하도록
        오버라이딩 되어있다.
      </Typography>
      <Typography fontWeight='bold'>- toString()</Typography>
      <Typography>
        기본 메서드는 “클래스이름@16진수 hashCode()결과값” 을 얻게된다.
        String클래스에서는 문자열을, Date클래스에서는 날짜와 시간을 문자열로
        반환한다.
      </Typography>
      <Typography>
        이처럼 Java에서 기본 제공하는 클래스들도 오버라이딩 된 기본 메서드가
        많은데 직접 오버라이딩 할 때는 앞서 배운 것 처럼 조상 클래스의
        메서드보다 더 넓은 범위의 접근 제어자만 사용할 수 있음에 유의해야 한다.
      </Typography>
      <Typography fontWeight='bold'>- clone()</Typography>
      <Typography>
        자신을 복제하여 새로운 인스턴스를 생성한다.
        <ol>
          <li>
            Cloneable인터페이스를 구현한 클래스에서만 clone()을 호출할 수 있다.
          </li>
          <li>
            clone()은 반드시 예외처리를 해주어야
            한다.(CloneNotSupportedException)
          </li>
          <li>
            clone()을 오버라이딩 해주면서 접근제어자를 public으로 변경해야만
            다른 클래스에서 clone을 호출할 수 있다.
          </li>
        </ol>
      </Typography>
      <Typography>
        참조타입의 인스턴스 변수가 있는 클래스는 완전한 인스턴스 복제가
        이루어지지 않는다. 특히 배열의 경우 복제된 인스턴스가 같은 배열의 주소를
        갖기 때문에 복제된 인스턴스의 작업이 원래 인스턴스에 영향을 미치게 된다.
      </Typography>
      <Typography fontWeight='bold'>- 공변 반환타입</Typography>
      <Typography>
        JDK 1.5 부터 공변반환타입(covariant return type)이라는 것이
        추가되었는데, 이 기능은 오버라이딩 할 때 조상 메서드의 반환타입을 자손
        클래스의 타입으로 변경을 허용하는 것이다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx1_1}
      </CodeBlock>
      <Typography fontWeight='bold'>- 얕은 복사와 깊은 복사</Typography>
      <Typography>
        기본형(primitive) 배열인 경우 복제 시에 문제가 없지만 객체 배열을
        clone()하는 경우 원본과 복제본이 같은 객체를 공유한다. 이러한 복제를
        얕은 복사 라고 한다. 얕은 복사에서는 원본을 변경하면 복사본도 영향을
        받는다.
      </Typography>
      <Typography>
        call by refernce와 call by value의 성질과 비슷하나 객체의 호출이라는
        점에서 객체 안에 있는 참조객체까지 생각해 볼 수 있는 것이 이 clone()
        메서드이다.
      </Typography>
      <Typography>
        객체를 완전히 복제하고 독립적으로 만들기 위해서는 새로 만들어 반환하는
        객체가 원본 내부의 참조 객체까지 참조하게 만들어야한다.
      </Typography>
      <Typography fontWeight='bold'>- getClass()</Typography>
      <Typography>자신이 속한 클래스를 “Class”타입 객체로 반환한다.</Typography>
      <Typography variant='h5'>1.2 String 클래스</Typography>
      <Typography fontWeight='bold'>
        - 변경 불가능한(immutable) 클래스
      </Typography>
      <Typography>
        String을 이용해 값을 저장하면 내부에는 char[] value라는 private변수에
        값을 저장한다. 한번 설명했던 것처럼 String 변수의 값을 변경하거나 +
        연산자를 이용해 결합하는 경우 새로운 인스턴스를 생성하면서 변경된 값을
        저장해 참조한다.
      </Typography>
      <Typography fontWeight='bold'>- 문자열 리터럴</Typography>
      <Typography>String 객체를 사용할 때 </Typography>
      <CodeBlock language='java' style={oneDark}>{`String str1 = “abc”;
	String str2 = “abc”;

	String str3 = new String(“abc”);
	String str4 = new String(“abc”);`}</CodeBlock>
      <Typography>와 같이 사용할 수 있고</Typography>
      <Typography>
        위의 str1과 str2는 문자열 리터럴로 컴파일 시에 클래스 파일에 저장된다.
      </Typography>
      <Typography>
        String클래스가 변경 불가능한 속성 덕분에 str1과 str2는 컴파일 시에 상수
        저장소에 저장된 같은 인스턴스 하나를 동시에 참조한다.
      </Typography>
      <Typography fontWeight='bold'>- String 클래스의 메서드</Typography>
      <img src={Images.StringMethod1} />
      <img src={Images.StringMethod2} />
      <img src={Images.StringMethod3} />
      <img src={Images.StringMethod4} />
      <img src={Images.StringMethod5} />
      <img src={Images.StringMethod6} />
      <Typography fontWeight='bold'>- join()과 StringJoiner</Typography>
      <Typography>
        join()은 여러 문자열 사이에 구분자를 넣어서 결합한다. 구분자로 문자열을
        자르는 split()과 반대의 작업을 한다고 생각하면 이해하기 슆다.
      </Typography>
      <Typography>StringJoiner는</Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`StringJoiner sj = new StringJoiner(“,”,”[“,”]”);
	String[] strArr = {“aaa”,”bbb”,”ccc”);

	for(String s : strArr)
		sj.add(s.toUpperCase());

	System.out.println(sj.toString()); // [AAA,BBB,CCC]
`}</CodeBlock>
      <Typography>와 같이 사용한다.</Typography>
      <Typography>join()과 StringJoiner는 JDK1.8부터 추가되었다.</Typography>
      <Typography fontWeight='bold'>- 유니코드의 보충문자</Typography>
      <Typography>
        String의 메서드 중에 매개변수로 int타입을 받는 것들이 있다. 유니코드는
        원래 16비트 문자체계인데 이걸로 모자라서 20비트로 확장하게 되었고 그래서
        char타입으로 다루지 못하게 되었다. int타입 매개변수를 받는 것들은 확장된
        유니코드를 사용할 수 있는 것들이다.
      </Typography>
      <Typography fontWeight='bold'>- 문자 인코딩 변환</Typography>
      <Typography>
        getBytes(String charsetName)을 사용하면 문자열의 문자 인코딩을 다른
        인코딩으로 변경할 수 있다.{" "}
      </Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`byte[] utf8_str = “가”.getBytes(“UTF-8”); //문자열을 UTF-8로 변환
	String str = new String(utf8_str, “UTF-8”); // byte배열을 문자열로 변환`}</CodeBlock>
      <Typography fontWeight='bold'>- String.format()</Typography>
      <Typography>printf와 사용법이 같다.</Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`String.format(“%d 더하기 %d는 %d입니다. “ ,3, 5, 3+5);     `}</CodeBlock>
      <Typography fontWeight='bold'>- 기본형 값을 String으로 변환 </Typography>
      <Typography>
        숫자에 빈 문자열 “”을 더해주거나 String.valueOf(String str) 을 사용한다.
      </Typography>
      <Typography fontWeight='bold'>- String을 기본형 값으로 변환</Typography>
      <CodeBlock language='java' style={oneDark}>{`Integer.parseInt(“100”);
      Integer.valueOf(“100”);`}</CodeBlock>
      <Typography>두가지 방법이 있고 내부적으로는 동일하다.</Typography>

      <Typography>
        Integer와 같이 Byte, Float, Boolean등의 클래스도 존재하는데 이를
        래퍼클래스(wrapper class)라고 부른다. 각각 parse메서드를 갖고 있고
        구조도 동일하다.
      </Typography>
      <Typography>
        parseInt같은 메서드는 문자열에 공백 또는 문자가 포함되어있는 경우 예외가
        발생할 수 있으므로 주의해야한다. 그래서 양쪽의 공백을 제거해주는
        trim()을 같이 사용하기도 한다.
      </Typography>
      <Typography>
        substring(int start, int end)를 사용하면 문자열의 어떤 인덱스부터 끝
        인덱스 -1 위치까지의 문자열을 잘라 반환한다.
      </Typography>
    </Paper>
  );
};

export default JavaWeek07;
