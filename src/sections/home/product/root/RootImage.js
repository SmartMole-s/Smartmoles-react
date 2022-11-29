// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function RootImage() {
  const { translate } = useLocales();
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
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              {translate('SmartRootImage.desc')}
              <br></br>
              <br></br>
              {translate('SmartRootImage.desc2')}
              <br></br>
              <br></br>
              {translate('SmartRootImage.desc3')}
              <br></br>
              <br></br>
              {translate('SmartRootImage.desc4')}
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
            {translate('SmartRootImage.desc5')}
              <br></br>
              <br></br>
              <strong>{translate('SmartRootImage.desc6')}</strong>
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
            {translate('SmartRootImage.desc7')}
              <br></br>
              <br></br>
              <strong>{translate('SmartRootImage.desc8')}</strong>
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
