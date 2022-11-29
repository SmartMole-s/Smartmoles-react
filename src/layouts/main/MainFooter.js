import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';
//hooks
import useLocales from '../../hooks/useLocales';

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "SmartMole's",
    headlineEn: "SmartMole's",
    children: [
      { name: 'Hakkımızda', nameEn: 'About Us', href: PATH_PAGE.about },
      { name: 'Fotoğraf Galerisi', nameEn: 'Photo Gallery', href: PATH_PAGE.gallery },
      { name: 'Video Galerisi', nameEn: 'Video Gallery', href: PATH_PAGE.video },
      { name: 'Haberler', nameEn: 'News', href: PATH_PAGE.mediaPic },
      { name: 'İletişim', nameEn: 'Contact', href: PATH_PAGE.contact },
    ],
  },
  {
    headline: 'ÜRÜNLERİMİZ',
    headlineEn: 'PRODUCTS',
    children: [
      { name: 'SmartCapillarity', nameEn: 'SmartCapillarity', href: PATH_PAGE.smartCapillarity },
      { name: 'SmartRoot', nameEn: 'SmartRoot', href: PATH_PAGE.smartRoot },
      { name: 'SmartFarm', nameEn: 'SmartFarm', href: PATH_PAGE.smartFarm },
      { name: 'SmartValves', nameEn: 'SmartValves', href: PATH_PAGE.smartValves },
      { name: 'SmartWaterlevel', nameEn: 'SmartWaterlevel', href: PATH_PAGE.smartWaterlevel },
    ],
  },
  {
    headline: 'İLETİŞİM',
    headlineEn: 'CONTACT',
    children: [
      { name: 'info@smartmoles.com', nameEn: 'info@smartmoles.com', href: '#' },
      {
        name: `Manavkuyu, Halil Atilla Plaza, 243. Sk. No: 15 D:10, 35220 Bayraklı/İzmir`,
        nameEn: `Manavkuyu, Halil Atilla Plaza, 243. Sk. No: 15 D:10, 35220 Bayraklı/İzmir`,
        href: '#',
      },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  const currentDate = new Date().getFullYear();
  const { translate } = useLocales();
  const lang = localStorage.getItem('i18nextLng');
  return (
    <RootStyle>
      <Divider />
      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="subtitle2" sx={{ pr: { md: 5 }, textAlign: 'center' }}>
              {translate('Footer.title')}
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              <SocialsButton sx={{ mx: 0.5 }} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {lang === 'tr' ? list.headline : list.headlineEn}
                  </Typography>
                  {list.children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      variant="body2"
                      component={RouterLink}
                      sx={{ display: 'block' }}
                    >
                      {lang === 'tr' ? link.name : link.nameEn}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © {currentDate} {translate('Footer.copyright')}
        </Typography>
      </Container>
    </RootStyle>
  );
}
