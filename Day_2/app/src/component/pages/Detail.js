import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Users } from "../../Users";

export default function Detail() {
  const { id } = useParams();
  const [ users, setUsers ] = useState(Users);
  const [data, setData] = useState({});
  
  useEffect(() => {
    handleGetData(users);
  },[id])

  const handleGetData = (users) => {
    users && users.map(item => {
        if (item.id == id) {
            setData(item);
        }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.createdAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}