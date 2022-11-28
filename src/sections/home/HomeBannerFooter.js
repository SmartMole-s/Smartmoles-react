// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade } from '../../components/animate';
//hooks
import useLocales from '../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(28, 0),
  background: 'url(/static/images/home-2.jpg)',
  backgroundSize: 'cover'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    height: '100%',
    marginBottom: 0,
    textAlign: 'left',
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
}));

// ----------------------------------------------------------------------

export default function HomeBannerFooter() {
  const { translate } = useLocales();
  return (
    <RootStyle>
      <Container sx={{ position: 'relative' }}>
        <Image
          visibleByDefault
          disabledEffect
          alt="image shape"
          src="/static/images/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            width: 720,
            height: 720,
            opacity: 0.48,
            my: 'auto',
            position: 'absolute',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <MotionInView variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white', textShadow:'2px 2px 4px #000' }}>
                  SmartMole's
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography variant="h5" sx={{ color: 'common.white', mb: 5 , textShadow:'2px 2px 4px #000'}}>
                {translate('HomeBanner.title')}
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
