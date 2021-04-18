import _axios from 'axios';

export const axios = _axios.create({
  params: {
    key: process.env.REACT_APP_RAW_IO_API_KEY
  },
})
