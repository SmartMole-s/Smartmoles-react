import React from 'react';
// @mui
import { Container, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// components
import { MotionContainer } from '../../../components/animate';
// hooks
import useLocales from '../../../hooks/useLocales';
// mock
import { priceData } from '../../../_mock/priceData';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  // marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
        ...sx,
      }}
      {...other}
    />
  );
}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function CapillarityPriceList() {
  const [expanded, setExpanded] = React.useState(false);
  const { translate } = useLocales();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return priceData.map((item) => {
    const lang = localStorage.getItem('i18nextLng');
    return (
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%', marginTop: '10%' }}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'stretch',
            p: 1,
            m: 1,
          }}
        >
          <Item>
            <Card sx={{ maxWidth: 345, mx: 2, my: 2, boxShadow: 6 }}>
              <CardHeader
                title={lang === 'tr' ? item.titleTr : item.titleEn}
                sx={{ textAlign: 'center' }}
                // subheader="September 14, 2016"
              />
              <CardMedia component="img" height="auto" image={item.src} alt="SmartCapillarity" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {lang === 'tr' ? item.titleTr : item.titleEn}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton aria-label="add to form">
                  <Typography variant="body1" color="text.secondary">
                    {translate('item.askPriceTr')}
                  </Typography>
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{lang === 'tr' ? item.descTr : item.descEn}</Typography>
                  <Typography paragraph>{lang === 'tr' ? item.collapseTr : item.collapseEn}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
          <Item>
            <Card sx={{ maxWidth: 345, mx: 2, my: 2, boxShadow: 6 }}>
              <CardHeader
                title={lang === 'tr' ? item.titleTr : item.titleEn}
                sx={{ textAlign: 'center' }}
                // subheader="September 14, 2016"
              />
              <CardMedia component="img" height="auto" image={item.src} alt="SmartCapillarity" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {lang === 'tr' ? item.titleTr : item.titleEn}
                </Typography>
              </CardContent>
              <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton aria-label="add to form">
                  <Typography variant="body1" color="text.secondary">
                    {translate('item.askPriceTr')}
                  </Typography>
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{lang === 'tr' ? item.descTr : item.descEn}</Typography>
                  <Typography paragraph>{lang === 'tr' ? item.collapseTr : item.collapseEn}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Item>
        </Box>
      </Container>
    );
  });
}
