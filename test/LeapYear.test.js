const {expect} = require("@jest/globals");
const LeapYear = require("../LeapYear");

describe('Tests validating leap years', () =>{

    const leap_year = new LeapYear();
    
    test('Test returns true when a year is divisible by 4', () =>{

        /**
         * GHERKIN TEST
         * GIVEN / ARRANCHE: a number, (a year)
         * WHEN / ACT: when it is divisible by: a) 4, b) but not by 100, c) but divisible by 400
         * THEN / ASSERT: returns: a) firstTrue, b) secondTrue, c) thirdTrue as result
         */

        //ARRANGE: set the stage, the inputs and outputs I expect
        const given_number = 1980;
        const expected_response = true;

        //ACT: run the scenario
        const current_response = leap_year.validate_leap_year(given_number);

        //ASSERT: check the scenario
        expect(current_response).toBe(expected_response)
    });

    test('Test returns true when a number is divisible by 400', () =>{

        const given_number = 1980;
        const expected_response = true;

        const current_response = leap_year.validate_leap_year(given_number);

        expect(current_response).toBe(expected_response)
    });

   test ('Test returns false when the same number is divisible by 100 but not divisible by 400', () =>{

        const given_number = 1800;
        const expected_response = false;

        const current_response = leap_year.validate_leap_year(given_number);

        expect(current_response).toBe(expected_response)
    });

})