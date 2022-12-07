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
// ----------------------------------------------------------------------

export default function SmartCapillarityPriceList() {
  return (
    <Page title="SmartCapillarity Fiyat Listesi">
      <RootStyle>
        
         

      </RootStyle>
      <CapillarityPriceList />
    </Page>
  );
}
