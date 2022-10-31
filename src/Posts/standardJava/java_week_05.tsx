import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const codeEx1 = `public class StaticOverridingTest {
    public static void main(String[] args) {
        Children1.sayHello();
        System.out.println("P->");
        Parent1.sayHello();
    }
   
}
class Parent1{
    static void sayHello(){
        System.out.println("Hello from Parent");
    }
}
class Children1 extends Parent1{

}`;
const codeEx1_st = `public class StaticOveridingTest {
    public static void main(String[] args) {
        Children1.sayHello();
        System.out.println("P->");
        Parent1.sayHello();
        System.out.println("--instance--");
        Children1 CC= new Children1();
        Parent1 PP = new Parent1();
        CC.instanceHello();
        System.out.println("P->");
        PP.instanceHello();
        System.out.println("--Check--");
        CC.chkOverride();
    }
   
}
class Parent1{
    static void sayHello(){
        System.out.println("Hello from Parent");
    }
    void instanceHello(){
        System.out.println("intance hello from parent");
    }
}
class Children1 extends Parent1{
    static void sayHello(){
        System.out.println("Hello from Children");
    }
    void instanceHello(){
        System.out.println("intance hello from children-overided");
    }
    void chkOverride(){
        this.instanceHello();
        sayHello();
        super.instanceHello();
        super.sayHello();
    }
}`;
const codeEx1_chk = `public class StaticOveridingTest {
    public static void main(String[] args) {
        Children1 CC= new Children1();
        Parent1 PP = new Parent1();

        System.out.println("--Check--");
        CC.chkOverride();
        System.out.println("xx : "+Children1.xx);
        Children1.xx=0;
        System.out.println("xx : "+Children1.xx);
        System.out.println("xx : "+Parent1.xx);
    }
   
}
class Parent1{
    static void sayHello(){
        System.out.println("Hello from Parent");
    }
    void instanceHello(){
        System.out.println("intance hello from parent");
    }
    static int xx=10;
}
class Children1 extends Parent1{
    static void sayHello(){
        System.out.println("Hello from Children");
    }
    void instanceHello(){
        System.out.println("intance hello from children-overided");
    }
    void chkOverride(){
        this.instanceHello();
        sayHello();
        super.instanceHello();
        super.sayHello();
    }
    static int xx=12;
}`;
const codeEx1_chk2 = `class Children1 extends Parent1{
    static void sayHello(){
        System.out.println("Hello from Children");
    }
    void instanceHello(){
        System.out.println("intance hello from children-overided");
    }
    void chkOverride(){
        this.instanceHello();
        sayHello();
        super.instanceHello();
        super.sayHello();
    }
    
}`;

const codeEx5_1 = `Class Tv { 
  boolean power;
  Int channel;
  Void power(){power = !power;}
  Void channelUp(){ ++channel;}
  Void channelDown(){ —channel;}
  }
  
  Class CaptionTv extends Tv{
  String text;
  Void caption(){ 
  //blahblah
  }
  }
  `;
