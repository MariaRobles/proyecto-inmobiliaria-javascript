import { onUpdateField, onSetError, onSubmitForm, onSetFormErrors, onAddFile } from '../../common/helpers';
import { isValidProperty, getEquipmentsList, getProvincesList, getSalesTypeList } from './upload-property.api';
import { formValidation } from './upload-property.validators';
import { setOptionList, setCheckboxList, formatDeleteFeatureButtonId, onAddFeature, onRemoveFeature, formatCheckboxId, onAddImage } from './upload-property.helpers'


let newProperty = {
    id: "",
    title: "",
    notes: "",
    email: "",
    phone: "",
    price: "",
    saleTypes: [],
    address: "",
    city: "",
    province: "", //llevarselo al select
    squareMeter: "",
    rooms: "",
    bathrooms: "",
    locationUrl : "",
    mainFeatures: [], //array, insert string
    equipmentIds: [], //ids, checkbox
    images: [], //array, upload picture
};

Promise.all([  
    getEquipmentsList(),
    getProvincesList(),
    getSalesTypeList(),
]).then (resultList => {
    const [ equipmentsList, provincesList, salesTypeList] = resultList;   //el resultado de cada lista (desestructuring)
    //helpers
    setOptionList (provincesList, 'province');
    setCheckboxList (equipmentsList, 'equipments');
    setEquipment(equipmentsList);
    setCheckboxList (salesTypeList, 'saleTypes');
    setSalesType (salesTypeList);
}) 

const setSalesType = list => {
    list.forEach(el => {
        const id = formatCheckboxId(el);
        onUpdateField(id, event =>{
            const value = event.target.value;
            newProperty = {...newProperty, saleTypes: [...newProperty.saleTypes, value]};
        })
    })
}

const setEquipment = list => {
    list.forEach(el => {
        const id = formatCheckboxId(el);
        onUpdateField(id, event =>{
            const value = event.target.value;
            newProperty = {...newProperty, equipmentIds: [...newProperty.equipmentIds, value]};
        })
    })
}


onUpdateField('title', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        title: value, 
    };
    formValidation.validateField('title', newProperty.title).then(result => {
        onSetError('title', result );
    })
});

onUpdateField('notes', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        notes: value, 
    };
    formValidation.validateField('notes', newProperty.notes).then(result => {
        onSetError('notes', result );
    })
});

onUpdateField('email', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        email: value, 
    };
    formValidation.validateField('email', newProperty.email).then(result => {
        onSetError('email', result );
    })
});

onUpdateField('phone', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        phone: value, 
    };
    formValidation.validateField('phone', newProperty.phone).then(result => {
        onSetError('phone', result );
    })
});

onUpdateField('price', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        price: value, 
    };
    formValidation.validateField('price', newProperty.price).then(result => {
        onSetError('price', result );
    })
});

onUpdateField('address', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        address: value, 
    };
    formValidation.validateField('address', newProperty.address).then(result => {
        onSetError('address', result );
    })
});

onUpdateField('city', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        city: value, 
    };
    formValidation.validateField('city', newProperty.city).then(result => {
        onSetError('city', result );
    })
});

onUpdateField('province', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        province: value, 
    };
    formValidation.validateField('city', newProperty.province).then(result => {
        onSetError('province', result );
    })
});

onUpdateField('squareMeter', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        squareMeter: value, 
    };
    formValidation.validateField('city', newProperty.squareMeter).then(result => {
        onSetError('squareMeter', result );
    })
});

onUpdateField('rooms', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        rooms: value, 
    };
    formValidation.validateField('city', newProperty.rooms).then(result => {
        onSetError('rooms', result );
    })
});

onUpdateField('bathrooms', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        bathrooms: value, 
    };
    formValidation.validateField('city', newProperty.bathrooms).then(result => {
        onSetError('bathrooms', result );
    })
});

onUpdateField('locationUrl', (event) => {
    const value = event.target.value; 
    newProperty = { 
        ...newProperty, 
        locationUrl: value, 
    };
    formValidation.validateField('city', newProperty.locationUrl).then(result => {
        onSetError('locationUrl', result );
    })
});

// formatDeleteFeatureButtonId, onAddFeature, onRemoveFeature



onSubmitForm ('insert-feature-button', () =>{
    const value = document.getElementById('newFeature').value;
    if (value){
        newProperty = {...newProperty, mainFeatures: [...newProperty.mainFeatures, value]};
        formatDeleteFeatureButtonId(value);
        onAddFeature(value);
        onSubmitForm([`delete-${value}-button`], () =>{
            onRemoveFeature(value);
        })
    }
})

 onAddFile('add-image', (img) =>{
     
    newProperty = {...newProperty, images: [...newProperty.images, img]};
    onAddImage(img);
    formValidation.validateField('images', newProperty.images).then(result => {
        onSetError('images', result );
    })
    console.log(newProperty);
 })

onSubmitForm ('save-button', () => { 
    formValidation.validateForm(newProperty).then(result =>{ 
        onSetFormErrors(result);
         if(result.succeeded) {
            isValidProperty(newProperty).then(isValid => { 
                 console.log({isValid});
                 document.getElementById('formulario').reset();
             })
            console.log({ newProperty });
        }
    });
});