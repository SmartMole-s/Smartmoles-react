// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../../../components/Page';
import  { CapillaritySlider, CapillarityWhat, CapillarityImage }  from '../../../sections/home/product/capillarity';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function SmartCapillarity() {
  return (
    <Page title="SmartCapillarity">
      <RootStyle>
        <CapillaritySlider />
        
        <CapillarityWhat />

        <CapillarityImage />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

      </RootStyle>
    </Page>
  );
}
