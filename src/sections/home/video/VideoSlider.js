// @mui
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPositionY: '90%',
  backgroundImage:
    'linear-gradient(#00000059, #0000008a),url(/static/slider/videogallery.jpg)',
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

export default function VideoSlider() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="SmartMole's" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white'}}>
            <TextAnimate sx={{typography:'h3'}} text="Video&nbsp;Galerisi"/>
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
