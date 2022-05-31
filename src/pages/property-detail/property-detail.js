import { history, routes } from '../../core/router';
import { getPropertyDetails, getEquipmentsList, isValidContact } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyFromApiToViewModel } from './property-details.mappers';
import { formValidation } from './property-details.validators';
import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors } from '../../common/helpers';


const params = history.getParams(); //para coger el parámetros de la url y el enrutador
//const isEditMode = Boolean(params.id); //para ver si la url tiene un parámetro id

Promise.all([  //llamamos a todos los métodos
    getPropertyDetails(params.id),
    getEquipmentsList(),
]).then (resultList => {
    const [propertyDetails, getEquipmentsList] = resultList;   //el resultado de cada lista (desestructuring)
    const viewModelPropertyList =  mapPropertyFromApiToViewModel(propertyDetails, getEquipmentsList);
    setPropertyValues(viewModelPropertyList);
}) 


let property = {   //hacemos nuestro modelo para recoger los datos
         id: '',
        title:  '',
        rooms:  '',
        bathrooms:  '',
        squareMeter:  '',
        notes:  '',
        price: '',
        image: '', 
        images:'',
        equipments : '',
        city: '',
        locationUrl : '',
        mainFeatures: '',
};  

//formulario

let contact = {
    email: "",
    message: ""
};

onUpdateField('email', (event) => {
    const value = event.target.value; 
    contact = { 
        ...contact, 
        email: value, 
    };
    formValidation.validateField('email', contact.email).then(result => {
        onSetError('email', result );
    })
});

onUpdateField('message', (event) => {
    const value = event.target.value; 
    contact = { 
        ...contact, 
        message: value, 
    };
    formValidation.validateField('message', contact.message).then(result => {
        onSetError('message', result );
    })

});

onSubmitForm ('contact-button', () => { 
    formValidation.validateForm(contact).then(result =>{ 
        onSetFormErrors(result);
         if(result.succeeded) {
            isValidContact(contact).then(isValid => { 
                 console.log({isValid});
                 document.getElementById('formulario').reset();
             })
            console.log({ contact });
        }
    });
});