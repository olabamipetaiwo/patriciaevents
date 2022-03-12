/* eslint-disable no-unused-vars */
let rawDate = "2012-10-10T13:51:50.417-07:00";

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

const formattedString = `${date} ${MONTH_NAMES[month].substring(0,3)}`;
const formattedLongString = `${date}${dateSuffix} ${MONTH_NAMES[month]}, ${year}`;
console.log("formattedString", formattedString);
console.log("formattedLongString", formattedLongString);

//  return formattedString;
// st nd rd th
//1st 21st
//2nd 22nd
//3rd 23rd
//4th
