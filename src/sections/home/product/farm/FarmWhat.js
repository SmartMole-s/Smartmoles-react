// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import { MotionInView, varFade } from '../../../../components/animate';

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

export default function FarmWhat() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6} md={8} lg={8}>
                <MotionInView variants={varFade().inUp}>
                  <img style={{ maxWidth: '180%' }} src="/static/product/smartfarm.png" alt={'SmartFarm'} />
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            {isDesktop && (
              <MotionInView variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  SmartFarm
                </Typography>
              </MotionInView>
            )}
            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                Günümüzde sürdürülebilirlik için küçük ölçekli ve büyük ölçekli çiftliklerde sensörler ve otomasyonlarla
                proseslerin iyileştirilmesi gerekmektedir.
                <br />
                <br />
                <b>
                  Firmamızın uzman mühendisleri sizlere özel çözümler sunmakta ve kişiye özel talep edilen yazılım ve
                  donanımsal teknolojileri geliştirebilmektedir.
                </b>
                <br />
                <br />
                Sorunlarınızı ve hayallerinizi bizimle paylaşabilirsiniz!.. Tarımsal işletmenize akıl katacak teknolojik
                çözümleri birlikte ele alabilir veya sadece size özel çözümleri beraber geliştirebiliriz. Hayallerinizle
                gelin, işletmenize değer katalım.
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
