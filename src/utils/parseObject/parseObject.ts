export const collapseObject = (obj: object, log = false) => {
  const result: { [key: string]: string | number | null | boolean } = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (typeof value === "object") {
      const nested = collapseObject(value);
      Object.entries(nested).forEach(([nestedKey, nestedValue]) => {
        result[[key, nestedKey].join(".")] = nestedValue;
      });
    } else {
      result[key] = value;
    }
  });
  if (log) console.log(result);

  return result;
};
