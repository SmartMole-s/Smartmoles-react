// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  // paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  // paddingLeft: theme.spacing(5),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function MolesTab3() {
  const { translate } = useLocales();
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={1}>
          <Grid item>
            <MotionInView variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                SmartMole's
              </Typography>
            </MotionInView>

            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                {translate('SmartMolesTab.tab3Desc')}
                <br></br>
                <br></br>
                {translate('SmartMolesTab.tab1Desc2')}
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
