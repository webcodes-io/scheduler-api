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
module.exports = {
    findEmployee,
    deleteEmployee,
    updateEmployee
}
