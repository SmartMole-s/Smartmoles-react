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

export default function VendorForm() {
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
      <Grid container spacing={3}>
        {/* <Stack spacing={3}> */}
        <Grid container item>
          <Typography letterSpacing={1} variant="h4">
          {translate('Vendor.title3')}
          </Typography>
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_name" fullWidth label={translate('Vendor.place1')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="authorized_person_name_and_surname " fullWidth label={translate('Vendor.place2')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="company_phone" fullWidth label={translate('Vendor.place3')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="user_phone" fullWidth label={translate('Vendor.place4')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="email" fullWidth label={translate('Vendor.place5')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="website" fullWidth label={translate('Vendor.place6')} required />
        </Grid>

        <Grid container item>
          <TextField name="adress" fullWidth label={translate('Vendor.place7')} multiline rows={2} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="tax" fullWidth label={translate('Vendor.place8')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="tax_number" fullWidth label={translate('Vendor.place9')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="registered_chamber_of_commerce" fullWidth label={translate('Vendor.place10')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="trade_registery_number" fullWidth label={translate('Vendor.place11')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="foundation_year" fullWidth label={translate('Vendor.place12')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField name="personal_number" fullWidth label={translate('Vendor.place13')} required />
        </Grid>

        <Grid container item>
          <TextField name="fields_of_activity" fullWidth label={translate('Vendor.place14')} multiline rows={4} required />
        </Grid>

        <Grid container item>
          <TextField name="references" fullWidth label={translate('Vendor.place15')} multiline rows={4} required />
        </Grid>

        <Grid container item>
          <TextField
            name="dealer_geographic_area"
            fullWidth
            label={translate('Vendor.place16')}
            multiline
            rows={2}
            required
          />
        </Grid>

        <Grid container item>
          <TextField
            name="other_dealers"
            fullWidth
            label={translate('Vendor.place17')}
            multiline
            rows={4}
          />
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
              {translate('Vendor.button')}
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}
