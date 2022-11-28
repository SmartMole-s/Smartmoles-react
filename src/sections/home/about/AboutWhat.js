import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, LinearProgress } from '@mui/material';
// utils
import { fPercent } from '../../../utils/formatNumber';
// components
import Image from '../../../components/Image';
import { MotionInView, varFade } from '../../../components/animate';

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

export default function AboutWhat() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';
  const shadow = `-40px 40px 80px ${alpha(isLight ? theme.palette.grey[500] : theme.palette.common.black, 0.48)}`;

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
            <Grid container spacing={3} alignItems="flex-end">
              <Grid item xs={6}>
                <MotionInView variants={varFade().inUp}>
                  <Image
                    src="/static/images/growtech/growtech-fuar-smartmoles-7.jpg"
                    ratio="3/4"
                    sx={{
                      borderRadius: 2,
                      boxShadow: shadow,
                      marginBottom: 5,
                    }}
                  />
                  <Image src="/static/hakkimizda/hakkimizda-donanim.jpg" ratio="1/1" sx={{ borderRadius: 2 }} />
                </MotionInView>
              </Grid>
              <Grid item xs={6}>
                <MotionInView variants={varFade().inUp}>
                  <Image
                    src="/static/hakkimizda/hakkimizda-tarla.jpg"
                    ratio="1/1"
                    sx={{ borderRadius: 2, marginBottom: 5 }}
                  />
                  <Image
                    src="/static/hakkimizda/hakkimizda-yazilim.jpg"
                    ratio="3/4"
                    sx={{
                      borderRadius: 2,
                      boxShadow: shadow,
                    }}
                  />
                </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                SmartMole's
              </Typography>
            </MotionInView>

            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                Bizler 1997'den beri Yuluğ Mühendislik çatısı altında Türkiye ve Dünya'nın birçok ülkesinde sulama
                sistemleri projeleri ve uygulamaları yapan bir ekibiz. <b>Yuluğ Mühendislik</b> olarak, Ege Üniversitesi
                Teknoloji Geliştirme Bölgesinde SmartMole's Su Yönetimi Teknolojisi markasıyla <b>ARGE</b>{' '}
                çalışmalarımızı sürdürüyoruz.
                <br></br>
                <br></br>
                <strong>Bu yola çıkış nedenimiz;</strong>
                <br></br>
                Görüyorduk ki; basınçlı sulama sistemleri tarımsal ve peyzaj alanlarında, adeta yüzey sulama yapar gibi
                kullanılmaktaydı. Bu sürdürülemez israfın, sebebiyet verdiği kirlilik ve çölleşmenin engellenmesi ise
                mevcut teknoloji ve yaklaşımlarla mümkün değildi. Bu gidişata dur diyebilmek için geliştirdiğimiz
                ürünlerimiz, işletmelerinize kârlılık ve bereket getirecek bir altın anahtardır. %97,34 oranında yerli
                ve millî imkânlarla üretilen siber fiziksel teknolojimiz CE ve RoHS belgelendirmesi ile görüleceği üzere
                çevre ve kullanıcı dostudur. Su kaynaklarının %75'ine yakınını sulamada kullandığımız düşünülürse,
                azalan ve kirlenen su kaynaklarını ve toprağı, tarım yaptığımız havzalarda korumak hepimizin gelecek
                kuşaklara borcudur. Bu anlayışla, ilginize teşekkür eder, yollarımızın kesişmesinden duyduğum mutluluğu
                ifade etmek isterim.
                <br />
                <br />
                <strong>Saygılarımla,</strong>
                <br />
                <strong>Ömer Yuluğ</strong>
                <br />
                CEO /Ziraat Yüksek Mühendisi
              </Typography>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
