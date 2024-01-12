class LeapYear {
  validate_leap_year(number) {
    if (number % 100 === 0 && number % 400 !== 0) {
        return false;
    } else if (number % 4 === 0 || number % 400 === 0) {
        return true;
  }
}
};

module.exports = LeapYear;
