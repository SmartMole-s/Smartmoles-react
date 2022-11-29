// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function FarmImage() {
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
            {translate('SmartValveImage.desc')}
             <br/><br/> 
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
            {translate('SmartValveImage.desc2')} 
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
