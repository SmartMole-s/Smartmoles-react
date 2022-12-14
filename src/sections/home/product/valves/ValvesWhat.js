// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import { MotionInView, varFade } from '../../../../components/animate';
//hooks
import useLocales from '../../../../hooks/useLocales';

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
  const { translate } = useLocales();
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6} md={8} lg={8}>
                <MotionInView variants={varFade().inUp}>
                  <img style={{ maxWidth: '180%' }} src="/static/product/smartvalve.png" alt="SmartValve" />
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            {isDesktop && (
              <MotionInView variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  SmartValve's
                </Typography>
              </MotionInView>
            )}
            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                {translate('SmartValveWhat.desc')}
                <br />
                <br />
                <b>{translate('SmartValveWhat.desc2')}</b>
                <br />
                <br />
                {translate('SmartValveWhat.desc3')}
                {/* Tek merkezden kontrol */}
                {/* Sulama sistemi kablosuz y??netim alternatifleri
                - Manuel y??netim
                - Zaman ayarl?? y??netim
                - Yapay zeka ile sens??r verisine g??re y??netim
                Sahada merkeze konulan ve t??m u?? birimlerle haberle??menin sa??land?????? Lora(RF) ile haberle??en ve 4 kanaldan yay??m yapan bir terminaldir.
                - Out Doori In Doori- 4 Kanall?? S??ral?? Yay??n
                -Ayarlanabilir S??reli ??leti??im Protokol??yle y??ksek pil tasarrufu
                -Bilgisayar USB giri??inden beesleme
                -Adapt??r ile Besleme(Opsiyonel)
                -Meteoroloji ??stasyonu ve Sens??r Ekleme ??mkan?? */}
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
