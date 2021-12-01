const findEmployee = (comps, compId) => {
    let foundIndex = null;
    if(!comps || comps.length === 0) return;
    for(let compIndex = 0; compIndex < comps.length; compIndex++) {
        if(comps[compIndex].id === compId) {
            foundIndex = compIndex;
            break;
        }
    }
    return foundIndex;
}

const deleteEmployee = (comps, compIndex) => {
    comps.splice(compIndex, 1);
}

const updateEmployee = (comps, compIndex, updatedCompCont) => {
    comps.splice(compIndex, 1, updatedCompCont);
}

const mapResponseObject = (dbResponse) => {
    return {
        id: dbResponse.id,
        firstName: dbResponse.first_name,
        lastName: dbResponse.last_name,
        apartment: dbResponse.apartment,
        street: dbResponse.street,
        city: dbResponse.city,
        state: dbResponse.state,
        country: dbResponse.country,
        postalCode: dbResponse.postal_code,
        phone: dbResponse.phone,
        skills: JSON.parse(dbResponse.skills),
        availability: JSON.parse(dbResponse.availability),
        rate: dbResponse.rate,
        created: dbResponse.created,
        updated: dbResponse.updated,
    }
}
module.exports = {
    findEmployee,
    deleteEmployee,
    updateEmployee,
    mapResponseObject
}
