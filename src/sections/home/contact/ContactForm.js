// react
import React, { useRef, useState } from 'react';
// @mui
import { Button, Typography, TextField, Stack } from '@mui/material';
// components
import { MotionInView, varFade } from '../../../components/animate';
import { SuccessAlert } from '../../../components/alerts';
// emaljs
import MailService from '../../../service/MailServer';
//hooks
import useLocales from '../../../hooks/useLocales';

// ----------------------------------------------------------------------

export default function ContactForm() {
  const form = useRef();
  const { translate } = useLocales();
  const services = new MailService();

  const alertState = (title, description, descriptionStrong) => {
    return (
      <SuccessAlert title={`${title}`} description={`${description}`} descriptionStrong={`${descriptionStrong}`} />
    );
  };

  const [data, setData] = useState({
    fullname: '',
    email: '',
    subjects: '',
    message: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const [isSuccess, setIsSuccess] = useState(false);
  const fullnameRef = useRef(null);
  const mailRef = useRef(null);
  const subjectsRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    let mailData = {
      fullname: data.fullname,
      email: data.email,
      subjects: data.subjects,
      message: data.message,
    };
    let _mailData = [];
    for (var property in mailData) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(mailData[property]);
      _mailData.push(encodedKey + '=' + encodedValue);
    }
    _mailData = _mailData.join('&');
    services.sendForm(_mailData).then((e) => {
      if (e.status === 200 || 201 || 204) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      }
    });
    e.target.reset();
  };

  return (
    <Stack spacing={5}>
      <MotionInView variants={varFade().inUp}>
        <Typography variant="h3">{translate('Contact.title2')}</Typography>
        <Typography variant="body2">{translate('Contact.desc')}</Typography>
      </MotionInView>
      <form ref={form} onSubmit={sendEmail}>
        <Stack spacing={3}>
          <MotionInView variants={varFade().inUp}>
            <TextField
              onChange={handleChange}
              type="text"
              name="fullname"
              fullWidth
              label={translate('Contact.place1')}
              required
              ref={fullnameRef}
            />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField
              onChange={handleChange}
              type="email"
              name="email"
              fullWidth
              label={translate('Contact.place2')}
              required
              ref={mailRef}
            />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField
              onChange={handleChange}
              type="text"
              name="subjects"
              fullWidth
              label={translate('Contact.place3')}
              required
              ref={subjectsRef}
            />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            <TextField
              onChange={handleChange}
              type="text"
              name="message"
              fullWidth
              label={translate('Contact.place4')}
              multiline
              rows={4}
              required
              ref={messageRef}
            />
          </MotionInView>

          <MotionInView variants={varFade().inUp}>
            {isSuccess ? (
              alertState('Ba??ar??l??!', 'Formunuz bize ula??m????t??r.', 'En k??sa s??rede sizinle ileti??ime ge??ilecektir.')
            ) : (
              <Button type="submit" value="Send" size="large" variant="contained">
                {translate('Contact.button')}
              </Button>
            )}
          </MotionInView>
        </Stack>
      </form>
    </Stack>
  );
}
