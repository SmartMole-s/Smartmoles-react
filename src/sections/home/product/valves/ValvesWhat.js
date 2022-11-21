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
                  <img style={{ maxWidth: '180%' }} src="/static/product/smartvalve.png" alt="SmartValve" />
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            {isDesktop && (
              <MotionInView variants={varFade().inRight}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  SmartValves
                </Typography>
              </MotionInView>
            )}
            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                Bitkinin ihtiyaç duyduğu suyun, doğal yağışlarla karşılanamayan kısmının, yapay yollarla bitkinin etkili
                kök bölgesine verilmesidir.
                <br />
                <br />
                <b>Bu tanıma uygun işletilen bir sulama sistemine sahipseniz sürdürülebilir tarım yapabilirsiniz...</b>
                <br />
                <br />
                Vanalarınızın yönetiminde akıllı kablosuz çözümlerle yanınızdayız. Yerel bilgisayarınızdan ya da bulut
                tabanlı Dünya'nın her yerinden sulama sisteminizi yönetebilirsiniz. Zaman ayarlı ya da sensör verilerine
                göre yapay zeka desteği ile suluyoruz. Su dağıtım şebekeleri tarlalar ve peyzaj alanları dağınık halde
                vana gruplarından oluşabilmekte ve bunların yönetimi zorluklar içermekte ve gereksiz maliyetlere neden
                olmaktadır. Sanal ortamda tüm parçalı üretim alanlarınızı tek bir merkezden SmartValve teknolojisi ile
                yönetebilirsiniz.
                {/* Tek merkezden kontrol */}
                {/* Sulama sistemi kablosuz yönetim alternatifleri
                - Manuel yönetim
                - Zaman ayarlı yönetim
                - Yapay zeka ile sensör verisine göre yönetim
                Sahada merkeze konulan ve tüm uç birimlerle haberleşmenin sağlandığı Lora(RF) ile haberleşen ve 4 kanaldan yayım yapan bir terminaldir.
                - Out Doori In Doori- 4 Kanallı Sıralı Yayın
                -Ayarlanabilir Süreli İletişim Protokolüyle yüksek pil tasarrufu
                -Bilgisayar USB girişinden beesleme
                -Adaptör ile Besleme(Opsiyonel)
                -Meteoroloji İstasyonu ve Sensör Ekleme İmkanı */}
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}