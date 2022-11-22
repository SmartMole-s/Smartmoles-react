// @mui
import { Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// components
import Page from '../../../components/Page';

// sections
import { GalleryMain, GallerySlider } from '../../../sections/home/gallery';

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
  return (
    <Page title="Fotoğraf">
      <RootStyle>
        <GallerySlider />
        <Container sx={{ my: 10 }}>
        <Typography variant="h3" sx={{ my: 8, textAlign: 'center' }}>
          Fotoğraf Galerisi
        </Typography>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <HoverStyle>
                <Card>
                  <GalleryMain
                    pathname={'growtech-fuari'}
                    title={'Growtech Fuarı'}
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
                    title={'Peyzaj Alanları'}
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
                    title={'Seralar'}
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
                    title={'Tarım Alanları'}
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
                    title={'Ayçiçeği'}
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
                    title={'Bağ'}
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
                    title={'Ceviz'}
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
                    title={'Çim'}
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
                    title={'Elma'}
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
                    title={'Hurma'}
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
                    title={'Kiraz'}
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
                    title={'Leylandi'}
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
                    title={'Mısır'}
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
                    title={'Muz'}
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
                    title={'Yonca'}
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
                    title={'Zeytin'}
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
