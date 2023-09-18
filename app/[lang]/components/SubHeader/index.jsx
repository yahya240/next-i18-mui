"use client"
import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import bell from '@/public/images/bell-icon.svg'
import cart from '@/public/images/cart-icon.svg'
import chat from '@/public/images/chat-icon.svg'
import heart from '@/public/images/heart-icon.svg'
import profile from '@/public/images/profile-icon.svg'
import { Container, styled } from '@mui/material';

const preventDefault = (event) => event.preventDefault();

const CustomLink = styled(Link)`
  color: ${(props) => props.theme.palette.grey[100]};
  font-size: ${(props) => props.theme.typography.h5};

  @media (max-width: 968px) {
    font-size: ${(props) => props.theme.typography.body1};
  }

  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.typography.body2};
  }
`

const SubHeaderContainer = styled(Container)`
  width: 80%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`

const LinksContainer = styled(Container)`

`
const StyledBox = styled(Box)`
  display: flex;
  gap: 1.5rem;
`
const IconsContainer = styled(Container)`
  display: flex;
  width: fit-content;
  gap: 2rem;

`

export default function SubHeader({page}) {
  return (
    <SubHeaderContainer>
        <LinksContainer>
          <StyledBox
            sx={{
              typography: 'body1',
              '& > :not(style) ~ :not(style)': {
                ml: 2,
              },
            }}
            onClick={preventDefault}
          >
            <CustomLink href="#">{page.navbar.home}</CustomLink>
            <CustomLink href="#">{page.navbar.Products}</CustomLink>
            <CustomLink href="#">{page.navbar.Categories}</CustomLink>
            <CustomLink href="#">{page.navbar.Offers}</CustomLink>
            <CustomLink href="#">{page.navbar.Contact}</CustomLink>
          </StyledBox>
        </LinksContainer>

        <IconsContainer>
            <Image src={chat} alt="chat"/>
            <Image src={heart} alt="heart"/>
            <Image src={bell} alt="bell"/>
            <Image src={profile} alt="profile"/>
            <Image src={cart} alt="cart"/>
        </IconsContainer>
    </SubHeaderContainer>
  )
}
