import axios from "axios";
import querystring from "querystring";

const config = () => {
  return {
    withCredentials: true,
  };
};

export const postLogout = (data, filters) =>
  new Promise((result, reject) => {
    filters = querystring.stringify(filters);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/logout?${filters}`, data, config())
      .then((res) => {
        result(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const postVisitorEmailVerification = (data, filters) =>
  new Promise((result, reject) => {
    filters = querystring.stringify(filters);

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/visitor-email-verification?${filters}`,
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
