"use client"
import * as React from 'react';
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import downArrow from "@/public/images/down-arrow.svg"
import Image from 'next/image';
import { styled } from '@mui/material';

const StyledLabel = styled(InputLabel)`
  color: ${(props) => props.theme.palette.grey[800]};
  font-weight: 700;
`

export default function CustomSelect({title,list}) {
  const router = useRouter()

  const handleChange = (event) => {
    if(event.target.name === "English"){
      router.push(`/${event.target.value}`)
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <StyledLabel id="demo-simple-select-label">{title}</StyledLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={title}
          label="Age"
          onChange={handleChange}
          IconComponent={() => (
            <Image src={downArrow} alt="down-arrow" />
          )}
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          {list.map((item)=>{
            return <MenuItem key={item.id} value={item.key}>{item.value}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
