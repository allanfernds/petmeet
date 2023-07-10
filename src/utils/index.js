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

const formatString = (str) => {
 // Converte a string para minúsculas
 const lowerCaseStr = str.toLowerCase();

 // Separa a string em palavras
 const words = lowerCaseStr.split(' ');

 // Capitaliza a primeira letra de cada palavra
 const formattedWords = words.map((word) => {
   return word.charAt(0).toUpperCase() + word.slice(1);
 });

 // Junta as palavras formatadas em uma única string
 const formattedStr = formattedWords.join(' ');

 return formattedStr;
}


export {
 generateUniquePetFileName,
 generateUniqueUserFileName,
 formatString
}