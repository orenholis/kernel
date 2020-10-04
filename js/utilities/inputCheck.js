/**
 * inputCheck kontroluje inputy
 * @param  {[object]} params jméno a čísla inputů ke kontrole
 * @return {[boolean]} true/false
 */
function inputCheck(params) {
  if (!params) {
    throw new Error("Nejsou zadány žádné parametry - utility(424) [inputCheck()]");
  }
  let check = true;
  let errorNumbers = [];
  const errorArray = new Array();
   errorArray[0] = "Nejsou vyplněny všechny inputy!";
   errorArray[1] = "Uživ. jméno je příliš krátké!";
   errorArray[2] = "Email je zadán špatně nebo se emaily neshodují!";
   errorArray[3] = "Hesla se neshodují!";
   errorArray[4] = "Heslo nevyhovuje podmínkám: musí být alespoň 8 znaků dlouhé; musí obsahovat alespoň 1 malé písmeno, 1 velké písmeno a 1 číslici!";
   errorArray[5] = "Není zaškrtnut checkbox!";
   errorArray[6] = "Datum není platné!";
  //
  const allInputs = document.getElementsByName(params.inputsName);
  //
  if (params.fill && params.fill != false) {
    for (let i = 0; i < allInputs.length; i++) {
      if (allInputs[i].type == "checkbox" || allInputs[i].type == "radio") {
        continue;
      }
      if (allInputs[i].value == "") {
        check = false;
        errorNumbers[0] = true;
        break;
      }
    }
  }
  if (params.username) {
    if (allInputs[Number(params.username)].value.length < 3) {
      check = false;
      errorNumbers[1] = true;
    }
  }
  if (params.email1 && params.email2) {
    if (allInputs[Number(params.email1)].value != allInputs[Number(params.email2)].value) {
      check = false;
      errorNumbers[2] = true;
    }
  }
  if (params.email1) {
    const emailPattern = /.+@.+\..+/;
    if ((emailPattern.test(allInputs[Number(params.email1)].value) == false) || (allInputs[Number(params.email1)].value.charAt(0) == "@")) {
      check = false;
      errorNumbers[2] = true;
    }
  }
  if (params.password1 && params.password2) {
    if (allInputs[Number(params.password1)].value != allInputs[Number(params.password2)].value) {
      check = false;
      errorNumbers[3] = true;
    }
  }
  if (params.password1) {
    const malaPismena = /[a-z]/;
    const velkaPismena = /[A-Z]/;
    const cislice = /[0-9]/;
    const znaky = /(\.|,|-|_|\||\!|\?|\(|\)|\[|\]|\{|\}|\\|\/|\*|\<|\>|=|;|\"|\'|\+|ß|&|#|÷|×|°|~|\^|\˛|\`|\·|\´|˝|¨|§|€|Ł|đ|Đ)/;
    if ((allInputs[Number(params.password1)].value.length < 8) ||
    (malaPismena.test(allInputs[Number(params.password1)].value) == false) ||
    (velkaPismena.test(allInputs[Number(params.password1)].value) == false) ||
    (cislice.test(allInputs[Number(params.password1)].value) == false) ||
    (znaky.test(allInputs[Number(params.password1)].value) == false)) {
      check = false;
      errorNumbers[4] = true;
    }
  }
  if (params.checkbox) {
    if (allInputs[Number(params.checkbox)].checked == false) {
      check = false;
      errorNumbers[5] = true;
    }
  }
  if (params.platnostData) {
    inputyDatum = params.platnostData.split(";");
    const inputDen = Number(allInputs[Number(inputyDatum[0])].value);
    const inputMesic = allInputs[inputyDatum[1]].value;
    const inputRok = Number(allInputs[Number(inputyDatum[2])].value);
    if (inputDen != 0 && inputMesic != "" && inputRok != 0) {
      platnost = zkontrolujPlatnostData(inputDen, inputMesic, inputRok);
      if (platnost === false) {
        check = false;
        errorNumbers[6] = true;
      }
    }
  }
  //
  if (check === true) {
    return true;
  } else {
    let errorString = "";
    for (let i = 0; i < errorNumbers.length; i++) {
      if (errorNumbers[i] === true) {
        if (errorString == "") {
          errorString = "Some ERRORS occurred: \n" + errorArray[i] + ";\n";
        } else {
          errorString +=  errorArray[i] + "\n";
        }
      }
    }
    alert(errorString);
    return false;
  }
}
