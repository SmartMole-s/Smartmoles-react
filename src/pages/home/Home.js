// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../../components/Page';
// sections
import {
  HomeAdvertisement,
  HomeHugePackElements,
  HomeSlider,
  HomeDarkMode,
  HomeBannerFooter,
  HomeSlogan
} from '../../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        <HomeSlider />
        <ContentStyle>
          <HomeHugePackElements />
          <HomeSlogan />
          <HomeDarkMode />
          <HomeBannerFooter />
          <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
          <HomeAdvertisement />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
