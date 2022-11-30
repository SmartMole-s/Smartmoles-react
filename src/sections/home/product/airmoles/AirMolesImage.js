// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function AirMolesImage() {
  const { translate } = useLocales();
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} sx={{ paddingRight: 10, py: 10 }}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'center!important' }}>
              {translate('AirMolesImage.desc')}
            </Typography>
          </MotionInView>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'left', lineHeight: '1.8' }}>
              <br></br> 
              {translate('AirMolesImage.desc2')}
            </Typography>
          </MotionInView>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              mt: 10,
              mb: 10,
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              height: 800,
            }}
          >
            <Image src="/static/product/airmoles/air-moles.jpeg" alt="AirMoles" effect="black-and-white" />
          </Box>
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="h5" sx={{ textAlign: 'center!important' }}>
            {translate('AirMolesImage.title')}
              <br/>
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              <br/>
              • {translate('AirMolesImage.li1')}
              <br/><br/>
              • {translate('AirMolesImage.li2')}
              <br/><br/>
              • {translate('AirMolesImage.li3')}
              <br/><br/>
              • {translate('AirMolesImage.li4')}
              <br/><br/>
              • {translate('AirMolesImage.li5')}
              <br/><br/>
              • {translate('AirMolesImage.li6')}
              <br/><br/>
              • {translate('AirMolesImage.li7')}
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
