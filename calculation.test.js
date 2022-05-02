const { calculateRoomBookingPrice }  = require('./calculation');


describe('room booking function returns the cheapest tariff', () => {
    test('for a 45 minute meeting', () => {
        expect(calculateRoomBookingPrice(45)).toBe(22);
    });

    test('for a 1 hour meeting', () => {
        expect(calculateRoomBookingPrice(60)).toBe(22);
    });

    test('for a 2 hour meeting', () => {
        expect(calculateRoomBookingPrice(120)).toBe(44);
    });


    test('for a 1 day meeting', () => {
        expect(calculateRoomBookingPrice(1440)).toBe(60);
    });

     test('for a 2 day meeting', () => {
        expect(calculateRoomBookingPrice(2880)).toBe(105);
    });

    test('for a week long meeting', () => {
        expect(calculateRoomBookingPrice(20160)).toBe(210);
    });
})

