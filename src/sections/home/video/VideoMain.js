// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function VideoMain({ embedId }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <div className="video-responsive">
        <iframe
          width='100%'
          height='400'
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Box>
  );
}
