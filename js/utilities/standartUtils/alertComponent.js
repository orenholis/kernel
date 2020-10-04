/**
 * vykresliAlert funkci zadate obsah alertu a nadpis a alert se vykresli a jde ovladat nazaklade podpurnych funkci
 * @param  {string}  obsahAlertu  obsah alertu
 * @param  {string} nadpisAlertu nadpis alertu
 * @param  {parent}  parent       místo kam se vše vykreluje
 */
function vykresliAlert(obsahAlertuzadany, nadpisAlertuzadany, parent){
  if(!parent){
    throw new Error("Není zadán parent - alertCompoent.js(9) [vykresliAlert()]");
  }
  if(!nadpisAlertuzadany){
    throw new Error("Není zadán nadpis - alertCompoent.js(12) [vykresliAlert()]");
  }
  const celyAlert = createElement({type: "div", parent: parent, class: "prekryvAlert"});
  const samotnyAlert = createElement({type: "div", parent: celyAlert, class: "samotny-alert"});
  createElement({type: "h2", parent: samotnyAlert, class: "nadpis-alert", text: nadpisAlertuzadany});
  createElement({type: "div", parent: samotnyAlert, class: "obsah-alertu", text: obsahAlertuzadany});
  const okBtn = createElement({type: "button", parent: samotnyAlert, class: "ok-btn-alert", text: "Ok"});
  okBtn.addEventListener("click", () => {
    return celyAlert.remove();
  });
}
