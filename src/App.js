import './App.css';
import 'animate.css';
import { useState, useRef } from 'react';
import { gerarSenha } from "./functions";
import { copyClip } from './functions';
import Title from './components/Title';


function App() {
  const [valueInput, setValueInput] = useState(15)
  const [render, setRender] = useState(false)
  const [senha, setSenha] = useState("")
  const senhaRef = useRef(null);

  return (
    <div className='text-center flex flex-col'>
      <Title title="Gerador de senha"/>
      <span className='text-4xl font-normal text-white'>Tamanho: {valueInput}</span>
      <input type='range' className={`rangeInput w-72 mx-auto`} min="5" max="25" value={valueInput} onChange={({target}) => setValueInput(target.value)}></input>
      <button className='botao w-72 mx-auto' onClick={() => {
        setRender(true)
        gerarSenha(valueInput, setSenha, senha)
      }}>Gerar senha</button> {/*!render nega o bagulho, aparece desaparece fé*/}

        {render && <div className='ctpass flex flex-col text-xl font-bold text-white'>
        <span>Sua senha gerada foi:</span>
        <span ref={senhaRef} onClick={() => copyClip(senhaRef)} className="containerPassword w-72 mx-auto border rounded-lg hover:transform- bg-black">{senha}</span>
        <span className='tooltip w-72 mx-auto'>Clique na senha para copiar.</span>
        </div>}
    </div>
  );
}

export default App;
