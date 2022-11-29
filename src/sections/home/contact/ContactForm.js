// react
import React, { useRef, useState } from 'react';
// @mui
import { Button, Typography, TextField, Stack } from '@mui/material';
// components
import { MotionInView, varFade } from '../../../components/animate';
import { SuccessAlert } from '../../../components/alerts';
// emaljs
import emailjs from '@emailjs/browser';
//hooks
import useLocales from '../../../hooks/useLocales';
// ----------------------------------------------------------------------

export default function ContactForm() {
  const form = useRef();
  const { translate } = useLocales();
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
    <Stack spacing={5}>
      <MotionInView variants={varFade().inUp}>
        <Typography variant="h3">{translate('Contact.title2')}</Typography>
        <Typography variant="body2">
        {translate('Contact.desc')}
        </Typography>
      </MotionInView>
      <form ref={form} onSubmit={sendEmail}>
        <Stack spacing={3}>
          <MotionInView variants={varFade().inUp}>
            <TextField name="user_name" fullWidth label={translate('Contact.place1')} required />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField name="user_email" fullWidth label={translate('Contact.place2')} required />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField fullWidth label={translate('Contact.place3')} required />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField name="message" fullWidth label={translate('Contact.place4')} multiline rows={4} required />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            {isSuccess ? (
              alertState('Başarılı!', 'Formunuz bize ulaşmıştır.', 'En kısa sürede sizinle iletişime geçilecektir.')
            ) : (
              <Button type="submit" value="Send" size="large" variant="contained">
                {translate('Contact.send')}
              </Button>
            )}
          </MotionInView>
        </Stack>
      </form>
    </Stack>
  );
}
