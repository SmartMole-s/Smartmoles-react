import React, { useState } from 'react';
// @mui
import {
  Box,
  Paper,
  Grid,
  Typography,
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
import { FarmTab, FarmTab2, FarmTab3 } from '../farm';
// hooks
import useResponsive from '../../../../hooks/useResponsive';

// const RootStyle = styled('div')(({ theme }) => ({
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundImage: 'linear-gradient(#00000059, #0000008a),url(/static/slider/smart_capillarity.jpg)',
//   padding: theme.spacing(10, 0),
//   [theme.breakpoints.up('md')]: {
//     height: 560,
//     padding: 0,
//   },
// }));

// ----------------------------------------------------------------------

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: '/static/product/capillarity/hub.png',
    title: 'Gateway',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/product/smartmoles.png',
    title: 'Gateway',
    rows: 4,
    cols: 2,
  },
];
const itemData2 = [
  {
    img: '/static/product/capillarity/hub.png',
    title: 'Gateway',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/product/capillarity/capillarity.png',
    title: 'Gateway',
    rows: 4,
    cols: 2,
  }
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

export default function FarmProduct() {
  // tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //----------------------------------------------------------------
  const [accExpanded, accSetExpanded] = useState(false);
  const isDesktop = useResponsive('up', 'md');

  const accHandleChange = (panel) => (event, isExpanded) => {
    accSetExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {isDesktop && (
        <Grid sx={{ my: 15, px: 20, mx: 'auto' }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="SF-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SF-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SF-3 CLD" {...a11yProps(2)} sx={{ fontSize: '1.5rem' }} />
              </Tabs>
            </Box>


            {/* // First Tab */}
            <TabPanel value={value} index={0}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={121}>
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Item>
                  </Box>
                </Grid>

                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <FarmTab />
                    </Item>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>



            {/* // Second Tab */}
            <TabPanel value={value} index={1}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={121}>
                        {itemData2.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Item>
                  </Box>
                </Grid>

                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <FarmTab2/>
                    </Item>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>


          {/* // Third Tab */}
            <TabPanel value={value} index={2}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={121}>
                        {itemData2.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Item>
                  </Box>
                </Grid>

                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <FarmTab3/>
                    </Item>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

          </Box>
        </Grid>
      )}





















      {!isDesktop && (
        <Grid sx={{ my: 5, mx: 'auto' }}>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginLeft: '15%' }}>
                <Tab label="SR-5 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SR-6 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={100}>
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Item>
                  </Box>
                </Grid>

                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <FarmTab3 />
                      <Accordion
                        accExpanded={accExpanded === 'panel1'}
                        onChange={accHandleChange('panel1')}
                        sx={{ width: '100%' }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>GATEWAY</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Teknik ??zellikleri ve Avantajlar??</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            End??striyel sulama ve g??breleme i??in ????z??m sunan ana kontrol ??nitesidir. Orta ve b??y??k
                            ??l??ekli projelerde siz profesyonel kullan??c??lar i??in ??zel tasarlanm????t??r.
                            <br />
                            <br />
                            Kolay kurulum.
                            <br />
                            <br />
                            Uzaktan eri??im ile h??zl?? destek sistemi(mobil cihaz, PC vb. ara??larla ula????labilece??iniz
                            internet aray??z??)
                            <br />
                            <br />
                            LoRa sistemi ile geni?? uygulama alan?? olu??turur(Merkezden 5 km???ye kadar uzanabilen
                            eri??im.Wi-Fi ve bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar).
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>GATEWAY</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Teknik ??zellikleri ve Avantajlar??</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            End??striyel sulama ve g??breleme i??in ????z??m sunan ana kontrol ??nitesidir. Orta ve b??y??k
                            ??l??ekli projelerde siz profesyonel kullan??c??lar i??in ??zel tasarlanm????t??r.
                            <br />
                            <br />
                            Kolay kurulum.
                            <br />
                            <br />
                            Uzaktan eri??im ile h??zl?? destek sistemi(mobil cihaz, PC vb. ara??larla ula????labilece??iniz
                            internet aray??z??)
                            <br />
                            <br />
                            LoRa sistemi ile geni?? uygulama alan?? olu??turur(Merkezden 5 km???ye kadar uzanabilen
                            eri??im.Wi-Fi ve bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar).
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
      )}
    </>
  );
}
