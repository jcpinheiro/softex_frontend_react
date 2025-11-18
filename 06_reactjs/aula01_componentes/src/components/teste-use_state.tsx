import { useState } from 'react'

export function MostraAluno() {
    const[input, setInput] = useState('')
    const[aluno, setAluno] = useState('Treinando não informado!')


    function adicionaAluno() {  
        setAluno(input)

    }

    return (
        <section>
          <hr />
          <h1>Conhecendo useState</h1>
          <input type="text"
                 value={input} 
                 onChange={ (e) => setInput(e.target.value) }
          placeholder="Digite o nome do treinando"/>


            <button onClick={adicionaAluno}>Adicionar Treinando</button>
            <p>Bem Vindo: {aluno} </p>
        </section>
    )
}