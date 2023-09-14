"use client"
import { Container, styled } from '@mui/material'
import SearchBar from '../SearchBar'
import CustomSelect from '../CustomSelect'

import logo from '@/public/images/logo.svg'
import flag from '@/public/images/flag-icon.svg'
import horizentalLine from '@/public/images/horizental-line.svg'
import Image from 'next/image'
import React from 'react'

const CustomContainer = styled(Container)`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  .options-containder{
    display: flex;
    gap: 1rem;
    
    @media (max-width: 968px) {
      display: none;
    }
  }
  .options-containder .options-lang{
    display: flex;
    justify-content: space-around;
  }

  .options-containder .options-lang .flag-icon{
    margin-left: 1rem;
  }
  .options-containder .options-currency{
    display: flex;
    gap: 5px;
  }
`

const lang = [{id:1,key:'en',value:'English'},{id:2,key:'ar',value:'Arabic'}]
const currency = [{id:1,key:'USD',value:'USD $'},{id:2,key:'SAR',value:'SAR $'}]

export default function NavBar() {
  
  return (
    <CustomContainer>
      <div>
        <Image src={logo} alt='log' />
      </div>

      <div>
        <SearchBar />
      </div>

      <div className='options-containder'>
        <div className='options-lang'>
          <Image src={horizentalLine} alt='horizental-line' />
          <Image className='flag-icon' src={flag} alt='flag-icon' />
          <CustomSelect title='English' list={lang} />
        </div>
        <div className='options-currency'>
          <Image src={horizentalLine} alt='horizental-line' />
          <CustomSelect title='USD $' list={currency} />
        </div>
      </div>
    </CustomContainer>
  )
}
