// @mui
import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
// components
import Page from '../../../components/Page';
import { FarmSlider, FarmWhat, FarmImage } from '../../../sections/home/product/farm';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function SmartFarm() {
  return (
    <Page title="SmartFarm">
      <RootStyle>
        <FarmSlider />

        <FarmWhat />

        <FarmImage />

        <Divider orientation="vertical" sx={{ my: 10, mx: 'auto', width: 2, height: 40 }} />
      </RootStyle>
    </Page>
  );
}
