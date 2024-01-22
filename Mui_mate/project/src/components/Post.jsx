import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";

const Feed = () => {
  return (
    <Box flex={4}>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Tejas Waydande"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/2176593/pexels-photo-2176593.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          {/* Use ExpandMoreIcon as a button */}
          <IconButton aria-label="expand more">
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
