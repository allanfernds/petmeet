const generateUniquePetFileName = (pet) => {
 const { name, type, breed } = pet;
 const timestamp = Date.now();

 const fileName = `${name}_${type}_${breed}_${timestamp}`;

 return fileName;
};

const generateUniqueUserFileName = (userName) => {
 const timestamp = Date.now();

 const fileName = `${userName}_profileImage_${timestamp}`;

 return fileName;
};


export {
 generateUniquePetFileName,
 generateUniqueUserFileName
}