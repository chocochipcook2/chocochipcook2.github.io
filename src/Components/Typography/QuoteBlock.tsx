import * as React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Paper, Typography, TypographyTypeMap } from "@mui/material";
import { FormatQuote } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface ComProps {
  children: any;
}
const TextQuoteBlock = (props: ComProps) => {
  return (
    <Paper
      sx={{
        marginX: 5,
        padding: 3,
        position: "relative",
      }}
    >
      <FormatQuote
        fontSize='medium'
        sx={{ position: "absolute", left: 0, top: 0 }}
      />
      <Typography sx={{ alignSelf: "center" }}>{props.children}</Typography>
      <FormatQuote
        fontSize='medium'
        sx={{ position: "absolute", right: 0, bottom: 0 }}
      />
    </Paper>
  );
};

export default TextQuoteBlock;
