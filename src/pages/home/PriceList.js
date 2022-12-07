// @mui
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// components
import Page from '../../components/Page';

// sections
import { PriceListPdf } from '../../sections/home';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));
const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));
// ----------------------------------------------------------------------

export default function PriceList() {
  return (
    <Page title="Fiyat-Listesi">
      <RootStyle></RootStyle>
      <Container maxWidth={'lg'}>
        <ContentStyle>
          <PriceListPdf />
        </ContentStyle>
      </Container>
    </Page>
  );
}
