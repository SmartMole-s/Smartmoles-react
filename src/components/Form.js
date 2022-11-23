import { m } from 'framer-motion';
import React, { useRef, useState } from 'react';
// @mui
import { Modal, Box, Stack, Button, TextField } from '@mui/material';
// components
import { MotionInView, varFade, varBounce } from './animate';
import Iconify from './Iconify';
import { SuccessAlert } from './alerts';
// emaljs
import emailjs from '@emailjs/browser';

const Boxstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Form() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    emailjs.sendForm('service_z59cdzc', 'template_hoing1q', form.current, 'UBZ9lm5WEFl_pIG6K').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <m.div variants={varBounce().inUp}>
        <Button
          size="medium"
          variant="contained"
          startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
          onClick={handleOpen}
        >
          Fiyat Teklifi Al
        </Button>
      </m.div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Boxstyle}>
          <form ref={form} onSubmit={sendEmail}>
            <Stack spacing={3}>
              <MotionInView variants={varFade().inUp}>
                <TextField name="user_name" fullWidth label="Ad Soyad" required />
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <TextField name="user_email" fullWidth label="Telefon" required />
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <TextField name="user_email" fullWidth label="İl-İlçe" required />
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <TextField fullWidth label="Konu" required />
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <TextField name="message" fullWidth label="Mesajınız" multiline rows={4} required />
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                {isSuccess ? (
                  alertState('Başarılı!', 'Formunuz bize ulaşmıştır.', 'En kısa sürede sizinle iletişime geçilecektir.')
                ) : (
                  <Button type="submit" value="Send" size="large" variant="contained">
                    Gönder
                  </Button>
                )}
              </MotionInView>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
