import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button, Icon, Paper, Typography } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";

import Images from "../../Assets/Images";
import TextQuoteBlock from "../../Components/Typography/QuoteBlock";

const quest_01 = `/*
*  문제 : 시작 ~ 종료 까지 System.out.println으로 출력되는 문장을 "순서대로" 작성하세요.
* */
public class ExceptionTestClass {

    public static void main(String[] args) {
        System.out.println("시작");
        int returnVal = 0;
        try {
            returnVal = method3();
            method1();
        } catch (RuntimeException e){
            System.out.println("RuntimeException 발생");
        } catch (Exception e){
            System.out.println("Exception 발생");
        }
        System.out.println("returnVal : " + returnVal);
        System.out.println("종료");
    }

    static void method1() throws Exception {
        try {
            method2();
            System.out.println("method1 실행");
        } catch (Exception e){
            System.out.println("method1 Exception 발생");
        }

    }

    static void method2() throws RuntimeException {
        throw new RuntimeException();
    }

    static int method3(){
        try {
            System.out.println("method3 실행");

            return 321;
        } catch (Exception e){
            System.out.println("method3 Exception 발생");
        } finally {
            System.out.println("finally 실행");
        }

        return 123;
    }


}`;

const JavaQ06: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h3'>자바 스터디 6주차 문제</Typography>
      <Typography variant='h5'>- 눈으로 푸는 문제 ! -</Typography>
      <CodeBlock language='java' style={oneDark}>
        {quest_01}
      </CodeBlock>
      <Typography>
        예상 : <br />
        <br />
        시작
        <br />
        method3 실행
        <br />
        finally 실행
        <br />
        method1 Exception 발생
        <br />
        RuntimeException 발생
        <br />
        returnVal : 321
        <br />
        종료
      </Typography>
      <Typography>
        <br />
        이유:
        <br />
        <br />
        먼저 main함수의 시작과 동시에 println 실행,
        <br />그 후 returnVal에 method3의 리턴값을 넣기 위해 method3 실행
        <br />
        println 이후 return 321, return과 관계 없이 무조건 실행되는 finally
        <br />
        Exception이 없으므로 메인함수의 try문으로 돌아와서 returnVal에는 321을
        저장 후
        <br />
        method1 실행,
        <br />
        method1에서는 method2를 호출하므로 RuntimeException발생
        <br />
        method2() 밑에 있는 println은 Exception발생으로 중단되어 실행되지 않음
        <br />
        method1에는 모든 exception을 처리하는 catch문이 있으므로 println
        <br />
        main 메서드에서도 RuntimeException catch문 실행
        <br />
        그후 진행해 println 두개 실행
      </Typography>

      <Typography>
        <br />
        실제 실행 시 결과 :
      </Typography>
      <img src={Images.quest06_1} />
      <Typography>
        틀린 이유(예상) :
        <br />
        method1에서 호출한 method2에서 예외가 발생했지만 method2에서는
        예외처리를 해주지 않았고 method1으로 예외를 전달, 전달받은 예외를
        method1에서 처리했으므로 main메서드에는 영향을 주지 않음 그래서
        main메서드의 예외 처리문인 Runtime Exception 발생 println이 실행되지
        않음
      </Typography>
    </Paper>
  );
};

export default JavaQ06;
