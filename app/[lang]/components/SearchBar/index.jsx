"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {styled} from '@mui/material';
import searchIcon from "@/public/images/search-icon.svg"
import Image from 'next/image';

const CustomStack = styled(Stack)`
    position: relative;

    .stack-img{
        position: absolute;
        top: 0;
        right: 20px;
    }
`

const CustomAutocomplete = styled(Autocomplete)`
    .MuiOutlinedInput-root {
    border: 2px solid ${(props) => props.theme.palette.secondary.main}; 
    font-size: ${(props) => props.theme.typography.h6};
    border-radius: 2rem;
    height: 3rem;
    }

    .MuiAutocomplete-inputRoot::placeholder {
        color: ${(props) => props.theme.palette.secondary.main};
    }

    .MuiAutocomplete-inputRoot {
        padding: 5px 20px;
        color: ${(props) => props.theme.palette.secondary.main};
    }
`

export default function SearchBar({maxWidth}) {
  return (
    <CustomStack spacing={2} sx={{ width: { sm:200, md: maxWidth || 300} }}>
      <CustomAutocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Search Anything " />}
      />
      <Image className='stack-img' src={searchIcon} alt="search-icon" />
    </CustomStack>
  );
}

const top100Films = [
  { title: 'search 1', year: 1994 },
  { title: 'search 2', year: 1972 },
  { title: 'search 3', year: 1974 },
];