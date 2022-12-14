// @mui
import { Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// components
import Page from '../../../components/Page';

// sections
import { MediaVideoMain, MediaVideoSlider } from '../../../sections/home/mediaVideo';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Video() {
  return (
    <Page title="Video Galerisi">
      <RootStyle>
        <MediaVideoSlider />
        <Container sx={{ my: 10 }}>
          <Typography variant="h3" sx={{ my: 8, textAlign: 'center' }}>
            Basında Biz
          </Typography>
          <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'juy7wtzdcmE'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'VQCqynGVtcw'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'JHRJfuviJu8'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'6nUe3HqX_Iw'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'iQTeN46aCak'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'ZffC3gOTd2c'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'OsZ4V_0DQxk'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'C2IHH5-Bx2E'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'F0Y0H8t_EnI'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'C5F4ga0ZzeE'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'6dR6BF_vf1s'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'Wx19k6w12sk'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'AB3L39G8AaY'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'Kbeg15qi8Ko'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <MediaVideoMain embedId={'dmrmymcqdFA'} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
