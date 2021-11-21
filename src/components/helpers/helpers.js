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

export const buildCalendar = (value) => {
  const startDay = value.clone().startOf("month").startOf("week");
  const endDay = value.clone().endOf("month").startOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return calendar;
};
