export const mapNewPropertyFromApiToViewModel = (newProperty/*, equipment*/) => {
    return {
        id: newProperty.id,
        title: newProperty.title,
        notes: newProperty.notes,
        email: newProperty.email,
        phone: newProperty.phone,
        price: newProperty.price,
        address: newProperty.address,
        city: newProperty.city,
        saleType: newProperty.saleTypes,
        province: newProperty.provinceId, //llevarselo al select
        squareMeter: newProperty.squareMeter,
        rooms: newProperty.rooms,
        bathrooms: newProperty.bathrooms,
        locationUrl : newProperty.locationUrl,
        mainFeatures: newProperty.mainFeatures, //array, insert string
        equipmentIds: newProperty.equipmentIds, //ids, check box
        images: newProperty.images, //array, upload picture
    }
};