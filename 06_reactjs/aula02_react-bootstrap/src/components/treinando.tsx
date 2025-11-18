interface TreinandoProps {
  nome: string
  matricula: number
}

export function Treinando({ nome, matricula }: TreinandoProps) {
  return (
    <article>
      <h2>Nome: {nome}</h2>
      <p>Matricula: {matricula}</p>
    </article>
  )
}
//export { Treinando }
