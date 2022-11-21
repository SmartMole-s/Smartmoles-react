// @mui
import { styled } from '@mui/material/styles';
import { Divider, Container } from '@mui/material';
// components
import Page from '../../components/Page';
import { OurProjectsHero, OurProjectsReferance } from '../../sections/home/ourprojects';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function OurProjects() {
  return (
    <Page title="Our Projects">
      <RootStyle>
        <OurProjectsHero />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
        <Container maxWidth={'lg'}>
          <OurProjectsReferance />
        </Container>
      </RootStyle>
    </Page>
  );
}
