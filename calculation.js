const convert = require('./helpers')

function calculateRoomBookingPrice(duration){
  let prices = []
  const hours = convert.hours(duration)
  const days = convert.days(duration)
  const weeks = convert.weeks(duration)
  const oneHour = 60
  const oneDay = 1440
  const oneWeek = 10080

  const tariff = {
    minute: 2,
    hour: 22, 
    day: 60,
    week: 105
  }

  if(duration <= oneHour) {
    prices.push(tariff.minute * duration)
    if(hours <= 1){
      prices.push(tariff.hour)
    }
  }

  if(duration > oneHour && duration <= oneDay) {
    prices.push(hours * tariff.hour)
    if(days <= 1){
      prices.push(tariff.day)
    }
  }

  if(duration > oneDay && duration < oneWeek) {
    prices.push(days * tariff.day)
    if(weeks <= 1) {
      prices.push(tariff.week)
    }
  }

  if(duration >= oneWeek){
    return Math.floor(weeks * tariff.week)
  }


 return Math.floor(Math.min(...prices))

}

console.log(calculateRoomBookingPrice(2880))


module.exports = {
  calculateRoomBookingPrice
}