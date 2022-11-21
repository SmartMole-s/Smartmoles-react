import PropTypes from 'prop-types';
// @mui
import { Box, Card } from '@mui/material';

// ----------------------------------------------------------------------

GalleryPhoto.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default function GalleryPhoto({ src, alt }) {
  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <img src={src} alt={alt} />
      </Box>
    </Card>
  );
}
