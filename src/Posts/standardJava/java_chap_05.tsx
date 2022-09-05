import * as React from "react";
import { useState } from "react";

import { Prism as Highlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button, Paper, Typography } from "@mui/material";

import Images from "../../Assets/Images";

const arrayInitCodeDefault = `타임[] 변수이름;
변수이름 = new 타입[길이];

int[] score;
score =new int[5];

int[] score = new int[5]

int[] score = new int[]{50,60,70,80,90};
int[] score = {50,60,70,80,90};`;
const JavaChap05: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5 }}>
      <Typography variant='h3'>Chap.05 배열</Typography>
      <Typography variant='h4'>1.2 배열의 선언과 생성</Typography>
      <Typography variant='h6'>
        배열은 한번 생성하면 길이를 변경할 수 없다.
        <br />
        int 배열의 기본값은 0으로 모두 초기화되고 string배열의 기본값은 모두
        null로 초기화된다.
      </Typography>
      <img src={Images.arrayDefaultValue} />
      <Highlighter language='java' style={oneDark}>
        {arrayInitCodeDefault}
      </Highlighter>
      <Typography variant='h6'>
        일반적으로 배열을 그대로 출력하려고 하면 배열의 타입@주소 형식의 값이
        나온다.
        <br />
        예외적으로 char 배열은 println 메서드를 통해 출력하면 요소가 차례대로
        구분자 없이 출력된다.
      </Typography>
      <Typography variant='h6'>
        배열의 길이를 변경하려면 새로운 배열(보통 기존 배열 길이의 두배)을
        만들고 각 요소를 반복문을 통해 새로운 배열에 옮기고 기존 배열의 변수명이
        새로운 배열을 가리키게 해야한다.
        <br />
        <img src={Images.arrayCopy} />
        반복문 대신 System.arraycopy()를 사용할 수 있다.
      </Typography>
    </Paper>
  );
};

export default JavaChap05;
