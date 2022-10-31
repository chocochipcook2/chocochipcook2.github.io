// import from modules
import * as React from "react";

// import from @mui
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

//import from customMadeComponents
import MainFeaturedPost from "../Components/Home/MainFeaturedPost";
import FeaturedPost from "../Components/Home/FeaturedPost";
import Main from "../Components/Home/Main";
import Sidebar from "../Components/Home/Sidebar";

// import from posts
// import post1 from './Posts/blog-post1';
// import post2 from './Posts/blog-post2';
// import post3 from "../Posts/blog-post3";
import Chap02 from "../Posts/Chap-02";
import post1 from "../Posts/java-1-주차";
import { Posts } from "../Components/Blog/BlogContents";

const mainFeaturedPost = {
  title: `JavaStudy Week06
Chap.7-6 추상 클래스 ~ 8 예외처리`,
  description: ` 클래스를 설계도에 비유한다면 추상클래스는 미완성 설계도에 비유할 수
  있다. 미완성 설게도란, 단어의 뜻 그대로 완성되지 못한 채로 남겨진
  설계도를 말한다.`,
  image: "./Images/javaBookCover.jpeg",
  imageText: "Standard Java Book Cover",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Chap.07 객체 지향 프로그래밍2_1",
    date: "Sep 29",
    description: `7장은 전체적으로 생소한 개념이 많고 제대로 알고 있으면 좋을 개념들이
    많아 분량이 많은 편이다. 다음 주의 나머지 7장 부분도 양이 상당할 것으로
    예상된다.`,
    image: "./Images/javaBookCover.jpeg",
    imageLabel: "Standard Java Book Cover",
  },
  {
    title: "자바 스터디 6주차 문제",
    date: "Oct 13",
    description: `- 눈으로 푸는 문제 ! -`,
    image: "./Images/quest06_1.png",
    imageLabel: "q06_1",
  },
];

const posts = [post1, Chap02];

const sidebar = {
  title: "About",
  description: "ChocoChipCook2의 블로그 / 제작중...",
  archives: [
    // { title: "March 2020", url: "#" },
    // { title: "February 2020", url: "#" },
    // { title: "January 2020", url: "#" },
    // { title: "November 1999", url: "#" },
    // { title: "October 1999", url: "#" },
    // { title: "September 1999", url: "#" },
    // { title: "August 1999", url: "#" },
    // { title: "July 1999", url: "#" },
    // { title: "June 1999", url: "#" },
    // { title: "May 1999", url: "#" },
    // { title: "April 1999", url: "#" },
  ],
  social: [
    {
      name: "GitHub",
      icon: GitHubIcon,
      link: "https://github.com/chocochipcook2",
    },
    { name: "Twitter", icon: TwitterIcon, link: "#" },
    { name: "Facebook", icon: FacebookIcon, link: "#" },
  ],
};

const HomePage: React.FC = () => {
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid md={9} sx={{ px: 2 }}>
          {Posts[0]}
          {Posts[1]}
        </Grid>
        <Grid md={3}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
