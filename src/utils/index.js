const generateUniqueFileName = (pet) => {
 const { name, type, breed } = pet;
 const timestamp = Date.now();

 const fileName = `${name}_${type}_${breed}_${timestamp}`;

 return fileName;
};

export {
 generateUniqueFileName
}