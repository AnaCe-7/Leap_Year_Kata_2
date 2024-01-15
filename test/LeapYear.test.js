const {expect} = require("@jest/globals");
const LeapYear = require("../LeapYear");

describe('Tests validating leap years', () =>{

    const leap_year = new LeapYear();
    
    test('Test returns true when a year is divisible by 400', () =>{

        /**
         * GHERKIN TEST
         * GIVEN / ARRANCHE: years (Tested years are in range 1600 ≤ year ≤ 4000)
         * WHEN / ACT: when it is divisible by: a) 400 b) or it is divisible by 4 c) but not by 100
         * THEN / ASSERT: returns: a) true b) true c) false
         */

        //ARRANGE: set the stage, the inputs and outputs I expect
        const given_number = 1980;
        const expected_response = true;

        //ACT: run the scenario
        const current_response = leap_year.validate_leap_year(given_number);

        //ASSERT: check the scenario
        expect(current_response).toBe(expected_response)
    });

    test('Test returns true when a number is divisible by 4', () =>{

        const given_number = 2000;
        const expected_response = true;

        const current_response = leap_year.validate_leap_year(given_number);

        expect(current_response).toBe(expected_response)
    });

   test ('Test returns false when the same number is not divisible by 100', () =>{

        const given_number = 1800;
        const expected_response = false;

        const current_response = leap_year.validate_leap_year(given_number);

        expect(current_response).toBe(expected_response)
    });

})