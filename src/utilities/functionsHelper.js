export const pickQuery = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

export const convertQuery = (arr) => {
  const queryObject = arr.reduce((acc, cur) => {
    const singleQuery = cur.split("=");
    return {
      ...acc,
      [singleQuery[0]]: singleQuery[1],
    };
  }, {});
  return queryObject;
};
