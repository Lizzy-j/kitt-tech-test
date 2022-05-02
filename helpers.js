const totalMinutesInADay = 60 * 24

function minutesToHours(minutes) {
  return minutes / 60
}

function minutesToDays(minutes) {
  return minutes / totalMinutesInADay
}

function minutesToWeeks(minutes) {
  const totalMinutesInAWeek = totalMinutesInADay * 7
  return minutes / totalMinutesInAWeek
}

module.exports = {
    hours: minutesToHours,
    days: minutesToDays,
    weeks: minutesToWeeks
}