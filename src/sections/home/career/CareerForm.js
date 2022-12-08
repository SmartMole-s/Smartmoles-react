// react
import React, { useRef, useState } from 'react';
// @mui
import { Button, TextField, Typography, Grid } from '@mui/material';
// components
import SuccessAlert from '../../../components/alerts/SuccessAlert';
// emailJs
import emailjs from '@emailjs/browser';
//hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function CareerForm() {
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
    emailjs.sendForm('service_z59cdzc', 'template_hoing1q', form.current, 'QyL_yy6jitDkpDP0f').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Grid container spacing={3} sx={{padding: "5%"}}>
        {/* <Stack spacing={3}> */}
        <Grid container item>
          <Typography letterSpacing={1} variant="h4">
          {translate('Vendor.title3')}
          </Typography>
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_name" fullWidth label={translate('CareerForm.place1')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="authorized_person_name_and_surname " fullWidth label={translate('CareerForm.place2')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_phone" fullWidth label={translate('CareerForm.place3')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="user_phone" fullWidth label={translate('CareerForm.place4')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="email" fullWidth label={translate('CareerForm.place5')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="website" fullWidth label={translate('CareerForm.place6')} required />
        </Grid>

        <Grid container item>
          <TextField name="adress" fullWidth label={translate('CareerForm.place7')} multiline rows={2} required />
        </Grid>

        <Grid container item>
          {isSuccess ? (
            alertState(
              'Başarılı!',
              'Bayilik başvurunuz bize ulaşmıştır.',
              'En kısa sürede sizinle iletişime geçilecektir.'
            )
          ) : (
            <Button type="submit" value="Send" size="large" variant="contained" fullWidth>
              {translate('CareerForm.button')}
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}
