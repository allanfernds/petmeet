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
  // Verifica se a string é undefined ou null
  if (!str) {
    return '';
  }

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
};

const createSlug = (str) => {
  // Remove acentos
  str = str
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c')
    .replace(/[ß]/g, 'ss');

  str = str.toLowerCase(); // Converte para minúsculas
  str = str.replace(/[^a-z0-9]/g, '-'); // Substitui caracteres não alfanuméricos por hífens
  str = str.replace(/-+/g, '-'); // Remove múltiplos hífens consecutivos
  str = str.replace(/^-|-$/g, ''); // Remove hífens no início e no final
  return str;
};

export {
  generateUniquePetFileName,
  generateUniqueUserFileName,
  formatString,
  createSlug,
};
