import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import BookThumbnail from "../../atoms/BookThumbnail";
import LibraryBookView from "../../molecules/MyLibraryBookView";

function MyLibraryBookList() {
  useEffect(() => {
    // axios call for mylibrary data
  });

  const handleBookClick = () => {
    // navigate to book details
  };

  const mylibraryData = [];

  return (
    <Grid container>
      <Grid item>
        <BookThumbnail imgSrc={""} onClick={handleBookClick} />
      </Grid>
      <Grid item>
        <Grid>
          {mylibraryData.map((book) => {
            return (
              <LibraryBookView
                imgSrc={""}
                bookName={""}
                author={""}
                timeread={""}
                onClick={handleBookClick}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MyLibraryBookList;
