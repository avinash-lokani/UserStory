import { Container } from "@mui/material";
import React, { useEffect } from "react";
import ExploreCategory from "../../molecules/ExploreCategory";

function ExploreDropDown() {
  useEffect(() => {
    // axios call to get all the explore categories
  });

  const handleClick = () => {
    // handle icon click
  };

  const ExploreCategories = [
    {
      img: "",
      topicName: "",
    },
  ];

  return (
    <Container>
      {ExploreCategories.map((option) => {
        return (
          <ExploreCategory
            onClick={handleClick}
            iconImg={option.img}
            topicName={option.topicName}
          />
        );
      })}
    </Container>
  );
}

export default ExploreDropDown;
