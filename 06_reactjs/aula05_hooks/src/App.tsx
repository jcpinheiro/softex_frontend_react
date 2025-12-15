// 1.  ***** Exemplo de uso do useState ******

/* import { useState } from "react";

function App() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor atual: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}  */

/* 2.  Exemplo de uso do useEffect ******/

/* import { useState, useEffect } from "react";

function App() {
  const [nome, setNome] = useState<string>("");

useEffect(() => {
  console.log("Executou");
}, [] );
 
  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <p>Nome digitado: {nome}</p>
    </div>
  );
}  */



/* 3, *****Uso do useEffect quando algo mudar *** */


import { useEffect, useState } from "react";

function App() {
  const [contador, setContador] = useState<number>(0);

  useEffect(() => {
      console.log( `Valor mudou para: ${contador}` )
  }, [contador] );

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor atual: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}



export default App;