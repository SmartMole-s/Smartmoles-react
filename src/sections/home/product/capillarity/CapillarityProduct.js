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
  Button,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CapillarityTab, CapillarityTab2, CapillarityTab3, CapillarityTab4 } from '../capillarity';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import Iconify from '../../../../components/Iconify';

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
    img: '/static/product/capillarity/capillarity.png',
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
  },
];
const itemData3 = [
  {
    img: '/static/product/susayaci.png',
    title: 'Su Sayacı',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/product/kart.png',
    title: 'Kart',
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

export default function CapillarityProduct() {
  const theme = useTheme();

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
                <Tab label="SC-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SC-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SC-3 CLD" {...a11yProps(2)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SC-4 CLD" {...a11yProps(3)} sx={{ fontSize: '1.5rem' }} />
                <Button
                  sx={{ pointerEvents: 'none' }}
                  href="#"
                  startIcon={
                    <Iconify icon={'material-symbols:add-box-rounded'} width={40} height={40} marginRight={2} />
                  }
                />
                <Tab
                  label="Ek Ürünler"
                  {...a11yProps(4)}
                  sx={{ fontSize: '1.5rem', textShadow: `2px 2px 4px ${theme.palette.primary.light}` }}
                />
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
                      <CapillarityTab />


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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                      <CapillarityTab2 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENSÖR İSTASYONU</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          SENSÖR İSTASYONU LoRa(Uzak mesafe haberleşme protokolü) yöntemini kullanır. Bir kapiler hareket sensörünün topraktan aldığı nem değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak HUB’a ulaştırır.
                            <br />
                            <br />
                            <u><b> Avantajları</b></u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, güneş paneli veya şebeke gerilimi ile besleme imkanı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sensör Kartı için enerji kaynağı</b></u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarjedilebilir pil / Güneş paneli / Harici besleme(Trafo,UPS vb.)
                            <br />
                            <br />
                            ■ <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim imkanı
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberleşme yöntemi </b></u>
                            <br />
                            <br />
                            ■ HUB ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENSÖR İSTASYONU’nun elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü &nbsp; ■ Nem &nbsp; ■ Etkili kök bölgesi 
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




            <TabPanel value={value} index={2}>
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
                      <CapillarityTab3 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>
                            VANA YÖNETİMİ
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          Sulama sırasında ve sonrasında toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. HUB kutusu içeriğinde olan bir modüldür. Kullanıcının ihtiyaçlarına paralel çalışmaktadır. Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka destekli yönetme imkanı sağlar. Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6 vana modülü imkanı sunar).
                            <br />
                            <br />
                            Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka
                            destekli yönetme imkanı sağlar
                            <br />
                            <br />
                            Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6
                            vana modülü imkanı sunar)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sulama</b></u>
                            <br />
                            <br />
                            <strong>Su kaynaklarının %75’ine yakınını sulamada kullandığımız düşünülürse, azalan ve kirlenen su kaynaklarını ve toprağı, tarım yaptığımız havzalarda korumak hepimizin gelecek kuşaklara borcudur</strong>
                            <br />
                            <br />
                            ■ Sulamaya dayalı işletme gidelerini azaltmak istiyoruz
                            <br />
                            <br />
                            ■ Verimliliği artırıyoruz
                            <br />
                            <br />
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı
                            <br />
                            <br />
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ HUB ile birleşik yapıdadır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Uç birimler</b></u>
                            <br />
                            <br />
                            ■ Solenoid vana.12 V DC kilitli solenoidler ile Vana Kontrolü(aç/kapa)
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




            <TabPanel value={value} index={3}>
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
                      <CapillarityTab4 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENSÖR İSTASYONU</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          SENSÖR İSTASYONU LoRa(Uzak mesafe haberleşme protokolü) yöntemini kullanır. Bir kapiler hareket sensörünün topraktan aldığı nem değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak HUB’a ulaştırır.
                            <br />
                            <br />
                            <u><b> Avantajları</b></u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, güneş paneli veya şebeke gerilimi ile besleme imkanı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sensör Kartı için enerji kaynağı</b></u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarjedilebilir pil / Güneş paneli / Harici besleme(Trafo,UPS vb.)
                            <br />
                            <br />
                            ■ <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim imkanı
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberleşme yöntemi </b></u>
                            <br />
                            <br />
                            ■ HUB ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENSÖR İSTASYONU’nun elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü &nbsp; ■ Nem &nbsp; ■ Etkili kök bölgesi 
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>
                            VANA YÖNETİMİ
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          Sulama sırasında ve sonrasında toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. HUB kutusu içeriğinde olan bir modüldür. Kullanıcının ihtiyaçlarına paralel çalışmaktadır. Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka destekli yönetme imkanı sağlar. Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6 vana modülü imkanı sunar).
                            <br />
                            <br />
                            Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka
                            destekli yönetme imkanı sağlar
                            <br />
                            <br />
                            Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6
                            vana modülü imkanı sunar)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sulama</b></u>
                            <br />
                            <br />
                            <strong>Su kaynaklarının %75’ine yakınını sulamada kullandığımız düşünülürse, azalan ve kirlenen su kaynaklarını ve toprağı, tarım yaptığımız havzalarda korumak hepimizin gelecek kuşaklara borcudur</strong>
                            <br />
                            <br />
                            ■ Sulamaya dayalı işletme gidelerini azaltmak istiyoruz
                            <br />
                            <br />
                            ■ Verimliliği artırıyoruz
                            <br />
                            <br />
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı
                            <br />
                            <br />
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ HUB ile birleşik yapıdadır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Uç birimler</b></u>
                            <br />
                            <br />
                            ■ Solenoid vana.12 V DC kilitli solenoidler ile Vana Kontrolü(aç/kapa)
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




            <TabPanel value={value} index={5}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={'auto'}>
                        {itemData3.map((item) => (
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>BASINÇ SENSÖRÜ MODÜLÜ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Dijital çıkışlı basınç sensörlerinin çıkış değerini okumamızı sağlayan kısım isteğe bağlı
                            olarak VANA KONTROL ÜNİTESİ’nde ve POMPA KONTROL ÜNİTESİ’nde mevcuttur.
                            <br />
                            <br />
                            Belli bir bar(Mpa/10) değerine kadar olan ölçümleri kullanıcıya SmartValve arayüzünden
                            ulaştırır.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SU SAYACI MODÜLÜ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Pulse çıkışlı su sayaçlarının değerini okumamızı sağlayan kısım isteğe bağlı olarak VANA
                            KONTROL ÜNİTESİ’nde ve POMPA KONTROL ÜNİTESİ’nde mevcuttur.
                            <br />
                            <br />
                            Pulse başına farklı hacimlerde su geçişinin denetimini yapacak olan bu kısım kullanıcının
                            hizmetine sunulmuştur.
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
                <Tab label="SC-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SC-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SC-3 CLD" {...a11yProps(2)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SC-4 CLD" {...a11yProps(3)} sx={{ fontSize: '1.5rem' }} />
                <Button
                  sx={{ pointerEvents: 'none' }}
                  href="#"
                  startIcon={
                    <Iconify icon={'material-symbols:add-box-rounded'} width={40} height={40} marginRight={2} />
                  }
                />
                <Tab
                  label="Ek Ürünler"
                  {...a11yProps(4)}
                  sx={{ fontSize: '1.5rem', textShadow: `2px 2px 4px ${theme.palette.primary.light}` }}
                />
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
                      <CapillarityTab />


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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                      <CapillarityTab2 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENSÖR İSTASYONU</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          SENSÖR İSTASYONU LoRa(Uzak mesafe haberleşme protokolü) yöntemini kullanır. Bir kapiler hareket sensörünün topraktan aldığı nem değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak HUB’a ulaştırır.
                            <br />
                            <br />
                            <u><b> Avantajları</b></u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, güneş paneli veya şebeke gerilimi ile besleme imkanı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sensör Kartı için enerji kaynağı</b></u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarjedilebilir pil / Güneş paneli / Harici besleme(Trafo,UPS vb.)
                            <br />
                            <br />
                            ■ <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim imkanı
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberleşme yöntemi </b></u>
                            <br />
                            <br />
                            ■ HUB ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENSÖR İSTASYONU’nun elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü &nbsp; ■ Nem &nbsp; ■ Etkili kök bölgesi 
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




            <TabPanel value={value} index={2}>
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
                      <CapillarityTab3 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>
                            VANA YÖNETİMİ
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          Sulama sırasında ve sonrasında toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. HUB kutusu içeriğinde olan bir modüldür. Kullanıcının ihtiyaçlarına paralel çalışmaktadır. Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka destekli yönetme imkanı sağlar. Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6 vana modülü imkanı sunar).
                            <br />
                            <br />
                            Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka
                            destekli yönetme imkanı sağlar
                            <br />
                            <br />
                            Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6
                            vana modülü imkanı sunar)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sulama</b></u>
                            <br />
                            <br />
                            <strong>Su kaynaklarının %75’ine yakınını sulamada kullandığımız düşünülürse, azalan ve kirlenen su kaynaklarını ve toprağı, tarım yaptığımız havzalarda korumak hepimizin gelecek kuşaklara borcudur</strong>
                            <br />
                            <br />
                            ■ Sulamaya dayalı işletme gidelerini azaltmak istiyoruz
                            <br />
                            <br />
                            ■ Verimliliği artırıyoruz
                            <br />
                            <br />
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı
                            <br />
                            <br />
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ HUB ile birleşik yapıdadır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Uç birimler</b></u>
                            <br />
                            <br />
                            ■ Solenoid vana.12 V DC kilitli solenoidler ile Vana Kontrolü(aç/kapa)
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




            <TabPanel value={value} index={3}>
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
                      <CapillarityTab4 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            HUB merkezi bağlantı birimidir. GSM ve LoRa haberleşme modülleri sayesinde çevre birimleri
                            için bir modem rolündedir. Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Avantajları</b>
                            </u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />■ <b>İstediğiniz konumdan arazi hakkında bilgi sahibi olabilirsiniz</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur Merkezden 30 km’ye kadar uzanabilen
                            erişim. Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Merkezi bağlantıda bulunan sensörlerle iletişimi sağlayan haberleşme modülü
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, Güneş paneli veya şebeke gerilimi ile besleme imkanı. Uzaktan erişim ile
                            hızlı destek sistemi (akıllı telefon, bilgisayar vb. araçlarla ulaşılabileceğiniz internet
                            arayüzü)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarj edilebilir pil / Solar Panel / Harici Besleme(Trafo vb.)
                            <br />
                            <br />■{' '}
                            <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Bağlantı yapısı</b>
                            </u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim
                            imkanı
                            <br />
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Opsiyonel uç birimler</b>
                            </u>
                            <br />
                            <br />
                            ■ Merkezi kollektörde vana kontrolü 1-6 adet.
                            <br />
                            <br />
                            ■ Sensör İstasyonu 1-255 adet
                            <br />
                            <br />
                            ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Programlama</b>
                            </u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>İnternete bağlanma yolumuz</b>
                            </u>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>Teknolojilerimiz</b>
                            </u>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa protokolünün sağladığı uzun mesafeli iletişim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                              <b>HUB cihazının elde ettiği parametreler</b>
                            </u>
                            <br />
                            <br />
                            ■ Basınç sensörü bilgisi
                            <br />
                            <br />
                            ■ Vana Kontrolü
                            <br />
                            <br />
                            ■ Su sayacı bilgisi
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine sunar. <b>Toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. %97.34 oranında yerli ve milli bir ürün olmakla gurur duyuyoruz.</b>
                          <br />
                          <br />
                           Etkili kök bölgesi, su ve gübrenin %70-80 kullanıldığı bölgesidir. Bu bölgenin bitkinin diğer kök bölgelerinden ayrımının yapılmasını kolaylaştıran teknoloji ile yüksek doğrulukta etkili kök bölgesinin yerini kullanıcı ile paylaşır.
                            <br />
                            <br />
                            <u>
                              <b> Avantajları </b>
                            </u>
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir sensördür
                            <br />
                            <br />
                            <br />
                            <br />
                            <u>
                            <b>Sensör için enerji kaynağı</b>
                            </u>
                            <br />
                            <br />
                            ■ 5 V uzun ömürlü pil
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <u><b> Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <u><b>KHAS’nün elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesi
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENSÖR İSTASYONU</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          SENSÖR İSTASYONU LoRa(Uzak mesafe haberleşme protokolü) yöntemini kullanır. Bir kapiler hareket sensörünün topraktan aldığı nem değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak HUB’a ulaştırır.
                            <br />
                            <br />
                            <u><b> Avantajları</b></u>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            ■ Uzun ömürlü pil, güneş paneli veya şebeke gerilimi ile besleme imkanı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sensör Kartı için enerji kaynağı</b></u>
                            <br />
                            <br />
                            ■ 16 V uzun ömürlü ve şarjedilebilir pil / Güneş paneli / Harici besleme(Trafo,UPS vb.)
                            <br />
                            <br />
                            ■ <b>Arazide elektrik için enerji kaynağı olmadığında bile kesintisiz güç kaynağı sağlar</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS), haberleşme protokolümüz sayesinde uzaktan erişim imkanı
                            <br />
                            ■ Uzun mesafeli antenler ile oluşturulan LoRa haberleşme ağı
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberleşme yöntemi </b></u>
                            <br />
                            <br />
                            ■ HUB ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Kullanım alanları</b></u>
                            <br />
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENSÖR İSTASYONU’nun elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü &nbsp; ■ Nem &nbsp; ■ Etkili kök bölgesi 
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>
                            VANA YÖNETİMİ
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                          Sulama sırasında ve sonrasında toprak profilinde su hareketlerini ve nem miktarını birlikte görebileceğiniz dünyadaki tek patentli teknolojidir. HUB kutusu içeriğinde olan bir modüldür. Kullanıcının ihtiyaçlarına paralel çalışmaktadır. Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka destekli yönetme imkanı sağlar. Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6 vana modülü imkanı sunar).
                            <br />
                            <br />
                            Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka
                            destekli yönetme imkanı sağlar
                            <br />
                            <br />
                            Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6
                            vana modülü imkanı sunar)
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sulama</b></u>
                            <br />
                            <br />
                            <strong>Su kaynaklarının %75’ine yakınını sulamada kullandığımız düşünülürse, azalan ve kirlenen su kaynaklarını ve toprağı, tarım yaptığımız havzalarda korumak hepimizin gelecek kuşaklara borcudur</strong>
                            <br />
                            <br />
                            ■ Sulamaya dayalı işletme gidelerini azaltmak istiyoruz
                            <br />
                            <br />
                            ■ Verimliliği artırıyoruz
                            <br />
                            <br />
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı
                            <br />
                            <br />
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ HUB ile birleşik yapıdadır
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Uç birimler</b></u>
                            <br />
                            <br />
                            ■ Solenoid vana.12 V DC kilitli solenoidler ile Vana Kontrolü(aç/kapa)
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




            <TabPanel value={value} index={5}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight={'auto'}>
                        {itemData3.map((item) => (
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>BASINÇ SENSÖRÜ MODÜLÜ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Dijital çıkışlı basınç sensörlerinin çıkış değerini okumamızı sağlayan kısım isteğe bağlı
                            olarak VANA KONTROL ÜNİTESİ’nde ve POMPA KONTROL ÜNİTESİ’nde mevcuttur.
                            <br />
                            <br />
                            Belli bir bar(Mpa/10) değerine kadar olan ölçümleri kullanıcıya SmartValve arayüzünden
                            ulaştırır.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SU SAYACI MODÜLÜ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Pulse çıkışlı su sayaçlarının değerini okumamızı sağlayan kısım isteğe bağlı olarak VANA
                            KONTROL ÜNİTESİ’nde ve POMPA KONTROL ÜNİTESİ’nde mevcuttur.
                            <br />
                            <br />
                            Pulse başına farklı hacimlerde su geçişinin denetimini yapacak olan bu kısım kullanıcının
                            hizmetine sunulmuştur.
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
