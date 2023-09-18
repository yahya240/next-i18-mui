"use client"
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, styled } from '@mui/material';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const ImageListContainer = styled(Container)`
  margin: 5rem 0;
`

const ImageListOverride = styled(ImageList)`
@media only screen and (max-width: 900px) {
  .MuiImageList-root {
    column-count: 1 !important;
  }
}
`

export default function QuiltedImageList() {
  return (
    <ImageListContainer>
      <ImageListOverride
        sx={{ width: 'fill', height: 'auto' }}
        variant="quilted"
        cols={4}
        rowHeight={'auto'}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageListOverride>
    </ImageListContainer>
  );
}

const itemData = [
  {
    img: "https://i.ibb.co/tK7mYTg/Rectangle-813631.png",
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i.ibb.co/CQFYZkd/Rectangle-813630.png",
    title: 'Coffee',
    cols: 2,
  },
  {
    img: "https://i.ibb.co/7tM7Qf5/Rectangle-813629.png",
    title: 'Camera',
    cols: 2,
  },
];
