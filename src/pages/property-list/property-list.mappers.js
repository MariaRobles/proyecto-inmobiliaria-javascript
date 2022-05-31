export const mapPropertyListfromApitoViewModel = propertyList => {
    return propertyList.map(property => mapPropertyfromApitoViewModel(property));
} // esto me para hacerlo para cada entidad en property List


const mapPropertyfromApitoViewModel = (property) => {  //esto es para una sola propiedad
 return {
     id: property.id,
     title: property.title,
     rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
     squareMeter: `${property.squareMeter}m2`,
     notes: `${property.notes.substring(0, 240)}...`, //cogemos sólo desde el caracter 0 al 240
     price: `${property.price.toLocaleString()}€`,
     image: Array.isArray(property.images) ? property.images[0] : '', //si hay algo en property images coge la 1ª, si no vacío

 }
}

const getRoomWord = (rooms) => {
    return rooms > 1 ? "habitaciones" : "habitación";
};

/*mapear el filtro para construir las url (params)*/

export const mapFilterToQueryParams = filter => {
    let queryParams = '';

    if(filter.saleTypeId){
        queryParams = `${queryParams}saleTypeIds_like=${filter.saleTypeId}&`; //_like= que el dato esté dentro de un array
    };

    if(filter.provinceId){
        queryParams = `${queryParams}provinceId=${filter.provinceId}&`;
    };

    if(filter.minRooms){
        queryParams = `${queryParams}rooms_gte=${filter.minRooms}&`;
    };

    if(filter.minBathrooms){
        queryParams = `${queryParams}bathrooms_gte=${filter.minBathrooms}&`;
    };

    if(filter.minPrice){
        queryParams = `${queryParams}price_gte=${filter.minPrince}&`;
    };

    if(filter.maxPrice){
        queryParams = `${queryParams}price_lte=${filter.maxPrince}&`;
    };   

    return queryParams.slice(0, -1); //con el slice quitamos el último carácter (-1) 
}