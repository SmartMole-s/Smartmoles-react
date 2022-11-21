// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

// components
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  
  padding: theme.spacing(10, 0),
  background: `linear-gradient(to top, rgba(${theme.palette.mode==='light'?'255,255,255,1':'0,0,0'}), rgba(255,255,255,.1)), url(/static/images/home-1.jpg)`,
  backgroundColor: theme.palette.background.neutral,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeSlogan() {
  return (
    <RootStyle>
      <Container>
        <MotionInView variants={varFade().in}>
          <Box sx={{ p: 5, mt: 5, textAlign: 'center' }}>
            <MotionInView variants={varFade().inDown}>
              <Typography variant="h2">SmartMole's</Typography>
            </MotionInView>

            <MotionInView variants={varFade().inDown}>
              <Typography variant='h4' sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Doğru sanılan alışkanlıkları yenmek için, gerçeği görmeniz gerektiğini biliyoruz.
              </Typography>
            </MotionInView>
          </Box>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
