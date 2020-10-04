/**
  * nahodneCeleCislo vytvoří nahodne cislo
  * @param {number} zadany nasobic nahodneho cisla
  * @returns {number} cele nahodne cislo
*/
function nahodneCeleCislo(max) {
  if(!max){
    throw new Error("Není zadán max - utility.js(8) [nahodneCeleCislo()]");
  }
  return Math.floor(Math.random() * Math.floor(max))
};
/**
 * zmizeniElementu fades out element and remove him
 * @param  {element} element element who fades out and will be removed
 */
function zmizeniElementu(element){
  if (!element) {
    throw new Error("Není zadán element - utility.js(35) [zmizeniElementu()]");
  }
  $(element).fadeOut(2000);
  setInterval(function(){element.remove()}, 2000);
  return;
}
/**
  * odebirame hacky a carky ze vsech pismen
  * LIMITATIONS - funguje pouze na mala pismena
  * @param {string} slovo ze ktereho odebirame hacky a carky
  * @returns {string} puvodni slovo akorat bez hackua carek
*/
function odeberHackyACarky (text){
  if(!text){
    throw new Error("Není zadán text - utility.js(49) [odeberHackyACarky()]");
  }
	const bezHacku = ["e", "s", "c", "r", "z", "y", "a", "i", "e", "u", "u", "o", "y", "t", "z", "d", "n"];
	const sHacky = ["ě", "š", "č", "ř", "ž", "ý", "á", "í", "é", "ú", "ů", "ó", "ý", "ť", "ž", "ď", "ň"];
	let textBezDia = "";
	for(let i = 0; i < text.length; i++){
		let pismenko = text[i];
		const index = sHacky.indexOf(pismenko);
		if(index >= 0){
			textBezDia += bezHacku[index];
		} else{
			textBezDia += text[i];
		}
	}
	return textBezDia;
};
/**
  *delame veskera pismena malyma
  *LIMITATIONS - funguje pouze na mala pismena
  *@param {string} a prvni retezec k porovnani
  *@param {string} b druhy retezec k porovnani
  *@returns {string} vyfiltrovany Seznam
  *@see odeberHackyACarky
*/
function porovnejRetezce(a, b) {
  if(!a){
    throw new Error("Není zadáno a - utility.js(99) [porovnejRetezce()]");
  }
	var a = odeberHackyACarky(a.toLowerCase());
	var b = odeberHackyACarky(b.toLowerCase());
  return a.indexOf(b) >= 0;
};

/**
 * dragElement posouvá zadaný element za kursorem
 * @param  {[object]} elmnt element k posouvání
 */
function dragElement(elmnt) {
  if (!elmnt) {
    throw new Error("Není zadán element k pohybu - utility.js(307) [dragElement()]");
  }
  //
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//
function getClickPosition(event, element) {
    //
    let mousePosition = {};
    let menuPostion = {};
    let menuDimension = {};
    //
    menuDimension.x = element.clientWidth;
    menuDimension.y = element.clientHeight;
    mousePosition.x = event.pageX;
    mousePosition.y = event.pageY;
    //
    if (mousePosition.x + menuDimension.x > $(window).width() + $(window).scrollLeft()) {
        menuPostion.x = mousePosition.x - menuDimension.x;
    } else {
        menuPostion.x = mousePosition.x;
    }
    //
    if (mousePosition.y + menuDimension.y > $(window).height() + $(window).scrollTop()) {
        menuPostion.y = mousePosition.y - menuDimension.y;
    } else {
        menuPostion.y = mousePosition.y;
    }
    //
    return menuPostion;
}
/**
 * scrollniDolu scrolluje dolů podle přednastavených požadavků
 * @param  {[string]} typ přednastavený požadavek
 * @param  {[object]} frameElmnt element ke scrollování
 */
function scrollniDolu(typ, frameElmnt) {
  if (!typ) {
    throw new Error("Není zadán typ requestu - utility.js(379) [scrollniDolu()]");
  }
  if (!frameElmnt) {
    throw new Error("Není zadán element ke scrollování - utility.js(382) [scrollniDolu()]");
  }
  //
  if (typ === "default_scroll_down") {
    frameElmnt.scrollTop = frameElmnt.scrollHeight - frameElmnt.clientHeight;
    //just scroll to the bottom
  } else if (typ === "message_scroll") {
    let scrollHeight = frameElmnt.clientHeight;
    let scrollTop = frameElmnt.scrollTop;
    let elmHeight = frameElmnt.clientHeight;
    if (scrollHeight - scrollTop < elmHeight) {
      frameElmnt.scrollTop = frameElmnt.scrollHeight - frameElmnt.clientHeight;
      //scrolls only when user is already scrolled down (it is used when new element won't be visible without scroll)
    }
  }
}
/**
 * showPassword show password
 * @param  {element} img show/hide password img
 * @param  {string} id  id of show password element
 */
function showPassword(img, id) {
  if (!img || !id) {
    throw new Error("Není zadán img nebo id - utility.js(405) [showPassword()]");
  }
  const input = document.getElementById(id);
  if (input.type == "password") {
    input.type = "text";
    img.src = "grafika/password-open průhledná.png";
  } else if (input.type == "text") {
    input.type = "password";
    img.src = "grafika/password-closed průhledná.png";
  }
  //shows password
}
