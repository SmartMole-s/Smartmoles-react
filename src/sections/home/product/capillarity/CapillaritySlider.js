import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Button } from '@mui/material';
// components
import Iconify from '../../../../components/Iconify';
import { MotionContainer, TextAnimate, varFade, varBounce } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'linear-gradient(#00000059, #0000008a),url(/static/slider/smart_capillarity.jpg)',
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

export default function CapillaritySlider() {
  const { translate } = useLocales();
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle>
          <TextAnimate text="SmartCapillarity" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text={translate('SmartCapillaritySlider.title')} sx={{ mr: 2, typography: 'h4' }} />
          </Box>
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
            <TextAnimate text={translate('SmartCapillaritySlider.title2')} sx={{ mb: 2, mr: 2, typography: 'h4' }} />
          </Box>
          <m.div variants={varBounce().inUp}>
            <Button
              href="/static/pdf/fiyat-listesi.pdf"
              target="_blank"
              size="medium"
              variant="contained"
              startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
            >
              {translate('SmartCapillaritySlider.button')}
            </Button>
          </m.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
