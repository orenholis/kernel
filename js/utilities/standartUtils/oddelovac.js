/**
 * oddelovacUtility vykresluje oddelovac/čáru mezi elementy
 * @param  {Element} parent místo kam se vykreslí
 */
function oddelovacUtility(parent){
  if (!parent) {
    throw new Error("Není zadán parent - oddelovac.js(3) [oddelovacUtility()]");
  }
  const celeOddeleni = createElement({type: "div", parent: parent, class: "cely-oddelovac"});
  createElement({type: "span", parent: celeOddeleni, class: "oddeleni-utility", classB: "oddeleni-utility-leva"})
  createElement({type: "span", parent: celeOddeleni, text: "OR", class: "or-oddeleni"});
  createElement({type: "span", parent: celeOddeleni, class: "oddeleni-utility", classB: "oddeleni-utility-prava"});
}
