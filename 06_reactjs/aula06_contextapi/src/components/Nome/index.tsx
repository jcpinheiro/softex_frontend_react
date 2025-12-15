import { useContext } from 'react'
import { UserContext } from '../../contexts/user'

export function Nome(){
  const { aluno } = useContext(UserContext)

  return(
    <div>
      <strong>Aluno: {aluno}</strong>      
      <br/>
    </div>
  )
}