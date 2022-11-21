// @mui
import { styled } from '@mui/material/styles';
import { Divider, Box, Container, Typography } from '@mui/material';
// components
import Page from '../../../components/Page';
import { MediaPicSlider, MediaPicCard } from '../../../sections/home/mediaPic/';
//mock
import {media} from '../../../_mock/media'
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(8),
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function MediaPic() {
  return (
    <Page title="Yazılı Basın">
      <RootStyle>
        <MediaPicSlider />
      </RootStyle>
      <Container maxWidth={'lg'}>
        <Typography variant="h3" sx={{ my: 8, textAlign: 'center' }}>
          Bizden Haberler
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {media.map((item) =>
          <MediaPicCard key={item.id} title={item.title} src={item.src} content={item.content} pathname={item.pathname} />
          )}
        </Box>
      </Container>
      <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
    </Page>
  );
}
