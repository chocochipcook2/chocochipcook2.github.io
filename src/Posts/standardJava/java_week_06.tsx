import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const codeEx6_2_1 = `abstract class Player {// 추상클래스
	abstract void play(int pos); //추상 메서드
	abstract void stop();  //추상 메서드
}
Class AudioPlayer extends Player{
Void play (int pos) { /* 내용 */}
	void stop () { /* 내용 */}
}`;
const codeEx6_3_1 = `abstract class Unit {
    int x, y;
    abstract void move ( int x, int y);
    void stop(){/*현재 위치에 정지}
}
class Marine extends Unit {
void move (int x, int y){ /*지정된 위치로 이동*/}
void stimPack() {}
}
class Tank extends Unit {
void move (int x, int y) {}
void changeMode() {}
}
class Dropship extends Unit {
void move (int x, int y) {}
void load() {}
void unload() {}
}

Unit[] group = new Unit [4];
group[0] = new Marine();
group[1] = new Tank();
group[2] = new Marine();
group[3] = new Dropship();

for (int I=0; I< group.length;i++)
group[I].move(100,200);

`;
const codeEx6_3_2 = `Object[] group = new Object [4];
group[0] = new Marine();
group[1] = new Tank();
group[2] = new Marine();
group[3] = new Dropship();

for (int I=0; I< group.length;i++)
group[I].move(100,200); //Object클래스에는 move메서드가 없으므로 불가능

`;
const codeEx7_6_1 = `Fightable f = (Fightable) new Fighter();
Fightable f = new Fighter();

void attack(Fightable f) {} // 메서드의 매개변수로도 사용될 수 있다.

Fightable method () { // 메서드의 리턴타입으로 사용될 수 있다.
    return new Fighter();
}

`;
const codeEx7_7_1 = `interface Repairable {}
void repair(Repairable r){
    if (r instanceof Unit) {
        Unit u= (Unit) r;
        While ( u.hitPoint != u.MAX_HP) {
            u.hitPoint++;
        }
    }
}

`;
const codeEx7_8_1 = ` class A {
    public void methodA(B b) {
        b.methodB();
    }
}
class B {
    public void methodB() {
        System.out.println(“methodB()”);
    }
}
class InterfaceTest {
    public static void main (String args[]) {
        A a = new A();
        a.methodA(new B());
    }
}
`;
const codeEx7_8_2 = `interface I {
    public abstract void methodB();
}
class B implements I {
    public void methodB() {
        System.out.println(“methodB()”);
}
}
class A {
    public void methodA(I i) {
        i.methodB();
    }
}

`;
const codeEx7_8_3 = `class InterfaceTest3 {
    public static void main(String[] args) {
        A a = new A();
        a.methodA();
    }
}
class A {
    public void methodA() {
        I I = InstanceManager.getInstance();
        i.methodB();
    }
}
interface I {
    public abstract void methodB();
}
class B implements I {
    public void methodB() {
			System.out.println(“methodB()”);
    }
    public String toString() { return “class B”}
}
class InstanceManager {
    public static I getInstance() {
        return new B();
    }
}

`;
const codeEx8_2_1 = `class Outer { // 예시
    int instanceV = 0;
    static int classV = 0;
    void myMethod(){
        int InnerV = 0;
    }
}
class Outer { //예시
    class IntanceInner {} //인스턴스 클래스
    static class StaticInner {} //스태틱 클래스
    void myMethod() {
        class LocalInner {} // 지역 클래스
    }
}

`;
const codeEx8_2_2 = `
class Outer {
    int value = 10;
    class Inner {
        Int value = 20;
        void method1(0{
            int value = 30;
            //value == 30;
            //this.value == 20;
            //Outer.this.value ==10;
        }
    }
}
`;
const codeEx8_5_1 = `class InnerEx7{
    public static void main (String[] args) {
        Button b = new Button(“Start”);
        b.addActionListener(new EventHandler());
    }
}
class EventHandler implements ActionListener {
    public void actionPerformed(ActionEvent e) {
        System.out.println (“ActionEvent occurred!!”);
    }
}
`;
const codeEx8_5_2 = `class InnerEx7{
    public static void main (String[] args) {
        Button b = new Button(“Start”);
        b.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
            System.out.println (“ActionEvent occurred!!”);
            }
        }
        );
    }
}`;
const codeEx1_1_3 = `try{
    //예외가 발생할 가능성이 있는 문장
} catch (Exception1 e1) {
    //
} catch (Exception2 e2) {
    //
} catch (ExceptionN eN) {
    //
} `;

