import * as React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import defaulttheme from "./Config/theme";

import { HomePage } from "./Pages";
import { BlogPage } from "./Pages";

const sections = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/#/blog" },
  { title: "Categories", url: "/#/categories" },
  { title: "Tags", url: "/#/tags" },
  { title: "About", url: "/#/about" },
];

export default function Blog() {
  return (
    <ThemeProvider theme={defaulttheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title="CCC2's Blog" sections={sections} />
        <main>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/blog' element={<BlogPage />}></Route>
            </Routes>
          </Router>
        </main>
      </Container>
      <Footer title="CCC2's" description='Thank you for visiting my blog' />
    </ThemeProvider>
  );
}
