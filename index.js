// Write your solution in this file!
const employee ={
    name:"John",
    streetAddress:"10th downing street",

};
function updateEmployeeWithKeyAndValue(object,key,value) {
      const newemp ={...employee};
      newemp[key] ="11 Broadway";
      
      return newemp;

}
function destructivelyUpdateEmployeeWithKeyAndValue(object,streetAddress,value){
    employee[streetAddress] ="12 Broadway"
    
    return employee;
}
function deleteFromEmployeeByKey(sam,streetAddress,value){
    const newiish ={ ...employee};
    delete newiish.name;
    
    return newiish;
}
function destructivelyDeleteFromEmployeeByKey (object,streetAddress,value) {
    delete employee.name
    return employee
    
}