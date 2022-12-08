// @mui
import { styled } from '@mui/material/styles';
// import { Divider } from '@mui/material';
// components
import Page from '../../../components/Page';
import { CareerSlider, CareerForm } from '../../../sections/home/career';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Career() {
  return (
    <Page title="Career">
      <RootStyle>
        <CareerSlider />
            <CareerForm />
      </RootStyle>
    </Page>
  );
}
