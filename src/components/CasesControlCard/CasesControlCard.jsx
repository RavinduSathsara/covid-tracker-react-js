import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CasesControlCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1592671963996-0b4616e9f042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            New Cases
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <h1>Cases : {props.local_new_cases}</h1>
            <h1>New deaths: {props.local_new_deaths}</h1>
            <p> According to : {props.update_date_time}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
