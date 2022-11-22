// react
import React, { useRef, useState } from 'react';
// @mui
import { Button, TextField, Typography, Grid } from '@mui/material';
// components
import SuccessAlert from '../../../components/alerts/SuccessAlert';
// emailJs
import emailjs from '@emailjs/browser';

// ----------------------------------------------------------------------

export default function VendorForm() {
  const form = useRef();

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
      <Grid container spacing={3}>
        {/* <Stack spacing={3}> */}
        <Grid container item>
          <Typography letterSpacing={1} variant="h4">
            Bayimiz olmak için aşağıdaki formu doldurunuz.
          </Typography>
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_name" fullWidth label="Şirket Ünvanı" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="authorized_person_name_and_surname " fullWidth label="Yetkili kişi Ad ve Soyadı:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_phone" fullWidth label="Şirket Telefonu:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="user_phone" fullWidth label="Telefon (GSM):" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="email" fullWidth label="E-Posta:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="website" fullWidth label="Web Sayfası:" required />
        </Grid>

        <Grid container item>
          <TextField name="adress" fullWidth label="Açık Adres:" multiline rows={2} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="tax" fullWidth label="Vergi Dairesi:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="tax_number" fullWidth label="Vergi Numarası:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="registered_chamber_of_commerce" fullWidth label="Bağlı Olduğu Ticaret Odası:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="trade_registery_number" fullWidth label="Ticaret Sicil No:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="foundation_year" fullWidth label="Kuruluş Yılı:" required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="personal_number" fullWidth label="Personel Sayısı:" required />
        </Grid>

        <Grid container item>
          <TextField name="fields_of_activity" fullWidth label="Faaliyet Alanları:" multiline rows={4} required />
        </Grid>

        <Grid container item>
          <TextField name="references" fullWidth label="Referanslarınız:" multiline rows={4} required />
        </Grid>

        <Grid container item>
          <TextField
            name="dealer_geographic_area"
            fullWidth
            label="Bayilik yapmak istediğiniz coğrafi alan:"
            multiline
            rows={2}
            required
          />
        </Grid>

        <Grid container item>
          <TextField
            name="other_dealers"
            fullWidth
            label="Varsa Sahip olduğunuz diğer bayilikler:"
            multiline
            rows={4}
          />
        </Grid>

        <Grid container item>
          {!isSuccess ? (
            alertState(
              'Başarılı!',
              'Bayilik başvurunuz bize ulaşmıştır.',
              'En kısa sürede sizinle iletişime geçilecektir.'
            )
          ) : (
            <Button type="submit" value="Send" size="large" variant="contained" fullWidth>
              Gönder
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}
