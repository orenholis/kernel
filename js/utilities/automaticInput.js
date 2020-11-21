/**
 * vygenerujInput vykresluje input kde si přidáváte kamarády
 * @param  {string} parametr určuje o jaký typ inputu půjde
 */
function vygenerujInput(parametr){
    const body = document.getElementById("body");
    const formularCely = createElement({type: "div", parent: body, class: "cely-automatic-input", id: "friendAdd-alert", id: "invite-friend-cely"});
    const formularInput = createElement({type: "input", parent: formularCely, class: "cely-automatic-input-input"});
    formularInput.focus();
    let inviteBtn = "";
    createCrossCancelBtn(formularCely, formularCely, { className: "class-fade-out", duration: 1500 });

    if(parametr === "invite"){
      inviteBtn = createElement({type: "button", parent: formularCely, class: "cely-automatic-button", text: "Invite", classB: "cely-automatic-button-mensi"});
      formularInput.placeholder = "Invite someone...";
    } else if(parametr === "join"){
      inviteBtn = createElement({type: "button", parent: formularCely, class: "cely-automatic-button", text: "Join server", classB: "cely-automatic-button-vetsi"});
      formularInput.placeholder = "Join server...";
    }

    formularInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        inviteBtn.click();
      }
    });

    inviteBtn.addEventListener("click", ()=>{
      if(formularInput.value.length <= 2){
        alert("Pole musí obsahovat alespoň 3 znaky")
      } else if(formularInput.value.length >= 3){
        if(document.getElementById("username-name").innerHTML === formularInput.value){
          return alert("Nemůžete si přidat sebe");
        } else if(existenceGroupFriend(formularInput.value) === false){
          return alert("Kamaráda " + formularInput.value + " máte už přidaného!");
        }

        posliInvite(formularInput.value, "", "zluta", "friend");
        nactiPost("/api/tera/zikejIdUsername", {user: formularInput.value})
          .then((item)=>{
            pridejPritele(item.user);
            formularInput.value = "";
          });
      }
    });
}
