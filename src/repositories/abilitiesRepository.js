import apiService from '@services/apiService';

const getOne = async name => (await apiService.get(`ability/${name}`)).data;

export default {
  getOne,
}
