import React from 'react';
// @mui
import {
  // Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// components
// import { MotionContainer } from '../../../components/animate';
// hooks
import useLocales from '../../../hooks/useLocales';
// mock
import { priceData } from '../../../_mock/priceData';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  const lang = localStorage.getItem('i18nextLng');

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} item xs={6}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Shrimp and Chorizo Paella" sx={{ textAlign: 'center' }} />
            <CardMedia
              component="img"
              height="auto"
              image="https://i.hizliresim.com/tojsl7d.png"
              alt="Smart Capillarity"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
              </IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="Shrimp and Chorizo Paella" sx={{ textAlign: 'center' }} />
            <CardMedia
              component="img"
              height="auto"
              image="https://i.hizliresim.com/tojsl7d.png"
              alt="Smart Capillarity"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1
                cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                {/* <FavoriteIcon /> */}
              </IconButton>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Item>
      </Grid>
    </Box>
  );
}
