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
  title: "Chap.06 객체 지향 프로그래밍_2",
  description: `Chap 6 ~ 7은 이 책에서 가장 중요한 개념으로 저자가 꼭 여러번 반복해서
        학습하라는 당부를 남겼을 정도이다.
        분량 자체도 꽤 많은 편이고 소제목 하나 하나 모두 중요한 기초개념들이기
        때문에 6~7장을 3,4주에 걸쳐 다루기로 했다.`,
  image: "./Images/javaBookCover.jpeg",
  imageText: "Standard Java Book Cover",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Chap.06 객체 지향 프로그래밍_1",
    date: "Sep 12",
    description: ` 객체지향의 개념은 프로그램을 실제 세계와 비슷하게 만들려는 노력에서
      탄생했고, 실제 세계는 사물(객체)로 이루어져 있으며, 발생하는 모든
      사건들은 사물간의 상호작용이다. 라는 개념에 기초한다.`,
    image: "./Images/javaBookCover.jpeg",
    imageLabel: "Standard Java Book Cover",
  },
  {
    title: "Week01 examples",
    date: "Sep 12",
    description: `1. Scanner Class 활용 문제
      2. 비트 연산자, 형변환?`,
    image: "./Images/programmers.png",
    imageLabel: "Programmers School",
  },
];

const posts = [post1, Chap02];

const sidebar = {
  title: "About",
  description: "ChocochipCook2의 블로그 / 제작중...",
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
