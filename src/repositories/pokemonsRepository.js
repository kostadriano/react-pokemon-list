import apiService from '@services/apiService';

const getAll = async () => (await apiService.get('pokemon')).data;

export default {
  getAll
}
