// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../../components/Image';
import { MotionInView, varFade } from '../../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/images/05.png',
    title: 'Doğayı Koru',
    // description:
    //   'Toprak profilindeki nem miktarını ve kapiller su hareketini gerçek zamanlı analiz edebilen ve sulama sistemlerini Yapay Zeka ile yöneten dünyadaki ilk patentli teknolojileri biz geliştirdik.',
  },
  {
    icon: '/static/images/02.png',
    title: 'İşletme Giderlerini Düşür',
    // description: "Doğa Kanunları'nın müsaade ettiği üst sınıra kadartasarruf sağlayarak verimi arttırıyoruz !",
  },
  {
    icon: '/static/images/03.png',
    title: 'Verimi Artır',
    // description: 'Yüksek hassasiyete sahip çoklu kapasitif nem sensörü ve neme dayalı kapiller hareket algılama ve yönetim robotu.',
  },
  {
    icon: '/static/images/04.png',
    title: 'Toplumsal Eğitimi Sağla',
    // description: 'Yüksek hassasiyete sahip çoklu kapasitif nem sensörü ve neme dayalı kapiller hareket algılama ve yönetim robotu.',
  },
  {
    icon: '/static/images/01.png',
    title: 'Kullanıcı Dostu Ol',
    // description: 'Yüksek hassasiyete sahip çoklu kapasitif nem sensörü ve neme dayalı kapiller hareket algılama ve yönetim robotu.',
  },
];

const shadowIcon = (color) => `drop-shadow(0px 0px 0px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    display: 'flex',
    flexDirection: 'column',
    border: 0,
    maxWidth: 380,
    minHeight: 250,
    margin: 'auto',
    textAlign: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(10, 5, 0),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    '&.cardLeft': {
      // [theme.breakpoints.up('md')]: { marginTop: -40 },
    },
    '&.cardBottom': {
      [theme.breakpoints.up('md')]: {
        // left: 'calc(50% + 10%)',
      }
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        // marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          // width: 'calc(100% - 40px)',
          // height: 'calc(100%)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 1, md: 3 },
          }}
        >
          <MotionInView variants={varFade().inDown}>
            <Typography variant="h2" sx={{textShadow:`2px 2px 4px ${theme.palette.primary.light}`}}>SmartMole's Teknolojilerinin 5 Temel Mottosu!</Typography>
            <br></br>
            <br></br>
            <Typography variant="h4" sx={{letterSpacing:'1px'}}></Typography>
            <br></br>
            <br></br>
            {/* <Typography component="div" variant="body1">
              Sulama sistemlerinizin, yapay zekâ destekli olarak yönetiminde, merkeze insanı ve doğayı koya
              anlayışımızla çözüm bekleyen sorunlarınızı biliyor ve en etkili şekilde çözüyoruz.
            </Typography> */}
          </MotionInView>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 5 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(5, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <MotionInView variants={varFade().inUp} key={card.title}>
              <CardStyle
                className={
                  (index === 0 && 'cardLeft') ||
                  (index === 2 && 'cardLeft') ||
                  (index === 1 && 'cardLeft') ||
                  (index === 3 && 'cardBottom') ||
                  (index === 4 && 'cardBottom')
                }
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{
                    // mb: 10,
                    mx: 'auto',
                    // width: 40,
                    height: 60,
                    filter: (theme) => shadowIcon(theme.palette.primary.main),
                    ...(index === 0 && {
                      filter: (theme) => shadowIcon(theme.palette.info.main),
                    }),
                    ...(index === 1 && {
                      filter: (theme) => shadowIcon(theme.palette.error.main),
                    }),
                  }}
                />
                <Typography variant="h5" paragraph>
                  {card.title}
                </Typography>
                <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>{card.description}</Typography>
              </CardStyle>
            </MotionInView>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
