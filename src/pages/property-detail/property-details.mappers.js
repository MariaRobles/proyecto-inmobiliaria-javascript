

export const mapPropertyFromApiToViewModel = (property, equipment) => {
    return {
        id: property.id,
        title: property.title,
        rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
        bathrooms: `${property.bathrooms} ${getBathroomsWord(property.bathrooms)}`,
        squareMeter: `${property.squareMeter}m2`,
        notes: property.notes,
        price: property.price,//`${property.price.toLocaleString()}€`,
        mainImage: Array.isArray(property.images) ? property.images[1] : '', //si hay algo en property images coge la 1ª, si no vacío
        images: Array.isArray(property.images) ? property.images : [],
        equipments: getEquipmentName(property, equipment),
        city: property.city,
        locationUrl : property.locationUrl,
        mainFeatures: Array.isArray(property.mainFeatures) ? property.mainFeatures : [],
    }
};

const getRoomWord = (rooms) => {
    return rooms > 1 ? "habitaciones" : "habitación";
};

const getBathroomsWord = (bathrooms) => {
    return bathrooms > 1 ? "baños" : "baño";
};

const getEquipmentName = (property, equipment) => {
    let ids = "";
    ids = property.equipmentIds.map(function(obj){
        const nameEquipment = equipment.find(el => el.id === obj);
        return nameEquipment.name ;
    });
    return ids;   
}