import * as Yup from 'yup';
// react
import React, { useState } from 'react';
// @mui
import { Alert, Typography, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import SuccessAlert from '../../../components/alerts/SuccessAlert';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
// emailJs
import MailService from '../../../service/MailServer';
//hooks
import useLocales from '../../../hooks/useLocales';
import useIsMountedRef from '../../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

export default function VendorForm() {
  const { translate } = useLocales();
  const services = new MailService();
  const isMountedRef = useIsMountedRef();
  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Geçerli bir mail adresi giriniz.').required('Email zorunludur'),
    taxNumber: Yup.number()
      .typeError('Sadece sayı giriniz.')
      .min(1000000000, 'Vergi Numarası 10 haneli olmak zorundadır')
      .max(9999999999, 'Vergi Numarası 10 haneli olmak zorundadır'),
    tradeRegisteryNumber: Yup.number()
      .typeError('Sadece sayı giriniz.')
      .min(10000, 'Ticaret Sicil Numarası 5 haneli olmak zorundadır')
      .max(99999, 'Ticaret Sicil Numarası 5 haneli olmak zorundadır'),
    foundationYear: Yup.number().typeError('Sadece sayı giriniz.').positive().max(9999, 'Sadece yıl giriniz.'),
    personalNumber: Yup.number().typeError('Sadece sayı giriniz.').positive(),
  });

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    try {
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
            window.location.reload();
          }, 5000);
        }
      });
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', error);
      }
    }
  };

  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        {/* <Stack spacing={3}> */}
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Grid container item>
          <Typography letterSpacing={1} variant="h4">
            {translate('Vendor.title3')}
          </Typography>
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="companyName" label={translate('Vendor.place1')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="authorizedPersonFullName" label={translate('Vendor.place2')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="companyPhone" label={translate('Vendor.place3')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="userPhone" label={translate('Vendor.place4')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="email" label={translate('Vendor.place5')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="website" label={translate('Vendor.place6')} required />
        </Grid>

        <Grid container item>
          <RHFTextField name="adress" label={translate('Vendor.place7')} multiline rows={2} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="tax" label={translate('Vendor.place8')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="taxNumber" label={translate('Vendor.place9')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="registeredChamberOfCommerce" label={translate('Vendor.place10')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="tradeRegisteryNumber" label={translate('Vendor.place11')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="foundationYear" label={translate('Vendor.place12')} required />
        </Grid>

        <Grid container item xs={12} md={6}>
          <RHFTextField name="personalNumber" label={translate('Vendor.place13')} required />
        </Grid>

        <Grid container item>
          <RHFTextField name="fieldsOfActivity" label={translate('Vendor.place14')} multiline rows={4} required />
        </Grid>

        <Grid container item>
          <RHFTextField name="references" label={translate('Vendor.place15')} multiline rows={4} required />
        </Grid>

        <Grid container item>
          <RHFTextField name="dealerGeographicArea" label={translate('Vendor.place16')} multiline rows={2} required />
        </Grid>

        <Grid container item>
          <RHFTextField name="otherDealers" label={translate('Vendor.place17')} multiline rows={4} />
        </Grid>

        <Grid container item>
          {isSuccess ? (
            alertState(
              'Başarılı!',
              'Bayilik başvurunuz bize ulaşmıştır.',
              'En kısa sürede sizinle iletişime geçilecektir.'
            )
          ) : (
            <LoadingButton type="submit" value="Send" size="large" variant="contained" loading={isSubmitting}>
              {translate('Vendor.button')}
            </LoadingButton>
          )}
        </Grid>
      </Grid>
    </FormProvider>
  );
}
