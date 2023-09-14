"use client"
import React from "react";
import Slider from "react-slick";
import { Container, Typography, styled } from "@mui/material"
import nextArrow from "@/public/images/next-arrow.svg"
import categories1 from "@/public/images/categories1.svg"
import categories2 from "@/public/images/categories2.svg"
import categories3 from "@/public/images/categories3.svg"
import categories4 from "@/public/images/categories4.svg"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

const SliderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  gap: 2rem;
`
const SliderHeader = styled(Container)`
  display: flex;
  justify-content: space-between;
`
const SliderHeaderLink = styled(Container)`
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  gap: 8px;
  cursor: pointer;
`
const SliderHeaderText = styled(Typography)`
  width: 100%;
  color: ${(props) => props.theme.palette.grey[900]};
  font-weight: 500;
`

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const data = [
    {id:0, image:categories1},
    {id:1, image:categories2},
    {id:2, image:categories3},
    {id:3, image:categories4},
    {id:4, image:categories1},
    {id:5, image:categories2},
    {id:6, image:categories3},
    {id:7, image:categories4}
  ]

  return (
    <SliderContainer>

      <SliderHeader>
        <SliderHeaderText variant="h5">Categories</SliderHeaderText>
        <SliderHeaderLink>
          <Typography variant="h5" color="secondary" fontWeight={500}>See All</Typography>
          <Image src={nextArrow} alt="next-arrow" />
        </SliderHeaderLink>
      </SliderHeader>

      <Slider {...settings}>
        {data.map((item)=>{
          return <div key={item.id}>
                <Image src={item.image} alt="categories1" />
              </div>
        })}
      </Slider>
    </SliderContainer>
  );
}
