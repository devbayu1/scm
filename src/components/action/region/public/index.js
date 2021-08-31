import axios from "axios";
import qs from "qs";

import {URL_API} from "../../url";

const config = () => {
  return {
    withCredentials: true,
  };
};

export const getStates = (filters) =>
  new Promise((result, reject) => {
    filters = qs.stringify(filters);

    axios
      .get(`${URL_API}/state?${filters}`, config())
      .then((res) => {
        result(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getCountries = (data, filters) =>
    new Promise((result, reject) => {
        filters = qs.stringify(filters);

        const params = JSON.stringify(data);

        axios.post(
            `${URL_API}/country?${filters}`,
            params,
            {
                "headers": {
                    "content-type": "application/json",
                },
            }
        )
        .then((res) => {
            result(res.data);
        })
        .catch((err) => {
            reject(err);
        });
    });

export const geCities = (filters) =>
    new Promise((result, reject) => {
        filters = qs.stringify(filters);

        axios
            .get(`${URL_API}/city?${filters}`, config())
            .then((res) => {
                result(res.data);
            })
            .catch((err) => {
                reject(err);
            });
    });
