import Header from '../organisms/Header';
import Categories from '../organisms/Categories';
import AboutUs from '../organisms/AboutUs';
import ProductsList from '../organisms/ProductsList';

export default function Home(){
  return (
    <>
      <Header />
      <div className="main-image bg-image container-fluid" style={{backgroundImage:`url(/assets/img/main.jpg)`,height:'35rem'}} />
      <Categories />
      <AboutUs />
      <ProductsList />
    </>
  );
}