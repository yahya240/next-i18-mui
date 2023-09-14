"use client"
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Container, styled } from '@mui/material'
import Image from 'next/image';
import sliderImage from "@/public/images/slider-img.svg"
import sliderImage2 from "@/public/images/slider-img2.svg"
import sliderImage3 from "@/public/images/slider-img3.svg"

const CarouselContainer = styled(Container)`
    margin-top: 2rem;

    @media screen AND (max-width: 768px) {
        margin-top: 1rem;
    }

    @media screen AND (max-width: 576px) {
        margin-top: 0;
    }
`

export default function MainCarousel(props)
{
    var items = [
        {
            image: sliderImage
        },
        {
            image: sliderImage2
        },
        {
            image: sliderImage3
        }
    ]

    return (
        <CarouselContainer>
            <Carousel 
            fullHeightHover={true}
            navButtonsProps={{
                style: {
                    backgroundColor: 'cornflowerblue',
                    borderRadius: 0
                }
            }} 
            navButtonsWrapperProps={{
                style: {
                    bottom: '0',
                    top: 'unset'
                }
            }} 
            NextIcon='>'
            PrevIcon='<'
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </CarouselContainer>
    )
}

function Item(props)
{
    return (
        <Paper>
            <Image src={props.item.image} alt="slider-img" style={{objectFit: "contain", width: '100%', height: '400px'}}/>
        </Paper>
    )
}