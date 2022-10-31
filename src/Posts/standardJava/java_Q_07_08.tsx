import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const Quest07_01 = `/*
다음과 같은 실행 결과를 얻도록 SutdaCard 클래스의 equals()를 
멤버변수인 num, isKwang의 값을 비교하도록 오버라이딩하고 테스트하시오.

실행 결과
c1=3K
c2=3K
c1.equals(cs) : true
*/
class Exercise {
    public static void main(String[] args) {
        SutdaCard c1 = new SutdaCard(3, true);
        SutdaCard c2 = new SutdaCard(3, true);

        System.out.println("c1="+c1);
        System.out.println("c2="+c2);
        System.out.println("c1.equals(c2) :"+c1.equals(c2));
    }
}

class SutdaCard {
    int num;
    boolean isKwang;
    
    SutdaCard() {
        this(1, true);
    }
    
    SutdaCard(int num, boolean isKwang) {
        this.num = num;
        this.isKwang = isKwang;
    }
    
    public boolean equals(Object obj) {
        /*
          매개변수로 넘겨진 객체의 num, isKwang과
          멤버변수 num, isKwang을 비교하도록 오버라이딩하시오.
         */
    }
    
    public String toString() {
        return num + (isKwang ? "K":"");
    }
}`;
const answer07_01 = `/*
다음과 같은 실행 결과를 얻도록 SutdaCard 클래스의 equals()를 
멤버변수인 num, isKwang의 값을 비교하도록 오버라이딩하고 테스트하시오.

실행 결과
c1=3K
c2=3K
c1.equals(cs) : true
*/
public class EqualsExam {
    public static void main(String[] args) {
        SutdaCard c1 = new SutdaCard(3, true);
        SutdaCard c2 = new SutdaCard(3, true);

        System.out.println("c1="+c1);
        System.out.println("c2="+c2);
        System.out.println("c1.equals(c2) :"+c1.equals(c2));
        System.out.println("c1.equals(new SutdaCard) : "+c1.equals(new SutdaCard()));
    }
}
class SutdaCard {
    int num;
    boolean isKwang;
    
    SutdaCard() {
        this(1, true);
    }
    
    SutdaCard(int num, boolean isKwang) {
        this.num = num;
        this.isKwang = isKwang;
    }
    
    public boolean equals(Object obj)  {
        if(obj instanceof SutdaCard){
            if(num==((SutdaCard)obj).num){
                if(isKwang==((SutdaCard)obj).isKwang)
            return true;
        }
    }
     return false;
        /*
          매개변수로 넘겨진 객체의 num, isKwang과
          멤버변수 num, isKwang을 비교하도록 오버라이딩하시오.
         */
        
    }
    
    public String toString() {
        return num + (isKwang ? "K":"");
    }
}`;
const Quest07_02 = `import java.io.UnsupportedEncodingException;
/*
 * DB에서 가져온 데이터나 다른 OS에서 작성된 문서를 읽어오면 
 * 인코딩이 달라 글자가 깨지는 경우가 많다.
 * String클래스의 
 * getBytes() 메서드, String(byte[] bytes,String charsetName) 생성자
 * 를 이용해
 * 
 * 1. 한글, 영어로 된 데이터 hangul, eng를 각각 byte로 변환 후 여러 인코딩 형식으로 나타내보자
 * 
 * 잘못된 형식으로 저장된 boolean data나 사용자 입력을 
 * 그대로 저장했을 경우 String 타입의 데이터를 가져올 수 있다.
 * 
 * 2. String 형식의 데이터 truth와 floatNum을 올바른 형식으로 출력해보자
 */
public class EncodeAndParse {
    public static void main(String[] args) {
        //변환이 필요한 데이터
        String hangul = "한글";
        String eng = "English";  
        String truth="true";
        String floatNum="3.141592";

        // 사용할 인코딩 형식[]
        String[] encodings = new String[] {"EUC-KR", "UTF-8", "UTF-16BE", "ISO8859-1","CP949"};

for (String encoding1 : encodings) {  
    byte[] encodedH=null;
    byte[] encodedE=null;
    try {
        // 1-1. encodedH와 encodedE에 각각 한글과 영어 데이터를 인코딩해 저장하시오
        // trycatch 문은 getBytes의 예외 때문에 작성하였음

    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }

    //인코딩 된 데이터 출력 후 들여쓰기
    System.out.println(encodedH);
    System.out.println(encodedE);
    System.out.print("\t");
    
    for (String encoding2 : encodings) {
     
        try {
            // 1-2. 인코딩된 데이터를 String생성자를 이용해 생성해 출력하시오
            // trycatch 문은 생성자의 예외 때문에 작성하였음

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        
    }
    
    System.out.println("\n");
}
// 2. String 형식의 데이터 truth와 floatNum을 각각 parse하여 출력하시오.

    }
}
`;
const answer07_02 = `import java.io.UnsupportedEncodingException;
/*
 * DB에서 가져온 데이터나 다른 OS에서 작성된 문서를 읽어오면 
 * 인코딩이 달라 글자가 깨지는 경우가 많다.
 * String클래스의 
 * getBytes() 메서드, String(byte[] bytes,String charsetName) 생성자
 * 를 이용해
 * 
 * 1. 한글, 영어로 된 데이터 hangul, eng를 각각 byte로 변환 후 여러 인코딩 형식으로 나타내보자
 * 
 * 잘못된 형식으로 저장된 boolean data나 사용자 입력을 
 * 그대로 저장했을 경우 String 타입의 데이터를 가져올 수 있다.
 * 
 * 2. String 형식의 데이터 truth와 floatNum을 올바른 형식으로 출력해보자
 */
public class EncodeAndParse {
    public static void main(String[] args) {
        //변환이 필요한 데이터
        String hangul = "한글";
        String eng = "English";  
        String truth="true";
        String floatNum="3.141592";

        // 사용할 인코딩 형식[]
        String[] encodings = new String[] {"EUC-KR", "UTF-8", "UTF-16BE", "ISO8859-1","CP949"};

for (String encoding1 : encodings) {  
    byte[] encodedH=null;
    byte[] encodedE=null;
    try {
        // 1-1. encodedH와 encodedE에 각각 한글과 영어 데이터를 인코딩해 저장하시오
        // trycatch 문은 getBytes의 예외 때문에 작성하였음
     encodedH = hangul.getBytes(encoding1);
        encodedE = eng.getBytes(encoding1);
    } catch (UnsupportedEncodingException e) {
        e.printStackTrace();
    }

    //인코딩 된 데이터 출력 후 들여쓰기
    System.out.println(encodedH);
    System.out.println(encodedE);
    System.out.print("\t");
    
    for (String encoding2 : encodings) {
     
        try {
            // 1-2. 인코딩된 데이터를 String생성자를 이용해 생성해 출력하시오
            // trycatch 문은 생성자의 예외 때문에 작성하였음
            System.out.print(new String(encodedH,encoding2) + "\t");
            System.out.print(new String(encodedE,encoding2)+"\t\t");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        
    }
    
    System.out.println("\n");
}
// 2. String 형식의 데이터 truth와 floatNum을 각각 parse하여 출력하시오.
System.out.println(Boolean.parseBoolean(truth));
    System.out.println(Float.parseFloat(floatNum)+1.83);
    //1.83은 float형식의 데이터임을 확실히 보이기 위해 추가함
    }
}
`;
const Quest07_03 = `/**
문제 1번 1번 - 6번까지 콘솔에 찍히는 값을 적으시오
*/
public class StringBuffer {
public static void main(String[] args) {
    int length = 25;
    java.lang.StringBuffer sb = new java.lang.StringBuffer();
    java.lang.StringBuffer sb2 = new java.lang.StringBuffer(length);

    System.out.println(sb.length());      // 1번
    System.out.println(sb2.length());     // 2번

    sb.append("abcd");
    sb2.append("abcd");

    System.out.println(sb.length());      // 3번
    System.out.println(sb2.length());     // 4번

    String s = sb.toString();
    String s2 = sb2.toString();

    if(s == s2){
        sb.append("efgh");
    }else{
        sb2.append("efgh");
    }

    System.out.println(sb.length());      // 5번
    System.out.println(sb2.length());     // 6번
}

}`;

