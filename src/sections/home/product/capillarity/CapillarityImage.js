// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function CapillarityImage() {
  const { translate } = useLocales();
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
            {translate('SmartCapillarityImage.title')}
            </Typography>
          </MotionInView>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'left', lineHeight: '1.8' }}>
              <br></br>• {translate('SmartCapillarityImage.li1')}
              <br></br>• {translate('SmartCapillarityImage.li2')}
              <br></br>• {translate('SmartCapillarityImage.li3')}
              <br></br>• {translate('SmartCapillarityImage.li4')}
              <br></br>• {translate('SmartCapillarityImage.li5')}
              <br></br>• {translate('SmartCapillarityImage.li6')}
              <br></br>• {translate('SmartCapillarityImage.li7')}
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
            {translate('SmartCapillarityImage.p1')}
              <br></br>
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              <br></br>
              <b>{translate('SmartCapillarityImage.p2')}!</b>
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
