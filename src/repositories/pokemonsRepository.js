import apiService from '@services/apiService';

const getAll = async () => (await apiService.get('pokemon')).data;
const getOne = async (name) => (await apiService.get(`pokemon/${name}`)).data

export default {
  getAll,
  getOne
}
