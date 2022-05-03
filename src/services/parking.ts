import { api } from '../api';
import { Historic } from '../types/app/historic';

export const registerVehicleEntry = async (plate: string) => {
  return api
    .post('/parking', { plate })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};

export const registerVehiclePayment = async (plate: string) => {
  return api
    .post(`/parking/${plate}/pay`)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const registerVehicleExit = async (plate: string) => {
  return api
    .post(`/parking/${plate}/out`)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

export const getVehicleHistory: (
  plate: string,
) => Promise<Historic[]> = async plate => {
  return api
    .get(`/parking/${plate}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error;
    });
};
