// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function WaterlevelImage() {
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
        <Image src="/static/product/waterlevel/smartwaterlevel-1.png" alt="about-vision" effect="black-and-white" />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              {translate('SmartWaterlevelImage.desc')}
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
        <Image src="/static/product/waterlevel/smartwaterlevel-2.png" alt="about-vision" effect="black-and-white" />
        <Grid container justifyContent="center">
          <Grid sx={{ mt: 10, mb: 10 }} item xs={12} sm={8}>
            <MotionInView variants={varFade().inUp}>
              <Typography variant="body" sx={{ textAlign: 'center' }}>
                {translate('SmartWaterlevelImage.desc2')}
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
        <Image src="/static/product/waterlevel/smartwaterlevel-3.png" alt="about-vision" effect="black-and-white" />
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              {translate('SmartWaterlevelImage.desc3')}
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
        <Image src="/static/product/waterlevel/smartwaterlevel-4.png" alt="about-vision" effect="black-and-white" />
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              {translate('SmartWaterlevelImage.desc4')}
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
        <Image src="/static/product/waterlevel/smartwaterlevel-5.png" alt="about-vision" effect="black-and-white" />
      </Box>
    </Container>
  );
}
