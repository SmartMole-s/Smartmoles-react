// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function RootImage() {
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
        <Image src="/static/product/root/smartroot-1.png" alt="SmartRoot" effect="black-and-white" />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center'}}>      
              <b>Teorik kök derinliği kabullenmeleri ve doğru sanılan hatalı yaklaşımlar,</b> yanlış bölgenin
              sulanmasına, aşırı sulamaya, tuz birikimine, toprakta çölleşmeye, taban suyunda nitrat kirliliği olmaz
              üzere dönülmesi zor zararlara neden olur.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              <b>SmartRoot</b> ile etkili kök bölgenizin konumunu yüksek doğrulukta bildiğinizde sadece bu bölgenin su
              ve gübre ile buluşması size <b>kazanç sağlayacaktır.</b>
              <br></br>
              <br></br>
              Etkili kök bölgesinin yüksek doğrulukta haritalanması tüm zirai faaliyetlerinizde maksimum fayda sağlar.
              Etkili kök bölgesi gelişiminin olduğu alanın yönetilmesinde kılavuzluk yapar.
              <br></br>
              <br></br>
              <b>Etkili kök bölgesinin</b> yüksek doğrulukta bilinmesi, gübre kullanımınızı ciddi oranda azaltır. Ya da
              kullanılan gübrenin bitkiye yarayışlı bölgede kalmasını sağlar. Böylece atılan gübre yıkanarak hem boşa
              gitmez hem de yeraltı sularında nitrat kirliliği engellenir.
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
        <Image src="/static/product/root/smartroot-2.png" alt="SmartRoot" effect="black-and-white" />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              Sulama randımanını artırmak istiyorsanız etkili kök bölgesinin nerede olduğunu bilmeli ve sadece bu
              bölgeyi sulamalısınız.
              <br></br>
              <br></br>
              <strong>Kırmızı çizginin yerini görün, suyu ve gübreyi boşa harcamayın!..</strong>
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
        <Image src="/static/product/root/smartroot-3.png" alt="SmartRoot" effect="black-and-white" />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'center!important' }}>
              Veriler yapay zeka tarafından değerlendirilir ve etkili kök bölgesinin bilgisine yüksek doğrulukta
              erişebilirsiniz.
              <br></br>
              <br></br>
              <strong>Etkili kök derinliğinizin yerini öğrendiğinizde yüzünüz gülecek ve kazanacaksınız...</strong>
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
