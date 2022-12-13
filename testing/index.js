function getFullName(fname,lname){
    return `${fname} ${lname}`;
}

const actualFullName = getFullName("Hassan","Mohammed");
const expectedFullName="Hassan Mohammed";

if(actualFullName != expectedFullName){
    throw new Error(`${actualFullName} is not equal to ${expectedFullName}`);
}