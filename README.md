# Kitt Take Home Test

---

We are looking to add a pricing function to our meeting room bookings feature, as we’ve noticed that this is being requested more and more by companies.

## The Task

Create a function that takes a booking length in minutes and returns a price.

Please take into account readability, performance, tests and safety when implementing your solution.

## Context

The intended functionality of the service is to calculate the price of a meeting room based upon the given meeting duration and following [min|hour|day|week] tariff:

- Price per minute: £2
- Price per hour: £22
- Price per day: £60
- Price per week: £105

### Pseudocode interface:

`GetPrice(duration_minutes as Integer)` returns price as Integer

- The pricing function should use the cheapest rate for given duration.
- For example if the duration is 3 hours it should use the daily price of £60 as this is cheaper than using the price per hour (£66).

Example test Cases below:

- 1440 minutes = £60
- 2880 minutes = £105
- 20160 minutes = £210

## Installation instructions

1. Clone repository with `git clone`
2. Run `npm install` to install dependencies
3. Enter `npm test` to run tests
4. To run the code itself, enter `npm run start`
