import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  
  width:'180px',
  height:'50px',
  padding: '10px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'white',
 color:'black',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#000000',
    borderColor: '#0062cc',
    boxShadow: 'none',
    color:'white'
  },
});

export default function CustomButton() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple>SHOP WOMEN </BootstrapButton>
      <BootstrapButton variant="contained" disableRipple>
      SHOP MEN
      </BootstrapButton>
     </Stack>
  );
}
