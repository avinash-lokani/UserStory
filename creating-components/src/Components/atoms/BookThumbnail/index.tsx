import React, { MouseEventHandler } from "react";
export interface BookThumbnailProps {
  imgSrc: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}
function BookThumbnail(props: BookThumbnailProps) {
  return <img src={props.imgSrc} alt="bookThumbnail" onClick={props.onClick} />;
}

export default BookThumbnail;
