// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

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
  const { translate } = useLocales();
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
                {translate('SmartWaterlevelWhat.desc')}
                <br></br>
                <br></br>
                {translate('SmartWaterlevelWhat.desc2')}
                <br></br>
                <br></br>
                {translate('SmartWaterlevelWhat.desc3')}
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
