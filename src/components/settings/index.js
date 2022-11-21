import PropTypes from 'prop-types';
import { AnimatePresence, m } from 'framer-motion';
import { useState, useEffect } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Backdrop, Divider, Typography, Stack, FormControlLabel, Radio } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { NAVBAR, defaultSettings } from '../../config';
//
import Iconify from '../Iconify';
import Scrollbar from '../Scrollbar';
import { IconButtonAnimate } from '../animate';
//
import ToggleButton from './ToggleButton';
import SettingMode from './SettingMode';
// import SettingLayout from './SettingLayout';
// import SettingStretch from './SettingStretch';
import SettingFullscreen from './SettingFullscreen';
import SettingColorPresets from './SettingColorPresets';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  ...cssStyles(theme).bgBlur({ color: theme.palette.background.paper, opacity: 0.92 }),
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  position: 'fixed',
  overflow: 'hidden',
  width: NAVBAR.BASE_WIDTH,
  flexDirection: 'column',
  margin: theme.spacing(2),
  paddingBottom: theme.spacing(3),
  zIndex: theme.zIndex.drawer + 3,
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: `-24px 12px 32px -4px ${alpha(
    theme.palette.mode === 'light' ? theme.palette.grey[500] : theme.palette.common.black,
    0.16
  )}`,
}));

// ----------------------------------------------------------------------

export default function Settings() {
  const { themeMode, themeColorPresets, themeStretch, themeLayout, onResetSetting } = useSettings();
  const [open, setOpen] = useState(false);

  const notDefault =
    themeMode !== defaultSettings.themeMode ||
    themeColorPresets !== defaultSettings.themeColorPresets ||
    themeLayout !== defaultSettings.themeLayout ||
    themeStretch !== defaultSettings.themeStretch;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Backdrop
        open={open}
        onClick={handleClose}
        sx={{ background: 'transparent', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      />

      {!open && <ToggleButton open={open} notDefault={notDefault} onToggle={handleToggle} />}

      <AnimatePresence>
        {open && (
          <>
            <RootStyle>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 2, pr: 1, pl: 2.5 }}>
                <Typography variant="subtitle1">Ayarlar</Typography>
                <div>
                  <IconButtonAnimate onClick={onResetSetting}>
                    <Iconify icon={'ic:round-refresh'} width={20} height={20} />
                  </IconButtonAnimate>
                  <IconButtonAnimate onClick={handleClose}>
                    <Iconify icon={'eva:close-fill'} width={20} height={20} />
                  </IconButtonAnimate>
                </div>
              </Stack>

              <Divider sx={{ borderStyle: 'dashed' }} />

              <Scrollbar sx={{ flexGrow: 1 }}>
                <Stack spacing={6} sx={{ p: 3 }}>
                  <Stack spacing={4.5}>
                    <Typography variant="subtitle2">Tema</Typography>
                    <SettingMode />
                  </Stack>

                  {/* <Stack spacing={1.5}>
                    <Typography variant="subtitle2">Menü</Typography>
                    <SettingLayout />
                  </Stack> */}

                  <Stack spacing={4.5}>
                    <Typography variant="subtitle2">Renkler</Typography>
                    <SettingColorPresets />
                  </Stack>

                  <SettingFullscreen />
                </Stack>
              </Scrollbar>
            </RootStyle>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ----------------------------------------------------------------------

BoxMask.propTypes = {
  value: PropTypes.string,
};

export function BoxMask({ value }) {
  return (
    <FormControlLabel
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  );
}
