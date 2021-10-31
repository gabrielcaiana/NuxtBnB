export default (number, singularWord) => {
  const text = `${number} ${singularWord}`;
  if (number === 1) return text;

  return text + 's';
};
