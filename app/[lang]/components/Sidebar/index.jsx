"use client"
import { useState } from "react";
import { Drawer, IconButton, styled, Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu'
import CustomSelect from '../CustomSelect'

import logo from '@/public/images/logo.svg'
import bell from '@/public/images/bell-icon.svg'
import cart from '@/public/images/cart-icon.svg'
import chat from '@/public/images/chat-icon.svg'
import heart from '@/public/images/heart-icon.svg'
import profile from '@/public/images/profile-icon.svg'
import Image from "next/image";
import SearchBar from "../SearchBar";

const lang = [{id:1,key:'en',value:'English'},{id:2,key:'ar',value:'Arabic'}]
const currency = [{id:1,key:'USD',value:'USD $'},{id:2,key:'SAR',value:'SAR $'}]

const LinksContainer = styled(Container)`

`
const OptionsContainder = styled(Container)`
  margin-top: 1rem;
`
const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
`
const IconsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  cursor: pointer;
`
const SingleIconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

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

const preventDefault = (event) => event.preventDefault();

export default function Sidebar() {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  return (
    <>
    <IconButton size="large" edge='start' color='inherit' aria-label="logo" onClick={()=>setIsSidebarOpen(true)}>
      <MenuIcon />
    </IconButton>
    <Drawer anchor="left" open={isSidebarOpen} onClose={()=>setIsSidebarOpen(false)}>
        <Box p={2} width='250px' role="presentation">
            <Image src={logo} alt='log' />

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
                <CustomLink href="#">Home</CustomLink>
                <CustomLink href="#">Products</CustomLink>
                <CustomLink href="#">Categories</CustomLink>
                <CustomLink href="#">Offers</CustomLink>
                <CustomLink href="#">Contact</CustomLink>
              </StyledBox>
            </LinksContainer>

            <IconsContainer>
              <SingleIconContainer>
                <Image src={chat} alt="chat"/>
                <Typography>Chat</Typography>
              </SingleIconContainer>
              <SingleIconContainer>
                <Image src={heart} alt="heart"/>
                <Typography>Favurites</Typography>
              </SingleIconContainer>
              <SingleIconContainer>
                <Image src={bell} alt="bell"/>
                <Typography>Notifications</Typography>
              </SingleIconContainer>
              <SingleIconContainer>
                <Image src={profile} alt="profile"/>
                <Typography>Profile</Typography>
              </SingleIconContainer>
              <SingleIconContainer>
                <Image src={cart} alt="cart"/>
                <Typography>Cart</Typography>
              </SingleIconContainer>
            </IconsContainer>

            <OptionsContainder>
              <div className='options-lang'>
                <CustomSelect title='English' list={lang} />
              </div>
              <div className='options-currency'>
                <CustomSelect title='USD $' list={currency} />
              </div>
            </OptionsContainder>

            <SearchBar maxWidth={200}/>
        </Box>
    </Drawer>
    </>
    
  )
}
