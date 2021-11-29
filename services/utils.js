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
        appartement: dbResponse.appartement,
        street: dbResponse.street,
        city: dbResponse.city,
        state: dbResponse.state,
        code: dbResponse.code,
        phone: dbResponse.phone,
        skills: dbResponse.skills,
        availability: dbResponse.availability,
        score: dbResponse.score,
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
