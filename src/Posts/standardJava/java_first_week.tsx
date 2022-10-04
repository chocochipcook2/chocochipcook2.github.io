import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button, Link, Paper, Typography } from "@mui/material";

import Images from "../../Assets/Images";
const code1 = `import java.util.*;

public class exam220823 {
    static Scanner sc = new Scanner(System.in);
     static String[] person = new String[2];
        static char[] josa = {'는','은','가','이','와','과','를','을'};
    public static void main (String[] args){
       
        char[] marks = {'.',','};
        String[] noun ={"원","지불"};
        System.out.println("이름을 입력하세요 : ");
        person[0]=sc.nextLine();
        System.out.println("두번째 사람의 이름을 입력하세요 : ");
        person[1]=sc.nextLine();
        System.out.println("첫번쨰 사람이 구매한 음식을 ,로 구분지어 음식1,가격1,음식2,가격2,음식3,가격3,... 의 형태로 입력하세요");
        String tmpIngredients = sc.nextLine();
        String[] ing=tmpIngredients.split(",");
        System.out.println("두번쨰 사람이 구매한 음식을 ,로 구분지어 음식1,가격1,음식2,가격2,음식3,가격3,... 의 형태로 입력하세요");
        tmpIngredients = sc.nextLine();
        String[] ing2=tmpIngredients.split(",");
        System.out.println(person[0]+getJosa(person[0], "")+" "+person[1]+getJosa(person[1], "주어1")+" 함께 음식을 준비했습니다");
        for(int i=0;i<person.length;i++){
            System.out.print(person[i]+getJosa(person[i], "주어1")+" ");
            if(i==0){
                for(int j=0;j<ing.length;j+=2){
                    if(j==ing.length-2)
                    System.out.print(ing[j]);
                    else
                    System.out.print(ing[j]+marks[1]) ;
                }
                System.out.print(getJosa(ing[ing.length-2],"목적어"));
            }else{
                for(int j=0;j<ing2.length;j+=2){
                    if(j==ing2.length-2)
                    System.out.print(ing2[j]);
                    else
                    System.out.print(ing2[j]+marks[1]) ;
                }
                System.out.print(getJosa(ing2[ing2.length-2],"목적어"));
            }
            System.out.println(" 샀습니다"+marks[0]);
        };
    
        for(int l=0;l<ing.length;l++){
            if(l%2==1){
                if(l==ing.length-1)
                System.out.println(ing[l]+noun[0]+"입니다.");
                else
                System.out.print(ing[l]+noun[0]+marks[1]);
            }else 
            System.out.print(ing[l]+getJosa(ing[l], "주어1"));
        };

        for(int k=0;k<ing2.length;k++){
            if(k%2==1){
                if(k==ing2.length-1)
                System.out.println(ing2[k]+noun[0]+"입니다.");
                else
                System.out.print(ing2[k]+noun[0]+marks[1]);
            }else 
            System.out.print(ing2[k]+getJosa(ing2[k], "주어1"));
        };

        System.out.println("총 합은 "+(getSum(ing)+getSum(ing2))+noun[0]+getJosa(noun[0], "주어2")+" 나왔습니다.");
        
        System.out.println(person[0]+getJosa(person[0], "주어1")+getSum(ing)+noun[0]+getJosa(noun[0], "목적어")+noun[1]+"하고");

        System.out.println(person[1]+getJosa(person[1], "주어1")+getSum(ing2)+noun[0]+getJosa(noun[0], "목적어")+noun[1]+"하였습니다.");

        int PMpersonNum =whoPaidMore(getSum(ing), getSum(ing2));

        if(PMpersonNum>0) 
        System.out.print(person[PMpersonNum]+getJosa(person[PMpersonNum], "주어1")+" "+person[(PMpersonNum+1)%2]+"보다"+(getSum(ing2)-getSum(ing))+noun[0]+getJosa(noun[0], "목적어")+" 더 "+noun[1]+"하였습니다.");
        else 
        System.out.print(person[PMpersonNum]+getJosa(person[PMpersonNum], "주어1")+" "+person[(PMpersonNum+1)%2]+"보다"+(getSum(ing)-getSum(ing2))+noun[0]+getJosa(noun[0], "목적어")+" 더 "+noun[1]+"하였습니다.");
        



    }
    public static char getJosa(String toChk,String position){
if(position.equals("주어1")){
            if(checkLast(toChk)){
                return josa[1];
            }else return josa[0];
           }
           else if(position.equals("주어2")){
            if(checkLast(toChk)){
                return josa[3];
            }else return josa[2];
           }
           else if(position.equals("목적어")){
            if(checkLast(toChk)){
                return josa[7];
            }else return josa[6];
           }
           else{
            if(checkLast(toChk)){
                return josa[5];
            }else return josa[4];
           }
    }
    public static boolean checkLast(String toChk){
           
           char lastChar = toChk.charAt(toChk.length() - 1);
           int index= (lastChar - 0xAC00) % 28;
           
           if(index>0){
            return true;
           }else return false;
        
        }
        public static int getSum(String[] _ing){
            int _sum=0;
            for(int m=1;m<_ing.length;m+=2){
                _sum+=Integer.parseInt(_ing[m]);
            }
            return _sum;
        }
        public static int whoPaidMore(int a, int b){
            if(a>b)return 0;
            else return 1;
        }
        
}`;
const result1 = `  `;
const code2 = `class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        
        for (int i=0;i<n;i++){
            answer[i]=(i+1)*x;
        }
        return answer;
    }
}`;
const code2_fixed = `class Solution {
    public long[] solution(int x, int n) {
        long[] answer = new long[n];
        
        for (int i=0;i<n;i++){
            answer[i]=(long)(i+1)*x; //long 변환 추가
        }
        return answer;
    }
}`;

