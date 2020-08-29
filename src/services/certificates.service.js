import axios from "axios";

import { CERTIFICATES_URL, VERIFY_URL } from "../utils/constants";

export const fetchCertificate = async (roll) => {
  try {
    const { data } = await axios.get(`${CERTIFICATES_URL}/${roll}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const verifyCertificate = async (certificateData) => {
  try {
    const { data } = await axios.post(VERIFY_URL, { certificateData });
    return data;
  } catch (err) {
    throw err;
  }
};
