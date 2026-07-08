const validate = (fields) => {
  Object.entries(fields).forEach(([key, value]) => {
    if (!value || !value.trim()) {
      throw new Error(`${key} is required`);
    }
  });
};

export default validate