export const getValue = (detail, name) =>
  detail.filter((opt) => opt.name === name)[0]["value"];
