import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const [textoFrase, setTextoFrase] = useState("")


  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
      'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!', 
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!', 
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite durma bem',
        'Teste frase boa noite',
        'Boa noite, durma com os anjos',
        'Que a sua noite seja tranquila e cheia de paz.',
        'Que os anjos te protejam enquanto você dorme.',
        'Durma bem e acorde renovado para um novo dia.'
      ]
    },
     {
      id: 4,
      nome: "Adeus",
      frases: [
        'Foi bom te conhecer, até logo!',
        'Adeus, que a vida te traga muitas alegrias!',
        'Até breve, espero que nossos caminhos se cruzem novamente.',
        'Adeus, leve consigo as melhores lembranças.',
        'Despedidas são difíceis, mas novas oportunidades virão.'
       
      ]
    }
  ]


  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index);
  }

  function gerarFrase(){
    let numeroAleatorio = 
     Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    
     setTextoFrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} "`)
  }

  return (
    <div className="container">
      <img
        alt="Logo frases"
        src={logoImg}
        className="logo"
      />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {allFrases.map( (item, index) => (
          <button 
          key={item.id}
          className="category-button"
          style={{ 
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 5 : 0,
            borderColor: "#1fa4db"
           }}

          onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ) )}
      </section>

      <button 
        className="button-frase" 
        onClick={gerarFrase}>
          Gerar frase
      </button>

      {textoFrase !== '' && <p className="textoFrase">{textoFrase}</p> }

    </div>
  )
}

export default App
