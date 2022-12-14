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
import { RootTab, RootTab2 } from '../root';
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
    title: 'Hub',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/product/root/smartroot.png',
    title: 'SmartRoot',
    rows: 4,
    cols: 2,
  },
];
const itemData2 = [
  {
    img: '/static/product/capillarity/hub.png',
    title: 'Hub',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/product/root/smartroot.png',
    title: 'SmartRoot',
    rows: 4,
    cols: 2,
  },
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

export default function RootProduct() {
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
                <Tab label="SR-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SR-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
              </Tabs>
            </Box>

             <TabPanel value={value} index={0}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={'auto'}>
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
                      <RootTab />


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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>HUB</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            HUB merkezi ba??lant?? birimidir. GSM ve LoRa haberle??me mod??lleri sayesinde ??evre birimleri
                            i??in bir modem rol??ndedir. Ayr??ca sens??rlerden anlaml?? bilgi alma konusunu tek ba????na
                            ??stlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajlar??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kolay kurulum
                            <br />
                            <br />??? <b>??stedi??iniz konumdan arazi hakk??nda bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ??? LoRa sistemi ile geni?? uygulama alan?? olu??turur Merkezden 30 km???ye kadar uzanabilen
                            eri??im. Wi-Fi ve bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar
                            <br />
                            <br />
                            ??? Merkezi ba??lant??da bulunan sens??rlerle ileti??imi sa??layan haberle??me mod??l??
                            <br />
                            <br />
                            ??? Uzun ??m??rl?? pil, G??ne?? paneli veya ??ebeke gerilimi ile besleme imkan??. Uzaktan eri??im ile
                            h??zl?? destek sistemi (ak??ll?? telefon, bilgisayar vb. ara??larla ula????labilece??iniz internet
                            aray??z??)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 16 V uzun ??m??rl?? ve ??arj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />???{' '}
                            <b>Arazide elektrik i??in enerji kayna???? olmad??????nda bile kesintisiz g???? kayna???? sa??lar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Ba??lant?? yap??s??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??ne(KHAS), haberle??me protokol??m??z sayesinde uzaktan eri??im
                            imkan??
                            <br />
                            <br />
                            ??? Uzun mesafeli antenler ile olu??turulan LoRa haberle??me a????
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel u?? birimler</b>
                            </u>
                            <br />
                            <br />
                            ??? Merkezi kollekt??rde vana kontrol?? 1-6 adet.
                            <br />
                            <br />
                            ??? Sens??r ??stasyonu 1-255 adet
                            <br />
                            <br />
                            ??? AirMoles Hava ??stasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt
                            kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? ve u?? birimleriyle kullan??c??n??n ihtiya??lar??n??
                            kar????lar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>??nternete ba??lanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ??? Yerle??ik bir h??cresel modem kullan??l??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ??? GSM hatlar sayesinde d??nyan??n her yerinden eri??im
                            <br />
                            <br />
                            ??? LoRa protokol??n??n sa??lad?????? uzun mesafeli ileti??im
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihaz??n??n elde etti??i parametreler</b>
                            </u>
                            <br />
                            <br />
                            ??? Bas??n?? sens??r?? bilgisi
                            <br />
                            <br />
                            ??? Vana Kontrol??
                            <br />
                            <br />
                            ??? Su sayac?? bilgisi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>



                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>KHAS</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          KAP??LER HAREKET SENS??R??(KHAS) i??indeki e??siz, patentli, g??m??l?? sistemi ile bitki k??klerinin takip edece??i su hareketini ve topra????n nem de??erini anl??k olarak siz kullan??c??n??n hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktar??n?? birlikte g??rebilece??iniz d??nyadaki tek patentli teknolojidir. %97.34 oran??nda yerli ve milli bir ??r??n olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili k??k b??lgesi, su ve g??brenin %70-80 kullan??ld?????? b??lgesidir. Bu b??lgenin bitkinin di??er k??k b??lgelerinden ayr??m??n??n yap??lmas??n?? kolayla??t??ran teknoloji ile y??ksek do??rulukta etkili k??k b??lgesinin yerini kullan??c?? ile payla????r.
                            <br />
                            <br />
                            <u>
                              <b> Avantajlar?? </b>
                            </u>
                            <br />
                            <br />
                            ??? Toprak alt??ndaki su hareketini ve toprak nem de??erini anl??k olarak kullan??c??ya sunan bir sens??rd??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sens??r i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 5 V uzun ??m??rl?? pil
                            <br />
                            <br />
                            <u><b>Ba??lant?? yap??s??</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??n??n(KHAS) RS485 haberle??me protokol?? ile ba??lant?? imkan??
                            <br />
                            <br />
                            ??? Y??ksek kazan??l?? antenler ile olu??turulan LoRa a????(WiFi/Bluetooth sistemine g??re geni?? ??apl?? etkile??im ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? sayesinde kullan??c??ya ??e??itli sulama y??ntemi sunan sistemler bar??nd??r??yor
                            <br />
                            <br />
                            <u><b>Kullan??m alanlar??</b></u>
                            <br />
                            ??? Tarla &nbsp; ??? Bah??e &nbsp; ??? Sera &nbsp; ??? Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS???n??n elde etti??i parametreler</b></u>
                            <br />
                            <br />
                            ??? Kapiler su hareket sens??r??
                            <br />
                            <br />
                            ??? Nem sens??r??
                            <br />
                            <br />
                            ??? Etkili k??k b??lgesi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>


                    </Item>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

           <TabPanel value={value} index={1}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={'auto'}>
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
                      <RootTab2 />
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>HUB</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi ba??lant?? birimidir. GSM ve LoRa haberle??me mod??lleri sayesinde ??evre birimleri
                            i??in bir modem rol??ndedir. Ayr??ca sens??rlerden anlaml?? bilgi alma konusunu tek ba????na
                            ??stlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajlar??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kolay kurulum
                            <br />
                            <br />??? <b>??stedi??iniz konumdan arazi hakk??nda bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ??? LoRa sistemi ile geni?? uygulama alan?? olu??turur Merkezden 30 km???ye kadar uzanabilen
                            eri??im. Wi-Fi ve bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar
                            <br />
                            <br />
                            ??? Merkezi ba??lant??da bulunan sens??rlerle ileti??imi sa??layan haberle??me mod??l??
                            <br />
                            <br />
                            ??? Uzun ??m??rl?? pil, G??ne?? paneli veya ??ebeke gerilimi ile besleme imkan??. Uzaktan eri??im ile
                            h??zl?? destek sistemi (ak??ll?? telefon, bilgisayar vb. ara??larla ula????labilece??iniz internet
                            aray??z??)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 16 V uzun ??m??rl?? ve ??arj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />???{' '}
                            <b>Arazide elektrik i??in enerji kayna???? olmad??????nda bile kesintisiz g???? kayna???? sa??lar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Ba??lant?? yap??s??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??ne(KHAS), haberle??me protokol??m??z sayesinde uzaktan eri??im
                            imkan??
                            <br />
                            <br />
                            ??? Uzun mesafeli antenler ile olu??turulan LoRa haberle??me a????
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel u?? birimler</b>
                            </u>
                            <br />
                            <br />
                            ??? Merkezi kollekt??rde vana kontrol?? 1-6 adet.
                            <br />
                            <br />
                            ??? Sens??r ??stasyonu 1-255 adet
                            <br />
                            <br />
                            ??? AirMoles Hava ??stasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt
                            kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? ve u?? birimleriyle kullan??c??n??n ihtiya??lar??n??
                            kar????lar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>??nternete ba??lanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ??? Yerle??ik bir h??cresel modem kullan??l??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ??? GSM hatlar sayesinde d??nyan??n her yerinden eri??im
                            <br />
                            <br />
                            ??? LoRa protokol??n??n sa??lad?????? uzun mesafeli ileti??im
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihaz??n??n elde etti??i parametreler</b>
                            </u>
                            <br />
                            <br />
                            ??? Bas??n?? sens??r?? bilgisi
                            <br />
                            <br />
                            ??? Vana Kontrol??
                            <br />
                            <br />
                            ??? Su sayac?? bilgisi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>KHAS</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAP??LER HAREKET SENS??R??(KHAS) i??indeki e??siz, patentli, g??m??l?? sistemi ile bitki k??klerinin takip edece??i su hareketini ve topra????n nem de??erini anl??k olarak siz kullan??c??n??n hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktar??n?? birlikte g??rebilece??iniz d??nyadaki tek patentli teknolojidir. %97.34 oran??nda yerli ve milli bir ??r??n olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili k??k b??lgesi, su ve g??brenin %70-80 kullan??ld?????? b??lgesidir. Bu b??lgenin bitkinin di??er k??k b??lgelerinden ayr??m??n??n yap??lmas??n?? kolayla??t??ran teknoloji ile y??ksek do??rulukta etkili k??k b??lgesinin yerini kullan??c?? ile payla????r.
                            <br />
                            <br />
                            <u>
                              <b> Avantajlar?? </b>
                            </u>
                            <br />
                            <br />
                            ??? Toprak alt??ndaki su hareketini ve toprak nem de??erini anl??k olarak kullan??c??ya sunan bir sens??rd??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sens??r i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 5 V uzun ??m??rl?? pil
                            <br />
                            <br />
                            <u><b>Ba??lant?? yap??s??</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??n??n(KHAS) RS485 haberle??me protokol?? ile ba??lant?? imkan??
                            <br />
                            <br />
                            ??? Y??ksek kazan??l?? antenler ile olu??turulan LoRa a????(WiFi/Bluetooth sistemine g??re geni?? ??apl?? etkile??im ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? sayesinde kullan??c??ya ??e??itli sulama y??ntemi sunan sistemler bar??nd??r??yor
                            <br />
                            <br />
                            <u><b>Kullan??m alanlar??</b></u>
                            <br />
                            ??? Tarla &nbsp; ??? Bah??e &nbsp; ??? Sera &nbsp; ??? Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS???n??n elde etti??i parametreler</b></u>
                            <br />
                            <br />
                            ??? Kapiler su hareket sens??r??
                            <br />
                            <br />
                            ??? Nem sens??r??
                            <br />
                            <br />
                            ??? Etkili k??k b??lgesi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENS??R ??STASYONU</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          SENS??R ??STASYONU LoRa(Uzak mesafe haberle??me protokol??) y??ntemini kullan??r. Bir kapiler hareket sens??r??n??n topraktan ald?????? nem de??erlerini ve su hareket verilerini, yorumlamas?? i??in radyo dalgalar?? kullanarak HUB???a ula??t??r??r.
                            <br />
                            <br />
                            <u><b> Avantajlar??</b></u>
                            <br />
                            <br />
                            ??? Kolay kurulum
                            <br />
                            <br />
                            ??? LoRa sistemi ile geni?? uygulama alan?? olu??turur. Merkezden 30 km???ye kadar uzanabilen eri??im. Wi-Fi ve Bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar
                            <br />
                            <br />
                            ??? Uzun ??m??rl?? pil, g??ne?? paneli veya ??ebeke gerilimi ile besleme imkan??
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sens??r Kart?? i??in enerji kayna????</b></u>
                            <br />
                            <br />
                            ??? 16 V uzun ??m??rl?? ve ??arjedilebilir pil / G??ne?? paneli / Harici besleme(Trafo,UPS vb.)
                            <br />
                            <br />
                            ??? <b>Arazide elektrik i??in enerji kayna???? olmad??????nda bile kesintisiz g???? kayna???? sa??lar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Ba??lant?? yap??s??</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??ne(KHAS), haberle??me protokol??m??z sayesinde uzaktan eri??im imkan??
                            <br />
                            ??? Uzun mesafeli antenler ile olu??turulan LoRa haberle??me a????
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberle??me y??ntemi </b></u>
                            <br />
                            <br />
                            ??? HUB ile sa??l??kl?? bir haberle??meyi sa??layan LoRa protokol??
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Kullan??m alanlar??</b></u>
                            <br />
                            <br />
                            ??? Tarla &nbsp; ??? Bah??e &nbsp; ??? Sera &nbsp; ??? Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENS??R ??STASYONU???nun elde etti??i parametreler</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket sens??r?? &nbsp; ??? Nem &nbsp; ??? Etkili k??k b??lgesi 
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
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
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                <Tab label="SR-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SR-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
              </Tabs>
            </Box>


            <TabPanel value={value} index={0}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={'auto'}>
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
                      <RootTab />


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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>HUB</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            HUB merkezi ba??lant?? birimidir. GSM ve LoRa haberle??me mod??lleri sayesinde ??evre birimleri
                            i??in bir modem rol??ndedir. Ayr??ca sens??rlerden anlaml?? bilgi alma konusunu tek ba????na
                            ??stlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajlar??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kolay kurulum
                            <br />
                            <br />??? <b>??stedi??iniz konumdan arazi hakk??nda bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ??? LoRa sistemi ile geni?? uygulama alan?? olu??turur Merkezden 30 km???ye kadar uzanabilen
                            eri??im. Wi-Fi ve bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar
                            <br />
                            <br />
                            ??? Merkezi ba??lant??da bulunan sens??rlerle ileti??imi sa??layan haberle??me mod??l??
                            <br />
                            <br />
                            ??? Uzun ??m??rl?? pil, G??ne?? paneli veya ??ebeke gerilimi ile besleme imkan??. Uzaktan eri??im ile
                            h??zl?? destek sistemi (ak??ll?? telefon, bilgisayar vb. ara??larla ula????labilece??iniz internet
                            aray??z??)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 16 V uzun ??m??rl?? ve ??arj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />???{' '}
                            <b>Arazide elektrik i??in enerji kayna???? olmad??????nda bile kesintisiz g???? kayna???? sa??lar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Ba??lant?? yap??s??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??ne(KHAS), haberle??me protokol??m??z sayesinde uzaktan eri??im
                            imkan??
                            <br />
                            <br />
                            ??? Uzun mesafeli antenler ile olu??turulan LoRa haberle??me a????
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel u?? birimler</b>
                            </u>
                            <br />
                            <br />
                            ??? Merkezi kollekt??rde vana kontrol?? 1-6 adet.
                            <br />
                            <br />
                            ??? Sens??r ??stasyonu 1-255 adet
                            <br />
                            <br />
                            ??? AirMoles Hava ??stasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt
                            kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? ve u?? birimleriyle kullan??c??n??n ihtiya??lar??n??
                            kar????lar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>??nternete ba??lanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ??? Yerle??ik bir h??cresel modem kullan??l??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ??? GSM hatlar sayesinde d??nyan??n her yerinden eri??im
                            <br />
                            <br />
                            ??? LoRa protokol??n??n sa??lad?????? uzun mesafeli ileti??im
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihaz??n??n elde etti??i parametreler</b>
                            </u>
                            <br />
                            <br />
                            ??? Bas??n?? sens??r?? bilgisi
                            <br />
                            <br />
                            ??? Vana Kontrol??
                            <br />
                            <br />
                            ??? Su sayac?? bilgisi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>



                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>KHAS</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          KAP??LER HAREKET SENS??R??(KHAS) i??indeki e??siz, patentli, g??m??l?? sistemi ile bitki k??klerinin takip edece??i su hareketini ve topra????n nem de??erini anl??k olarak siz kullan??c??n??n hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktar??n?? birlikte g??rebilece??iniz d??nyadaki tek patentli teknolojidir. %97.34 oran??nda yerli ve milli bir ??r??n olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili k??k b??lgesi, su ve g??brenin %70-80 kullan??ld?????? b??lgesidir. Bu b??lgenin bitkinin di??er k??k b??lgelerinden ayr??m??n??n yap??lmas??n?? kolayla??t??ran teknoloji ile y??ksek do??rulukta etkili k??k b??lgesinin yerini kullan??c?? ile payla????r.
                            <br />
                            <br />
                            <u>
                              <b> Avantajlar?? </b>
                            </u>
                            <br />
                            <br />
                            ??? Toprak alt??ndaki su hareketini ve toprak nem de??erini anl??k olarak kullan??c??ya sunan bir sens??rd??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sens??r i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 5 V uzun ??m??rl?? pil
                            <br />
                            <br />
                            <u><b>Ba??lant?? yap??s??</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??n??n(KHAS) RS485 haberle??me protokol?? ile ba??lant?? imkan??
                            <br />
                            <br />
                            ??? Y??ksek kazan??l?? antenler ile olu??turulan LoRa a????(WiFi/Bluetooth sistemine g??re geni?? ??apl?? etkile??im ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? sayesinde kullan??c??ya ??e??itli sulama y??ntemi sunan sistemler bar??nd??r??yor
                            <br />
                            <br />
                            <u><b>Kullan??m alanlar??</b></u>
                            <br />
                            ??? Tarla &nbsp; ??? Bah??e &nbsp; ??? Sera &nbsp; ??? Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS???n??n elde etti??i parametreler</b></u>
                            <br />
                            <br />
                            ??? Kapiler su hareket sens??r??
                            <br />
                            <br />
                            ??? Nem sens??r??
                            <br />
                            <br />
                            ??? Etkili k??k b??lgesi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>


                    </Item>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>

           <TabPanel value={value} index={1}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={'auto'}>
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
                      <RootTab2 />
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>HUB</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi ba??lant?? birimidir. GSM ve LoRa haberle??me mod??lleri sayesinde ??evre birimleri
                            i??in bir modem rol??ndedir. Ayr??ca sens??rlerden anlaml?? bilgi alma konusunu tek ba????na
                            ??stlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajlar??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kolay kurulum
                            <br />
                            <br />??? <b>??stedi??iniz konumdan arazi hakk??nda bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ??? LoRa sistemi ile geni?? uygulama alan?? olu??turur Merkezden 30 km???ye kadar uzanabilen
                            eri??im. Wi-Fi ve bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar
                            <br />
                            <br />
                            ??? Merkezi ba??lant??da bulunan sens??rlerle ileti??imi sa??layan haberle??me mod??l??
                            <br />
                            <br />
                            ??? Uzun ??m??rl?? pil, G??ne?? paneli veya ??ebeke gerilimi ile besleme imkan??. Uzaktan eri??im ile
                            h??zl?? destek sistemi (ak??ll?? telefon, bilgisayar vb. ara??larla ula????labilece??iniz internet
                            aray??z??)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 16 V uzun ??m??rl?? ve ??arj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />???{' '}
                            <b>Arazide elektrik i??in enerji kayna???? olmad??????nda bile kesintisiz g???? kayna???? sa??lar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Ba??lant?? yap??s??</b>
                            </u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??ne(KHAS), haberle??me protokol??m??z sayesinde uzaktan eri??im
                            imkan??
                            <br />
                            <br />
                            ??? Uzun mesafeli antenler ile olu??turulan LoRa haberle??me a????
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel u?? birimler</b>
                            </u>
                            <br />
                            <br />
                            ??? Merkezi kollekt??rde vana kontrol?? 1-6 adet.
                            <br />
                            <br />
                            ??? Sens??r ??stasyonu 1-255 adet
                            <br />
                            <br />
                            ??? AirMoles Hava ??stasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt
                            kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? ve u?? birimleriyle kullan??c??n??n ihtiya??lar??n??
                            kar????lar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>??nternete ba??lanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ??? Yerle??ik bir h??cresel modem kullan??l??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ??? GSM hatlar sayesinde d??nyan??n her yerinden eri??im
                            <br />
                            <br />
                            ??? LoRa protokol??n??n sa??lad?????? uzun mesafeli ileti??im
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihaz??n??n elde etti??i parametreler</b>
                            </u>
                            <br />
                            <br />
                            ??? Bas??n?? sens??r?? bilgisi
                            <br />
                            <br />
                            ??? Vana Kontrol??
                            <br />
                            <br />
                            ??? Su sayac?? bilgisi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>KHAS</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAP??LER HAREKET SENS??R??(KHAS) i??indeki e??siz, patentli, g??m??l?? sistemi ile bitki k??klerinin takip edece??i su hareketini ve topra????n nem de??erini anl??k olarak siz kullan??c??n??n hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktar??n?? birlikte g??rebilece??iniz d??nyadaki tek patentli teknolojidir. %97.34 oran??nda yerli ve milli bir ??r??n olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili k??k b??lgesi, su ve g??brenin %70-80 kullan??ld?????? b??lgesidir. Bu b??lgenin bitkinin di??er k??k b??lgelerinden ayr??m??n??n yap??lmas??n?? kolayla??t??ran teknoloji ile y??ksek do??rulukta etkili k??k b??lgesinin yerini kullan??c?? ile payla????r.
                            <br />
                            <br />
                            <u>
                              <b> Avantajlar?? </b>
                            </u>
                            <br />
                            <br />
                            ??? Toprak alt??ndaki su hareketini ve toprak nem de??erini anl??k olarak kullan??c??ya sunan bir sens??rd??r
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sens??r i??in enerji kayna????</b>
                            </u>
                            <br />
                            <br />
                            ??? 5 V uzun ??m??rl?? pil
                            <br />
                            <br />
                            <u><b>Ba??lant?? yap??s??</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??n??n(KHAS) RS485 haberle??me protokol?? ile ba??lant?? imkan??
                            <br />
                            <br />
                            ??? Y??ksek kazan??l?? antenler ile olu??turulan LoRa a????(WiFi/Bluetooth sistemine g??re geni?? ??apl?? etkile??im ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ??? T??m ??r??nler kendine has terminal numaras?? ile programlan??r ve kullan??c?? ??r??n?? direkt kullanabilir
                            <br />
                            <br />
                            ??? S??rekli geli??tirilen g??m??l?? yaz??l??m?? sayesinde kullan??c??ya ??e??itli sulama y??ntemi sunan sistemler bar??nd??r??yor
                            <br />
                            <br />
                            <u><b>Kullan??m alanlar??</b></u>
                            <br />
                            ??? Tarla &nbsp; ??? Bah??e &nbsp; ??? Sera &nbsp; ??? Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS???n??n elde etti??i parametreler</b></u>
                            <br />
                            <br />
                            ??? Kapiler su hareket sens??r??
                            <br />
                            <br />
                            ??? Nem sens??r??
                            <br />
                            <br />
                            ??? Etkili k??k b??lgesi
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENS??R ??STASYONU</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>??r??n ??zellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          SENS??R ??STASYONU LoRa(Uzak mesafe haberle??me protokol??) y??ntemini kullan??r. Bir kapiler hareket sens??r??n??n topraktan ald?????? nem de??erlerini ve su hareket verilerini, yorumlamas?? i??in radyo dalgalar?? kullanarak HUB???a ula??t??r??r.
                            <br />
                            <br />
                            <u><b> Avantajlar??</b></u>
                            <br />
                            <br />
                            ??? Kolay kurulum
                            <br />
                            <br />
                            ??? LoRa sistemi ile geni?? uygulama alan?? olu??turur. Merkezden 30 km???ye kadar uzanabilen eri??im. Wi-Fi ve Bluetooth gibi teknolojilere g??re daha geni?? ??apl?? ??al????ma olana???? sa??lar
                            <br />
                            <br />
                            ??? Uzun ??m??rl?? pil, g??ne?? paneli veya ??ebeke gerilimi ile besleme imkan??
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sens??r Kart?? i??in enerji kayna????</b></u>
                            <br />
                            <br />
                            ??? 16 V uzun ??m??rl?? ve ??arjedilebilir pil / G??ne?? paneli / Harici besleme(Trafo,UPS vb.)
                            <br />
                            <br />
                            ??? <b>Arazide elektrik i??in enerji kayna???? olmad??????nda bile kesintisiz g???? kayna???? sa??lar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Ba??lant?? yap??s??</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket ve nem sens??r??ne(KHAS), haberle??me protokol??m??z sayesinde uzaktan eri??im imkan??
                            <br />
                            ??? Uzun mesafeli antenler ile olu??turulan LoRa haberle??me a????
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberle??me y??ntemi </b></u>
                            <br />
                            <br />
                            ??? HUB ile sa??l??kl?? bir haberle??meyi sa??layan LoRa protokol??
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Kullan??m alanlar??</b></u>
                            <br />
                            <br />
                            ??? Tarla &nbsp; ??? Bah??e &nbsp; ??? Sera &nbsp; ??? Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENS??R ??STASYONU???nun elde etti??i parametreler</b></u>
                            <br />
                            <br />
                            ??? Kapiler hareket sens??r?? &nbsp; ??? Nem &nbsp; ??? Etkili k??k b??lgesi 
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </Item>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>


          </Box>
        </Grid>
      )}
    </>
  );
}
