import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Divider, Typography, Link } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// components
import Image from '../../../components/Image';

// ----------------------------------------------------------------------

const OverlayStyle = styled('div')(() => ({
  ...cssStyles().bgBlur({ blur: 0.7 }),
  top: 0,
  zIndex: 8,
  content: "''",
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'none',
}));

// ----------------------------------------------------------------------

export default function MediaPicCard({ src, title, content, pathname }) {
  return (
    <Card sx={{ textAlign: 'center' }}>
      <Box sx={{ position: 'relative' }}>
        <OverlayStyle />
        <Image src={src} alt={'alt'} ratio="16/9" />
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 6, px: 2 }}>
        {title}
      </Typography>

      <Divider sx={{ my: 2, borderStyle: 'dashed' }} />

        <div style={{
          padding: '0px 10px',
          margin: '24px 0px',
          color: 'text.secondary',
          display: '-webkit-box',
          WebkitLineClamp: '3',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',}} dangerouslySetInnerHTML={{__html : content}}></div>


      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ py: 3, display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        <Link to={pathname} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="caption" component="div" sx={{ fontSize: '1rem', mb: 0.75, color: 'text.disabled' }}>
            Devamını okumak için tıklayınız.
          </Typography>
        </Link>
      </Box>
    </Card>
  );
}
