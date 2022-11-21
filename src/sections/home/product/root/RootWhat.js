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

export default function RootWhat() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6} md={8} lg={6}>
                <MotionInView variants={varFade().inUp}>
                  <img style={{ maxWidth: '200%' }} src="/static/product/smartroot.png" alt="SmartRoot" />
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            {isDesktop && (
              <MotionInView variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  SmartRoot
                </Typography>
              </MotionInView>
            )}
            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                <b>Smart</b>Root, bitkilerin etkili kök bölgesi adı verilen bölgenin tarla koşullarında tespitinin
                yapılması için geliştirilmiş yüksek teknolojiye sahip <b>siber fiziksel bir sistemdir.</b>
                <br></br>
                <br></br>
                Etkili kök bölgesi, su ve gübrenin %70 - 80 kullanıldığı kök bölgesidir. Bu bölgenin bitkinin diğer kök
                bölgelerinden ayrımının yapılmasını kolaylaştıran <b>Smart</b>Root teknolojisi etkili kök bölgesinin
                yerini kullanıcı ile yüksek doğrulukta paylaşır.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
