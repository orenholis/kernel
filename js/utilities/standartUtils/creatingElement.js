/**
  * v této funkci vytvarime Element a danymi pozadavky na něj
  * @param {object} object obsahujici vse o elementu ktery vytvarime
  * @returns {element} obsahujíci vse z vyse uvedeneho
*/
function createElement(parametrs) {
  if(!parametrs.parent){
    throw new Error("Není zadán parent - creatingElement.js(9) [createElement()]");
  }
  let type = "div";
  let element;
  if(parametrs.type){
		type = parametrs.type;
		element = document.createElement(type);
	}
	if(parametrs.parent){
    if (parametrs.parent == "null") {
      console.log("Null parent");
    } else {
		  parametrs.parent.appendChild(element);
    }
	}
  return nastavHodnoty(element, parametrs);
};
/**
 * vykresliSablonu vykresluje předpřipravené šablony
 * @param  {object} parametrs obshuje všechny informace o elementu
 * @returns {element} element vše obahující z parametrs
 */
function vykresliSablonu(parametrs) {
  if (!parametrs) {
    throw new Error("Není zadán parametrs - creatingElement.js(33) [vykresliSablonu()]");
  }
  let element;
  if(parametrs.obycDiv){
    element = document.createElement("div");
    parametrs.obycDiv.appendChild(element);
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.standartBtn){
    element = document.createElement("button");
    element.classList.add("standartBtn-utility");
    parametrs.standartBtn.appendChild(element);
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.standartText){
    element = vykresliTextElement("p", "standart-text-utility", parametrs.standartText);
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.standartImg){
    element = document.createElement("img");
    element.classList.add("standart-img-utility");
    parametrs.standartImg.appendChild(element);
    element.src = parametrs.src;
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.linkElement){
    element = document.createElement("a");
    element.href = parametrs.href;
    parametrs.linkElement.appendChild(element);
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.flexDiv){
    element = document.createElement("div");
    element.classList.add("flex-div-box-utility");
    parametrs.flexDiv.appendChild(element);
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.nadpisH1){
    element = vykresliTextElement("h1", "utility-nadpis-h1", parametrs.nadpisH1);
    return nastavHodnoty(element, parametrs);
  }
  if(parametrs.standartInputTera){
    element = document.createElement("input");
    parametrs.standartInputTera.appendChild(element);
    element.classList.add("utlity-input-stndart-tera");
    element.classList.add("utility-input-standart-" + parametrs.inputsize);
    return nastavHodnoty(element, parametrs);
  }
}
/**
 * vykresliTextElement vykresluje text element
 * @param  {string} type         typ elementu(p, h1 ...)
 * @param  {string} classElement classa elementu
 * @param  {element} parent       place where everything render
 */
function vykresliTextElement(type, classElement, parent){
  element = document.createElement(type);
  parent.appendChild(element);
  element.classList.add(classElement);
  return element;
}
/**
 * nastavHodnoty nastavuje hodnaty vytvořenému elementu
 * @param  {element} element   předem vyvořeny element
 * @param  {object} parametrs obshuje všechny informace o elementu
 * @returns {element} element vše obahující z parametrs
 */
function nastavHodnoty(element, parametrs){
  if(parametrs.text){
    element.textContent = parametrs.text;
  }
  if(parametrs.id){
    element.id = parametrs.id;
  }
  if(parametrs.name) {
    element.name = parametrs.name;
  }
  if(parametrs.class){
    element.classList.add(parametrs.class);
  }
  if(parametrs.classB){
    element.classList.add(parametrs.classB);
  }
  if(parametrs.classC){
    element.classList.add(parametrs.classC);
  }
  if(parametrs.value){
    element.value = parametrs.value;
  }
  if(parametrs.attributeA && parametrs.attributeB){
    element.setAttribute(parametrs.attributeA, parametrs.attributeB);
  }
  if(parametrs.attributeC && parametrs.attributeD){
    element.setAttribute(parametrs.attributeC, parametrs.attributeD)
  }
  if(parametrs.typeAttribute){
    element.type = parametrs.typeAttribute;
  }
  //img/audio/video
  if(parametrs.type === "img" || parametrs.type === "audio" || parametrs.type === "video"){
    if (parametrs.src) {
      element.src = parametrs.src;
    }
    if (parametrs.srcObject) {
      element.srcObject = parametrs.srcObject;
    }
    if(parametrs.alt){
      element.alt = parametrs.alt;
    }
  }
  //linky
  if(parametrs.type === "a"){
    if(parametrs.href){
      element.href = parametrs.href;
    }
    if(parametrs.target){
      element.target == parametrs.target;
    }
  }
  if(parametrs.title){
    element.title = parametrs.title;
  }
  //input/textArea
  if(parametrs.type === "input" || parametrs.type === "textarea"){
    if(parametrs.placeholder){
      element.placeholder = parametrs.placeholder;
    }
    if(parametrs.min){
      element.min = parametrs.min;
    }
    if(parametrs.max){
      element.max = parametrs.max;
    }
    if(parametrs.minlength){
      element.minLength = parametrs.minlength;
    }
    if(parametrs.maxlength){
      element.maxLength = parametrs.maxlength;
    }
  }

  if(parametrs.type === "input" && parametrs.typeAttribute === "file") {
    if(parametrs.accept) {
      element.accept = parametrs.accept;
    }
  }
  if(parametrs.type === "audio" || parametrs.type === "video") {
    if(parametrs.controls) {
      element.controls = parametrs.controls;
    }
    if(parametrs.muted) {
      element.muted = parametrs.muted;
    }
    if (parametrs.autoplay) {
      element.autoplay = parametrs.autoplay;
    }
    if (parametrs.paused) {
      element.paused = parametrs.paused;
    }
    if (parametrs.videoTracks) {
      element.videoTracks = parametrs.videoTracks;
    }
    if (parametrs.audioTracks) {
      element.audioTracks = parametrs.audioTracks;
    }
    if (parametrs.textTracks) {
      element.textTracks = parametrs.textTracks;
    }
    if (parametrs.loop) {
      element.loop = parametrs.loop;
    }
    if (parametrs.volume) {
      element.volume = parametrs.volume;
    }
  }
  return element;
}
