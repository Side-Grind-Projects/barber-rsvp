export const stringToDate = (stringDate) => {
  const strArray = stringDate.toString().split(" ").slice(1, 4);
  const monthNum = monthOjb[strArray[0]];
  console.log([monthNum, ...strArray.slice(1)].join("/"));
  return [monthNum, ...strArray.slice(1)].join("/");
};

const monthOjb = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};
