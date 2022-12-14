import React, { useState } from 'react';
// @mui
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Box,
  Paper,
  Grid,
  Typography,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary 
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// hooks
// import useLocales from '../../../hooks/useLocales';
// mock
// import { priceData } from '../../../_mock/priceData';

// ----------------------------------------------------------------------
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    // tabs
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
  const [expanded, setExpanded] = useState(false);

  // tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//----------------------------------------------------------------
const [accExpanded, accSetExpanded] = useState(false);

const accHandleChange = (panel) => (event, isExpanded) => {
  accSetExpanded(isExpanded ? panel : false);
};




//----------------------------------------------------------------

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container sx={{ my: 15, px: 20, mx: 'auto' }}>
        <Box sx={{ width: '100%'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="SR-5 CLD" {...a11yProps(0)} />
              <Tab label="SR-6 CLD" {...a11yProps(1)} />
              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid item xs={4}>
              <Box sx={{ width: '100%' }}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardHeader title="GATEWAY" sx={{ textAlign: 'center' }} />
                    <CardMedia
                      component="img"
                      height="auto"
                      image="https://i.hizliresim.com/tojsl7d.png"
                      alt="Smart Capillarity"
                    />
                    <CardContent>
                      <Typography variant="h6" color="text.secondary">
                        GATEWAY-2, endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve
                        büyük ölçekli projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">{/* <FavoriteIcon /> */}</IconButton>
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
                        <Typography paragraph>
                          *Kolay kurulum. <br />
                          <br /> *Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla
                          ulaşılabileceğiniz internet arayüzü).
                          <br />
                          <br /> *LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                          erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Item>
              </Box>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div>
      <Accordion accExpanded={accExpanded === 'panel1'} onChange={accHandleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion accExpanded={accExpanded === 'panel3'} onChange={accHandleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
  
      </Accordion>
    </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid item xs={4}>
              <Box sx={{ width: '100%' }}>
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
                        This impressive paella is a perfect party dish and a fun meal to cook together with your guests.
                        Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">{/* <FavoriteIcon /> */}</IconButton>
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
                        <Typography paragraph>
                          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                        </Typography>
                      </CardContent>
                    </Collapse>
                  </Card>
                </Item>
              </Box>
            </Grid>
          </TabPanel>
        </Box>
      </Grid>
    </>
  );
}
