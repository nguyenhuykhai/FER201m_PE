import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField } from '@mui/material';

export default function Login() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}