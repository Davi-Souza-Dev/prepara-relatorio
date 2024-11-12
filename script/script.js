const btnAdd = document.getElementById("btnAdd");
const btnSalvar = document.getElementById("btnSalvar");
const txtNota = document.getElementById("txtNota");
const listNota = document.getElementById("listNota");
btnAdd.addEventListener("click", () => {
    addNota();
});

class itemNota {
  constructor(txt) {
    this.id = `Nota_${Math.random(1000)}`;
    this.txt = txt;
  }

  desenhar = () => {
    const item = document.createElement("li");
    item.innerText = this.txt;
    item.setAttribute("id", this.id);
    item.setAttribute("class", "notaItem");
    const btn = document.createElement("button");
    btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z" clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg>`;
    btn.setAttribute("class", "btnDel");
    btn.addEventListener("click", () => {
      document.getElementById(this.id).remove();
    });
    item.appendChild(btn);
    return item;
  };
}

btnSalvar.addEventListener("click", () => {
    salvarDados();
});

window.addEventListener("keydown",(evt)=>{
    let key = evt.key;
    if(key == "Enter"){
        addNota();
    }
});


const salvarDados=()=>{
    const listaItem = [...document.querySelectorAll(".notaItem")];
    let listText = [];
    let data = new Date();
    let dia = data.getDay();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let msg = new String(`*Relatório: ${dia}/${mes}/${ano}*%0A`);
    listaItem.map((item) => {
      listText.push(item.innerText);
    });
    listText.map((txt) => {
      msg = msg.concat(`- ${txt}%0A`);
    });
    listNota.innerHTML = " ";
    let url = `https://api.whatsapp.com/send?phone=${5511976621573}&text=${msg}`;
    window.open(url, "_blank");
}

const addNota=()=>{
    if (txtNota.value != "") {
        const item = new itemNota(txtNota.value);
        listNota.appendChild(item.desenhar());
        txtNota.value = "";
        txtNota.focus();
      }
}