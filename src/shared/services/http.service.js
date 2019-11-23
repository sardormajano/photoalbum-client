import axios from 'axios';

export const httpService = {
  post(url, data, isMultipart = false) {
    const formData = this.toFormData(data);
    const headers = isMultipart
      ? { 'Content-Type': 'multipart/form-data' }
      : {};
    return axios.post(url, formData, { headers });
  },

  get(url, params = {}) {
    return axios({ url, params });
  },

  toFormData(data) {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
      if (Array.isArray(data[key])) {
        data[key].forEach(item => {
          item instanceof File
            ? formData.append(`${key}[]`, item, item.name)
            : formData.append(`${key}[]`, JSON.stringify(item));
        });
      } else {
        formData.append(key, data[key]);
      }
    });

    return formData;
  }
};
