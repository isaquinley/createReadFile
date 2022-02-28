function validateName(info) {
  const arrKeys = Object.keys(info);
  const arrValues = Object.values(info);
  let keyValue = "";
  let Values = "";

  arrKeys.forEach((element) => {
    keyValue = element;
  });
  arrValues.forEach((element) => {
    Values = element;
  });

  return `${keyValue} ${Values}`;
}

module.exports = { validateName };
