import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});


// ----------------------------------------------------------------------

export default function HomeSlider() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle
          alt="overlay"
          src="/static/slider/banner.jpg"
          variants={varFade().in}
        />

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  SmartMole's
                </Typography> <br />
              Suyunu Yönetemeyen <br />
              Toprağını Koruyamaz <br /> 
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
                Markalarımız, yüksek teknolojimiz ve tüm çabamızla daha verimli, daha kazançlı topraklar, gelişen, büyüyen, mutlu çiftçiler için gece gündüz çalışıyoruz.
              </Typography>
            </m.div>
      
            <m.div variants={varFade().inRight}>
              <Button
                sx={{ marginTop: '40px' }}
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_PAGE.smartCapillarity}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} 
                />}
              >
                Ödüllü Projemizi İncele
              </Button>
            </m.div>

          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
