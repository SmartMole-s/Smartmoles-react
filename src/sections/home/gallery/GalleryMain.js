import { Link as RouterLink } from 'react-router-dom';

// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

// components
import Image from '../../../components/Image';

// ----------------------------------------------------------------------

const OverlayStyle = styled('h1')(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9,
  position: 'absolute',
  '&:hover': {
    transition: 'all 2s ease',
    backgroundColor: 'transparent',
  },
  backgroundColor: alpha(theme.palette.grey[900], 0.62),
}));

const TitleStyle = styled('h1')(({ theme }) => ({
  ...theme.typography.h5,
  top: 0,
  zIndex: 10,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3),
  color: theme.palette.common.white,
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4),
  },
}));

// ----------------------------------------------------------------------

export default function GalleryMain({ title, cover, pathname }) {
  return (
    <Link to={pathname} color="inherit" underline="hover" component={RouterLink}>
      <Box sx={{ position: 'relative' }}>
        <OverlayStyle />
          <TitleStyle>{title}</TitleStyle>
        <Image alt="SmartMole's" src={cover} ratio="16/9" />
      </Box>
    </Link>
  );
}
