// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade, TextAnimate } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function FarmImage() {
  const { translate } = useLocales();
  return (
    <Container sx={{ mt: 10, position: 'relative' }}>
      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image src="/static/product/farm/smartfarm-1.jpg" alt="about-vision" effect="black-and-white" />
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body"
            sx={{
              textAlign: 'center',
              position: 'absolute',
              top: '45%',
              right: '10%',
              typography: 'h3',
              lineHeight: '60px',
              textShadow: '3px 3px 20px #000',
              color: '#fff',
            }}
          >
            <b>{translate('SmartFarmImage.title')}</b>
          </Typography>
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate sx={{ typography: 'h3' }} text="Teknoloji &nbsp; Dünyasına " />
          </Box>
        </Grid>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              {translate('SmartFarmImage.desc')}
              <br />
              <br />
              {translate('SmartFarmImage.desc2')}
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
