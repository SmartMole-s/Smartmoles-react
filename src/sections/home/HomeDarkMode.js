import { m } from 'framer-motion';
// @mui
import { Grid, Box, Tooltip, Container, Button, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { varFade } from '../../components/animate';
// hooks
import useResponsive from '../../hooks/useResponsive';
import useLocales from '../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  const isDesktop = useResponsive('up', 'md');
  const { translate } = useLocales();
  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sm={12} md={4}>
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
          {isDesktop && (
            <m.div variants={varFade().inRight}>
              <Typography variant="h2">
                {translate('HomeDark.title')}
                <br></br>
                {translate('HomeDark.title2')}
              </Typography>
            </m.div>
          )}
        </Grid>
       
        <Grid item sm={12} md={1}>

        </Grid>
        <Grid item sm={12} md={4}>
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
                  top: '1%',
                  right: '38%',
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
                  top: '18%',
                  right: '71%',
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
                  top: '52%',
                  left: '3%',
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
                  bottom: '54%',
                  left: '73%',
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
                  bottom: '18%',
                  right: '4%',
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
                  bottom: '38%',
                  right: '38%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href="/hakkimizda"
              >
                SmartMoles
              </Button>
            </Tooltip>
            <Tooltip title="AirMoles" arrow>
              <Button
                sx={{
                  height: '25%',
                  width: '25%',
                  position: 'absolute',
                  bottom: '1%',
                  right: '39%',
                  zIndex: '2',
                  opacity: '0',
                }}
                size="large"
                href="/air-moles"
              >
                AirMoles
              </Button>
            </Tooltip>
            <Image src="/static/images/markalar.png" alt="about-vision" effect="black-and-white" />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