const codeEx5_2 = `Car car = null;
FireEngine fe = new FireEngine();
FireEngine fe2 = null;

car = fe;   //car = (Car)fe; 에서 형변환 생략됨
fe2 = (FireEngine)car;    //형변환 생략불가, 다운캐스팅
`;
const JavaWeek05: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>Chap.07 객체 지향 프로그래밍2_1</Typography>
      <Typography variant='h4'>7-2 오버라이딩</Typography>
      <Typography>
        {" "}
        조상 클래스로부터 상속받은 메서드의 내용을 변경하는 것.
        <br />
        특히 상속한 메서드와 같은 이름의 메서드로 같은 기능을 하고 싶을 때,
        자손클래스는 조상클래스와 맴버변수 등이 다를 수 있어 자손클래스에 맞춰
        메서드를 오버라이딩 해준다.
      </Typography>
      <Typography variant='h5'>2.2 오버라이딩의 조건</Typography>
      <Typography>
        자손클래스에서 오버라이딩하는 메서드는 조상 클래스의 메서드와 ‘이름’과
        ‘매개변수’가 같아야 한다.(선언부가 서로 일치해야한다)
      </Typography>
      <Typography>
        <ol>
          <li>
            접근 제어자는 조상클래스의 메서드보다 좁은 범위로 변경할 수 없다.
            (public &gt; protected &gt; (default) &gt; private)
          </li>
          <li>조상클래스의 메서드보다 많은 수의 예외를 선언할 수 없다.</li>
          <img src={Images.exceptions}></img>
          <li>
            인스턴스 메서드를 static메서드로 또는 그 반대로 변경할 수 없다.
          </li>
        </ol>
      </Typography>
      <img src={Images.overStatic} />
      <Typography>
        - 오버라이딩 불가능? 상속 후 자손에 포함된 조상클래스의 메서드 호출, 각
        클래스별 메서드 호출, 클래스이름.메서드이름()으로 호출시 호출되는 메서드
        확인, 오버라이딩(같은 이름 재선언 후) 다시 확인
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx1}
      </CodeBlock>
      <Typography>
        1. static 메서드 상속만으로 호출
        <br /> ✘  ~/job/java  javac StaticOverridingTest.java
        <br />
         ~/job/java  java StaticOverridingTest <br />
        Hello from Parent
        <br />
        P-&gt;
        <br />
        Hello from Parent
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx1_st}
      </CodeBlock>
      <Typography>
        2. static,instance 메서드 상속 및 조상클래스 직접 호출
        <br />
         ~/job/java  java StaticOverridingTest Hello from Children
        <br />
        P-&gt;
        <br />
        Hello from Parent
        <br />
        --instance--
        <br />
        intance hello from children-overided
        <br />
        P-&gt;
        <br />
        intance hello from parent
        <br />
        --Check--
        <br />
        intance hello from children-overided
        <br />
        Hello from Children
        <br />
        intance hello from parent
        <br />
        Hello from Parent
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx1_chk}
      </CodeBlock>
      <Typography>
        3.static 변수 오버라이드, 변경 테스트
        <br />
        --Check--
        <br />
        intance hello from children-overided
        <br />
        Hello from Children
        <br />
        intance hello from parent
        <br />
        Hello from Parent
        <br />
        xx : 12
        <br />
        xx : 0<br />
        xx : 10
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx1_chk2}
      </CodeBlock>
      <Typography>
        4.static 변수 일반 상속 변경 테스트
        <br />
        --Check--
        <br />
        intance hello from children-overided
        <br />
        Hello from Children
        <br />
        intance hello from parent
        <br />
        Hello from Parent
        <br />
        xx : 10
        <br />
        xx : 0<br />
        xx : 0
      </Typography>
      <Typography variant='h5'>2.3 오버로딩 vs 오버라이딩</Typography>
      <Typography>
        오버로딩 : 이름만 같은 새로운 메서드를 정의하는 것 (new)
        <br />
        오버라이딩 : 상속받은 메서드의 내용을 변경하는 것(change, modify)
      </Typography>
      <Typography variant='h5'>2.4 super</Typography>
      <Typography>
        super는 자손 클래스에서 조상클래스로부터 받은 맴버를 참조하는데 사용되는
        참조변수이다. 사용법은 this와 같으며 같은 이름의 맴버변수나 메서드를
        갖고있을 때 조상으로부터 상속받은 맴버를 super. 뒤에 붙여 호출해 사용할
        수 있다.
      </Typography>
      <Typography variant='h5'>2.5 super()</Typography>
      <Typography>
        this()와 마찬가지로 super()역시 생성자이다. this()는 같은 클래스의 다른
        생성자를 호출하는데 사용되지만, super()는 조상클래스의 생성자를
        호출하는데 사용된다.
      </Typography>
      <Typography>
        Object클래스를 제외한 모든 클래스의 생성자 첫 줄에 생성자 this() 또는
        super()를 호출해야한다. 그렇지 않으면 컴파일러가 자동적으로 super();를
        생성자의 첫 줄에 삽입한다. - 조상클래스에서 상속받은 인스턴스변수들이
        조상클래스의 생성자에 의해 초기화 되어야할 필요가 있기 때문에
      </Typography>
      <Typography variant='h4'>7-3 package와 import</Typography>
      <Typography variant='h5'>3.1 패키지</Typography>
      <Typography>
        패키지란, 클래스의 묶음이다.
        <br />
        지금까지는 단순히 클래스 이름으로만 클래스를 구분했지만, 사실 클래스의
        실제이름은 패키지명을 포함한 것이다. <br />
        예를들면 String 클래스의 실제 이름은java.lang.String이다. 그래서 같은
        이름의 클래스일지라도 서로 다른 패키지에 속하면 패키지명으로 구별이
        가능하다.
      </Typography>
      <Typography>
        클래스가 물리적으로 하나의 클래스파일(.class)인 것과 같이 패키지는
        물리적으로 하나의 디렉토리이다. 그래서 어떤 패키지에 속한 클래스는 해당
        디렉토리에 존재하는 클래스파일(.class)여야 한다.
      </Typography>
      <Typography>클래스의 성질</Typography>
      <ul>
        <li>
          하나의 소스파일에는 첫 번째 문장으로 단 한 번의 패키지 선언만을
          허용한다.
        </li>
        <li>모든 클래스는 반드시 하나의 패키지에 속해야한다.</li>
        <li>패키지는 점(.)을 구분자로 하여 계층구조로 구성할 수 있다.</li>
        <li>
          패키지는 물리적으로 클래스파일(.class)을 포함하는 하나의 디렉토리이다.
        </li>
      </ul>
      <Typography variant='h5'>3.2 패키지의 선언</Typography>
      <Typography>
        패키지를 선언하는 것은 아주 간단하다. 클래스나 인터페이스의
        소스파일(.java)의 맨 위에 다음과 같이 한 줄만 적어주면 된다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        package 패키지명;
      </CodeBlock>
      <Typography>
        패키지 선언문은 반드시 소스파일에서 주석과 공백을 제외한 첫 번째
        문장이어야 하며, 하나의 소스파일에 단 한번만 선언될 수 있다. 해당
        소스파일에 포함된 모든 클래스나 인터페이스는 선언된 패키지에 속하게
        된다.
      </Typography>
      <Typography>
        패키지명은 대소문자를 모두 허용하지만, 클래스명과 쉽게 구분하기 위해서
        소문자로 하는 것을 원칙으로 하고 있다.{" "}
      </Typography>
      <Typography>
        지금까지 소스파일을 작성할 때 패키지를 선언하지 않고도 아무런 문제가
        없었던 이유는 자바에서 기본적으로 제공하는 ‘이름없는 패키지’ 때문이다.
        소스파일에 자신이 속할 패키지를 지정하지 않은 클래스는 자동적으로
        ‘이름없는 패키지’에 속하게 된다.
      </Typography>
      <CodeBlock language='cmd' style={oneDark}>
        {` Javac -d (루트 디렉토리) (자바 소스파일) 
 javac -d . PackageTest.java`}
      </CodeBlock>
      <Typography>
        컴파일 후에는 생성된 디렉토리 안에 클래스파일이 존재하고 이 디렉토리를
        클래스패스에 포함시켜야만 실행 시 JVM이 PackageTest클래스를 찾을 수
        있다.
      </Typography>
      <Typography>
        윈도우즈에서는 ‘제어판-시스템-고급 시스템 설정- 환경변수-
        새로만들기’에서 변수이름에 ‘CLASSPATH’를 입력하고 변수 값에는
        ‘.;c:\jdk1.8\(폴더명)을 입력한다.
      </Typography>
      <Typography>
        ‘;’를 구분자로 하여 여러개의 경로를 클래스패스에 지정할 수 있으며,
        맨앞에 ‘.;’를 추가한 이유는 현재 디렉토리를 클래스패스에 포함시키기
        위해서이다.
      </Typography>
      <Typography>
        클래스패스를 지정해주지 않으면 기본적으로 현재 디렉토리(.)가
        클래스패스로 지정되지만 따로 클래스패스를 지정해주는 경우에는 더 이상
        현재 디렉토리가 자동적으로 클래스패스로 지정되지 않기 때문에 이처럼
        별도로 추가를 해주어야 한다.
      </Typography>
      <Typography>
        Jar 파일을 클래스패스에 추가하기 위해서는 경로와 파일명을 적어주어야
        한다. 예를 들어 C:\jdk1.8\work\util.jar’ 파일을 클래스패스에
        포함시키려면 다음과 같이 한다.
      </Typography>
      <CodeBlock language='cmd' style={oneDark}>
        {`SET CLASSPATH = .;C:` +
          "/jdk1.8/work;C;/jdk1.8/work/util.jar" +
          `
echo %classpath%`}
      </CodeBlock>
      <Typography>
        명령어를 통해 클래스패스가 바르게 설정되었는지 알 수 있다. 후에
        실행시에는{" "}
      </Typography>
      <CodeBlock language='cmd' style={oneDark}>
        java com.codechobo.book.PackageTest
      </CodeBlock>
      <Typography>
        와 같이 클래스의 패키지명을 모두 적어주어야 한다.
        <br /> 또는 실행시에 ‘-cp’옵션을 이용해서 일시적으로 클래스패스를 지정해
        줄 수도 있다.
      </Typography>
      <CodeBlock language='cmd' style={oneDark}>
        java -cp c:\jdk1.8\work com.codechobo.book.PackageTest
      </CodeBlock>
      <Typography variant='h5'>3.4 import문의 선언</Typography>
      <Typography>
        import문은 package문 다음에, 그리고 클래스 선언문 이전에 위치해야한다.
        import문은 package문과 달리 한 소스파일에 여러번 선언할 수 있다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        import 패키지명.클래스명; 또는 import 패키지명.*;
      </CodeBlock>
      <Typography>
        import 문에서 클래스의 이름 대신 *을 사용하는 것이 하위 패키지의
        클래스까지 포함하는 것은 아니다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>{`import java.util.*;
import java.text.*;
=/=
import java.*`}</CodeBlock>
      <Typography>
        import java.lang.*;
        <br />은 묵시적으로 모든 소스파일에 선언되어 있기 때문에 String같은
        클래스들을 패키지명 없이 사용할 수 있었다.
      </Typography>
      <Typography variant='h5'>3.5 static import문</Typography>
      <Typography>
        static import 문을 사용하면 static 맴버를 호출할 때 클래스 이름을 생략할
        수 있다.
      </Typography>
      <Typography variant='h4'>7-4 제어자</Typography>
      <Typography>
        제어자는 클래스, 변수 또는 메서드의 선언부에 함께 사용되어 부가적인
        의미를 부여한다.
        <br />
        하나의 대상에 대해서 여러 제어자를 조합하여 사용하는 것이 가능하다. 단,
        접근제어자는 한번에 하나만 선택해서 사용할 수 있다.
      </Typography>
      <Typography variant='h5'>4.2 static</Typography>
      <Typography>
        {" "}
        6-3장에서 배운 것과 같이 인스턴스 변수는 하나의 클래스로부터
        생성되었더라도 각기 다른 값을 유지하지만, 클래스 변수는 인스턴스에 관계
        없이 같은 값을 갖는다.
      </Typography>
      <Typography variant='h5'>4.3 final</Typography>
      <Typography>
        final은 변수에 사용되면 값을 변경할 수 없는 상수가 되며, 메서드에
        사용되면 오버라이딩을 할 수 없게 되고 클래스에 사용되면 자신을 확장하는
        자손클래스를 정의하지 못하게 된다.
      </Typography>
      <img src={Images.staticImport} />
      <Typography>
        중요한 개념인듯함. 클래스가 모두 공유하는 변수는 static으로, 클래스
        내에서 상수처럼 사용할 변수는 final로 선언 후 생성자로 초기화
      </Typography>
      <Typography variant='h5'>4.4 abstract </Typography>
      <Typography>
        자세한 내용은 뒤의 추상클래스 에서 다룬다.
        <br />
        클래스에 사용되면 클래스 내에 추상 메서드가 선언되어 있음을 의미하고
        메서드에 사용되면 선언부만 작성하고 구현부는 작성하지 않은 추상
        메서드임을 알린다.
      </Typography>
      <Typography variant='h5'>4.5 접근 제어자</Typography>
      <Typography>
        private 같은 클래스 내에서만 접근이 가능하다.
        <br />
        default 같은 패키지 내에서만 접근이 가능하다.
        <br />
        protected 같은 패키지 내에서, 그리고 다른 패키지의 자손클래스에서 접근이
        가능하다.
        <br />
        public 접근제한이 전혀 없다.
        <br />
        <br />
        protected 는 패키지에 관계없이 상속관계에 있는 자손클래스에서 접근할 수
        있도록 하는 것이 제한 목적이지만, 같은 패키지 내에서도 접근이 가능하다.
      </Typography>
      <Typography>접근 제어자를 사용하는 이유</Typography>
      <ul>
        <li>외부로부터 데이터를 보호하기 위해서</li>
        <li>외부에는 불필요한, 내부적으로만 사용되는 부분을 감추기 위해서</li>
      </ul>
      <Typography>
        만일 메서드 하나를 변경해야 한다고 가정했을 때, 이 메서드의 접근
        제어자가 public이라면, 메서드를 변경한 후에 오류가 없는지 테스트해야하는
        범위가 넓다. 이처럼 접근 제어자 하나가 때로는 상당한 차이를 만들어낼 수
        있다.
      </Typography>
      <Typography>
        맴버 변수를 private이나 protected로 제한하고 맴버변수의 값을 읽고 변경할
        수 있는 public 메서드를 제공함으로써 간접적으로 맴버변수의 값을 다룰 수
        있도록 하는 것이 바람직하다.
      </Typography>
      <Typography>
        만일 상속을 통해 확장될 것이 예상되는 클래스라면 맴버에 접근제한을 주되
        자손클래스에서 접근하는 것이 가능하도록 하기 위해 private 대신
        protected를 사용한다.
      </Typography>
      <Typography>
        보통 맴버변수의 값을 읽는 메서드의 이름을 ‘get 맴버변수 이름’으로 하고
        맴버변수의 값을 변경하는 메서드의 이름을 ‘set맴버변수 이름’으로 한다.
        Get으로 시작하는 메서드를 겟터, set으로 시작하는 메서드를 셋터라고
        부른다.
      </Typography>
      <Typography>
        생성자에 접근 제어자를 사용함으로써 인스턴스의 생성을 제한할 수 있다.
        생성자의 접근제어자를 private으로 지정하면, 외부에서 생성자에 접근할 수
        없으므로 인스턴스를 생성할 수 없게 된다. 대신 인스턴스를 생성해서
        반환해주는 public메서드를 제공함으로써 외부에서 이 클래스의 인스턴스를
        사용하도록 할 수 있다.
      </Typography>
      <Typography variant='h5'>4.6제어자의 조합</Typography>
      <Typography>제어자를 조합할 때 주의해야 할 사항</Typography>
      <ol>
        <li>
          메서드에 static과 abstract를 함께 사용할 수 없다.
          <br />
          static메서드는 몸통이 있는 메서드에만 사용할 수 있기 때문이다.
        </li>
        <li>
          클래스에 abstract와 final을 동시에 사용할 수 없다. <br />
          클래스에 사용되는 final은 클래스를 확장할 수 없다는 의미이고
          abstract는 상속을 통해서 완성되어야한다는 의미이므로 서로 모순되기
          때문이다.
        </li>
        <li>
          abstract메서드의 접근제어자가 private일 수 없다.
          <br />
          abstract메서드는 자손클래스에서 구현해주어야 하는데 접근제어자가
          private이면 자손클래스에서 접근할 수 없기 때문이다.
        </li>
        <li>
          {" "}
          메서드에 private과 final을 같이 사용할 필요는 없다.
          <br />
          접근 제어자가 private인 메서드는 오버라이딩 될 수 없기 때문이다. 이 둘
          중 하나만 사용해도 의미가 충분하다.
        </li>
      </ol>
      <Typography variant='h4'>7-5 다형성(polymorphism)</Typography>
      <Typography>
        다형성이란 자바에서 한 타입의 참조변수로 여러타입의 객체를 참조할 수
        있도록 함으로써 조상클래스 타입의 참조변수로 자손클래스의 인스턴스를
        참조할 수 있도록 하였다는 것이다.
      </Typography>
      <Typography> 쉬운 이해를 위해 책의 내용을 그대로 옮겨보자면</Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx5_1}
      </CodeBlock>
      <Typography>
        위와 같은 상태에서 지금까지는
        <br />
        Tv t = new Tv();
        <br />
        CaptionTv c = new CaptionTv();
        <br />
        처럼 인스턴스 타임과 일치하는 타입의 참조변수를 사용했다.
        <br />
        하지만 상속관계에 있는 클래스끼리는 조상클래스 타입의 참조변수로
        자손클래스의 인스턴스를 참조하도록 하는 것도 가능하다.
        <br />
        Tv t = new CaptionTv();
      </Typography>
      <Typography>
        그렇다면 인스턴스를 같은 타입의 참조변수로 참조하는 것과 조상타입의
        참조변수로 참조하는 것은 어떤 차이가 있을까?
      </Typography>
      <CodeBlock language='java' style={oneDark}>{`Tv t = new Tv();
CaptionTv c = new CaptionTv();`}</CodeBlock>
      <Typography>
        Tv타입의 참조변수 t 로는 CaptionTv인스턴스 중에서 Tv클래스의 맴버들(
        Tv가 상속받은 맴버 포함)만 사용할 수 있다. 따라서 CaptionTv인스턴스
        중에서 Tv클래스에 정의되지 않은 맴버, text와 caption()은 참조변수 t 로
        사용이 불가능하다. 서로 같은 타입의 인스턴스지만 참조변수의 타입에 따라
        사용할 수 있는 맴버의 개수가 달라진다.
      </Typography>
      <Typography>
        하지만 반대로 CaptionTv c = new Tv(); <br />
        와 같이 자식 타입의 참조변수로 부모타입의 인스턴스를 참조하는 것은
        불가능하다.
        <br />
        참조변수의 타입이 참조변수가 참조하고 있는 인스턴스에서 사용할 수 있는
        맴버를 걸정하기 때문에 더 범위가 넓은(맴버가 많은) CaptionTv타입의 변수
        c로는 부모타입인 Tv의 인스턴스를 사용할 수 없다.
      </Typography>
      <Typography variant='h5'>5.2 참조변수의 형변환</Typography>
      <Typography>
        기본형 변수의 형변환에서 작은 자료형에서 큰 자료형의 변환은 생략이
        가능하듯이, 참조형 변수의 형변환에서는 자손타입의 참조변수를
        조상타입으로 형변환하는 경우에는 형변환을 생략할 수 있다.
      </Typography>
      <Typography>
        조상타입의 참조변수를 자손타입의 참조변수로 변환하는 것을 다운캐스팅
        이라고 하며, 자손타입의 참조변수를 조상타입의 참조변수로 변환하는 것을
        업캐스팀이라고 한다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx5_2}
      </CodeBlock>
      <Typography>
        이 규칙 또한 위에서 설명한 ‘참조변수의 변수 타입이 참조할 인스턴스에서
        사용할 수 있는 맴버를 결정한다’ 라는 말로 이해하기 쉽다.
        <br /> 변수타입이 부모타입에서 자식타입으로 형 변환하려는 경우 다룰 수
        있는 맴버의 수가 늘어나야하기 때문에 문제가 발생할 수 있지만
        자손타입에서 부모타입으로 형변환 하는 경우에는 다룰 수 있는 맴버의 수가
        줄어드는 방향으로만 형변환이 이뤄지기 때문에 생략 가능하다.
      </Typography>
      <Typography>
        그렇다면 위의 다형성의 예제중에 불가능했던
        <br />
        CaptionTv c = new Tv(); 를<br />
        CaptionTv c = (CaptionTv)new Tv(); <br />
        와 같이 바꾼다면 문제가 없는 것일까?
        <br />
        답은 불가능하다.
        <br />
        컴파일 시에는 참조변수간의 타입만 체크하기 때문에 실행 시 생성될
        인스턴스의 타입에 대해서는 알지 못한다. 그래서 컴파일 시에는 문제가
        없지만 실행 시에 에러가 발생한다. <br />
        결론적으로 부모타입의 인스턴스를 자손타입의 변수로 참조할 수 없다.
      </Typography>
      <Typography variant='h5'>5.3 instanceof 연산자</Typography>
      <Typography>
        위처럼 참조변수와 다른 타입의 인스턴스를 참조할 수 있기 때문에
        참조변수가 참조하고 있는 인스턴스의 실제 타입을 알아볼 필요가 있다.
      </Typography>
      <Typography>
        Car c = new FireEngine();
        <br />
        c instanceof FireEngine == true
        <br />
        동시에 <br />
        c instanceof Car == true
        <br />c instanceof Object == true
      </Typography>
      <Typography>
        FireEngine 인스턴스는 Car 인스턴스와 Object 인스턴스를 상속받아 포함하고
        있는 셈이기 때문에 위의 두 문장도 결과값이 true가 된다.
      </Typography>
      <Typography>
        + 참조변수.getClass().getName()은 참조변수가 가리키고 있는 인스턴스의
        클래스이름을 문자열로 반환한다.
      </Typography>
      <Typography variant='h5'>
        5.4 참조변수와 인스턴스의 연결 (오버라이딩)
      </Typography>
      <Typography>
        메서드의 경우 참조변수의 타입과 관계 없이 항상 실제 인스턴스의 메서드가
        호출되지만 맴버변수의 경우 참조변수의 타입에 따라 달라진다.
      </Typography>
      <Typography>
        static메서드는 static변수처럼 참조변수의 타입에 영향을 받는다.
        참조변수의 타입에 영향을 받지않는 것은 인스턴스 메서드 뿐이다. 그래서
        static메서드는 반드시 참조변수가 아닌 ‘클래스이름.메서드()’로
        호출해야한다.
      </Typography>
      <Typography>
        궁금증 ? 인스턴스 변수의 경우와 클래스 변수의 경우 상속 받았을 때
        ,오버라이딩 된 경우와 정의하지 않은 경우 직접 수를 변경하면 부모클래스의
        클래스 변수나 인스턴스 변수에 영향을 미칠까? - 추가 예정
      </Typography>
      <Typography variant='h5'>5.5 매개변수의 다형성</Typography>
      <Typography>
        여러 타입의 매개변수를 받아 한가지 기능을 사용하고 싶을 때 메서드
        오버로딩을 이용해 각 매개변수를 받아서 처리하는 같은 이름의 메서드
        여려개를 정의할 수 있다.
        <br /> 하지만 매개변수의 다형성을 이용하면 처리하고자하는 매개변수들의
        상위 클래스를 매개변수로 선언함으로써 해당 상위클래스를 상속받은 모든
        종류의 클래스타입을 매개변수로 사용할 수 있다. <br />
        대표적으로 print 메서드는 print(Object o)로 선언되어 모든 타입의
        인스턴스를 매개변수로 처리할 수 있다.
      </Typography>
      <Typography variant='h5'>5.6 여러종류의 객체를 배열로 다루기</Typography>
      <Typography>
        마찬가지로 여러 종류의 객체를 공통 조상 클래스타입의 배열을 생성해
        저장하면 한개의 배열로 서로 다른 타입의 여러 객체를 다룰 수 있다.
      </Typography>
      <Typography>
        이 때 배열의 크기를 미리 지정해놓는 것이 문제가 될 수 있다면
        Vector클래스를 이용할 수 있다.Vector클래스는 동적으로 크기가 관리되는
        객체 배열이다.
      </Typography>
      <Typography variant='h5'>
        7장은 전체적으로 생소한 개념이 많고 제대로 알고 있으면 좋을 개념들이
        많아 분량이 많은 편이다. 다음 주의 나머지 7장 부분도 양이 상당할 것으로
        예상된다.
      </Typography>
    </Paper>
  );
};

export default JavaWeek05;
