import PropTypes from 'prop-types';
// @mui
import { Box, Typography, Paper } from '@mui/material';
// components
import Image from '../../../components/Image';
import { MotionInView, varFade } from '../../../components/animate';

const CATEGORIES = [
  {
    icon: '/static/project/tarimbakanlik.png',
    href: '#',
  },
  {
    icon: '/static/project/ozlem.jpg',
    href: '#',
  },
  {
    icon: '/static/project/konsept.jpg',
    href: '#',
  },
  {
    icon: '/static/project/azersun.png',
    href: '#',
  },
  {
    icon: '/static/project/alara.png',
    href: '#',
  },
  {
    icon: '/static/project/koza.png',
    href: '#',
  },
  {
    icon: '/static/project/shabran.png',
    href: '#',
  },
  {
    icon: '/static/project/rapunzel.jpg',
    href: '#',
  },
];

export default function OurProjectsReferance() {
  return (
    <Box
      sx={{
        mb: 15,
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(3, 1fr)',
        },
      }}
    >
      {CATEGORIES.map((category, index) => (
        <MotionInView key={index} variants={varFade().in}>
          <CategoryCard category={category} />
        </MotionInView>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

CategoryCard.propTypes = {
  category: PropTypes.shape({
    icon: PropTypes.string,
    label: PropTypes.string,
  }),
};

function CategoryCard({ category }) {
  const { label, icon } = category;

  return (
    <Paper
      variant="outlined"
      sx={{
        px: 2,
        height: 260,
        borderRadius: 2,
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
      }}
    >
      <Image visibleByDefault disabledEffect src={icon} sx={{}} />
      <Typography variant="subtitle2">{label}</Typography>
    </Paper>
  );
}
