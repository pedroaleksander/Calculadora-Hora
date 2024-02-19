import { useState } from 'react'
import './App.css'

function App() {
  const [hi, setHi] = useState();
  const [mi, setMi] = useState();
  const [hf, setHF] = useState();
  const [mf, setMf] = useState();
  const [resultado, setResultado] = useState("Resultado");

  const soma = () => {
    let somaHora = Number(hi.value) + Number(hf.value);
    let somaMin = Number(mi.value) + Number(mf.value);
     while(somaMin > 59){
         somaMin -= 60;
         somaHora ++;
  }
  setResultado(somaHora +":"+ somaMin);
}
   const sub = () => {
    let momentoInicial = hi.value*60 + Number(mi.value);
    let momentoFinal = hf.value*60 + Number(mf.value);
    let resuldatoHora = 0;
    let resultadoMinuto = momentoInicial - momentoFinal;
    if(resultadoMinuto < 0){

    resultadoMinuto *= -1;
    }
    while(resultadoMinuto > 59){
        resultadoMinuto -= 60;
        resuldatoHora ++;
    }
    setResultado(innerHTML = resuldatoHora+":"+resultadoMinuto);

   }
  return (
    <>
          <h1>Cauculadora de horas</h1>
 <div class="samba">
 <h3>digite os horarios que deseja calcular!</h3>
 <input type="number"
  value={hi}
  onChange={(e) => setHi(e.target.value)}
   placeholder="Hora Inicial"
   />&nbsp; : &nbsp;
 <input type="number"
  value="minInicial" placeholder="Minuto Inicial"/><br/>
 <input type="number" id="horaFinal" placeholder="Hora Final"/>&nbsp; : &nbsp;
 <input type="number" id="minFinal" placeholder="Minuto Final"/><br/>
 <button onclick="soma()">Soma</button>
 <button onclick="sub()">Diferença</button>
 <h3 id="resultado">Resultado</h3>
 </div>
 <img src="calculadora.png" alt="img"></img>
    </>
  )
}

export default App
