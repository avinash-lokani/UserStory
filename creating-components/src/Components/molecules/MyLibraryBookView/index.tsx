import { Grid, Typography } from "@mui/material";
import React, { MouseEventHandler } from "react";
import BookThumbnail from "../../atoms/BookThumbnail";

export interface MyLibraryBookViewProps {
  imgSrc: string;
  bookName: string;
  author: string;
  timeread: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}

function LibraryBookView(props: MyLibraryBookViewProps) {
  return (
    <Grid container>
      <Grid item>
        <BookThumbnail onClick={props.onClick} imgSrc={props.imgSrc} />
      </Grid>
      <Grid item>
        <Typography>{props.bookName}</Typography>
        <Typography>{props.author}</Typography>
        <Typography>{props.timeread}</Typography>
      </Grid>
    </Grid>
  );
}

export default LibraryBookView;
