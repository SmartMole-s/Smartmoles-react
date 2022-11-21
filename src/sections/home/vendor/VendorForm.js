// react
import React, { useRef } from 'react';
// @mui
import { Button, TextField, Typography, Grid } from '@mui/material';
// emailJs
import emailjs from '@emailjs/browser';

// ----------------------------------------------------------------------

export default function VendorForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          <TextField name="company_name" fullWidth label="Şirket Ünvanı" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="authorized_person_name_and_surname " fullWidth label="Yetkili kişi Ad ve Soyadı:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_phone" fullWidth label="Şirket Telefonu:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="user_phone" fullWidth label="Telefon (GSM):" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="email" fullWidth label="E-Posta:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="website" fullWidth label="Web Sayfası:" />
        </Grid>

        <Grid container item>
          <TextField name="adress" fullWidth label="Açık Adres:" multiline rows={2} />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="tax" fullWidth label="Vergi Dairesi:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="tax_number" fullWidth label="Vergi Numarası:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="registered_chamber_of_commerce" fullWidth label="Bağlı Olduğu Ticaret Odası:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="trade_registery_number" fullWidth label="Ticaret Sicil No:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="foundation_year" fullWidth label="Kuruluş Yılı:" />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="personal_number" fullWidth label="Personel Sayısı:" />
        </Grid>

        <Grid container item>
          <TextField name="fields_of_activity" fullWidth label="Faaliyet Alanları:" multiline rows={4} />
        </Grid>

        <Grid container item>
          <TextField name="references" fullWidth label="Referanslarınız:" multiline rows={4} />
        </Grid>

        <Grid container item>
          <TextField name="dealer_geographic_area" fullWidth label="Bayilik yapmak istediğiniz coğrafi alan:" multiline rows={2} />
        </Grid>

        <Grid container item>
          <TextField name="other_dealers" fullWidth label="Varsa Sahip olduğunuz diğer bayilikler:" multiline rows={4} />
        </Grid>

        <Grid container item>
          <Button type="submit" value="Send" size="large" variant="contained" fullWidth>
            Gönder
          </Button>
        </Grid>
        {/* </Stack> */}
      </Grid>
    </form>
  );
}
