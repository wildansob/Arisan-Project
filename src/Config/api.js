import axios from 'axios';
import DataForm from 'form-data';

const baseUrl = 'https://arisan-app.herokuapp.com/api/v1/';
axios.defaults.validateStatus = status => status <= 510;

export const apiLogin = dataLogin => {
  return axios({
    method: 'POST',
    url: baseUrl + 'sign/login',
    data: dataLogin,
  });
};

export const apiSignUp = dataLogin => {
  return axios({
    method: 'POST',
    url: baseUrl + 'sign/register',
    data: dataLogin,
  });
};

export const apiProfile = (dataProfile, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + 'profile',
    data: dataProfile,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiGantiPassword = (dataPassword, token) => {
  return axios({
    method: 'PUT',
    url: baseUrl + 'profile/password',
    data: dataPassword,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiEditProfile = (dataEditProfile, token) => {
  return axios({
    method: 'PUT',
    url: baseUrl + 'profile/edit',
    data: dataEditProfile,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiGantiFoto = async (dataImage, token) => {
  const body = new DataForm();
  body.append('image', {
    uri: dataImage.uri,
    name: dataImage.fileName,
    type: dataImage.type,
  });
  const headers = new Headers();
  headers.append('authorization', `Bearer ${token}`);
  headers.append('Content-Type', 'multipart/form-data');
  const result = await fetch(baseUrl + 'profile/upload', {
    body,
    headers,
    method: 'POST',
  });
  console.log(result, 'ini result');

  return result.json();
};
export const apiGetAllArisan = (dataAllArisan, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + 'arisan/',
    data: dataAllArisan,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiGetAllContact = (dataAllKontak, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + 'contact/',
    data: dataAllKontak,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiCreateArisan = (dataCreateArisan, token) => {
  return axios({
    method: 'POST',
    url: baseUrl + 'arisan/',
    data: dataCreateArisan,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiDeleteArisan = (id, token) => {
  return axios({
    method: 'DELETE',
    url: baseUrl + `arisan/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiEditArisan = (id, dataEditArisan, token) => {
  return axios({
    method: 'PUT',
    url: baseUrl + `arisan/${id}`,
    data: dataEditArisan,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiCreateKontak = (dataCreateKontak, token) => {
  return axios({
    method: 'POST',
    url: baseUrl + 'contact/create',
    data: dataCreateKontak,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiDeleteKontak = (id, token) => {
  return axios({
    method: 'DELETE',
    url: baseUrl + `contact/delete/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};
export const apiEditKontak = (id, dataEditKontak, token) => {
  return axios({
    method: 'PUT',
    url: baseUrl + `contact/edit/${id}`,
    data: dataEditKontak,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiFilter = (order = 'atoz', token) => {
  return axios({
    method: 'GET',
    url: baseUrl + `arisan/filter?order=${order}`,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiGetAllParticipant = (id, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + `participant/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiDeleteParticipant = (id, token) => {
  return axios({
    method: 'DELETE',
    url: baseUrl + `participant/delete/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiAddParticipant = (id, dataParticipant, token) => {
  return axios({
    method: 'POST',
    url: baseUrl + `participant/create/${id}`,
    data: dataParticipant,
    headers: {authorization: `Bearer ${token}`},
  });
};

export const apiEditStatusPembayaran = (id, dataParticipant, token) => {
  return axios({
    method: 'PUT',
    url: baseUrl + `participant/edit/${id}`,
    data: dataParticipant,
    headers: {authorization: `Bearer ${token}`},
  });
};
export const apiKocokArisan = (id, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + `arisan/raffle/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};
export const apiArisanById = (id, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + `arisan/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};
export const apiFilterParticipant = (id, dataParticipant, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + `participant/filter/${id}`,
    data: dataParticipant,
    headers: {authorization: `Bearer ${token}`},
  });
};
export const apiHistoryArisan = (id, token) => {
  return axios({
    method: 'GET',
    url: baseUrl + `arisan/history/${id}`,
    headers: {authorization: `Bearer ${token}`},
  });
};
