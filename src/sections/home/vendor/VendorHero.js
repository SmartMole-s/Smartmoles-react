// @mui
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
// components
import { MotionContainer, TextAnimate, varFade } from '../../../components/animate';
//hooks
import useLocales from '../../../hooks/useLocales';
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
  const { translate } = useLocales();
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{ position: 'relative', height: '100%' }}>
        <ContentStyle spacing={5}>
        <TextAnimate text="SmartMole's" sx={{ color: 'primary.main' }} variants={varFade().inRight} />
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white'}}>
            <TextAnimate sx={{typography:'h3'}} text={translate('Vendor.title')}/>
          </Box>
          <br />
          <Box sx={{ display: 'inline-flex', color: 'common.white' }}>
          <TextAnimate sx={{typography:'h3'}} text={translate('Vendor.title2')}/>
          </Box>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
