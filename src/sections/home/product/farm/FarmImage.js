// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade, TextAnimate } from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function FarmImage() {
  return (
    <Container sx={{ mt: 10 ,position:'relative'}}>
      <Box
        sx={{
          mb: 10,
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Image
          src="/static/product/farm/smartfarm-1.jpg"
          alt="about-vision"
          effect="black-and-white"
        />
        <Grid item xs={12} sm={8}>
          {/* <MotionInView variants={varFade().inUp}> */}
            <Typography variant="body" sx={{ textAlign: 'center' , position:'absolute', top:'45%', right:'5%', typography:'h3', lineHeight:'60px', textShadow:'3px 3px 20px #000' ,color:'#fff'}}>
              <b>Haydi daha<br></br> güzel bir Dünya için<br></br> akıllı köstebeklere katılın...</b>
            </Typography>
            <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
             <TextAnimate sx={{typography:'h3'}} text="Teknoloji &nbsp; Dünyasına "/> 
          </Box>
          {/* </MotionInView> */}
        </Grid>
      </Box>

      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body" sx={{ textAlign: 'center' }}>
              Markalarımız, yüksek teknolojimiz ve tüm çabamızla daha verimli, daha kazançlı topraklar, gelişen, büyüyen, mutlu çiftçiler için gece gündüz çalışıyoruz.
              <br />
              <br />
              Yarınlarımızı korumak demek, suyumuzu ve toprağımızı korumak demektedir. Bu yola bizimle birlikte gönül verecek partnerlere kapımız her zaman açıktır, kazanmak ve kazandırmak için.
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
