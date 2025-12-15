import { type ReactNode, createContext, useState } from 'react'

interface UserProviderProps{
  children: ReactNode;
}

type UserContextData = {
  aluno: string;
  qtdAlunos: number;
  mudaNome: (nome: string) => void;
  novoAluno: () => void;
}

export const UserContext = createContext({} as UserContextData);

function UserProvider({ children }: UserProviderProps){
  const [aluno, setAluno] = useState("João da Silva");
  const [qtdAlunos, setQtdAlunos] = useState(15)

  function mudaNome(nome: string){
    setAluno(nome);

  }

  function novoAluno(){
    setQtdAlunos(alunos => alunos+1)
  }


  return(
    <UserContext.Provider value={{ aluno, qtdAlunos, mudaNome, novoAluno }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;