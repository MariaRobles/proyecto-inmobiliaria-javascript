import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties` //porperties del data.json
const equipmentListUrl = `${process.env.BASE_API_URL}/equipments` //equipments del data.json


export const getPropertyDetails = id => 
    Axios.get(`${url}/${id}`).then(response => { 
        return response.data;
    });

export const getEquipmentsList = () => 
    Axios.get(equipmentListUrl).then(response => { 
        return response.data;
 });


 //formulario
 const FormUrl = `${process.env.BASE_API_URL}/contact` //esto está en el .env

export const isValidContact = (contact) => Axios.post(FormUrl, contact) //post porque vamos a enviar desde la url con los datos del login
    .then(response => {
        return response.data;
    })
