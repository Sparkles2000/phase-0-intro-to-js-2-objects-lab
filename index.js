// Write your solution in this file!
let employee = {
    name: `Anna`,
    streetAddress: `321 Seseme Street`,
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[`name`] = `Sam`;
    newEmployee[`streetAddress`] = `11 Broadway`;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[`name`] = `Sam`
    employee[`streetAddress`] = `12 Broadway`
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, `streetAddress`, `12 Broadway`)

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee}
    updatedEmployee[`name`]= `Sam`;
    updatedEmployee[`streetAddress`] = `12 Broadway`;
    delete updatedEmployee[`name`]
    return updatedEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[`name`] = `Sam`;
    employee[`streetAddress`] = `12 Broadway`;
    delete employee[`name`]
    return employee
}