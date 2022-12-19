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
import { MolesWhat } from '../moles';
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
  {
    img: '/static/product/merkez.png',
    title: 'Gateway',
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

export default function RecipeReviewCard() {
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
                <Tab label="SM-1 CLD &nbsp; |" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SM-2 CLD &nbsp; |" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SM-3 CLD &nbsp; |" {...a11yProps(2)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SM-4 CLD &nbsp; +" {...a11yProps(3)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="Pakete Eklenebilecek Ürünler" {...a11yProps(4)} sx={{ fontSize: '1rem' }} />
              </Tabs>
            </Box>

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
                      <MolesWhat />
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
                            için bir modem rolündedir.Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir(modül bağlantıları ve RS485 bağlantı imkanı).
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            ■ Yerleşik RS485 haberleşme çıkış portu. Pil, Güneş paneli veya şebeke gerilimi ile besleme
                            imkanı. Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla
                            ulaşılabileceğiniz internet arayüzü). <br />
                            <br />
                            ■ HUB için enerji kaynağı: DC gerilim ile beslenebilir; 16 V pil / Solar Panel / Harici
                            Besleme(Trafo vb.)
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı.
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            ■ Opsiyonel uç birimler: Vana Kontrolü 1-6 adet. Sensör İstasyonu 1-99 adet.
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılıyor.
                            <br />
                            <br />
                            <b>İnternete bağlanma yolumuz</b>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır.
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa haberleşmenin sağladığı ara birimlerle uzun mesafeli etkileşim.
                            <br />
                            <br />
                            ■ Dahili olarak RS485 haberleşme protokolü kullanma olanağı
                            <br />
                            <br />
                            <b>HUB cihazının ulaşabildiği uç birimler sayesinde elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü
                            <br />
                            <br />
                            ■ Vana Kontrolü I/O, Su sayacı,
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />■ Toprak sıcaklığı, Toprak EC(elektriksel geçirgenlik)
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
                            KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin
                            takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine
                            sunar.
                            <br />
                            <br />
                            <b> Avantajları </b>
                            <br />
                            <br />
                            ■ Tamamen yerli tasarım/imalat
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar)
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir
                            sensördür
                            <br />
                            <br />
                            ■ Bakım maliyetinin olmaması
                            <br />
                            <br />
                            <b>Sensör için enerji kaynağı</b>
                            <br />
                            <br />
                            ■ DC gerilim ile beslenebilir; 5 V pil.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli)
                            <br />
                            <br />
                            <b> Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan
                            sistemler barındırıyor.
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <b>KHAS’nün elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Kapiler su hareket sensörü
                            <br />
                            <br />
                            ■ Nem sensörü
                            <br />
                            <br />
                            ■ Etkili kök bölgesini saptama
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />■ Yapay zekaya öğretilen sulama süreleri ile sistemin tarlaya ne kadar hacimde su
                            gerektiğine karar verebilmesi.
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
                      <MolesWhat />
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
                            için bir modem rolündedir.Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir(modül bağlantıları ve RS485 bağlantı imkanı).
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            ■ Yerleşik RS485 haberleşme çıkış portu. Pil, Güneş paneli veya şebeke gerilimi ile besleme
                            imkanı. Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla
                            ulaşılabileceğiniz internet arayüzü). <br />
                            <br />
                            ■ HUB için enerji kaynağı: DC gerilim ile beslenebilir; 16 V pil / Solar Panel / Harici
                            Besleme(Trafo vb.)
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı.
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            ■ Opsiyonel uç birimler: Vana Kontrolü 1-6 adet. Sensör İstasyonu 1-99 adet.
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılıyor.
                            <br />
                            <br />
                            <b>İnternete bağlanma yolumuz</b>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır.
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa haberleşmenin sağladığı ara birimlerle uzun mesafeli etkileşim.
                            <br />
                            <br />
                            ■ Dahili olarak RS485 haberleşme protokolü kullanma olanağı
                            <br />
                            <br />
                            <b>HUB cihazının ulaşabildiği uç birimler sayesinde elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü
                            <br />
                            <br />
                            ■ Vana Kontrolü I/O, Su sayacı,
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />■ Toprak sıcaklığı, Toprak EC(elektriksel geçirgenlik)
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
                            KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin
                            takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine
                            sunar.
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Tamamen yerli tasarım/imalat. LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5
                            km’ye kadar uzanabilen erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı
                            çalışma olanağı sağlar)
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir
                            sensördür
                            <br />
                            <br />
                            ■ Bakım maliyetinin olmaması
                            <br />
                            <br />
                            ■ Sensör için enerji kaynağı: DC gerilim ile beslenebilir; 5 V pil.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı ■
                            Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı
                            etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk
                            kullanabilir ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama
                            yöntemi sunan sistemler barındırıyor.
                            <br />
                            <br />
                            <b></b> Kullanım alanları:
                            <br />
                            ■ Tarla ■ Bahçe ■ Sera ■ Peyzaj
                            <br />
                            <br />
                            <b> ■ KHAS’nün elde ettiği parametreler</b>
                            <br />
                            - Kapiler su hareket sensörü
                            <br />
                            - Nem sensörü
                            <br />
                            - Etkili kök bölgesini saptama
                            <br />
                            <br />■ Eklemek istediğimiz hizmetler: Yapay zekaya öğretilen sulama süreleri ile sistemin
                            tarlaya ne kadar hacimde su gerektiğine karar verebilmesi.
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
                            SENSÖR İSTASYONU LoRa protokolünü kullanır. Bir kapiler hareket sensörünün topraktan aldığı
                            nem değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak HUB’a
                            ulaştırır.
                            <br />
                            <br />
                            <b> Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum. 
                            LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar
                            uzanabilen erişim 
                            <br />
                            <br />
                            ■ Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma
                            olanağı sağlar)
                            <br />
                            <br />
                            <b>Sensör Kartı için enerji kaynağı</b>
                            <br />
                            <br />
                            ■ DC gerilim ile beslenebilir; 16 V pil / Solar Panel 10W.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı
                            etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <b> Haberleşme yöntemi </b>
                            <br />
                            <br />
                            ■ HUB ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <b>SENSÖR İSTASYONU’nun elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü &nbsp; ■ Nem
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />
                            ■ Yapay zekaya öğretilen sulama süreleri ile sistemin
                            tarlaya ne kadar hacimde su gerektiğine karar verebilmesi.
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
                      <MolesWhat />
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
                            için bir modem rolündedir.Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir(modül bağlantıları ve RS485 bağlantı imkanı).
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            ■ Yerleşik RS485 haberleşme çıkış portu. Pil, Güneş paneli veya şebeke gerilimi ile besleme
                            imkanı. Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla
                            ulaşılabileceğiniz internet arayüzü). <br />
                            <br />
                            ■ HUB için enerji kaynağı: DC gerilim ile beslenebilir; 16 V pil / Solar Panel / Harici
                            Besleme(Trafo vb.)
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı.
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            ■ Opsiyonel uç birimler: Vana Kontrolü 1-6 adet. Sensör İstasyonu 1-99 adet.
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılıyor.
                            <br />
                            <br />
                            <b>İnternete bağlanma yolumuz</b>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır.
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa haberleşmenin sağladığı ara birimlerle uzun mesafeli etkileşim.
                            <br />
                            <br />
                            ■ Dahili olarak RS485 haberleşme protokolü kullanma olanağı
                            <br />
                            <br />
                            <b>HUB cihazının ulaşabildiği uç birimler sayesinde elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü
                            <br />
                            <br />
                            ■ Vana Kontrolü I/O, Su sayacı,
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />■ Toprak sıcaklığı, Toprak EC(elektriksel geçirgenlik)
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
                            KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin
                            takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine
                            sunar.
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Tamamen yerli tasarım/imalat. LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5
                            km’ye kadar uzanabilen erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı
                            çalışma olanağı sağlar)
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir
                            sensördür
                            <br />
                            <br />
                            ■ Bakım maliyetinin olmaması
                            <br />
                            <br />
                            ■ Sensör için enerji kaynağı: DC gerilim ile beslenebilir; 5 V pil.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı ■
                            Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı
                            etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk
                            kullanabilir ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama
                            yöntemi sunan sistemler barındırıyor.
                            <br />
                            <br />
                            <b></b> Kullanım alanları:
                            <br />
                            ■ Tarla ■ Bahçe ■ Sera ■ Peyzaj
                            <br />
                            <br />
                            <b> ■ KHAS’nün elde ettiği parametreler</b>
                            <br />
                            - Kapiler su hareket sensörü
                            <br />
                            - Nem sensörü
                            <br />
                            - Etkili kök bölgesini saptama
                            <br />
                            <br />■ Eklemek istediğimiz hizmetler: Yapay zekaya öğretilen sulama süreleri ile sistemin
                            tarlaya ne kadar hacimde su gerektiğine karar verebilmesi.
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
                            VANA YÖNETİMİ <br /> (HUB'A DAHİLDİR)
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            VANA YÖNETİMİ, HUB kutusu içeriğinde olan bir modüldür. Kullanıcının ihtiyaçlarına paralel
                            çalışmaktadır. 
                            <br /> 
                            <br /> 
                            Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini
                            yapay zeka destekli yönetme imkanı sağlar.
                            <br />
                            <br />
                            Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6
                            vana modülü imkanı sunar).
                            <br />
                            <br />
                            <b>Sulama</b> 
                            <br /> 
                            <br /> 
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı
                            <br /> 
                            <br /> 
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br /> 
                            <br /> 
                            ■ HUB ile tümleşik yapıdadır.
                            <br />
                            <br /> 
                            <b>Uç birimler</b>
                            <br /> 
                            <br /> 
                            ■ Solenoid vana.12V DC kilitli solenoidler ile Vana Kontrolü I/O.
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
                      <MolesWhat />
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
                            için bir modem rolündedir.Ayrıca sensörlerden anlamlı bilgi alma konusunu tek başına
                            üstlenebilir(modül bağlantıları ve RS485 bağlantı imkanı).
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            ■ Yerleşik RS485 haberleşme çıkış portu. Pil, Güneş paneli veya şebeke gerilimi ile besleme
                            imkanı. Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla
                            ulaşılabileceğiniz internet arayüzü). <br />
                            <br />
                            ■ HUB için enerji kaynağı: DC gerilim ile beslenebilir; 16 V pil / Solar Panel / Harici
                            Besleme(Trafo vb.)
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı.
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            ■ Opsiyonel uç birimler: Vana Kontrolü 1-6 adet. Sensör İstasyonu 1-99 adet.
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını
                            karşılıyor.
                            <br />
                            <br />
                            <b>İnternete bağlanma yolumuz</b>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır.
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde dünyanın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa haberleşmenin sağladığı ara birimlerle uzun mesafeli etkileşim.
                            <br />
                            <br />
                            ■ Dahili olarak RS485 haberleşme protokolü kullanma olanağı
                            <br />
                            <br />
                            <b>HUB cihazının ulaşabildiği uç birimler sayesinde elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü
                            <br />
                            <br />
                            ■ Vana Kontrolü I/O, Su sayacı,
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />■ Toprak sıcaklığı, Toprak EC(elektriksel geçirgenlik)
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
                            KAPİLER HAREKET SENSÖRÜ(KHAS) içindeki eşsiz, patentli, gömülü sistemi ile bitki köklerinin
                            takip edeceği su hareketini ve toprağın nem değerini anlık olarak siz kullanıcının hizmetine
                            sunar.
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Tamamen yerli tasarım/imalat. LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5
                            km’ye kadar uzanabilen erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı
                            çalışma olanağı sağlar)
                            <br />
                            <br />
                            ■ Toprak altındaki su hareketini ve toprak nem değerini anlık olarak kullanıcıya sunan bir
                            sensördür
                            <br />
                            <br />
                            ■ Bakım maliyetinin olmaması
                            <br />
                            <br />
                            ■ Sensör için enerji kaynağı: DC gerilim ile beslenebilir; 5 V pil.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörünün(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı ■
                            Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş çaplı
                            etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk
                            kullanabilir ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama
                            yöntemi sunan sistemler barındırıyor.
                            <br />
                            <br />
                            <b></b> Kullanım alanları:
                            <br />
                            ■ Tarla ■ Bahçe ■ Sera ■ Peyzaj
                            <br />
                            <br />
                            <b> ■ KHAS’nün elde ettiği parametreler</b>
                            <br />
                            - Kapiler su hareket sensörü
                            <br />
                            - Nem sensörü
                            <br />
                            - Etkili kök bölgesini saptama
                            <br />
                            <br />■ Eklemek istediğimiz hizmetler: Yapay zekaya öğretilen sulama süreleri ile sistemin
                            tarlaya ne kadar hacimde su gerektiğine karar verebilmesi.
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
                            SENSÖR İSTASYONU LoRa protokolünü kullanır. Bir kapiler hareket sensörünün topraktan aldığı
                            nem değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak HUB’a
                            ulaştırır.
                            <br />
                            <br />
                            ■ Avantajları: Kolay kurulum. LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5
                            km’ye kadar uzanabilen erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı
                            çalışma olanağı sağlar).
                            <br />
                            <br />
                            ■ Sensör Kartı için enerji kaynağı: DC gerilim ile beslenebilir; 16 V pil / Solar Panel 10W.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile
                            bağlantı imkanı. Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine
                            göre geniş çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            ■ Haberleşme yöntemi: HUB ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            ■ SENSÖR İSTASYONU’nun elde ettiği parametreler: Kapiler hareket sensörü. Nem. <br />
                            <br />
                            ■ Kullanım alanları
                            <br />
                            Tarla - Bahçe - Sera - Peyzaj
                            <br />
                            <br />■ Eklemek istediğimiz hizmetler: Yapay zekaya öğretilen sulama süreleri ile sistemin
                            tarlaya ne kadar hacimde su gerektiğine karar verebilmesi.
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
                            VANA YÖNETİMİ <br /> (HUB'A DAHİLDİR)
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          VANA YÖNETİMİ, HUB kutusu içeriğinde olan bir modüldür. Kullanıcının ihtiyaçlarına paralel
                            çalışmaktadır. 
                            <br /> 
                            <br /> 
                            Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini
                            yapay zeka destekli yönetme imkanı sağlar.
                            <br />
                            <br />
                            Her bir vana modülü ilgili tek bir solenoid vanayı kontrol eder(HUB kutusu, size en fazla 6
                            vana modülü imkanı sunar).
                            <br />
                            <br />
                            <b>Sulama</b> 
                            <br /> 
                            <br /> 
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı
                            <br /> 
                            <br /> 
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar.
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br /> 
                            <br /> 
                            ■ HUB ile tümleşik yapıdadır.
                            <br />
                            <br /> 
                            <b>Uç birimler</b>
                            <br /> 
                            <br /> 
                            ■ Solenoid vana.12V DC kilitli solenoidler ile Vana Kontrolü I/O.
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
                      <MolesWhat />
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
                          <Typography sx={{ color: 'text.secondary' }}>Teknik Özellikleri ve Avantajları</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve büyük
                            ölçekli projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır.
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
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>GATEWAY</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Teknik Özellikleri ve Avantajları</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            Endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve büyük
                            ölçekli projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır.
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
      )}
    </>
  );
}
