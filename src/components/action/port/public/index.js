import axios from "axios";
import qs from "qs";

import {URL_API} from "../../url";

const config = () => {
    return {
        withCredentials: true,
    };
};

export const getPorts = (data, filters) =>
    new Promise((result, reject) => {
        filters = qs.stringify(filters);

        const params = JSON.stringify(data);

        axios.post(
            `${URL_API}/port?${filters}`,
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