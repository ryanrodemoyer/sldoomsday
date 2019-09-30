function tsToSeconds(ts) {
  return Math.round(ts / 1000).toLocaleString();
}

function tsToHours(ts) {
  return Math.round(ts / 1000 / 3600).toLocaleString();
}

function tsToCalendarDays(d) {
  return Math.round(d / 1000 / (3600 * 24)).toLocaleString();
}

function toFormattedDate(d) {
  return d.toDateString();
}

module.exports.tsToSeconds = tsToSeconds;
module.exports.tsToHours = tsToHours;
module.exports.tsToCalendarDays = tsToCalendarDays;
module.exports.toFormattedDate = toFormattedDate;
