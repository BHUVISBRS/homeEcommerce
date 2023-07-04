import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import CustomButton from './materialui/CustomButton';

export default function ShopCategary() {
   
  return (
<>
<div class="container">
<div class="row">
<div class="col">
 {/**************** girl image ************/}
    <Card sx={{ maxWidth: 380}}>
     <CardActionArea>
        <CardMedia
          component="img"
          height="390"
          image="1girl.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:2,letterSpacing:1}}>
          Everyday Shoes
          </Typography>
          <div style={{marginLeft:19}}><hr /></div>
         
          <Typography variant="body2" color="text.secondary" sx={{marginLeft:2}}>
            <img src='TREE.png' style={{height:35}}/>Comfy, All-Day Wearable
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    {/**************** Active Shoes ************/}
    <div class="col">
    <Card >
     <CardActionArea>
        <CardMedia
          component="img"
          height="390"
          image="activeshoe.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:2,letterSpacing:1}}>
          Active Shoes
          </Typography>
          <div style={{marginLeft:19}}><hr /></div>
         
          <Typography variant="body2" color="text.secondary" sx={{marginLeft:2}}>
            <img src='TREE.png' style={{height:35}}/>Bouncy, Cushy Soles
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>


{/**************** Slip-On Shoes ************/}
<div class="col">
    <Card >
     <CardActionArea>
        <CardMedia
          component="img"
          height="390"
          image="slipshoe.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{marginLeft:2,letterSpacing:1}}>
          Slip-On Shoes
          </Typography>
          <div style={{marginLeft:19}}><hr /></div>
         
          <Typography variant="body2" color="text.secondary" sx={{marginLeft:2}}>
            <img src='TREE.png' style={{height:35}}/>Easy on, Easy off
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    </div>
    <div>
    <Box>
        <Card sx={{ maxWidth: 1270,paddingTop:15 }}>
        <CardMedia
  sx={{ height: 500 }}
  image="bigimg.jpg"
  title="Shopping page" ></CardMedia> 
        </Card>
        </Box>
    </div>
<div>
<Typography variant="h4" sx={{marginLeft:65,paddingTop:14,paddingBottom:2}}>Summer Styles</Typography>
<Typography  sx={{marginLeft:45,paddingBottom:7,color:'grey'}}>Get a move on (or out) in bouncy shoes made with natural materials.
</Typography>
<CustomButton sx={{bgcolor:'black'}}></CustomButton>
</div>
    </>
  
  );
}


