const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export default function getItemDate(date) {
  // need the month separated out to check length
  let theMonth = months[date.getMonth()];

  // check if month name is too long for the form
  // and if so, shorten it
  if (theMonth.length > 7) {
    theMonth.slice(0, 3);
  }

  return date.getDate() + ' ' + theMonth + ' ' + date.getFullYear();
}
