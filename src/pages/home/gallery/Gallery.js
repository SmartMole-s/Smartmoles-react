// @mui
import { Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../../../components/Page';
// sections
import { GalleryMain, GallerySlider } from '../../../sections/home/gallery';
//hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const HoverStyle = styled('div')(() => ({
  '&:hover': { 
  transform: 'scale(1.1)',
  filter: 'drop-shadow(2px 4px 6px black)',
  transition: 'all 1s ease',
  cursor:'pointer'
  }
}));

// ----------------------------------------------------------------------

export default function Gallery() {
  const { translate } = useLocales();
  const lang = localStorage.getItem('i18nextLng');
  return (
    <Page title="Fotoğraf">
      <RootStyle>
        <GallerySlider />
        <Container sx={{ my: 10 }}>
        <Typography variant="h3" sx={{ my: 8, textAlign: 'center' }}>
        {translate('Gallery.title')}
        </Typography>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'growtech-fuari'}
                    title={lang==='tr'?'Growtech Fuarı':'Growtech'}
                    cover={'/static/images/growtech/Growtech-2.jpg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'peyzaj-alanlari'}
                    title={lang==='tr'?'Peyzaj Alanları':'Peysage Areas'}
                    cover={'/static/images/peysage/1.jpg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'seralar'}
                    title={lang==='tr'?'Seralar':'Greenhouses'}
                    cover={'/static/images/sera.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'tarim-alanlari'}
                    title={lang==='tr'?'Tarım Alanları':'Farming Areas'}
                    cover={'/static/images/farm/smartmoles-2.jpg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'aycicegi'}
                    title={lang==='tr'?'Ayçiçeği':'Sunflower'}
                    cover={'/static/images/aycicegi.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'bag'}
                    title={lang==='tr'?'Bağ':'Vineyard'}
                    cover={'/static/images/bag.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'ceviz'}
                    title={lang==='tr'?'Ceviz':'Walnut'}
                    cover={'/static/images/ceviz.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'cim'}
                    title={lang==='tr'?'Çim':'Grass'}
                    cover={'/static/images/cim.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'elma'}
                    title={lang==='tr'?'Elma':'Apple'}
                    cover={'/static/images/elma.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'hurma'}
                    title={lang==='tr'?'Hurma':'Date'}
                    cover={'/static/images/hurma.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'kiraz'}
                    title={lang==='tr'?'Kiraz':'Cherry'}
                    cover={'/static/images/kiraz.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'leylandi'}
                    title={lang==='tr'?'Leylandi':'Leyland'}
                    cover={'/static/images/leylandi.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'misir'}
                    title={lang==='tr'?'Mısır':'Corn'}
                    cover={'/static/images/misir.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'muz'}
                    title={lang==='tr'?'Muz':'Banana'}
                    cover={'/static/images/muz.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'yonca'}
                    title={lang==='tr'?'Yonca':'Clover'}
                    cover={'/static/images/yonca.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'zeytin'}
                    title={lang==='tr'?'Zeytin':'Olives'}
                    cover={'/static/images/zeytin.jpeg'}
                  />
                </Card>
              </HoverStyle>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
