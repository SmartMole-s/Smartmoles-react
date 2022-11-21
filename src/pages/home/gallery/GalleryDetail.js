import { useParams } from 'react-router-dom';
import { useState } from 'react';
// @mui
import { Container, Box, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
// mock
import { photos } from '../../../_mock/photo';
// components
import Page from '../../../components/Page';
import Image from '../../../components/Image';
import ReactImageViewer from '../../../components/images-viewer/ReactImageViewer';
// sections
import { GallerySlider } from '../../../sections/home/gallery';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function GalleryDetail() {
  const { name } = useParams();
  const thisGallery = photos.filter((x) => x.categoryId === name);
  const [isOpen, setIsOpen] = useState(false);
  const [currImg, setCurrImg] = useState(0);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleImageClose = () => {
    setIsOpen(false);
  };

  const gotoNextImg = () => {
    setCurrImg(currImg + 1);
  };

  const gotoPrevImg = () => {
    setCurrImg(currImg - 1);
  };

  return (
    <Page title="Fotoğraf">
      <RootStyle>
        <GallerySlider />
        <Container sx={{ my: 10 }}>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 2fr)',
              },
            }}
          >
            {thisGallery.map((item) => (
              <Card key={item.id} sx={{ textAlign: 'center' }}>
                <Box sx={{ position: 'relative' }}>
                  <Image onClick={() => handleImageClick(item.id)} alt={item.alt} src={item.src} ratio="6/4" />
                </Box>
              </Card>
            ))}
          </Box>
          <ReactImageViewer
            imgs={thisGallery}
            isOpen={isOpen}
            onClose={() => handleImageClose()}
            currImg={currImg}
            onClickPrev={gotoPrevImg}
            onClickNext={gotoNextImg}
          />
        </Container>
      </RootStyle>
    </Page>
  );
}
