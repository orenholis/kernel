/**
 * TimeCalculator počítá čas
 * @param {string} format udává v jakém formátu chcete dostat přesnost času
 */
function TimeCalculator(format) {
  if(!format) {
    throw new Error("Není zadán časový formát - utility.js(112) [TimeCalculator()]");
  }
 const date = new Date();
 //gets time from computer
 let year = date.getFullYear();
 let month = date.getMonth() + 1;
 let daysDate = date.getDate();
 let day = date.getDay();
 let hours = date.getHours();
 let minutes = date.getMinutes();
 let seconds = date.getSeconds();
 let milliseconds = date.getMilliseconds();
 //gets years, months, date, days, hours, minutes, seconds and milliseconds
 if (hours < 10) {
  hours = "0" + hours;
 }
 if (minutes < 10) {
  minutes = "0" + minutes;
 }
 if (seconds < 10) {
  seconds = "0" + seconds;
 }
 if (milliseconds < 10) {
  milliseconds = "0" + milliseconds;
 }
 //fixes time under 10
 let time_string = "";
 if (format === "yy/datedate/momo/hh/mm/ss/msms") {
   time_string = year + " " + daysDate + ". " + month + ". " + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
 } else if (format === "yy/datedate/momo") {
   time_string = year + " " + daysDate + ". " + month + ".";
 } else if (format === "datdate/momo") {
   time_string = daysDate + ". " + month + ".";
 } else if (format === "datedate/momo/dayday") {
   time_string = daysDate + ". " + month + ". " + day;
 } else if (format === "hh/mm/ss/msms") {
   time_string = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
 } else if (format === "hh/mm/ss") {
   time_string = hours + ":" + minutes + ":" + seconds;
 } else if (format === "hh/mm") {
   time_string = hours + ":" + minutes;
 } else if (format === "yy") {
   time_string = year;
 } else if (format === "momo") {
   time_string = month;
 } else if (format === "datedate") {
   time_string = daysDate;
 } else if (format === "dayday") {
   time_string = day;
 } else if (format === "hh") {
   time_string = hours;
 } else if (format === "mm") {
   time_string = minutes;
 } else if (format === "ss") {
   time_string = seconds;
 } else if (format === "msms") {
   time_string = milliseconds;
 }
  //sets time_string to the right format
  return time_string;
}
/**
 * zkontrolujPlatnostData kontroluje, jestli je platné nastavení dne a měsíce vůči sobě
 * @param  {[number]} den den v měsíci
 * @param  {[string]} mesic měsíc v roce
 * @param  {[number]} rok rok
 * @param  {[string]} additionalCheck volitelná přídavná kontrola
 * 1) NOT-past => nesmí být v minulosti
 * 2) NOT-present => nesmí být v přítomnosti
 * 3) NOT-future => nesmí být v budoucnosti
 * 4) ONLY-past => musí být jen v minulosti
 * 5) ONLY-present => musí být jen v přítomnosti
 * 6) ONLY-future => musí být jen v budoucnosti
 * @return {[boolean]} check => true == platné; false == neplatné
 */
function zkontrolujPlatnostData(den, mesic, rok, additionalCheck) {
  if (!den || !mesic || !rok) {
    throw new Error("Není zadán měsíc, den nebo rok - utility.js(189) [zkontrolujPlatnostData()]");
  }
  let check;
  //
  if ((mesic == "April" || mesic == "June" || mesic == "September" || mesic == "November") && Number(den) == 31) {
    check = false;
  } else if ((mesic == "February" && Number(den) == 31) || (mesic == "February" && Number(den) == 30)) {
    check = false;
  } else if ((mesic == "February" && Number(den) == 29) && Number(rok) % 4 > 0) {
    check = false;
  } else {
    check = true;
  }
  //
  if (additionalCheck || additionalCheck != null) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const mesicInNumber = transferMonthStringToNumberEN(mesic);
    const currentDay = currentDate.getDate();
    //
    if (additionalCheck === "NOT-past") {
      if (Number(rok) < currentYear) {
        check = false;
      } else {
        if (mesicInNumber < currentMonth) {
          check = false;
        } else {
          if (Number(den) < currentDay) {
            check = false;
          } else {
            check = true;
          }
        }
      }
    } else if (additionalCheck === "NOT-present") {
      if (Number(rok) === currentYear) {
        if (mesicInNumber === currentMonth) {
          if (Number(den) === currentDay) {
            check = false;
          } else {
            check = true;
          }
        } else {
          check = true;
        }
      } else {
        check = true;
      }
    } else if (additionalCheck === "NOT-future") {
      if (Number(rok) > currentYear) {
        check = false;
      } else {
        if (mesicInNumber > currentMonth) {
          check = false;
        } else {
          if (Number(den) > currentDay) {
            check = false;
          } else {
            check = true;
          }
        }
      }
    } else if (additionalCheck === "ONLY-past") {
      if (Number(rok) <= currentYear) {
        if (mesicInNumber <= currentMonth) {
          if (Number(den) < currentDay) {
            check = true;
          } else {
            check = false;
          }
        } else {
          check = false;
        }
      } else {
        check = false;
      }
    } else if (additionalCheck === "ONLY-present") {
      if (Number(rok) != currentYear) {
        check = false;
      } else {
        if (mesicInNumber != currentMonth) {
          check = false;
        } else {
          if (Number(den) != currentDay) {
            check = false;
          } else {
            check = true;
          }
        }
      }
    } else if (additionalCheck === "ONLY-future") {
      if (Number(rok) >= currentYear) {
        if (mesicInNumber >= currentMonth) {
          if (Number(den) > currentDay) {
            check = true;
          } else {
            check = false;
          }
        } else {
          check = false;
        }
      } else {
        check = false;
      }
    } else {
      throw new Error("Zadaná přídavná kontrola není podporována. Zkontrolujte zápis. - utility.js(295) [zkontrolujPlatnostData()]");
    }
  }
  //
  return check;
}
