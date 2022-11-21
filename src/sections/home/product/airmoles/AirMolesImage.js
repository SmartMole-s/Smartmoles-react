// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function AirMolesImage() {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container justifyContent="center">
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              mb: 10,
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Image
              src="/static/product/capillarity/smartcapillarity-2.png"
              alt="about-vision"
              effect="black-and-white"
            />
          </Box>
        </Grid>

        <Grid item sm={12} md={6} sx={{ paddingLeft: '20px' }}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'center!important' }}>
              SmartCapillarity özellikleri
            </Typography>
          </MotionInView>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'left', lineHeight: '1.8' }}>
              <br></br>• Hem nem hem de kapiller su hareketini toprak içerisinde gerçek zamanlı tespit edebilme.
              <br></br>• Topraktaki nem ve su hareketlerine göre yüksek hassasiyette sulama sistemini yapay zeka
              destekli yönetme imkanı.
              <br></br>• Kablosuz haberleşme.
              <br></br>• Bulunduğu yerde kendini kalibre edebilme yeteneği.
              <br></br>• Yatay ve dikey yönde eklenebilir sensör modulü teknolojisi.
              <br></br>• Bir sensör modulünde 32 adet matris yapıda kapiller hareket sensörü bir adet yüksek
              hassasiyette nem sensörü ile büyük veri sağlanır.
              <br></br>• Opsiyonel mesaj uyarı servisi.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/capillarity/smartcapillarity-1.png"
          alt="SmartCapillarity"
          effect="black-and-white"
        />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body2" sx={{ textAlign: 'center!important' }}>
              Toprak içerisindeki kapiller su hareketlerini gördüğünüzde sulama yönteminiz ne olursa olsun kontrol
              sizde.
              <br></br>
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              <br></br>
              <b>Doğayı korurken kazanmak mümkün!</b>
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 10,
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image src="/static/product/capillarity/smartcapillarity-3.png" alt="about-vision" effect="black-and-white" />
      </Box>
    </Container>
  );
}
