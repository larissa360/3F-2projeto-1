import { getCSS } from "./comum.js";
async function usuarios(){
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
const res = await fetch(url);
const dados = await res.json();
const nomeDasRedes = Object.values(dados);

const infos = [
    {
        x: nomeDasRedes,
        y: usuarios,
        type: 'bar',
        marker:{
            color: getCSS(--cor-primaria)
        }
    }
]
}
