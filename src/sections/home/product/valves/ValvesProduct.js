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
import { ValvesTab, ValvesTab2 } from '../valves';
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

export default function ValvesProduct() {
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
                <Tab label="SV-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SV-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
              </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
              <Grid container sx={{ mx: 'auto' }}>
                <Grid item md={12} lg={6}>
                  <Box sx={{ width: '100%' }}>
                    <Item>
                      <ImageList sx={{ height: 'auto' }} variant="quilted" cols={4} rowHeight="auto">
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
                      <ValvesTab />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            GATEWAY, endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve
                            büyük ölçekli projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla ulaşılabileceğiniz
                            internet arayüzü).
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>GATEWAY için enerji kaynağı</b>
                            <br />
                            <br />
                            - DC gerilim ile beslenebilir;
                            <br />
                            <br />
                            ■ 5 V / 0.5 Ah besleme.
                            <br />
                            <br />
                            ■ USB port ile PC’den besleme imkanı.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ 255 adet cihaza kadar erişim imkanı.
                            <br />
                            <br />
                            ■ 4 farklı kanaldan tüm alt birimleri kontrol eden hızlı Lora sistemi( WiFi/Bluetooth
                            sistemine göre geniş çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <b>Opsiyonel uç birimler</b>
                            <br />
                            <br />
                            ■ Vana Kontrolü 1-200 adet &nbsp; ■ Pompa Kontrolü 1-23 adet &nbsp; ■ Sensör İstasyonu 1-30
                            adet &nbsp; ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
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
                            <br />
                            <br />
                            <b>İnternete bağlanma yolumuz</b>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır.
                            <br />
                            <br />
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
                            <br />
                            <br />
                            <b>GATEWAY’in ulaşabildiği uç birimler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü
                            <br />
                            <br />
                            ■ Pompa kontrolü I/O,
                            <br />
                            <br />
                            ■ Vana Kontrolü I/O,
                            <br />
                            <br />
                            ■ Su sayacı,
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br /> ■ Toprak sıcaklığı &nbsp; ■ Toprak EC(elektriksel geçirgenlik)
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>VANA KONTROL ÜNİTESİ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            VANA KONTROL ÜNİTESİ, LoRa özellikli , 4 farklı vana kontrol eden orta ve büyük ölçekli
                            sulama projelerinde GATEWAY ile senkronize çalışan kontrolördür.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ Enerji tasarrufu(stand by pozisyonunu gerçek zamanlı koruyarak bakım/değişim maliyetini en
                            aza indirger).
                            <br />
                            <br />
                            ■ Merkezi birim sayesinde tüm vana kontrol ünitelerine tekli/çoklu erişim.
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>VANA KONTROL ÜNİTESİ içine enerji kaynağı</b>
                            <br />
                            <br />
                            - DC gerilim ile beslenebilir
                            <br />
                            <br />
                            ■ 3.6 V pil.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ 4 farklı vana kontrolü işinin yanında, 4 ayrı basınç sensöründen gerçek zamanlı veri
                            okuma.
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan
                            sistemler barındırıyor.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Haberleşme yöntemi</b>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ Latching röle sayesinde sadece bir pulse akımı ile kontak değiştirme.
                            <br />
                            <br />
                            ■ LoRa haberleşmenin sayesinde GATEWAY ile uzun mesafeli etkileşim.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>VANA KONTROL ÜNİTESİ’nin elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü,
                            <br />
                            <br />
                            ■ 12V DC kilitli solenoidler ile Vana Kontrolü I/O,
                            <br />
                            <br />
                            ■ Su sayacı.
                            <br />
                            <br />
                            ■ Hacimsel gübreleme ve gübre akış kontrolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
                            <br />
                            ■ Su kaynakları. &nbsp; ■ Ana vana, alt vanalar. &nbsp; ■ Yerel gübre enjektörü. &nbsp; ■
                            Yerel filtreler. &nbsp; ■ Merkezi gübre enjektörü. &nbsp; ■ Sulama vanaları.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Ek İmkanları</b>
                            <br />
                            <br />
                            ■ Basınç sensörü sayesinde vananın açık/kapalı olma durumunun kontrolü yapılır.
                            <br />
                            <br />
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
                      <ValvesTab2 />
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
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            GATEWAY, endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve
                            büyük ölçekli projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ Uzaktan erişim ile hızlı destek sistemi(mobil cihaz, PC vb. araçlarla ulaşılabileceğiniz
                            internet arayüzü).
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>GATEWAY için enerji kaynağı</b>
                            <br />
                            <br />
                            - DC gerilim ile beslenebilir;
                            <br />
                            <br />
                            ■ 5 V / 0.5 Ah besleme.
                            <br />
                            <br />
                            ■ USB port ile PC’den besleme imkanı.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ 255 adet cihaza kadar erişim imkanı.
                            <br />
                            <br />
                            ■ 4 farklı kanaldan tüm alt birimleri kontrol eden hızlı Lora sistemi( WiFi/Bluetooth
                            sistemine göre geniş çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <b>Opsiyonel uç birimler</b>
                            <br />
                            <br />
                            ■ Vana Kontrolü 1-200 adet &nbsp; ■ Pompa Kontrolü 1-23 adet &nbsp; ■ Sensör İstasyonu 1-30
                            adet &nbsp; ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
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
                            <br />
                            <br />
                            <b>İnternete bağlanma yolumuz</b>
                            <br />
                            <br />
                            ■ Yerleşik bir hücresel modem kullanılır.
                            <br />
                            <br />
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
                            <br />
                            <br />
                            <b>GATEWAY’in ulaşabildiği uç birimler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü
                            <br />
                            <br />
                            ■ Pompa kontrolü I/O,
                            <br />
                            <br />
                            ■ Vana Kontrolü I/O,
                            <br />
                            <br />
                            ■ Su sayacı,
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br /> ■ Toprak sıcaklığı &nbsp; ■ Toprak EC(elektriksel geçirgenlik)
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>VANA KONTROL ÜNİTESİ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            VANA KONTROL ÜNİTESİ, LoRa özellikli , 4 farklı vana kontrol eden orta ve büyük ölçekli
                            sulama projelerinde GATEWAY ile senkronize çalışan kontrolördür.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ Enerji tasarrufu(stand by pozisyonunu gerçek zamanlı koruyarak bakım/değişim maliyetini en
                            aza indirger).
                            <br />
                            <br />
                            ■ Merkezi birim sayesinde tüm vana kontrol ünitelerine tekli/çoklu erişim.
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>VANA KONTROL ÜNİTESİ içine enerji kaynağı</b>
                            <br />
                            <br />
                            - DC gerilim ile beslenebilir
                            <br />
                            <br />
                            ■ 3.6 V pil.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ 4 farklı vana kontrolü işinin yanında, 4 ayrı basınç sensöründen gerçek zamanlı veri
                            okuma.
                            <br />
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direkt
                            kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan
                            sistemler barındırıyor.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Haberleşme yöntemi</b>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ Latching röle sayesinde sadece bir pulse akımı ile kontak değiştirme.
                            <br />
                            <br />
                            ■ LoRa haberleşmenin sayesinde GATEWAY ile uzun mesafeli etkileşim.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>VANA KONTROL ÜNİTESİ’nin elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü,
                            <br />
                            <br />
                            ■ 12V DC kilitli solenoidler ile Vana Kontrolü I/O,
                            <br />
                            <br />
                            ■ Su sayacı.
                            <br />
                            <br />
                            ■ Hacimsel gübreleme ve gübre akış kontrolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
                            <br />
                            ■ Su kaynakları. &nbsp; ■ Ana vana, alt vanalar. &nbsp; ■ Yerel gübre enjektörü. &nbsp; ■
                            Yerel filtreler. &nbsp; ■ Merkezi gübre enjektörü. &nbsp; ■ Sulama vanaları.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Ek İmkanları</b>
                            <br />
                            <br />
                            ■ Basınç sensörü sayesinde vananın açık/kapalı olma durumunun kontrolü yapılır.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler</b>
                            <br />
                            <br />■ Yapay zekaya öğretilen sulama süreleri ile sistemin tarlaya ne kadar hacimde su
                            gerektiğine karar verebilmesi.
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>POMPA KONTROL ÜNİTESİ</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            POMPA KONTROL ÜNİTESİ, LoRa özellikli, pompa su sayacı ve bacınç sensörü kontrolü/denetimi
                            yapan orta ve büyük ölçekli sulama projelerinde GATEWAY ile senkronize çalışan kontrolördür.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ Enerji tasarrufu(stand by pozisyonunu gerçek zamanlı koruyarak bakım/değişim maliyetini en
                            aza indirger).
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur(Merkezden 5 km’ye kadar uzanabilen
                            erişim.Wi-Fi ve bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>POMPA KONTROL ÜNİTESİ içine enerji kaynağı</b>
                            <br />
                            <br />
                            - DC gerilim ile beslenebilir:
                            <br />
                            <br />
                            ■ 3.6 V pil.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ Pompa aç/kapa kontrolünün yanı sıra su sayacı ve basınç sensöründen gerçek zamanlı veri
                            okuma.
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli).
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Haberleşme yöntemi </b>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <b>POMPA KONTROL ÜNİTESİ’nin elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü. &nbsp; ■ Latching Röle kullanımı ile pompa kontrolü I/O. &nbsp; ■ Su
                            sayacı.
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
                            ■ Su kaynakları. &nbsp; ■ Ana vana, alt vanalar. &nbsp; ■ Sulama vanaları.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Ek İmkanları </b>
                            <br />
                            <br />■ Basınç sensörü sayesinde pompanın açık/kapalı olma durumunun kontrolü yapılır.
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
                      <ValvesTab />
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
