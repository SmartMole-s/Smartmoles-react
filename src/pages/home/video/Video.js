// @mui
import { Card, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Page from '../../../components/Page';
// sections
import { VideoMain, VideoSlider } from '../../../sections/home/video';
//hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Video() {
  const { translate } = useLocales();
  return (
    <Page title="Video Galerisi">
      <RootStyle>
        <VideoSlider />
        <Container sx={{ my: 10 }}>
        <Typography variant="h3" sx={{ my: 8, textAlign: 'center' }}>
          {translate('Video.title')}
        </Typography>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <Card>
                <VideoMain embedId={'tD4xK6m2R0c'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <VideoMain embedId={'rdQXqrb1Rfg'} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <VideoMain embedId={'yTgXbT35iuQ'} />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
