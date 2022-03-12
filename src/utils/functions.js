export const formatDate = (rawDate) => {
  const date = new Date(rawDate).getDate();
  const month = new Date(rawDate).getMonth();
  const year = new Date(rawDate).getFullYear();
  let dateSuffix = "";

  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const lastDateDigit = +String(date).slice(-1);

  switch (lastDateDigit) {
    case 1:
      dateSuffix = "st";
      break;
    case 2:
      dateSuffix = "nd";
      break;
    case 3:
      dateSuffix = "rd";
      break;
    default:
      dateSuffix = "th";
  }

  const formattedString = `${date} ${MONTH_NAMES[month].substring(0, 3)}`;
  const formattedLongString = `${date}${dateSuffix} ${MONTH_NAMES[month]}, ${year}`;
  return [formattedString, formattedLongString];
};


