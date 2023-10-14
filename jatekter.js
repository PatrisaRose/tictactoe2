import Elem from "./Elem.js";
class Jatekter{
    constructor(szuloElem){
        /*példányosítsuk az osztályunkat*/
  for (let index = 0; index < 9; index++) {
    new Elem(szuloElem);
  }
  let lepes = 0;
  let ertek = "";
  $(window).on("elemKivalaszt", (event) => {
    //console.log(event.detail);
    lepes++;
    if (lepes % 2 == 0) {
      ertek = "X";
    } else {
      ertek = "O";
    }
    event.detail.setErtek(ertek);
  });
    }
}
export default Jatekter