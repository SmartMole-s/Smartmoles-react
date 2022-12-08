import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Button } from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import { MotionContainer, TextAnimate, varFade, varBounce } from '../../../components/animate';
//hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'linear-gradient(#00000059, #0000008a),url(/static/images/career/career2.jpg)',
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

export default function CareerSlider() {
  const { translate } = useLocales();
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="SmartMole's" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text={translate('Career.title')} sx={{ mr: 2, typography: 'h3' }} />
          </Box>
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text={translate('Career.title2')} sx={{ mb: 2, mr: 2, typography: 'h3' }} />
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
