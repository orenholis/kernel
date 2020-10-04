/**
 * transferMonthStringToNumberEN transfers month string to its numer
 * @param  {[string]} month month in year
 * @return {[number]} number of the month
 */
function transferMonthStringToNumberEN(month, fromZero) {
  if (!month) {
    throw new Error("Není zadán měsíc k převedení - transferUtility.js(8) [transferMonthStringToNumberEN()]");
  }
  let numberMonth;
  switch(month) {
    case "January":
      numberMonth = 1;
      break;
    case "February":
      numberMonth = 2;
      break;
    case "March":
      numberMonth = 3;
      break;
    case "April":
      numberMonth = 4;
      break;
    case "May":
      numberMonth = 5;
      break;
    case "June":
      numberMonth = 6;
      break;
    case "July":
      numberMonth = 7;
      break;
    case "August":
      numberMonth = 8;
      break;
    case "September":
      numberMonth = 9;
      break;
    case "October":
        numberMonth = 10;
      break;
    case "November":
      numberMonth = 11;
      break;
    case "December":
      numberMonth = 12;
      break;
  }
  //
  if (fromZero == true) {
    numberMonth = numberMonth - 1;
  }
  return numberMonth;
}
