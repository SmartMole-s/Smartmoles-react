// react
import React, { useRef, useState } from 'react';
// @mui
import { Button, TextField, Typography, Grid } from '@mui/material';
// components
import SuccessAlert from '../../../components/alerts/SuccessAlert';
// emailJs
import MailService from '../../../service/MailServer';
//hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function VendorForm() {
  const form = useRef();
  const { translate } = useLocales();
  const services = new MailService();
  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const [data, setData] = useState({
    companyName: '',
    authorizedPersonFullName: '',
    companyPhone: '',
    userPhone: '',
    email: '',
    website: '',
    adress: '',
    tax: '',
    taxNumber: '',
    registeredChamberOfCommerce: '',
    tradeRegisteryNumber: '',
    foundationYear: '',
    personalNumber: '',
    fieldsOfActivity: '',
    references: '',
    dealerGeographicArea: '',
    otherDealers: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    let mailData = {
      companyName: data.companyName,
      authorizedPersonFullName: data.authorizedPersonFullName,
      companyPhone: data.companyPhone,
      userPhone: data.userPhone,
      email: data.email,
      website: data.website,
      adress: data.adress,
      tax: data.tax,
      taxNumber: data.taxNumber,
      registeredChamberOfCommerce: data.registeredChamberOfCommerce,
      tradeRegisteryNumber: data.tradeRegisteryNumber,
      foundationYear: data.foundationYear,
      personalNumber: data.personalNumber,
      fieldsOfActivity: data.fieldsOfActivity,
      references: data.references,
      dealerGeographicArea: data.dealerGeographicArea,
      otherDealers: data.otherDealers,
    };
    let _mailData = [];
    for (var property in mailData) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(mailData[property]);
      _mailData.push(encodedKey + '=' + encodedValue);
    }
    _mailData = _mailData.join('&');
    services.sendSeller(_mailData).then((e) => {
      if (e.status === 200 || 201 || 204) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    });
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
          <TextField onChange={handleChange} name="companyName" fullWidth label={translate('Vendor.place1')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="authorizedPersonFullName"
            fullWidth
            label={translate('Vendor.place2')}
            required
          />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="companyPhone"
            fullWidth
            label={translate('Vendor.place3')}
            required
          />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField onChange={handleChange} name="userPhone" fullWidth label={translate('Vendor.place4')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField onChange={handleChange} name="email" fullWidth label={translate('Vendor.place5')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField onChange={handleChange} name="website" fullWidth label={translate('Vendor.place6')} required />
        </Grid>

        <Grid container item>
          <TextField
            onChange={handleChange}
            name="adress"
            fullWidth
            label={translate('Vendor.place7')}
            multiline
            rows={2}
            required
          />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField onChange={handleChange} name="tax" fullWidth label={translate('Vendor.place8')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField onChange={handleChange} name="taxNumber" fullWidth label={translate('Vendor.place9')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="registeredChamberOfCommerce"
            fullWidth
            label={translate('Vendor.place10')}
            required
          />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="tradeRegisteryNumber"
            fullWidth
            label={translate('Vendor.place11')}
            required
          />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="foundationYear"
            fullWidth
            label={translate('Vendor.place12')}
            required
          />
        </Grid>

        <Grid container item xs={12} md={6}>
          <TextField
            onChange={handleChange}
            name="personalNumber"
            fullWidth
            label={translate('Vendor.place13')}
            required
          />
        </Grid>

        <Grid container item>
          <TextField
            onChange={handleChange}
            name="fieldsOfActivity"
            fullWidth
            label={translate('Vendor.place14')}
            multiline
            rows={4}
            required
          />
        </Grid>

        <Grid container item>
          <TextField
            onChange={handleChange}
            name="references"
            fullWidth
            label={translate('Vendor.place15')}
            multiline
            rows={4}
            required
          />
        </Grid>

        <Grid container item>
          <TextField
            onChange={handleChange}
            name="dealerGeographicArea"
            fullWidth
            label={translate('Vendor.place16')}
            multiline
            rows={2}
            required
          />
        </Grid>

        <Grid container item>
          <TextField
            onChange={handleChange}
            name="otherDealers"
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
