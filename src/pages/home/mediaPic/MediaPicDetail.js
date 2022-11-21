import { useParams } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Divider, Box, Container, Typography, Grid } from '@mui/material';
// components
import Page from '../../../components/Page';
import Image from '../../../components/Image';
import { MotionInView, varFade } from '../../../components/animate';
import { MediaPicSlider } from '../../../sections/home/mediaPic/';
// mock
import { media } from '../../../_mock/media';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function MediaPicDetail() {
  const { name } = useParams();
  const thisMedia = media.find((x) => x.pathname === name);
  return (
    <Page title="Yazılı Basın">
      <RootStyle>
        <MediaPicSlider />
        <Divider orientation="vertical" sx={{ my: 3, mx: 'auto', width: 2, height: 40 }} />
      </RootStyle>
      <Container maxWidth={'lg'}>
        <Typography variant="h3" sx={{ my: 4, textAlign: 'center' }}>
          {thisMedia.title}
        </Typography>
        <Container sx={{ mt: 1 }}>
          <Box
            sx={{
              mb: 10,
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              height: '600px'
            }}
          >
            <Image src={thisMedia.src} alt={'SmartMoles'} effect="black-and-white" />
          </Box>
          <Grid container justifyContent="center">
            <Grid item xs={10} sm={8}>
              <MotionInView variants={varFade().inUp}>
                <div style={{fontSize:'1.2rem'}} dangerouslySetInnerHTML={{__html : thisMedia.content}} >

                </div>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Divider orientation="vertical" sx={{ my: 4, mx: 'auto', width: 2, height: 40 }} />
    </Page>
  );
}
