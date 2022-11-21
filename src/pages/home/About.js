// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../../components/Page';
import { AboutHero, AboutWhat, AboutVision, AboutWhy } from '../../sections/home/about';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us">
      <RootStyle>
        <AboutHero />

        <AboutWhat />

        <AboutWhy />

        <AboutVision />
        
      </RootStyle>
    </Page>
  );
}
