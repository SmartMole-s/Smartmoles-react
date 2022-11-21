// @mui
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundImage:
    'linear-gradient(#00000059, #0000008a),url(/static/slider/bayi-slider.png)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    position: 'absolute',
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function VendorHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle spacing={5}>
        <TextAnimate text="Smart Mole's" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white'}}>
            <TextAnimate sx={{typography:'h3'}} text="Bayimiz &nbsp; Olmak"/>
          </Box>
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
          <TextAnimate sx={{typography:'h3'}} text="İster &nbsp; misiniz?"/>
          </Box>

          {/* <m.div variants={varFade().inRight}>
            <Typography
              variant="h4"
              sx={{
                mt: 5,
                color: 'common.white',
                fontWeight: 'fontWeightMedium',
              }}
            >
              Bayimiz olmak için 
              <br /> aşağıdaki formu doldurunuz.
            </Typography>
          </m.div> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
