import apiService from '@services/apiService';

const getAll = async offset =>
  (await apiService.get('pokemon', { params: { offset, limit: 12 } })).data;

const getOne = async name => (
  await apiService.get(`pokemon/${name}`)).data;

const getForm = async name =>
  (await apiService.get(`pokemon-form/${name}`)).data;

export default {
  getAll,
  getOne,
  getForm
}
