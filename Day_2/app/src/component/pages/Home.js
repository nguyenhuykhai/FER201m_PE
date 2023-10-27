import * as React from "react";
import { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Users } from "../../Users";
import MediaCard from "./Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "-webkit-center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  marginTop: "2rem",
}));

function Home() {
  const [data, setData] = useState([]);

  function handleRenderData(users){
    users.map(item => {
        if (item.status == true) {
            setData(data, item);
        }
    })
  }
  

  useEffect(() => {
    handleRenderData(Users)
  },[])

  return (
    <>
      {data && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {data &&
              data.map((item) => (
                <Grid item xs={4}>
                  <Item>
                    <MediaCard item={item} />
                  </Item>
                </Grid>
              ))}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default Home;
