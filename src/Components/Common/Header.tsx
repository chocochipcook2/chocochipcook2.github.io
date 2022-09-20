import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}
//  // color='inherit'
//               // noWrap
//
//               // variant='body2'
//               href={section.url}
export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => {
          return (
            <Link href={section.url}>
              <Button
                key={section.title}
                sx={{ bgcolor: "#606060", color: "lightGray" }}
              >
                {section.title}
              </Button>
            </Link>
          );
        })}
      </Toolbar>
    </React.Fragment>
  );
}
