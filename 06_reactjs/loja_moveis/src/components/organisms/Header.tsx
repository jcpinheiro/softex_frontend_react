import SecondaryMenu from '../molecules/SecondaryMenu';

export default function Header(){
  return (
    <header className="pt-4">
      <h1 className="title text-center my-4">Loja de <span>Móveis</span></h1>
      <SecondaryMenu />
    </header>
  );
}