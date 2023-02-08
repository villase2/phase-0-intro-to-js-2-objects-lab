// Write your solution in this file!
const employee = { 
    name: "Test",
    streetAddress: "123 Fake",
    }
function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
        ...employee,
        name: "Sam", 
        streetAddress: "11 Broadway",
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}