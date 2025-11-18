import './css/header.css'

interface HeaderProps {
    title?: string
}

export function Header({title="Bem-vindo ao Sistema de Treinandos"}: HeaderProps) {
    return (
        <header className='header'>
            <h1 className='title'>{title}</h1>
            <hr />
        </header>
    )

}