import axios from "axios";

import { ENDPOINT, TYPE } from "./utils";

export const getAllTypes = () => {
  return axios.get(`${ENDPOINT}${TYPE}`);
};

export const getType = type => {
  return axios.get(`${ENDPOINT}${TYPE}${type}`);
};
