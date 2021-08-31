import axios from "axios";
import querystring from "querystring";

const config = () => {
  return {
    withCredentials: true,
  };
};

export const postLogin = (data, filters) =>
  new Promise((result, reject) => {
    filters = querystring.stringify(filters);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/visitor-login?${filters}`,
        data,
        config()
      )
      .then((res) => {
        result(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const postRegister = (data, filters) =>
  new Promise((result, reject) => {
    filters = querystring.stringify(filters);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/visitor-register?${filters}`,
        data,
        config()
      )
      .then((res) => {
        result(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const patchSetupProfile = (data, filters) =>
  new Promise((result, reject) => {
    filters = querystring.stringify(filters);

    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/visitor-setup?${filters}`,
        data,
        config()
      )
      .then((res) => {
        result(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getVisitorInfo = (data, filters) =>
  new Promise((result, reject) => {
    filters = querystring.stringify(filters);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/visitor-info?${filters}`, config())
      .then((res) => {
        result(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
