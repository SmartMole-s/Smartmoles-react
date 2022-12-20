import axios from 'axios';
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
};
export default class MailService {
  sendForm(data) {
    return axios.post('https://sendmail.smartmoles.com/v1/send-form', data, config);
  }
  sendSeller(data) {
    return axios.post('https://sendmail.smartmoles.com/v1/send-seller', data, config);
  }
}
