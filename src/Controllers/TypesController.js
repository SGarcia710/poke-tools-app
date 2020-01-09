import { getAllTypes, getType } from "../Services/TypesService";

export const getAllTypesController = () => {
  return new Promise((resolve, reject) => {
    getAllTypes()
      .then(response => resolve(response.data))
      .catch(error => reject(JSON.parse(error.request.response)));
  });
};

export const getTypeController = type => {
  return new Promise((resolve, reject) => {
    getType()
      .then(response => resolve(response.data))
      .catch(error => reject(JSON.parse(error.request.response)));
  });
};
