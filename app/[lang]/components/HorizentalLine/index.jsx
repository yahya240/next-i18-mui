"use client"
import { Container, styled } from "@mui/material"

const StyledHorizentalLine = styled(Container)`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.palette.grey[700]};
    margin-top: 1rem;
`

export default function HorizentalLine() {
  return (
    <StyledHorizentalLine />
  )
}
