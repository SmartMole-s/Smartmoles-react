// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import { VendorHero, VendorForm } from '../../sections/home/vendor';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function Vendor() {
  return (
    <Page title="Bayilerimiz">
      <RootStyle>
        <VendorHero />
        <Container sx={{ mt: 15, mb: 10 }}>
            <VendorForm />
        </Container>
      </RootStyle>
    </Page>
  );
}
