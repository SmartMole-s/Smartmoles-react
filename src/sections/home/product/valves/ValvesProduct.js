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
import { ValvesTab, ValvesTab2 } from '../valves';
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
    img: '/static/product/valves/smartvalveskolaj.png',
    title: 'SmartValves',
    rows: 4,
    cols: 4,
  }
];
const itemData2 = [
  {
    img: '/static/product/valves/smartvalveskolaj.png',
    title: 'SmartValves',
    rows: 4,
    cols: 4,
  }
];
const itemData3 = [
  {
    img: '/static/product/airmoles/airmoles.png',
    title: 'AirMoles',
    rows: 4,
    cols: 2,
  },
  {
    img: '/static/product/smartmolessensor.png',
    title: 'Sensör',
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
                <Tab label="SV-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SV-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                <Button
                  sx={{ pointerEvents: 'none' }}
                  href="#"
                  startIcon={
                    <Iconify icon={'material-symbols:add-box-rounded'} width={40} height={40} marginRight={2} />
                  }
                />
                <Tab
                  label="Ek Ürünler"
                  {...a11yProps(2)}
                  sx={{ fontSize: '1.5rem', textShadow: `2px 2px 4px ${theme.palette.primary.light}` }}
                />
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

                      {/* // First Product */}
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
                          GATEWAY, endüstriyel sulama ve gübreleme için çözüm sunan ana kontrol ünitesidir. Orta ve büyük ölçekli projelerde siz profesyonel kullanıcılar için özel tasarlanmıştır. Vanalarınızın yönetiminde akıllı kablosuz çözümlerle yanınızdayız. <b>Zaman ayarlı ya da sensör verilerine göre yapay zeka desteği ile suluyoruz.</b>
                            <br />
                            <br />
                            <b>Tek merkezden kontrol</b>
                            <br />
                            <br />
                            ■ SmartValve’s tek merkezden sahada bulunan vanaların kontrolünü yapay zeka ile yapan bir sistemdir. Arazinin özelliklerine göre lokal ya da bulut tabanlı sistem alternatifleri sunar.
                            <br />
                            <br />
                            ■ Her vana kontrol ünitesi bulunduğu alanın sıcaklığı ve nem bilgilerini değerlendirerek veri ağının oluşmasını sağlar
                            <br />
                            <br />
                            ■ Aynı zamanda vana önlerindeki basınçları kontrol ederek işletme basıncı bilgisini ve hatlarda kaçak olup olmadığını bilmenizi sağlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Avantajları</b>
                            <br />
                            <br />
                            ■ Kolay kurulum
                            <br />
                            <br />
                            ■ Ayarlanabilir süreli iletişim ile yüksek pil tasarrufu sağlar
                            <br />
                            <br />
                            ■ Uzaktan erişim ile hızlı destek sistemi(akıllı telefon, bilgisayar vb. cihazlarla ulaşabileceğiniz internet arayüzü). <b>Kullanıcı istediği konumdan arazi hakkında bilgi sahibi olabilir</b>
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>GATEWAY için enerji kaynağı</b>
                            <br />
                            <br />
                            ■ 5 V Adaptör ile besleme
                            <br />
                            <br />
                            ■ USB port ile bilgisayarınızdan cihazı besleyebilme
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Sulama</b>
                            <br />
                            <br />
                            ■ Haftanın günlerine veya gün döngüsüne göre sulama imkanı vardır
                            <br />
                            <br />
                            ■ Tek döngü veya darbeli sulama yapılır
                            <br />
                            <br />
                            ■ Birden fazla pompa veya jeneratör gibi arazinize su sağlayıcıların otomasyonunu sağlar
                            <br />
                            <br />
                            ■ Birden fazla su kaynağını idare edebilir
                            <br />
                            <br />
                            ■ Sulama başlangıcını zamana göre, koşula göre veya manuel olarak ayarlar
                            <br />
                            <br />
                            ■ Pompanın diğer vanalarla beraber, ayrıksı veya gecikmeli çalışmasını sağlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Gübreleme</b>
                            <br />
                            <br />
                            ■ Gübre tanklarının dolumunda size yardımcı olur
                            <br />
                            <br />
                            ■ Gübre enjeksiyon için sistemin çalışma zamanını otomatik olarak belirleyebilirisiniz
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Merkezi Bağlantı Sistem Güvenliği ve Su Temizliği</b>
                            <br />
                            <br />
                            ■ Doğal kaynaktan(kuyu, gölet) elde edilen suyun sulama kanallarına verilmeden önce suyun zararlı parçacıklardan arındırılması gerekiyor. Suyu bu kaynaklardan sistemlerimize direkt verdiğimizde sulama sistemimiz bu parçacıklar yüzünden zarar görecektir. Bunun için su, kaynağından alındıktan bir süre sonra tekrar doğal kaynağına(göl, dere) geri verilir. Temiz su bize ulaştığında bunu siz profesyonel kullanıcılar için anlayan sistemimiz bize hem temiz su kaynağı sağlayacak hem de sulama sistemlerimizin ömrünü uzatacaktır
                            <br />
                            <br />
                            <b>Bağlantı yapısı</b>
                            <br />
                            <br />
                            ■ 255 adet cihaza kadar erişim imkanı
                            <br />
                            <br />
                            ■ 4 farklı kanaldan tüm alt birimleri kontrol eden hızlı LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Opsiyonel uç birimler</b>
                            <br />
                            <br />
                            ■ Vana Kontrolü 1-200 adet &nbsp; ■ Pompa Kontrolü 1-23 adet &nbsp; ■ Sensör İstasyonu 1-30 adet &nbsp; ■ AirMoles Hava İstasyonu
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Programlama</b>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı ve uç birimleriyle kullanıcının ihtiyaçlarını karşılıyor
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
                            ■ GSM modülü ile yerelden bulut erişimine adaptasyon özelliği vardır
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Teknolojilerimiz</b>
                            <br />
                            <br />
                            ■ GSM hatlar sayesinde Dünya'nın her yerinden erişim
                            <br />
                            <br />
                            ■ LoRa haberleşmenin protokolü sayesinde uç birimlerle uzak mesafeli iletişim
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
                            ■ Pompa kontrolü(aç/kapa)
                            <br />
                            <br />
                            ■ Vana Kontrolü(aç/kapa)
                            <br />
                            <br />
                            ■ Su sayacı
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* // Second Product */}
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
                      <ValvesTab2 />

                      {/* // Third Product */}
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

                      {/* // Fourst Product */}
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

                      {/* // Fivest Product */}
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
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk
                            kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan
                            sistemler barındırıyor.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Haberleşme yöntemi </b>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>POMPA KONTROL ÜNİTESİ’nin elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü. &nbsp; ■ Latching Röle kullanımı ile pompa kontrolü I/O. &nbsp; ■ Su
                            sayacı.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
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

            <TabPanel value={value} index={3}>
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
                      <ValvesTab2 />

                      {/* //  First Product of Third Panel */}
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
                            ■ 3.6 V uzun ömürlü pil
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

                      {/* // Fourst Product */}
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>AIRMOLES</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            AirMoles yüksek teknolojisi ile meteorolojik verilere yerel ve bulut tabanlı olarak
                            erişmenizi sağlar. AirMoles yağmur yoğunluğu, birikimi ve gerçek zamanlı süresi hakkında
                            gerçek zamanlı bilgi sağlar.
                            <br />
                            <br />
                            <br />
                            <br />
                            Akustik bir sensör cihazının üstünde bulunan patentli 'şemsiye' sensöründe tek tek yağmur
                            damlalarının enerjisini ölçer. Bu yağmur algılayıcı sensör, boşaltılması, temizlenmesi veya
                            pislik nedeniyle tıkanması gereken hareketli parça veya bileşen içermediğinden neredeyse
                            bakım gerektirmez.
                            <br />
                            <br />
                            <br />
                            <br />
                            Minimum bakım ve tam bir ultrasonik rüzgâr, sıcaklık, barometrik basınç ve bağıl nem
                            paketinin entegrasyonu ile geleneksel ölçüm cihazlarına kıyaslanırsa önemli ölçüde daha
                            düşük toplam sahip olma maliyeti (TCO) sunar.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Tarlanızın meteorolojik verilerine Dünya'nın her yerinden ulaşın</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Bakım gerektirmez
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Görünen rüzgar hızı ve yönünün ultrosonik ölçümü
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Yağmur birikiminin, yoğunluğunun ve süresinin akustik ölçümü
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Manyetik ve gerçek kuzey arasındaki farkı düzelten GPS
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Manyetik kuzeye referanslı rüzgar hızı verileri için dahili pusula
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Düşme nedeniyle tıkanma veri bütünlüğü kaybı olmaz
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Hareketli parçası olmayan sağlam, kompakt, UV stabilize gövdeye sahip
                            <br />
                            <br />
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* // Fivest Product */}
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENSÖR KARTI</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          SENSÖR KARTI LoRa(Uzak mesafe haberleşme) özelliklidir.Bir kapiler hareket sensörünün topraktan aldığı nem değerlerini ve su hareket verilerini, yorumlaması için GATEWAY’e ulaştırır.
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Avantajları</b></u>
                            <br />
                            <br />
                            ■ Kolay kurulum.
                            <br />
                            <br />
                            ■ Ayarlanabilir süreli iletişim ile yüksek pil tasarrufu sağlar
                            <br />
                            <br />
                            ■ LoRa sistemi ile geniş uygulama alanı oluşturur. Merkezden 30 km’ye kadar uzanabilen erişim. Wi-Fi ve Bluetooth gibi teknolojilere göre daha geniş çaplı çalışma olanağı sağlar
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Sensör Kartı için enerji kaynağı</b></u>
                            <br />
                            <br />
                            ■ 3.6 V uzun ömürlü pil
                            <br />
                            <br />
                            ■ <b>Tarlada elektriğiniz olmasa da pille çalışa özelliği vardır</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Bağlantı yapısı</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket ve nem sensörüne(KHAS) direkt erişim sağlar
                            <br />
                            ■ LoRa haberleşmenin sayesinde GATEWAY ile uzun mesafeli etkileşim
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>Programlama</b></u>
                            <br />
                            <br />
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk kullanabilir
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan sistemler barındırıyor
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b> Haberleşme yöntemi </b></u>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü
                            <br />
                            <br />
                            <br />
                            <br />
                            <u><b>SENSÖR KARTI’nın elde ettiği parametreler</b></u>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü &nbsp; ■ Nem &nbsp; ■ Etkili kök bölgesi &nbsp; ■ AirMoles Hava İstasyonu
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
                            ■ IP68 özellikte koruması sayesinde su geçirmez ve darbelere dayanıklıdır
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
                <Tab label="SV-1 CLD" {...a11yProps(0)} sx={{ fontSize: '1.5rem' }} />
                <Tab label="SV-2 CLD" {...a11yProps(1)} sx={{ fontSize: '1.5rem' }} />
                <Button
                  sx={{ pointerEvents: 'none' }}
                  href="#"
                  startIcon={
                    <Iconify icon={'material-symbols:add-box-rounded'} width={40} height={40} marginRight={2} />
                  }
                />
                <Tab
                  label="Ek Ürünler"
                  {...a11yProps(2)}
                  sx={{ fontSize: '1.5rem', textShadow: `2px 2px 4px ${theme.palette.primary.light}` }}
                />
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

                      {/* // First Product */}
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

                      {/* // Second Product */}
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
                      <ValvesTab2 />

                      {/* // Third Product */}
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

                      {/* // Fourst Product */}
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

                      {/* // Fivest Product */}
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
                            ■ Tüm ürünler kendine has terminal numarası ile programlanır ve kullanıcı ürünü direk
                            kullanabilir.
                            <br />
                            <br />
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan
                            sistemler barındırıyor.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Haberleşme yöntemi </b>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>POMPA KONTROL ÜNİTESİ’nin elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Basınç sensörü. &nbsp; ■ Latching Röle kullanımı ile pompa kontrolü I/O. &nbsp; ■ Su
                            sayacı.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
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

            {/* // Third Panel */}
            <TabPanel value={value} index={3}>
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
                      <ValvesTab2 />

                      {/* //  First Product of Third Panel */}
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

                      {/* // Fourst Product */}
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>AIRMOLES</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            AirMoles yüksek teknolojisi ile meteorolojik verilere yerel ve bulut tabanlı olarak
                            erişmenizi sağlar. AirMoles yağmur yoğunluğu, birikimi ve gerçek zamanlı süresi hakkında
                            gerçek zamanlı bilgi sağlar.
                            <br />
                            <br />
                            <br />
                            <br />
                            Akustik bir sensör cihazının üstünde bulunan patentli 'şemsiye' sensöründe tek tek yağmur
                            damlalarının enerjisini ölçer. Bu yağmur algılayıcı sensör, boşaltılması, temizlenmesi veya
                            pislik nedeniyle tıkanması gereken hareketli parça veya bileşen içermediğinden neredeyse
                            bakım gerektirmez.
                            <br />
                            <br />
                            <br />
                            <br />
                            Minimum bakım ve tam bir ultrasonik rüzgâr, sıcaklık, barometrik basınç ve bağıl nem
                            paketinin entegrasyonu ile geleneksel ölçüm cihazlarına kıyaslanırsa önemli ölçüde daha
                            düşük toplam sahip olma maliyeti (TCO) sunar.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Tarlanızın meteorolojik verilerine Dünya'nın her yerinden ulaşın</b>
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Bakım gerektirmez
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Görünen rüzgar hızı ve yönünün ultrosonik ölçümü
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Yağmur birikiminin, yoğunluğunun ve süresinin akustik ölçümü
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Manyetik ve gerçek kuzey arasındaki farkı düzelten GPS
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Manyetik kuzeye referanslı rüzgar hızı verileri için dahili pusula
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Düşme nedeniyle tıkanma veri bütünlüğü kaybı olmaz
                            <br />
                            <br />
                            <br />
                            <br />
                            ■ Hareketli parçası olmayan sağlam, kompakt, UV stabilize gövdeye sahip
                            <br />
                            <br />
                            <br />
                            <br />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      {/* // Fivest Product */}
                      <Accordion accExpanded={accExpanded === 'panel2'} onChange={accHandleChange('panel2')}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel2bh-content"
                          id="panel2bh-header"
                        >
                          <Typography sx={{ width: '50%', flexShrink: 0 }}>SENSÖR KARTI</Typography>
                          <Typography sx={{ color: 'text.secondary' }}>Ürün Özellikleri</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            SENSÖR KARTI LoRa protokolünü kullanır. Bir kapiler hareket sensörünün topraktan aldığı nem
                            değerlerini ve su hareket verilerini, yorumlaması için radyo dalgaları kullanarak GATEWAY’e
                            ulaştırır.
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
                            <b>Sensör Kartı için enerji kaynağı</b>
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
                            ■ Kapiler hareket ve nem sensörüne(KHAS) RS485 haberleşme protokolü ile bağlantı imkanı
                            <br />
                            ■ Yüksek kazançlı antenler ile oluşturulan LoRa ağı(WiFi/Bluetooth sistemine göre geniş
                            çaplı etkileşim ve daha az maliyetli)
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
                            ■ Sürekli geliştirilen gömülü yazılımı sayesinde kullanıcıya çeşitli sulama yöntemi sunan
                            sistemler barındırıyor.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b> Haberleşme yöntemi </b>
                            <br />
                            <br />
                            ■ GATEWAY ile sağlıklı bir haberleşmeyi sağlayan LoRa protokolü.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>SENSÖR KARTI’nın elde ettiği parametreler</b>
                            <br />
                            <br />
                            ■ Kapiler hareket sensörü. &nbsp; ■ Nem &nbsp; ■ Etkili kök bölgesi sayacı.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Kullanım alanları</b>
                            <br />
                            ■ Tarla &nbsp; ■ Bahçe &nbsp; ■ Sera &nbsp; ■ Peyzaj
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>Eklemek istediğimiz hizmetler </b>
                            <br />
                            <br />■ Yapay zekaya öğretilen sulama süreleri ile sistemin tarlaya ne kadar hacimde su
                            gerektiğine karar verebilmesi
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
