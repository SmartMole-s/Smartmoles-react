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
  AccordionSummary,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: '/static/images/test3.png',
    title: 'Breakfast',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/images/test1.png',
    title: 'Burger',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/images/test2.png',
    title: 'Camera',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/images/test4.png',
    title: 'Coffee',
    cols: 2,
    rows: 4,
    cols: 2,
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  //   author: '@arwinneil',
  //   // rows: 2,
  //   // cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   cols: 2,
  // },
];
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
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="SR-5 CLD" {...a11yProps(0)} />
              <Tab label="SR-6 CLD" {...a11yProps(1)} />
              {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <Grid container sx={{ mx: 'auto' }}>
              <Grid item xs={4}>
                <Box sx={{ width: '100%' }}>
                  <Item>
                    <ImageList sx={{ width: 500, height: 450 }} variant="quilted" cols={4} rowHeight={121}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                          <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Item>
                </Box>
              </Grid>

              <Grid item xs={8}>
                <Box sx={{ width: '100%' }}>
                  <Item>
                    <Accordion accExpanded={accExpanded === 'panel1'} onChange={accHandleChange('panel1')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>GATEWAY</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Teknik Özellikleri ve Avantajları</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve büyük ölçekli
                          projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır.
                          <br />
                          <br />
                          Kolay kurulum.
                          <br />
                          <br />
                          Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla ulaşılabileceğiniz
                          internet arayüzü)
                          <br />
                          <br />
                          LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                          erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>GATEWAY</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Teknik Özellikleri ve Avantajları</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve büyük ölçekli
                          projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır.
                          <br />
                          <br />
                          Kolay kurulum.
                          <br />
                          <br />
                          Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla ulaşılabileceğiniz
                          internet arayüzü)
                          <br />
                          <br />
                          LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                          erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Item>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Accordion accExpanded={accExpanded === 'panel1'} onChange={accHandleChange('panel1')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
                <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id
                  dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in
                  elit. Pellentesque convallis laoreet laoreet.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion accExpanded={accExpanded === 'panel3'} onChange={accHandleChange('panel3')}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Filtering has been entirely disabled for whole web server
                </Typography>
              </AccordionSummary>
            </Accordion>
          </TabPanel>
        </Box>
      </Grid>
    </>
  );
}
