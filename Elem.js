class Elem {
  /*az osztályban az adattagokon végezzük a műveleteket! */
  /*megjelenítse az oldalon az elemet */
  constructor(szuloElem) {
    /*Beállítja az adattagokat */
    this.szuloElem = szuloElem;
    this.#htmlOsszeallit(); /*this - a konkrét osztálypéldányra mutat */
    /*megfogjuk a html elemekhez */
    this.divElem = this.szuloElem.children("div:last-child");
    this.pElem = this.divElem.children("p");
    /* console.log(this.divElem);
        console.log(this.pElem); */
    this.divElem.on("click", () => {
      this.#esemenyTrigger("elemKivalaszt");
      //this.setErtek("X");
    });
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }
  #htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }
  /* Saját esemény létrehozása
    Az osztály tud elmondani magáról dolgokat
    Információkat ad át saját magáról */

  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent("elemKivalaszt", { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default Elem;
