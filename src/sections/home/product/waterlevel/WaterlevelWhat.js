// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import { MotionInView, varFade } from '../../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function WaterlevelWhat() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6} md={8} lg={6}>
                <MotionInView variants={varFade().inUp}>
                  <img style={{ maxWidth: '180%' }} src="/static/product/smartwaterlevel.png" alt="SmartWaterLevel" />
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            {isDesktop && (
              <MotionInView variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  SmartWaterlevel
                </Typography>
              </MotionInView>
            )}
            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                <b>Drenaj sorunlu</b> bölgelerin etüdü, çözümü ve tarıma elverişli hale getirilmesi amacıyla{' '}
                <b>Smart</b>WaterLevel ürünü, sorunu tespit eder ve sonrasında gerekli tedbirleri almanızda yardımcı
                olur.
                <br></br>
                <br></br>
                <b>Smart</b>WaterLevel tüm sulanan alanlarda taban suyu seviyesini yöneten robot bir sistemdir.
                <br></br>
                <br></br>
                <b>Smart</b>WaterLevel teknolojisi ile hem bir havzada/tarlada/park ve bahçede taban suyu seviyesi etüdü
                yapabilmekte hem de her bitkinin gerçek zamanlı olarak taban suyundan kullandığı su miktarını tespit
                ederek, yapay zekâ teknolojisi ile sulama sistemini sadece kalan miktarı tamamlamak üzere çalıştırmak
                mümkün olabilmektedir.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
