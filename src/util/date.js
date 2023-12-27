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
  return (
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
  );
}
