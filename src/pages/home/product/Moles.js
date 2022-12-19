// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../../../components/Page';
import { MolesSlider, MolesProduct } from '../../../sections/home/product/moles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Moles() {
  return (
    <Page title="AirMoles">
      <RootStyle>

        <MolesSlider />
                
        <MolesProduct />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />

      </RootStyle>
    </Page>
  );
}
