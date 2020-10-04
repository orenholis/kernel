/**
 * vykresliEsc vykresluje esc a po kliknutí ruší zvolený element
 * @param  {element} parent     místo kam se vše vykresluje
 * @param  {element} escElement element který se má po kliknutí na esc zrušit
 */
function vykresliEsc(parent, escElement){
  if(!parent){
    throw new Error("Naní zadán parent - utility.js(19) [vykresliEsc()]");
  }
  if(!escElement){
    throw new Error("Není zadán escElement - utility.js(22) [vykresliEsc()]");
  }
  const esc = createElement({type: "button", parent: parent, text: "close", class: "button-esc"});
  esc.addEventListener("click", ()=>{
    escElement.remove();
  });
}

/**
 * createCrossCancelBtn creates cross cancel button
 * @param  {element} parent        place where is everything rendered
 * @param  {element} cancelElement element who will be canceled
 * @param  {object} animationProps optional settings for animation of the cancelElement
 */
function createCrossCancelBtn(parent, cancelElement, animationProps){
  if (!parent || !cancelElement) {
    throw new Error("Není zadán parent nebo element k odebrání - utility.js(73) [createCrossCancelBtn()]");
  }
  const cancelBtn = createElement({type: "img", parent: parent, class: "cancel-image-btn", src: "aplikace/grafika/icons/closeBtn.png"});
  cancelBtn.addEventListener("click", ()=>{
    if (animationProps) {
      cancelElement.classList.add(animationProps.className);
      let animationDuration = 1500;
      if (animationProps.duration && animationProps.duration.constructor === Number) {
        animationDuration = animationProps.duration;
      }
      setInterval(function(){cancelElement.remove()}, animationDuration);
    } else {
      cancelElement.remove();
    }
  })
}
