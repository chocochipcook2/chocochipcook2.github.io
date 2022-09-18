import * as React from "react";
import { useState } from "react";

import { Prism as CodeBlock } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Button, Link, Paper, Typography } from "@mui/material";

import Images from "../../Assets/Images";

const code1 = `class Solution {
    public int[][] solution(int[][] arr1, int[][] arr2) {
        int[][] answer = new int[arr1.length][arr1[0].length];
        for (int i=0;i<arr1.length;i++){
            int[] _tmp =new int[arr1[0].length];
            for (int j=0;j<arr1[i].length;j++){
                
                _tmp[j] = arr1[i][j]+arr2[i][j];
            }
            answer[i]=_tmp;
        }
        
        return answer;
    }
}`;

const JavaWeek02: React.FC = () => {
  return (
    <Paper variant='outlined' sx={{ padding: 5, marginY: 2 }}>
      <Typography variant='h4'>Week02 examples</Typography>
      <Typography variant='h5'>1. 배열의 활용</Typography>
      <img src={Images.W2Q1}></img>
      <CodeBlock language='java' style={oneDark}>
        {code1}
      </CodeBlock>
      <Typography>
        행렬의 합 연산인데 구조상 2차원 행렬의 안쪽(1행씩 차례로)부터 계산을
        하고 저장 후 합치는 느낌으로 짜보았다.
        <br />
        행렬의 크기와 초기화 부분이 조금 신경 쓰였는데 조건에 행과 열이 같고 1번
        입력과 2번 입력이 같기 때문에 1번째로 입력된 구조에 맞추어 큰 틀을
        초기화 후 계산해 저장하는 방식을 사용했다.
      </Typography>
      <Typography>
        출처:
        <Link
          target='_blank'
          rel='noreferrer noopener'
          href='https://school.programmers.co.kr/learn/courses/30/lessons/12950'
        >
          https://school.programmers.co.kr/learn/courses/30/lessons/12950
        </Link>
      </Typography>
    </Paper>
  );
};

export default JavaWeek02;
