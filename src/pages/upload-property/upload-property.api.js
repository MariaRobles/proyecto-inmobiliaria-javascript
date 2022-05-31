import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties` //porperties del data.json


export const isValidProperty = (newProperty) => Axios.post(url, newProperty) 
    .then(response => {
        return response.data;
    })

const provincesListUrl = `${process.env.BASE_API_URL}/provinces`;

export const getProvincesList = () => 
    Axios.get(provincesListUrl).then(response => {
        return response.data
    });

const equipmentsListUrl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentsList = () => 
    Axios.get(equipmentsListUrl).then(response => {
        return response.data
    });

const salesTypeListUrl = `${process.env.BASE_API_URL}/saleTypes`;

export const getSalesTypeList = () => 
    Axios.get(salesTypeListUrl).then(response => {
        return response.data
    })