const JavaWeek06: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>
        JavaStudy Week06 <br />
        Chap.7-6 추상 클래스 ~ 8 예외처리
      </Typography>
      <Typography variant='h4'>7-6 추상 클래스</Typography>
      <Typography>
        클래스를 설계도에 비유한다면 추상클래스는 미완성 설계도에 비유할 수
        있다. 미완성 설게도란, 단어의 뜻 그대로 완성되지 못한 채로 남겨진
        설계도를 말한다.
        <br />
        클래스가 미완성이라는 것은 맴버의 개수에 관계된 것이 아니라, 단지
        미완성메서드(추상 메서드) 를 포함하고 있다는 의미이다. 클래스의 선언부
        앞에 키워드 abstract를 붙여 선언한다.
      </Typography>
      <Typography>
        미완성 설계도로 완성된 제품을 만들 수 없듯이 추상클래스로 인스턴스는
        생성할 수 없다. 추상클래스는 상속을 통해서 자손클래스에 의해서만 완성될
        수 있다.
      </Typography>
      <Typography variant='h5'>6.2 추상 메서드</Typography>
      <Typography>
        선언부만 작성하고 구현부는 작성하지 않은채로 남겨둔 것이 추상메서드이다.
        조상 클래스에서는 선언부만을 작성하고, 주석을 덧붙여 어떤 기능을 수행할
        목적으로 작성되었는지 알려주고, 실제 내용은 상속받는 클래스에서
        구현하도록 비워두는 것이다.
      </Typography>
      <Typography>
        추상 메서드 역시 abstract를 앞에 붙여주고, 추상메서드는 구현부가
        없으므로 괄호 &#123;&#125; 대신 문장의 끝을 알리는 ;을 적어준다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        abstract 리턴타입 메서드이름();
      </CodeBlock>
      <Typography>
        추상 클래스로부터 상속받는 자손클래스는 오버라이딩을 통해 조상인
        추상클래스의 추상메서드를 모두 구현해주어야한다. 만일 조상으로부터
        상속받은 추상메서드 중 하나라도 구현하지 않는다면 자손 클래스 역시
        추상클래스로 지정해주어야한다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx6_2_1}
      </CodeBlock>
      <Typography variant='h5'>6.3 추상클래스의 작성</Typography>
      <Typography>
        사실 Player의 play(int pos) 와 stop()을 추상메서드로 하는 대신, 아무
        내용도 없는 메서드로 작성할 수도 있다. 아무런 내용도 없이 단지 괄호
        &#123;&#125;만 있어도, 추상메서드가 아닌 일반 메서드로 간주되기
        때문이다.
      </Typography>
      <Typography>
        어차피 자손클래스에서 오버라이딩하여 자신의 클래스에 맞게 구현할테니
        추상 메서드로 선언하는 것과 내용없는 빈 몸통을 만들어 놓는 것이 별
        차이가 없어 보인다. 그래도 굳이 추상메서드로 선언하는 이유는
        자손클래스에서 추상메서드를 반드시 구현하도록 강요하기 위해서이다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx6_3_1}
      </CodeBlock>
      <Typography>
        Unit 클래스의 추상메서드인 move를 호출하는 것 같이 보이지만 실제로는
        Marine, Tank, Dropship인스턴스의 메서드가 호출되는 것이다.
      </Typography>
      <Typography>
        모든 클래스의 조상인 Object클래스 타입의 배열로 여러 종류의 인스턴스를
        묶으면 어떻게 될까? Object클래스에는 move 메서드가 정의되어있지 않기
        때문에 move 메서드를 호출하는 부분에서 에러가 발생한다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx6_3_2}
      </CodeBlock>
      <Typography variant='h4'>7-7 인터페이스</Typography>
      <Typography>
        인터페이스는 일종의 추상클래스이다. 오직 추상메서드와 상수만을 맴버로
        가질 수 있으며 다른 어떠한 요소도 허용하지 않는다.
      </Typography>
      <Typography variant='h5'>7.2 인터페이스의 작성</Typography>
      <CodeBlock language='java' style={oneDark}>
        {`interface 인터페이스 이름 {
			public static final 타입 상수이름 = 값;
			public abstract 메서드이름( 매개변수목록);
}`}
      </CodeBlock>
      <Typography>
        모든 맴버변수는 public static final 이어야하며 모든 메서드는 public
        abstract여야 한다. 다만 모든 맴버에 적용되는 사항이기 때문에 제어자를
        생략하면 컴파일러가 알아서 추가해준다.
      </Typography>
      <Typography variant='h5'>7.3 인터페이스의 상속</Typography>
      <Typography>
        인터페이스는 인터페이스로부터만 상속받을 수 있으며, 클래스와는 달리
        다중상속, 즉 여러개의 인터페이스로부터 상속을 받는 것이 가능하다.
      </Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`interface Fightable extends Movable, Attackable {
        /*Movable과 Attackable의 모든 맴버*/
        }`}</CodeBlock>
      <Typography variant='h5'>7.4 인터페이스의 구현</Typography>
      <Typography>
        추상클래스와 비슷하게 몸통을 만들어주는 클래스에서 구현해주어야하는데
        implements라는 키워드를 사용한다.
      </Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`class Fighter implements Fightable {
			public void move (int x, int y) {}
			public void attack (Unit u) {}
}`}</CodeBlock>
      <Typography>
        상속과 구현을 동시에 할 수 있다. ( 인터페이스의 이름에는 주로 able을
        붙여 사용하는데 어떤 기능을 하는데 필요한 메서드를 제공한다는 의미를
        강조하기 위함이다.) <br />
        여기서 주의해야할 점은 인터페이스에서 모든 맴버가 public 제어자를
        사용하기 때문에 그걸 상속받은 클래스에서도 위와 같이 public 제어자를
        사용해 구현해야한다는 점이다. - 오버라이딩 할 때는 조상의 메서드보다
        넓은 범위의 접근제어자를 지정해야한다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        class Fighter extends Unit implements Fightable
      </CodeBlock>
      <Typography>
        여기서 class Fighter는 instanceof 메서드를 사용했을 때 Unit, Object,
        Fightable, Movable, Attackable의 인스턴스이다.
      </Typography>
      <Typography variant='h5'>7.5 인터페이스를 이용한 다중 상속</Typography>
      <Typography>
        자바가 C++에서와 달리 다중상속을 허용하지 않아서 자바도 인터페이스를
        이용하면 다중상속이 가능하다 라고 하는 것일 뿐 자바에서 인터페이스로
        다중상속을 구현하는 경우는 거의 없다.
      </Typography>
      <Typography variant='h5'>7.6 인터페이스를 이용한 다형성</Typography>
      <Typography>
        인터페이스 타입의 참조변수로 해당 인터페이스를 구현한 클래스의
        인스턴스를 참조할 수 있으며, 인터페이스 타입으로의 형변환도 가능하다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx7_6_1}
      </CodeBlock>
      <Typography>
        리턴타입이 인터페이스라는 것은 메서드가 해당 인터페이스를 구현한
        클래스의 인터페이스를 반환한다는 것을 의미한다.
      </Typography>
      <Typography variant='h5'>7.7 인터페이스의 장점</Typography>
      <ol>
        <li>개발시간을 단축시킬 수 있다.</li>
        <Typography>
          일단 인터페이스가 작성되면, 이를 사용해서 프로그램을 작성하는 것이
          가능하다. 메서드를 호출하는 쪽에서는 메서드의 내용에 관계없이 선언부만
          알면 되기 때문이다.
        </Typography>
        <li>표준화가 가능하다.</li>
        <Typography>
          프로젝트에 사용되는 기본 틀을 인터페이스로 작성한 다음, 개발자들에게
          인터페이스를 구현하여 프로그램을 작성하도록 함으로써 보다 일관되고
          정형화된 프로그램의 개발이 가능하다.
        </Typography>
        <li>서로 관계없는 클래스들에게 관계를 맺어 줄 수 있다.</li>
        <Typography>
          서로 상속관계에 있지도 않고, 같은 조상클래스를 가지고 있지 않은 서로
          아무런관계도 없는 클래스들에게 하나의 인터페이스를 공통적으로
          구현하도록 함으로써 관계를 맺어줄 수 있다.
        </Typography>
        <li>독립적인 프로그래밍이 가능하다.</li>
        <Typography>
          인터페이스를 이용하면 클래스의 선언과 구현을 분리시킬 수 있기 때문에
          실제 구현에 독립적인 프로그램을 작성하는 것이 가능하다. 클래스와
          클래스 간의 직접적인 관계를 인터페이스를 이용하여 간접적인 관계로
          변경하면, 한 클래스의 변경이 관련된 다른 클래스에 영향을 미치지 않는
          독립적인 프로그래밍이 가능하다.
        </Typography>
      </ol>
      <Typography>
        공통 조상 클래스와 달리 내용물 없이도 구현할 수 있는 인터페이스를 이용해
        인스턴스의 타입 관리에 응용할 수 있다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx7_7_1}
      </CodeBlock>
      <Typography>
        repair의 매개변수 r 은 Repairable 타입이기 때문에 이 타입의 참조변수로는
        할 수 있는 일이 없다. 그래서 instanceof 연산자로 타입을 체크한뒤
        형변환하여 Unit 클래스에 정의된 hitPoint와 MAX_HP를 사용할 수 있도록
        하였다.
      </Typography>
      <Typography>
        공통된 맴버가 필요하지 않은 서로 다른 여러 클래스들을 한가지 특성을
        부여해서 사용하고 싶을 때 유용하다.
      </Typography>
      <Typography variant='h5'>7.8 인터페이스의 이해</Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx7_8_1}
      </CodeBlock>
      <Typography>
        클래스 A와 B가 있다. 클래스 A는 클래스 B 의 인스턴스를 생성하고 메서드를
        호출한다. 이 경우 클래스 A를 작성하러면 클래스 B가 이미 작성되어 있어야
        한다. 그리고 클래스 B의 methodB()의 선언부가 변경되면, 이를 사용하는
        클래스 A도 변경되어야 한다. 이와같이 직접적인 관계의 두 클래스는 한 쪽이
        변경되면 다른 한 쪽도 변경되어야 한다는 단점이 있다.
      </Typography>
      <Typography>
        그러나 클래스 A가 클래스 B를 직업 호출하지 않고 인터페이스를 매개체로
        해서 클래스 A가 클래스 B의 메서드에 접근하도록 하면, 클래스 B에
        변경사항이 생기거나 클래스 B와 같은 기능의 다른 클래스로 대체되어도
        클래스 A는 전혀 영향을 받지 않도록 하는 것이 가능하다.
      </Typography>
      <Typography>
        두 클래스 간의 관계를 간접적으로 변경하기 위해서는 먼저 인터페이스를
        이용해서 클래스 B의 선언과 구현을 분리해야한다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx7_8_2}
      </CodeBlock>
      <Typography>
        이런 방식으로 인터페이스를 이용한 간접 접근을 구현할 수 있다.
      </Typography>
      <Typography>
        또 다른 방식으로 매개변수가 아닌 제 3의 클래스를 통해 제공받을 수도
        있다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx7_8_3}
      </CodeBlock>
      <Typography>
        이렇게하면 나중에 다른 클래스의 인스턴스로 변경되어도 A클래스의 변경
        없이 getInstance() 의 내용만 변경하면 된다는 장점이 생긴다.
      </Typography>
      <Typography variant='h5'>7.9 디폴트 메서드와 static 메서드</Typography>
      <Typography>
        원래는 인터페이스에 추상메서드만 선언할 수 있었는데 JDK 1.8 부터 디폴트
        메서드와 static메서드도 추가할 수 있게 되었다.
      </Typography>
      <Typography fontWeight='bold'>디폴트 메서드</Typography>
      <Typography>
        조상 클래스에 새로운 메서드를 추가하는 것은 별 일이 아니지만,
        인터페이스의 경우에는 이 인터페이스를 구현한 기존의 모든 클래스들이 새로
        추가된 메서드를 구현해야하기 때문에 보통 큰 일이 아니다.
      </Typography>
      <Typography>
        인터페이스의 변경에 대비해 디폴트 메서드라는 것이 고안되었다. 디폴트
        메서드는 추상 메서드의 기본적인 구현을 제공하는 메서드로 추상메서드가
        아니기 때문에 클래스를 변경하지 않아도 된다.
      </Typography>
      <Typography>
        디폴트 메서드는 앞에 default를 붙이며, 추상 메서드와 달리 일반
        메서드처럼 몸통 &#123;&#125; 이 있어야한다.
      </Typography>
      <Typography>
        기존에 void newMethod(); 와 같이 추상메서드로 선언한 것을 default void
        newMethod() &#123;&#125; 로 바꾸면 마치 조상 클래스에 새로운 메서드를
        추가한 것과 같아진다.
      </Typography>
      <Typography>
        대신 이름이 중복되는 메서드간의 충돌이 생길 수 있다.
      </Typography>
      <ol>
        <li>여러 인터페이스의 디폴트 메서드 간의 충돌</li>
        <Typography>
          인터페이스를 구현한 클래스에서 디폴트 메서드를 오버라이딩해야 한다.
        </Typography>
        <li>디폴트 메서드와 조상클래스의 메서드간 충돌</li>
        <Typography>
          조상클래스의 메서드가 상속되고 디폴트 메서드는 무시된다.
        </Typography>
      </ol>
      <Typography variant='h4'>7-8 내부 클래스 </Typography>
      <Typography>
        내부 클래스는 클래스 내에 선언된 클래스이다.
        <br />
        내부 클래스의 장점
      </Typography>
      <ul>
        <li>내부 클래스에서 외부 클래스의 맴버들을 쉽게 접근할 수 있다.</li>
        <li>코드의 복잡성을 줄일 수 있다. (캡슐화)</li>
      </ul>
      <Typography variant='h5'>8.2 내부 클래스의 종류와 특징</Typography>
      <Typography>
        변수가 선언 위치에 따라 여러 종류로 구분되어지듯이 내부 클래스도
        인스턴스 클래스, 스태틱 클래스, 지역 클래스, 익명 클래스로 나눌 수 있다.
      </Typography>
      <Typography>
        앞의 세개는 변수의 인스턴스 변수, 클래스 변수, 지역 변수와 성질이
        동일하며 익명 클래스는 선언과 객체의 생성을 동시에 하는 이름 없는
        클래스이다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx8_2_1}
      </CodeBlock>
      <Typography>
        내부 클래스 중에서 스태틱 클래스만 스태틱 맴버를 가질 수 있다. 다만
        final과 static이 동시에 붙은 변수는 상수 이므로 모든 내부 클래스에서
        정의가 가능하다.
      </Typography>
      <Typography>
        인스턴스 맴버는 같은 클래스에 있는 인스턴스 맴버와 static 맴버 모두 직접
        호출이 가능하지만, static 맴버는 인스턴스 맴버를 직접 호출할 수 없는
        것처럼, 인스턴스 클래스는 외부 클래스의 인스턴스 맴버와 스태틱 클래스의
        맴버를 객체 생성 없이 바로 사용할 수 있고, 스태틱 클래스에서는 외부
        클래스의 인스턴스 맴버와 인스턴스 클래스의 맴버들을 객체 생성 없이
        사용할 수 없다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx8_2_2}
      </CodeBlock>
      <Typography>
        내부클래스와 외부 클래스에 선언된 변수의 이름이 같을 때 변수앞에 this를
        붙여 내부클래스의 변수, 외부클래스명.this를 붙여 외부클래스의 변수를
        사용할 수 있다.
      </Typography>

      <Typography variant='h5'>8.5 익명 클래스</Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`new 조상클래스이름 또는 구현인터페이스이름(){
			//내용
}		`}</CodeBlock>
      <Typography>
        인스턴스화 할 때 동시에 맴버 선언을 하고싶을 때 사용한다.
      </Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`Object iv = new Object() { void method(){}};`}</CodeBlock>
      <CodeBlock language='java' style={oneDark}>
        {codeEx8_5_1}
      </CodeBlock>
      <CodeBlock language='java' style={oneDark}>
        {codeEx8_5_2}
      </CodeBlock>
      <Typography>
        위의 코드를 익명클래스를 이용해 변경하면 아래와 같이 되는데 여러번
        사용하지 않을 클래스에 대해서는 유리해보이나 코드 가독성이 떨어질 우려가
        있어 보인다.
      </Typography>
      <Typography variant='h3'>Chap.08 예외 처리</Typography>
      <Typography variant='h5'>1.1 프로그램 오류</Typography>
      <Typography>
        프로그램의 오류는 발생 시점에 따라 컴파일 에러, 런타임 에러, 논리적
        에러로 분류할 수 있는데 컴파일 시 발생하는 오류를 컴파일 에러, 실행하는
        도중에 발생하는 오류를 런타임 에러, 실행중에 의도한 것과 다르게 동작하는
        것을 논리적 에러 라고 부른다.
      </Typography>
      <Typography>
        자바에서는 실행 시 발생할 수 있는 프로그램 오류를 에러와 예외(exception)
        두 가지로 구분하였다.
        <br />
        에러는 메모리 부족이나 스택오버플로우와 같이 일단 발생하면 복구할 수
        없는 심각한 오류이고, 예외는 발생하더라도 수습될 수 있는 비교적 덜
        심각한 것이다.
      </Typography>
      <Typography variant='h5'>1.2 예외클래스의 계층 구조</Typography>
      <Typography>
        최상위 클래스 Object 밑에 Throwable 클래스, 그 밑에 Error 클래스와
        Exception클래스가 있다. Exception 클래스 밑에 여러 종류의 예외 클래스가
        있고 그 중 RuntimeException클래스는 프로그래머의 실수에 의해 발생하는
        예외이고 나머지는 프로그램 외적인 요소에 의해 발생하는 예외인 경우가
        많다.
      </Typography>
      <Typography variant='h5'>1.3 try-catch 문</Typography>
      <Typography>
        코딩을 하면서 예외처리라는 말은 많이 들어보았을 것이다. 예외처리를 하기
        위해 보통 try-catch문을 사용하며 구조는 아래와 같다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {codeEx1_1_3}
      </CodeBlock>
      <Typography>
        Try 문 안에 있는 문장을 실행하면서 catch의 매개변수로 지정된 예외가
        발생했을 때 실행될 문장을 각 catch문 안에 설정한다.
      </Typography>
      <Typography>
        예외처리를 통해 특히 반복문 등에서 예외가 발생하더라도 프로그램이
        중단되지 않고 프로그래머가 설정한 출력을 유도한 후 그대로 진행되도록 할
        수 있다.
      </Typography>
      <Typography variant='h5'>1.4 try-catch문에서의 흐름</Typography>
      <Typography>
        try문 안에서 에외가 발생하면 해당 라인까지 실행을 중지하고 즉시
        catch문에서 해당 예외를 찾는다. 예외를 처리하는 catch문이 있으면 그것을
        실행하고 없으면 프로그램이 중단되면서 예외가 처리되지 않는다.
      </Typography>
      <Typography>
        모든 예외 클래스는 Exception클래스의 자손이므로, catch블럭에 ()괄호 에
        Exception 클래스 타입의 참조변수를 선언해 놓으면 어떤 종류의 예외가
        발생하더라도 이 블럭에 의해 처리된다. catch문은 차례대로 검사하므로
        마지막에 Exception 클래스를 처리하는 catch문을 놓으면 어떤 종류의 예외가
        발생하더라도 처리하도록 할 수 있다.
      </Typography>
      <Typography>
        예외가 발생했을 때 생성되는 예외클래스의 인스턴스에는 발생한 예외의
        정보가 담겨져 있고 내부 메서드인 getMessage() 를 통해 예외 발생 당시에
        호출스택에 있었던 메서드의 정보와 예외메세지를 화면에 출력할 수 있고,
        printStactTrace()를 통해 예외 인스턴스에 저장된 메시지를 얻을 수 있다.
      </Typography>
      <Typography fontWeight='bold'>멀티 catch블럭</Typography>
      <Typography>
        JDK1.7부터 여러 catch블럭을 | 기호를 이용해 합칠 수 있게 되었다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {`catch(Exception1 | Exception2 e){
			e.printStactTrace();
		}`}
      </CodeBlock>
      <Typography>
        여러 인스턴스를 처리하기 때문에 각각 예외 클래스에 포함된 맴버는 사용할
        수 없고 공통 조상 예외 클래스에 선언된 메서드를 호출 할 수 있다.
      </Typography>
      <Typography variant='h5'>1.6 예외 발생 시키기</Typography>
      <ol>
        <li>연산자 new 를 이용해서 발생시키려는 예외클래스의 객체를 만든다.</li>
        <Typography>Exception e = new Exception(“”);</Typography>
        <li>throw키워드를 통해 예외를 발생시킨다.</li>
        <Typography>throw e; // throw new Exception() 도 가능</Typography>
      </ol>
      <Typography>
        여기서 RuntimeException 클래스와 나머지 예외클래스들의 차이가 나타나는데
        앞서 RuntimeException은 프로그래머의 실수로 발생하는 것들이기 때문에
        예외처리를 강제하지 않는다. 하지만 다른 예외를 발생시켰을 때 그 예외에
        대한 예외처리가 되어있지 않다면 컴파일 에러가 발생한다.
      </Typography>
      <Typography variant='h5'>1.7 메서드에 예외 선언하기</Typography>
      <Typography>
        try-catch문을 사용하는 것 외에, 예외를 메서드에 선언하는 방법이 있다.
      </Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`void method() throws Exception1,Exception2, … ,ExceptionN {
		
    }`}</CodeBlock>
      <Typography>
        runtime예외의 경우 꼭 처리해야만 하지는 않기 때문에 보통 반드시
        처리해주어야 하는 예외들만 메서드에 선언한다.
      </Typography>
      <img src={Images.exception} />
      <Typography>
        보통 예외가 발생하면서 프로젝트가 종료되면 대충 훑어보고 몇번째 라인,
        혹은 어떤 종류의 예외인지만 확인하고 넘겼었는데 사진의 실행 결과를
        해석하면
      </Typography>
      <ol>
        <li>예외가 발생했을 때, 3개의 메서드가 호출 스택에 있었으며,</li>
        <li>예외가 발생한 곳은 제일 윗줄에 있는 method2()이고</li>
        <li>
          main메서드가 method1을, method1은 method2를 호출했다는 것을 알 수
          있다.
        </li>
      </ol>
      <Typography variant='h5'>1.8 finally블럭</Typography>
      <Typography>
        finally블럭은 예외의 발생 여부에 상관 없이 항상 수행되어야하는 문장들을
        넣는다. 메서드내의 return문을 만나도 finally안의 문장은 실행되고
        종료된다.
      </Typography>
      <Typography variant='h5'>
        1.9 자동 자원 반환 try-with-resource문
      </Typography>
      <Typography>
        try catch finally를 사용하다보면 finally에서 실행되는 문장 중에 예외가
        발생할 가능성이 있어 finally안에 try catch를 한번 더 사용하게 되는
        경우가 많다. 이 때 양측 모두 예외가 발생하면 위의 try문의 예외는
        무시된다.
      </Typography>
      <Typography>
        이러한 점을 개선하기 위해 try-with-resources문이 추가되었다. 자동 자원
        반환이라는 이름과 같이{" "}
      </Typography>
      <CodeBlock language='java' style={oneDark}>{`try(){
} catch(){
}`}</CodeBlock>
      <Typography>
        에서 try의 () 괄호 안에 각 문장을 ; 으로 분리하여 작성하면 try문이 끝날
        때 자동으로 close()가 호출된다. close()는 AutoCloseable이라는
        인터페이스를 구현한 클래스에서 사용된다.
      </Typography>
      <Typography>
        이렇게 하면 자동으로 close가 호출됨과 동시에 양측에서 예외가
        발생하더라도 suppressed 예외라는 형식으로 두 예외를 모두 출력하게 된다.
      </Typography>
      <Typography variant='h5'>1.10 사용자 정의 예외 만들기</Typography>
      <Typography>
        Exception클래스를 상속 받는 임의의 클래스를 생성하고 해당 클래스를 통해
        사용자 정의 예외를 만들 수 있다.
      </Typography>
      <Typography variant='h5'>1.11 예외 되던지기</Typography>
      <Typography>
        메서드안에서 예외를 처리하고 그 메서드를 호출한 메서드에게 또 전달해
        처리하는 방법, 양쪽 예외처리 및 throws 키워드를 선언부에 사용하고
        throw문을 이용해 호출한 메서드에게도 예외 전달한다.
      </Typography>
      <Typography variant='h5'>1.12 연결된 예외</Typography>
      <Typography>
        어떤 예외가 발생했을 때 그 안의 어떤 예외에 의해 발생한 것일 수 있다.{" "}
        <br />
        Throwable.initCause (throwable cause) 지정 예외를 원인 예외로 등록
        <br />
        Throwable.getCause() 원인 예외를 반환
      </Typography>
      <Typography>
        RuntimeException의 생성자 중에는 RuntimeException (Throwable cause) 가
        있다. 원인 예외를 등록하는 생성자로 예외처리를 필수로 해야하는 예외들에
        대해 해당 생성자로 감싸주면 예외처리가 필수적이지 않게 된다.
      </Typography>
    </Paper>
  );
};

export default JavaWeek06;
