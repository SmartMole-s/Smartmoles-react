import { m } from 'framer-motion';
// @mui
import { Grid, Box, Tooltip, Container, Button ,Typography} from '@mui/material';
// components
import Image from '../../components/Image';
import { varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  return (
    <>
      <Grid container justifyContent="center" alignItems='center'>
        <Grid item sm={12} md={6}>
          <Container sx={{ position: 'relative' }}>
            <Image
              visibleByDefault
              disabledEffect
              alt="image shape"
              src="https://minimal-assets-api.vercel.app/assets/images/home/shape.svg"
              sx={{
                top: 0,
                right: 0,
                bottom: 0,
                width: 720,
                height: 720,
                opacity: 0.48,
                my: 'auto',
                position: 'absolute',
                display: { xs: 'none', md: 'block' },
              }}
            />
          </Container>
          {/* <SloganStyle sx={{ padding: '28% 5%', color: '#000' }}>
            <Typist>tarımsal faaliyetlerinize<br></br> değer katıyoruz</Typist>
          </SloganStyle> */}
           <m.div variants={varFade().inRight}  >
              <Typography variant="h2" sx={{ px:'10%'}}>
              Siber Fiziksel Teknoloji Ürünlerimizi İnceleyin
              </Typography>
            </m.div>
        </Grid>
        <Grid item sm={12} md={6}>
          <Box
            sx={{
              mb: 10,
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <Tooltip title="SmartRoot" arrow>
              <Button
                sx={{
                  position: 'absolute',
                  height: '25%',
                  width: '25%',
                  top: '5%',
                  right: '35%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href={'/smart-root'}
              >
                SmartRoot
              </Button>
            </Tooltip>
            <Tooltip title="SmartValves" arrow>
              <Button
                sx={{
                  height: '25%',
                  width: '25%',
                  position: 'absolute',
                  top: '28%',
                  right: '6%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href={'/smart-valves'}
              >
                SmartValves
              </Button>
            </Tooltip>
            <Tooltip title="SmartCapillarity" arrow>
              <Button
                sx={{
                  height: '25%',
                  width: '25%',
                  position: 'absolute',
                  top: '30%',
                  left: '8%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href="/smart-capillarity"
              >
                SmartCapillarity
              </Button>
            </Tooltip>
            <Tooltip title="SmartFarm" arrow>
              <Button
                sx={{
                  height: '25%',
                  width: '25%',
                  position: 'absolute',
                  bottom: '6%',
                  left: '19%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href="/smart-farm"
              >
                SmartFarm
              </Button>
            </Tooltip>
            <Tooltip title="SmartWaterlevel" arrow>
              <Button
                sx={{
                  height: '25%',
                  width: '25%',
                  position: 'absolute',
                  bottom: '6%',
                  right: '18%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href="/smart-waterlevel"
              >
                SmartWaterlevel
              </Button>
            </Tooltip>
            <Tooltip title="SmartMole's" arrow>
              <Button
                sx={{
                  height: '25%',
                  width: '25%',
                  position: 'absolute',
                  bottom: '34%',
                  right: '37%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href="/hakkimizda"
              >
                SmartMoles
              </Button>
            </Tooltip>
            <Image src="/static/images/markalar.png" alt="about-vision" effect="black-and-white" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
