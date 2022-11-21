// react
import React, { useRef } from 'react';
// @mui
import { Button, Typography, TextField, Stack } from '@mui/material';
// components
import { MotionInView, varFade } from '../../../components/animate';
// emaljs
import emailjs from '@emailjs/browser';

// ----------------------------------------------------------------------

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
    <Stack spacing={5}>
      <MotionInView variants={varFade().inUp}>
        <Typography variant="h3">Bize Ulaşın</Typography>
        <Typography variant="body2">
          İletişim formundan bizimle iletişime geçebilirsiniz. Gönderdiğiniz formlar müşteri temsilcimiz tarafından
          incelendikten sonra en kısa süre zarfında tarafınıza dönüş sağlanacaktır.
        </Typography>
      </MotionInView>
      <form ref={form} onSubmit={sendEmail}>
        <Stack spacing={3}>
          <MotionInView variants={varFade().inUp}>
            <TextField name="user_name" fullWidth label="Ad Soyad" />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField name="user_email" fullWidth label="Email" />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField fullWidth label="Konu" />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField name="message" fullWidth label="Mesajınız." multiline rows={4} />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <Button type="submit" value="Send" size="large" variant="contained">
              Gönder
            </Button>
          </MotionInView>
        </Stack>
      </form>
    </Stack>
  );
}
