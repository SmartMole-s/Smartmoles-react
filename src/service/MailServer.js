import axios from 'axios';

export default class CustomerService {
  async sendForm(data) {
    return await axios.post('http://localhost:5000/v1/send-form', data);
  }
  async updateCustomer(id, data) {
    return await axios.put('http://localhost:5000/v1/send-form' + id, data);
  }
}
