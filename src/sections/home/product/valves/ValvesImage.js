// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function FarmImage() {
  return (
    <Container sx={{ mt: 10 }}>
      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/valves/smartvalves-1.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
            SmartValve's tek merkezden saha bulunan vanaların kontrolünü yapay zeka ile yöneten bir sistemdir. Arazinin özelliklerine göre lokal ya da bulut tabanlı sistem alternatifleri sunan SmartValve's sadece vanayı açıp kapatan bir sistem değildir. <br/><br/> 
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>

      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/valves/smartvalves-3.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
            Her vana kontrol ünitesi, bulunduğu alanın sıcaklık ve nem bilgilerini vererek mikroklima veri ağının kurulmasını sağlar. Aynı zamanda vana önlerindeki basınçları kontrol ederek işletme basıncı bilgisini ve hatlarda kaçak olup olmadığını bilmenizi sağlar. 
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
