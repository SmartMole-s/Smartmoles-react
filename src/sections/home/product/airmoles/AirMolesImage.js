// @mui
import { Box, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../../../components/Image';
import { MotionInView, varFade } from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function AirMolesImage() {
  return (
    <Container sx={{ mt: 10 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6} sx={{ paddingRight: 10, py: 10 }}>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="h4" sx={{ textAlign: 'center!important' }}>
              Bilgiye dayalı karar vermek için kompakt, inovatif bir teknoloji
            </Typography>
          </MotionInView>
          <MotionInView variants={varFade().inUp}>
            <Typography variant="body1" sx={{ textAlign: 'left', lineHeight: '1.8' }}>
              <br></br> AIRMAR'ın WeatherStation WXRS'si yağmur yoğunluğu, birikimi ve gerçek zamanlı süresi hakkında
              gerçek zamanlı bilgi sağlar. Akustik bir sensör, WeatherStation cihazının üstünde bulunan patentli
              "şemsiye" sensöründe tek tek yağmur damlalarının enerjisini ölçer. Bu yağmur algılayıcı sensör,
              boşaltılması, temizlenmesi veya pislik nedeniyle tıkanması gereken hareketli parça veya bileşen
              içermediğinden neredeyse bakım gerektirmez. Minimum bakım ve tam bir ultrasonik rüzgâr, sıcaklık,
              barometrik basınç ve bağıl nem paketinin entegrasyonu ile WeatherStation WXRS, geleneksel ölçüm
              cihazlarına kıyaslanırsa önemli ölçüde daha düşük toplam sahip olma maliyeti (TCO) sunar
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
              Tarlanızın meteorolojik verilerine dünyanın her yerinden ulaşın
              <br/>
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              <br/>
              • Bakım gerektirmez
              <br/><br/>
              • Görünen rüzgar hızı ve yönünün ultrosonik ölçümü
              <br/><br/>
              • Yağmur birikiminin, yoğunluğunun ve süresinin akustik ölçümü
              <br/><br/>
              • Manyetik ve gerçek kuzey arasındaki farkı düzelten GPS
              <br/><br/>
              • Manyetik kuzeye referanslı rüzgar hızı verileri için dahili pusula
              <br/><br/>
              • Düşme nedeniyle tıkanma veri bütünlüğü kaybı olmaz
              <br/><br/>
              • Hareketli parçası olmayan sağlam, kompakt, UV stabilize gövdeye sahip
            </Typography>
          </MotionInView>
        </Grid>
      </Grid>
    </Container>
  );
}
