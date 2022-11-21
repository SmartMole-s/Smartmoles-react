import { useRef } from 'react';
import Slider from 'react-slick';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, Button, Container, Typography, Divider } from '@mui/material';

// components
import Iconify from '../../components/Iconify';
import { CarouselArrows } from '../../components/carousel';
import { MotionInView, varFade } from '../../components/animate';

// ----------------------------------------------------------------------


export default function HomeProductSlider() {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const settings = {
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px',
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Container sx={{ pb: 10, textAlign: 'center' }}>

      <MotionInView variants={varFade().inUp}>
        <Typography variant="h2" sx={{ mt:8, mb: 3, textAlign:'letter' }}>
          SmartMole's
        </Typography>
      </MotionInView>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
          <Slider ref={carouselRef} {...settings}>
            {name.map((name,index) => (
              <MotionInView key={index} variants={varFade().in} sx={{ px: 1.5, py: 5 }}>
                <Product name={name} description={description[index]} image={image[index]} path={path[index]} />
              </MotionInView>
            ))}
          </Slider>
        </CarouselArrows>
      </Box>
    </Container>
  );
}


function Product({ name, description, image, path }) {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: "auto",
        padding: "14px",
        flexDirection: "column",
        alignItems: "center",
        objectFit: 'contain'
      }}
    >
      <img src={image} alt="SmartMole's"></img>
      <Box
        sx={{ display: "flex", flexDirection: "column", borderRadius: "16px" }}
      >
        <CardContent sx={{ flex: "1 0 auto"}}>
          <Typography variant="subtitle1" sx={{ my: 2 }}>
            {name}
          </Typography>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Box sx={{ py: 1, display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
        <div>
          <Typography variant="subtitle2" component="div" sx={{ mb: 0.75, color: 'text.disabled' }}>
            {description}
          </Typography>
        </div>
      </Box>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: "row",
            borderRadius: "16px",
            alignContent: "center",
            alignItems: "center",
            margin: "16px"
          }}
        ></Box>
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        size="large"
        endIcon={<Iconify icon={'ic:round-arrow-right-alt'} width={24} height={24} />}
        sx={{ mx: 'auto' }}
        href={path}
      >
        Detaylı İncele
      </Button>
    </Card>
  );
}

//-------------------------------------------------------
const name = [
  ['SmartCapillarity'],
  ['SmartRoot'],
  ['SmartFarm'],
  ['SmartValve'],
  ['SmartWaterlevel'],
];
const path = [
  ['/smart-capillarity'],
  ['/smart-root'],
  ['/smart-farm'],
  ['/smart-valve'],
  ['/smart-waterlevel'],
];
const image = [
  ['/static/product/smartcapillarity.png'],
  ['/static/product/smartroot.png'],
  ['/static/product/smartfarm.png'],
  ['/static/product/smartvalve.png'],
  ['/static/product/smartwaterlevel.png'],
];
const description = [
  ['SmartCapillarity (SC) sistemi, toprak neminin izlenmesinde, uygulanacak sulama suyunun ve bitki su tüketiminin belirlenmesinde; ülkemizde ve dünyada bir ilk olan patenti ﬁrmamızca alınmış ve üretilen, yapay zekâya sahip, toprak proﬁlindeki kapiller su hareketini gerçek zamanlı olarak izlemeye ve sulama sistemini otomatik olarak yönetmeye yarayan bir robot sistemdir.'],
  ['Bitkilerin ihtiyaç duydukları suyun %80’inin depolandığı etkili kök bölgesinde suyu ve içindeki gübreyi bitkiye alan emici tüylerin bulunduğu bölgeleri belirleyen akıllı bir kök yönetim bölgesi oluşturma ve toprak proﬁlinde gübrenin bitki tarafından emilimini yöneten bir robot sistemdir.'],
  ['Taban suyu seviyesinin bilinmesi, hem drenaj sorununun net olarak tanımlanabilmesi hemde sulama ve gübreleme işlemlerinin kirliliğe ve israfa yol açmadan yapılabilmesi için gerekmektedir.'],
  ['Firmamızın uzman mühendisleri sizlere özel çözümler sunmakta ve kişiye özel talep edilen yazılım ve donanımsal teknolojileri geliştirebilmektedir.'],
  ['Bitkinin ihtiyaç duyduğu suyun, doğal yağışlarla karşılanamayan kısmının, yapay yollarla bitkinin etkili kök bölgesine verilmesidir.'], 
];