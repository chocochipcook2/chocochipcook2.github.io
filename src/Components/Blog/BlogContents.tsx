import { Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import {
  Week03,
  Week04,
  Week05,
  Week06,
  Week07,
  Review01,
  Review02,
  Week08,
  JavaStudy06,
  Quest06,
} from "../../Posts";

export const Posts: any[] = [
  <Quest06 />,
  <JavaStudy06 />,
  <Week08 />,
  <Week07 />,
  <Week06 />,
  <Review02 />,
  <Review01 />,
  <Week05 />,
  <Week04 />,
  <Week03 />,
];
const BlogContents = (p: number) => {
  let PostsToRender = [];
  const p5 = (p - 1) * 5;
  for (let i = p5; i < p5 + 5; i++) {
    if (Posts[i]) {
      PostsToRender.push(Posts[i]);
    }
  }
  if (PostsToRender.length == 0) {
    return PostsToRender;
  } else return PostsToRender;
};
export default BlogContents;
