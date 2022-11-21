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
                    cover={'/static/images/greenhouse/1.jpg'}
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
                    cover={'/static/images/aycicegi/aycicegi1.jpg'}
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
                    cover={'/static/images/bag/bag01.jpg'}
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
                    cover={'/static/images/ceviz/ceviz1.jpg'}
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
                    cover={'/static/images/cim/cim01.jpg'}
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
                    cover={'/static/images/elma/elm1.jpg'}
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
                    cover={'/static/images/hurma/hurma001.jpg'}
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
                    cover={'/static/images/kiraz/kirazpompa.jpg'}
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
                    cover={'/static/images/leylandi/leylandi.jpg'}
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
                    cover={'/static/images/misir/misir1.jpg'}
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
                    cover={'/static/images/muz/muz1.jpg'}
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
                    cover={'/static/images/yonca/yonca01.jpg'}
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
                    cover={'/static/images/zeytin/zeytin01.jpg'}
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
