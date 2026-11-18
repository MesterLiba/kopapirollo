/* 1. Az új játék gombra kattintva legyen új játékterünk */
const ujJatekGomb = document.getElementById("ujjatek")
const jatekTer = document.getElementsByClassName("jatekter")

ujJatekGomb.addEventListener("click", megjelenit)
function megjelenit(){
    const htmlKod =`
    <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
    `
    jatekTer[0].innerHTML = ""
    jatekTer[0].insertAdjacentHTML("beforeend", htmlKod)
    const gombElemek = document.querySelectorAll(".gombok button")
    gombElemek[0].addEventListener("click", kivalaszt)
    gombElemek[1].addEventListener("click", kivalaszt)
    gombElemek[2].addEventListener("click", kivalaszt)
}

function kivalaszt(event){
    const kep = document.querySelector("#jatekos img")
    console.log(kep)
    kep.src=`kepek/${event.target.id}.PNG`
    const jatekos = event.target.id
    gepvalasztas(jatekos)
}
function gepvalasztas(jatekos){
    const kep = document.querySelector("#gep img")
    console.log(kep)
    let veletlen=Math.floor(Math.random()*3)
    console.log(veletlen)
    const nevLista=["ko","papir","ollo"]
    let valasz = nevLista[veletlen]
    kep.src=`kepek/${valasz}.PNG`
    ellenorzes(valasz, jatekos)
}
function ellenorzes(gvalasz,jvalasz){
    console.log(gvalasz)
    console.log(jvalasz)
    const szamList = [4, 4 , 0, 4, 2, 1]
    let gep = szamList[gvalasz.length]
    let jatek = szamList[jvalasz.length]
    console.log(gep)
    console.log(jatek)
    if(gep == jatek){
      console.log("dontetlen")
    }else if((gep == 0 && jatek == 2)||(gep == 1 && jatek == 0)||(gep == 2 && jatek == 1)){
      console.log("gep nyert")
    }else{
      console.log("jatekos nyert")
    }
}