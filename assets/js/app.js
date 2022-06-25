let compteCritere;
let nbAccident;
let age;
let dureeAssurance;
let dureePermis;
let couleurTarif;
let btn = document.getElementById("btn");
let retour = document.getElementById("retour");
const BTN_REJOUER = document.getElementById("play-bouton");
const MESSAGE = document.getElementById("message-element");

let calculTarif = function () {
  nbAccident = new Number(document.getElementById("valeur").value);
  age = new Number(document.getElementById("valeur2").value) + "ans";
  dureeAssurance = new Number(document.getElementById("valeur3").value);
  dureePermis = new Number(document.getElementById("valeur4").value);

  if (age < 25) {
    if (dureePermis >= 2) {
      compteCritere = 2;
    } else compteCritere = 3;
  } else if (dureePermis >= 2) {
    compteCritere = 1;
  } else compteCritere = 2;

  compteCritere = compteCritere + nbAccident;

  if (dureeAssurance >= 5) {
    compteCritere = compteCritere - 1;
  }

  switch (compteCritere) {
    case 0:
      couleurTarif = "bleu";

      break;
    case 1:
      couleurTarif = "vert";

      break;

    case 2:
      couleurTarif = "orange";

      break;

    case 3:
      couleurTarif = "rouge";

      break;

    case 4:
      couleurTarif = "Pas assuré";

    default:
      couleurTarif = "Pas assuré";

      break;
  }

  retour.innerHTML = couleurTarif;
};

btn.addEventListener("click", calculTarif, false);


BTN_REJOUER.addEventListener("click", () => {
 
  MESSAGE.style.display = "none";
});