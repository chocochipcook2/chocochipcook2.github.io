import { Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import {
  Chap03,
  Chap04,
  Chap05,
  Chap06,
  Chap07,
  Week01,
  Week02,
} from "../../Posts";

export const Posts: any[] = [
  <Chap07 />,
  <Chap06 />,
  <Week02 />,
  <Week01 />,
  <Chap05 />,
  <Chap04 />,
  <Chap03 />,
];
const BlogContents = (p: number) => {
  let PostsToRender = [];
  const p5 = (p - 1) * 5;
  for (let i = p5; i < p5 + 5; i++) {
    if (Posts[i]) {
      PostsToRender.push(Posts[i]);
    }
  }
  return PostsToRender;
};
export default BlogContents;