const JavaQ07: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>
        Object, String, StringBuffer, Math 관련
      </Typography>
      <Typography>1. Object 객체</Typography>
      <CodeBlock language='java' style={oneDark}>
        {Quest07_01}
      </CodeBlock>
      <CodeBlock language='java' style={oneDark}>
        {answer07_01}
      </CodeBlock>

      <Typography>2. String 객체 - 본인 출제</Typography>
      <CodeBlock language='java' style={oneDark}>
        {Quest07_02}
      </CodeBlock>
      <CodeBlock language='java' style={oneDark}>
        {answer07_02}
      </CodeBlock>
      <Typography>
        String.getByte()와 String(byte[],String encode) 생성자를 통해 여러
        인코딩으로 변환과 복구가 가능함을 보여줌
        <br />
        Wrapper 클래스로 String타입의 데이터를 변환 가능함을 보임
      </Typography>
      <CodeBlock>{`[B@6591f517
[B@345965f2
        한글    English         �ѱ�     English         쟑뇛    䕮杬楳�         ÇÑ±Û    English         한글    English

[B@4461c7e3
[B@351d0846
        ��湲�   English         한글    English         鳪뢀   䕮杬楳�         íê¸     English         ��帷�¢  English

[B@7fe8ea47
[B@226a82c4
        �\�     English         �\�     English         한글    English         Õ\®     English         �₩�     English

[B@731f8236
[B@255b53dc
        ??      English         ??      English         㼿      䕮杬楳�         ??      English         ??      English

[B@6b53e23f
[B@64d2d351
        한글    English         �ѱ�     English         쟑뇛    䕮杬楳�         ÇÑ±Û    English         한글    English

true
4.971592025756836`}</CodeBlock>
      <Typography>3. StringBuffer 객체</Typography>
      <CodeBlock language='java' style={oneDark}>
        {Quest07_03}
      </CodeBlock>
      <Typography>
        예상 답 :
        <br />
        1. 0
        <br />
        2. 0
        <br />
        3. 4<br />
        4. 4<br />
        5. 8<br />
        6. 4
      </Typography>
      <Typography>
        실제 답 : <br />
        {`
      0
0
4
4
4
8`}
      </Typography>
      <Typography>해설 5번과 6번</Typography>
      <CodeBlock
        language='java'
        style={oneDark}
      >{`new String("abcd")==new String("abcd")
      //라고 생각해야함

      String str1="abcd";
      String str2 ="abcd";
      System.out.println(str1==str2);//이 아니라
      `}</CodeBlock>
    </Paper>
  );
};

export default JavaQ07;