const JavaWeekReview01: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h4'>Week01 examples</Typography>
      <Typography variant='h5'>1. Scanner Class 활용 문제</Typography>
      <Typography>
        20220823 자바 기초 문제 문제. 사람 이름, 음식 이름, 음식 가격은 변수로
        입력 받고, "은, 는, 을, 를, 와, 원, 지불" 단어와 "."와 ","는 변수로
        지정해서 다음 문장을 출력하시오.
        <br /> 철수와 영희는 함께 음식을 준비했습니다.
        <br />
        철수는 토마토, 감자, 주스를 샀습니다. <br />
        영희는 떡, 마늘, 양파를 샀습니다. 토마토는 2000원, 감자는 800원, 주스는
        1200원입니다.
        <br /> 떡는 6200원, 마늘는 2000원, 양파는 3200원입니다. <br />총 합은
        15400원이 나왔습니다.
        <br /> 철수는 4000원을 지불하고 영희는 11400원을 지불하였습니다.
        <br /> 영희는 철수보다 7400원을 더 지불하였습니다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {code1}
      </CodeBlock>
      <text>
        이름을 입력하세요 : 구교환 <br />
        두번째 사람의 이름을 입력하세요 : 이효리 <br />
        첫번쨰 사람이 구매한 음식을 ,로 구분지어
        음식1,가격1,음식2,가격2,음식3,가격3,... 의 형태로 입력하세요
        <br />
        전,12000,송편,14000,황태,9000 <br />
        두번쨰 사람이 구매한 음식을 ,로 구분지어
        음식1,가격1,음식2,가격2,음식3,가격3,... 의 형태로 입력하세요
        <br />
        약과,8000,산적,10000,나물,5000 <br />
        구교환과 이효리는 함께 음식을 준비했습니다 구교환은 전,송편,황태를
        샀습니다. <br />
        이효리는 약과,산적,나물을 샀습니다.
        <br /> 전은12000원,송편은14000원,황태는9000원입니다.
        <br />
        약과는8000원,산적은10000원,나물은5000원입니다.
        <br /> 총 합은 58000원이 나왔습니다.
        <br /> 구교환은35000원을지불하고 이효리는23000원을지불하였습니다.
        <br />
        구교환은 이효리보다12000원을 더 지불하였습니다.%
      </text>
      <Typography variant='h5'>2. 비트 연산자, 형변환?</Typography>
      <img src={Images.W1Q1} />
      <CodeBlock language='java' style={oneDark}>
        {code2}
      </CodeBlock>
      <img src={Images.failW1Q1} />
      <Typography>
        처음 짰던 코드는 위와 같은데 테스트 13,14에서 실패가 떴다.
        <br /> 숫자의 범위가 커져서 long으로 변환해줘야 하는건가? 하는 의심이
        들어 다음과 같이 변경했다.
      </Typography>
      <CodeBlock language='java' style={oneDark}>
        {code2_fixed}
      </CodeBlock>
      <Typography>
        출처:
        <Link
          target='_blank'
          rel='noreferrer noopener'
          href='https://school.programmers.co.kr/learn/courses/30/lessons/12954'
        >
          https://school.programmers.co.kr/learn/courses/30/lessons/12954
        </Link>
      </Typography>
    </Paper>
  );
};

export default JavaWeekReview01;
