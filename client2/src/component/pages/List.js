import React, { useState } from "react";

import { Users } from '../../Users'

import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function List() {
  const [users, setUsers] = useState(Users);

  return (
    <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {users?.map((userItem, index) => (
          <Grid item xs={2} sm={4} md={3} key={index}>
            {userItem.status && (
              <Item>
                <CardMedia
                  component="img"
                  alt="image"
                  height="200"
                  image={userItem.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" sx={{textAlign:"justify"}} component="div">
                    {userItem.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="p" sx={{textAlign:"justify"}} component="div">
                    {userItem.date}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant="p" sx={{textAlign:"justify"}} component="div">
                    {userItem.createdAt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/detail/${userItem.id}`}>
                    <Button size="small">Detail</Button>
                  </Link>
                </CardActions>
              </Item>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
