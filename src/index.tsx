import * as React from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Blog from "./Blog";
import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(<Blog />);
