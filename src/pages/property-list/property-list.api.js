import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties` //porperties del data.json

export const getPropertyList = (queryParams) => 
    Axios.get(`${url}?${queryParams}`).then(response => {  //esto lo hemos actualizado para pasarle las queryParams (en este caso los ids)
        return response.data
    });

/* buscador */

const saleTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSaleTypeList = () => 
    Axios.get(saleTypeListUrl).then(response => {
        return response.data
    });


const provincesListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () => 
    Axios.get(provincesListUrl).then(response => {
        return response.data
    });