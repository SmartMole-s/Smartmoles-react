// @mui
import { styled, Box, Paper, Grid } from '@mui/material/styles';
// components
import Page from '../../../components/Page';
import { CapillarityPriceList } from '../../../sections/home/priceList/CapillarityPriceList';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function SmartCapillarityPriceList() {
  return (
    <Page title="SmartCapillarity Fiyat Listesi">
        <CapillarityPriceList />
    </Page>
  );
}
