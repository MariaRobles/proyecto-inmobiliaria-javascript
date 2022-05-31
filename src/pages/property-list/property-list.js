/*
Property {
    id: string;
    title: string;
    rooms: string; // 3 habitaciones
    squareMeter: string; // 136 m2
    notes: string; // Truncar a 240 chars
    price: string; // 120.000 €
    image: string; // Base64, cogemos sólo la 1ª
}
*/

import { getPropertyList, getSaleTypeList, getProvincesList } from './property-list.api';
import { mapPropertyListfromApitoViewModel, mapFilterToQueryParams  } from './property-list.mappers';
import { addPropertyRows, setOptions, clearPropertyRows } from './property-list.helpers';
import { roomOptions, bathroomOptions, minPriceOptions, maxPriceOptions } from './property-list.constants';
import { onUpdateField, onSubmitForm } from '../../common/helpers';


Promise.all([  //llamamos a todos los métodos
    getPropertyList(),
    getSaleTypeList(),
    getProvincesList(),
]).then (resultList => {
    const [propertyList, saleTypeList, provinceList] = resultList;   //el resultado de cada lista (desestructuring)
    loadPropertyList(propertyList);  //listado de propiedades
    setOptions(saleTypeList, 'select-sale-type', '¿Que venta?'); //helpers
    setOptions(provinceList, 'select-province', '¿Dónde?');
    setOptions(roomOptions, 'select-room', '¿Cúantas habitaciones?');
    setOptions(bathroomOptions, 'select-bathroom', '¿Cúantos baños?');
    setOptions(minPriceOptions, 'select-min-price', 'Min (EUR)');
    setOptions(maxPriceOptions, 'select-max-price', 'Max (EUR)');
}) 

const loadPropertyList = propertyList => {
    const viewModelPropertyList = mapPropertyListfromApitoViewModel(propertyList);
    addPropertyRows(viewModelPropertyList);
};

//recoger valores del filtrado

let filter = {
    saleTypeId: '',
    provinceId: '',
    minRooms: '',
    minBathrooms: '',
    minPrice: '',
    maxPrice: '',
};

onUpdateField('select-sale-type', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        saleTypeId: value,
    };
});

onUpdateField('select-province', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        provinceId: value,
    };
});

onUpdateField('select-room', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minRooms: value,
    };
});

onUpdateField('select-bathroom', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minBathrooms: value,
    };
});

onUpdateField('select-min-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        minPrice: value,
    };
});

onUpdateField('select-max-price', (event) => {
    const value = event.target.value;
    filter = {
        ...filter,
        maxPrice: value,
    };
});

onSubmitForm('search-button', () => {
    
    const queryParams = mapFilterToQueryParams(filter);
    clearPropertyRows();
    getPropertyList(queryParams).then(propertyList =>{
        loadPropertyList(propertyList);
    });
    
    console.log({ filter });
})





