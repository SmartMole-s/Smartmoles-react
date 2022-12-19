import axios from 'axios';
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}
export default class MailService {
   sendForm(data) {
    return axios.post('http://sendmail.smartmoles.com//v1/send-form', data, config);
  }
  async updateCustomer(id, data) {
    return await axios.put('http://localhost:5000/v1/send-form' + id, data);
  }
}
