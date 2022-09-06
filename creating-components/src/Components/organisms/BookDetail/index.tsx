import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import BookThumbnail from "../../atoms/BookThumbnail";
import Button from "../../atoms/Button";
import ExploreCategory from "../../molecules/ExploreCategory";
import SecondaryBookTabs from "../../molecules/SecondaryBookTabs";

export interface BookDetailProps {
  id: number;
}

function BookDetail(props: BookDetailProps) {
  useEffect(() => {
    // axios call to get the data
  });

  return (
    <Grid container>
      <Grid item>
        <Typography>{/*{bookData.bookName}*/}</Typography>
        <Typography>{/*{bookData.tag}*/}</Typography>
        <Typography>{/*{bookData.author}*/}</Typography>
        <Grid>
          <ExploreCategory onClick={() => {}} iconImg={""} topicName={""} />
          <ExploreCategory onClick={() => {}} iconImg={""} topicName={""} />
        </Grid>
        <Grid>
          <Button style={{}} />
          <Button style={{}} />
          <Button style={{}} />
        </Grid>
        <SecondaryBookTabs />
      </Grid>
      <Grid item>
        <BookThumbnail onClick={() => {}} imgSrc={""} />
      </Grid>
    </Grid>
  );
}

export default BookDetail;
