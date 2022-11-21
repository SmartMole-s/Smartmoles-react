// @mui
import { Box, Container } from '@mui/material';
// components
import Image from '../../../components/Image';

// ----------------------------------------------------------------------

export default function AboutVision() {
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
        <Image src="/static/images/ourqualitypattern/quality.png" alt="about-vision" effect="black-and-white" />
      </Box>
      {/* <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/images/about-5.png"
          alt="about-vision"
          effect="black-and-white"
        />
      </Box> */}


      {/* <Grid container justifyContent="center">
        <Grid item xs={10} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
                <b>SmartMole's</b> teknolojileri birbiriyle entegre ve bağımsız çalışabilen <b>yapay zekâ</b> destekli çözümler sunar.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid> */}
    </Container>
  );
}
