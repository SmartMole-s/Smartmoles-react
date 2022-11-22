// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../../../components/Page';
import { AirMolesSlider, AirMolesWhat, AirMolesImage } from '../../../sections/home/product/airmoles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function AirMoles() {
  return (
    <Page title="AirMoles">
      <RootStyle>
        <AirMolesSlider />
        
        <AirMolesWhat />
        
        <AirMolesImage />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      </RootStyle>
    </Page>
  );
}
