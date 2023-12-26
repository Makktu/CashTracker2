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

export default function getItemDate(date) {
  return (
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
  );
}
