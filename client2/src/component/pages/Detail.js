import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Users } from '../../Users'

// IMPORT MATERIAL UI
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [users, setUsers] = useState(Users);

  console.log(id);

  useEffect(() => {
    handleSetDetail(id, users);
  }, [id]);

  const handleSetDetail = (id, users) => {
    users &&
      users.map((item) => {
        if (item.id == id) {
          console.log(item.img);
          setDetail(item);
        }
      });
  };

  return (
    <>
      { detail?.id ? (
        <Card sx={{ maxWidth: 600, marginLeft: "30%", marginTop: "2%" }}>
        <CardMedia component="img" alt="image" height="200" image={detail?.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Age: {detail?.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {detail?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {detail?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created Date: {detail?.createdAt}
          </Typography>
        </CardContent>
      </Card>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
